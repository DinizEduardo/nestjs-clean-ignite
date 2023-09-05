import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

// const createAccountBodySchema = z.object({
// name: z.string(),
// email: z.string().email(),
// password: z.string(),
// })

// type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle() {
    console.log('oi')
    const token = this.jwt.sign({ sub: 'user-id' })
    console.log('oi')
    return token
  }
}
