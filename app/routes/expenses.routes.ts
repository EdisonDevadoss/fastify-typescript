import * as ExpensesController from '../controllers/expenses.controller'
import { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';


function expenses(fastify:FastifyInstance<Server, IncomingMessage, ServerResponse>, opts:{ prefix: string }, next:(err?: Error) => void) {
    fastify.post('/expenses', ExpensesController.create);
    next();
  }

export default expenses;