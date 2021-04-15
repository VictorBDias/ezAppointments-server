import Appoitment from '../models/Appointment';

interface CreateAppointmentDTO {
  description: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appoitment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appoitment[] {
    return this.appointments;
  }

  public create({ description, date }: CreateAppointmentDTO): Appoitment {
    const appointment = new Appoitment(description, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
