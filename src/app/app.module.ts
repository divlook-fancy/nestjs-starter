import { Module } from '@nestjs/common'
import { AppController } from '~app/app.controller'
import { AppService } from '~app/app.service'
import { CatsModule } from '~app/cats/cats.module'

@Module({
    imports: [CatsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
