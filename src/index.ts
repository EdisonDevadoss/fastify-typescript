import fastify from 'fastify';

import QuerystringSchema from '../schemas/querystring.json';
import HeadersSchema from '../schemas/headers.json'

// import genereated interface

import {HeaderSchema as HeaderSchemaInterface } from '../types/headers';
import {QuerystringSchema as QuerystringSchemaInterface } from '../types/querystring';

const server = fastify({
    logger: true
});

const PORT:any = process.env.PORT || 3000

// interface IQueryString {
//     username: string;
//     password: number;
// }

// interface IHeaders {
//     'H-Custom': string;
// }

server.get('/ping', async(request, reply)=>{
    return 'pings test 55'
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



server.listen(PORT, '0.0.0.0', (err, address)=>{
    if(err){
        console.log(err);
        process.exit(1)
    }
    // server.log.info(`server listening on ${server.server.address().port}`);
    console.log(`server listening at ${address}`)
})