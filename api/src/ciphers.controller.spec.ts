import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

// 'describe' groups similar unit test cases
describe('CiphersController', () => {
  let ciphersController: CiphersController

  // runs this code before each test case (also beforeAll, afterEach, afterAll)
  beforeEach(async () => {
    // createTestingModule used to 'GET' dependencies needed (ie CiphersService)
    const ciphers: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile()

    ciphersController = ciphers.get<CiphersController>(CiphersController);
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('addCipher', () => {
    // 'it' --> independent unit  test case, may have multiple per 'describe'
    it('should return the encoded string', async () => {

      // mock up the HTTP 'Post' request
      const expectedResult = {
        encoded: 'E Hkra FwrwOynelp!'
      }

      const result = await ciphersController.addCipher('I Love JavaScript!', 100)

      expect(result).toEqual(expectedResult)
    })
  })
})
