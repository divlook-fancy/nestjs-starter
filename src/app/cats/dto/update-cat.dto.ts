import { PartialType } from '@nestjs/swagger'
import { CreateCatDto } from '~app/cats/dto/create-cat.dto'

export class UpdateCatDto extends PartialType(CreateCatDto) {}
