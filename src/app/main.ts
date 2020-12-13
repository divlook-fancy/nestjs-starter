import { NestFactory } from '@nestjs/core'
import { AppModule } from '~app/app.module'
import { useSwagger } from '~plugins/swagger'
import { LoggerService } from '~services/logger'

bootstrap()

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new LoggerService(),
    })

    useSwagger(app)

    await app.listen(3000)
}
