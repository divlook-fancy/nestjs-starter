import { Injectable } from '@nestjs/common'
import { Cat } from '~/src/cats/interfaces/cat.interface'

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat) {
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }

    findOne(index: number): Cat {
        const cat = this.cats[index]
        if (!cat) {
            return null
        }
        return cat
    }

    update(index: number, cat: Cat) {
        this.cats[index] = {
            ...cat,
        }
    }

    remove(index: number) {
        this.cats.splice(index, 1)
    }
}
