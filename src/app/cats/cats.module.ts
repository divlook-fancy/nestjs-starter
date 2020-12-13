import { Module } from '@nestjs/common'
import { CatsController } from '~app/cats/cats.controller'
import { CatsService } from '~app/cats/cats.service'

@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
