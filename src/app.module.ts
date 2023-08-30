import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
