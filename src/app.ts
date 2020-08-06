import fastify from 'fastify';

import QuerystringSchema from '../schemas/querystring.json';
import HeadersSchema from '../schemas/headers.json'

// import genereated interface

import {HeaderSchema as HeaderSchemaInterface } from '../types/headers';
import {QuerystringSchema as QuerystringSchemaInterface } from '../types/querystring';


function build() {
const server = fastify({
    logger: true
});

// const PORT:any = process.env.PORT || 3000

server.get('/ping', async(request, reply)=>{
    return 'Hello World!'
});

server.get<{
    QueryString: QuerystringSchemaInterface,
    Headers: HeaderSchemaInterface
}>('/auth', {
    schema: {
      querystring: QuerystringSchema,
      headers: HeadersSchema
    }}, async(request, reply)=>{
 return 'Logged in'
});
return server;
}

export default build;

