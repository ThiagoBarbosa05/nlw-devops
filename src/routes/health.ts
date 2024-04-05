import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"

export const health = async (app:FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>()
  .get('/healthz', async (req, res) => {
    return res.status(200).send('OK!')
  })
}