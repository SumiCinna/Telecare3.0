<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('appointments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('patient_id')->constrained('users')->cascadeOnDelete();
        $table->foreignId('doctor_id')->constrained('users')->cascadeOnDelete();
        $table->foreignId('availability_id')->nullable()->constrained('doctor_availabilities')->nullOnDelete();
        $table->date('appointment_date');
        $table->time('appointment_time');
        $table->enum('status', [
            'pending_doctor',
            'pending_staff',
            'awaiting_payment',
            'confirmed',
            'cancelled',
            'completed',
        ])->default('pending_doctor');
        $table->text('reason')->nullable();
        $table->foreignId('doctor_confirmed_by')->nullable()->constrained('users')->nullOnDelete();
        $table->timestamp('doctor_confirmed_at')->nullable();
        $table->foreignId('staff_confirmed_by')->nullable()->constrained('users')->nullOnDelete();
        $table->timestamp('staff_confirmed_at')->nullable();
        $table->timestamps();
    });
}

public function down(): void
{
    Schema::dropIfExists('appointments');
}
};
