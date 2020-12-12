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
import { CreateCatDto, UpdateCatDto } from '~/src/cats/dto'
import { CatsService } from '~/src/cats/cats.service'
import { Cat } from '~/src/cats/interfaces/cat.interface'

@Controller('cats')
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
