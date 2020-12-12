import { Test, TestingModule } from '@nestjs/testing'
import { CatsController } from '~/src/cats/cats.controller'
import { CatsService } from '~/src/cats/cats.service'

describe('CatsController', () => {
    let controller: CatsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService],
        }).compile()

        controller = module.get<CatsController>(CatsController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
