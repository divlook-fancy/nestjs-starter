import { Test, TestingModule } from '@nestjs/testing'
import { CatsController } from '~app/cats/cats.controller'
import { CatsService } from '~app/cats/cats.service'

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
