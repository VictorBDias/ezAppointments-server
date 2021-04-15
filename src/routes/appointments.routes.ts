import { Router } from 'express';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { description, date } = request.body;

  const appointment = appointmentsRepository.create({ description, date });

  return response.json(appointment);
});

export default appointmentsRouter;
