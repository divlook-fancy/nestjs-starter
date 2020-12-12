import { Module } from '@nestjs/common'
import { AppController } from '~/src/app.controller'
import { AppService } from '~/src/app.service'
import { CatsModule } from '~/src/cats/cats.module'

@Module({
    imports: [CatsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
