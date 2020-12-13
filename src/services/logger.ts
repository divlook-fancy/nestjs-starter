import { Logger } from '@nestjs/common'

export class LoggerService extends Logger {
    log(message: any, context?: string) {
        // add your tailored logic here
        super.log(message, context)
    }

    error(message: string, trace: string) {
        // add your tailored logic here
        super.error(message, trace)
    }
}
