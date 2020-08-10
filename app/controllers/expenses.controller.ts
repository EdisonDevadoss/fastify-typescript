import * as ExpenseService from '../services/expense.service';
import {FastifyRequest, FastifyReply, FastifyError} from 'fastify';
import {ServerResponse} from 'http';

const create = (req:FastifyRequest, reply:FastifyReply<ServerResponse>) => {
  const attributes = req.body.expense;
  ExpenseService.create(attributes)
    .then((result:any) => {
      reply.code(201).send(result);
    })
    .catch((error:FastifyError) => {
      reply.send(error);
    });
};
export {create}