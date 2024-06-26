import fastify from 'fastify'
import * as process from "node:process";

const server = fastify()

server.get('/', async (request, reply) => {
    return {hello: 'world'}
})

server.listen({ port: +process.env.APP_PORT || 9000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
