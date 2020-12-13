import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function useSwagger(app: INestApplication) {
    const swaggerOptions = new DocumentBuilder()
        .setTitle(process.env.npm_package_name)
        .setDescription(process.env.npm_package_description ?? '')
        .setVersion(process.env.npm_package_version)
        .build()

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions)

    SwaggerModule.setup('swagger', app, swaggerDocument)
}
