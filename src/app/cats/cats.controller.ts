import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateCatDto, UpdateCatDto } from '~app/cats/dto'
import { CatsService } from '~app/cats/cats.service'
import { Cat } from '~app/cats/interfaces/cat.interface'

@Controller('cats')
@ApiTags('Cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get(':index')
    findOne(@Param('index') index: number) {
        const cat = this.catsService.findOne(index)
        if (!cat) {
            throw new NotFoundException()
        }
        return cat
    }

    @Put(':index')
    update(@Param('index') index: number, @Body() updateCatDto: UpdateCatDto) {
        this.catsService.update(index, updateCatDto)
    }

    @Delete(':index')
    remove(@Param('index') index: number) {
        this.catsService.remove(index)
    }
}
