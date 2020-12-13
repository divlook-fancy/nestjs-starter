import { Injectable, Logger } from '@nestjs/common'
import { Cat } from '~app/cats/interfaces/cat.interface'

@Injectable()
export class CatsService {
    private readonly logger = new Logger(CatsService.name)
    private readonly cats: Cat[] = []
    private readonly max = 10

    create(cat: Cat) {
        this.cats.push(cat)

        const total = this.cats.length

        if (total > this.max) {
            this.cats.splice(0, this.max - total)
        }
    }

    findAll(): Cat[] {
        this.logger.log('findAll')
        return this.cats
    }

    findOne(index: number): Cat {
        const cat = this.cats[index]
        if (!cat) {
            return null
        }
        return cat
    }

    update(index: number, cat: Partial<Cat>) {
        this.cats[index] = {
            ...this.cats[index],
            ...cat,
        }
    }

    remove(index: number) {
        this.cats.splice(index, 1)
    }
}
