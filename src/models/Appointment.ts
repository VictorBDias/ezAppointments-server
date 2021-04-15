import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  description: string;

  date: Date;

  constructor({ description, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.description = description;
    this.date = date;
  }
}

export default Appointment;
