import build from './application';
import db from "./models";

const PORT:any = process.env.PORT || 3000

const fastify = build();

// server.listen(PORT, '0.0.0.0', (err, address)=>{
//     if(err){
//         process.exit(1)
//     }
//     // server.log.info(`server listening on ${server.server.address().port}`);
// })

const start = async () => {
    try {
      await db.sequelize.authenticate();
      await fastify.listen(PORT, '0.0.0.0');
    //   fastify.swagger();
      fastify.log.info(`server listening on ${fastify.server.address()}`);
    }
    catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();