import * as ExpenseService from '../services/expense.service';
import {FastifyRequest, FastifyReply, FastifyError} from 'fastify';
import {ServerResponse} from 'http';
import {map} from 'lodash';
import {ValidationError} from 'sequelize'

const create = (req:FastifyRequest, reply:FastifyReply<ServerResponse>) => {
  const attributes = req.body.expense;
  ExpenseService.create(attributes)
    .then((result:any) => {
      reply.code(201).send(result);
    })
    .catch((errObj: ValidationError) => {
      console.log('error is', errObj);
      // reply.send(error);  
      const messages = map(errObj.errors, error => error.message);
    reply.code(422).send({ errors: messages });
    });
};
export {create}