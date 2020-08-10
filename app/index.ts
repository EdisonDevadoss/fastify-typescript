import fastify from 'fastify';

import QuerystringSchema from '../schemas/querystring.json';
// import genereated interface

import build from './application';

const PORT:any = process.env.PORT || 3000

const server = build();

server.listen(PORT, '0.0.0.0', (err, address)=>{
    if(err){
        process.exit(1)
    }
    // server.log.info(`server listening on ${server.server.address().port}`);
})