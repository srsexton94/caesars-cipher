import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

// 'describe' groups similar unit test cases
describe('CiphersController', () => {
  let ciphersController: CiphersController;
  let ciphersService: CiphersService;

  // runs this code before each test case (also beforeAll, afterEach, afterAll)
  beforeEach(async () => {
    // createTestingModule used to 'GET' dependencies needed (ie CiphersService)
    const ciphers: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile();

    ciphersService = ciphers.get<CiphersService>(CiphersService);
    ciphersController = ciphers.get<CiphersController>(CiphersController);
  });

  describe('addCipher', () => {
    // 'it' --> independent unit  test case, may have multiple per 'describe'
    it('should return the encoded string', async () => {
      const result = ''
      // 'spyOn' mocks the function & forces return
      jest.spyOn(ciphersService, 'addCipher').mockImplementation(() => result)
      // 'expect' validates the output
      expect(await ciphersController.addCipher()).toBe(result)
    });
  });
});
