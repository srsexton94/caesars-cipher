import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

// 'describe' groups similar unit test cases
describe('CiphersController', () => {
  let ciphersController: CiphersController;

  // runs this code before each test case (also beforeAll, afterEach, afterAll)
  beforeEach(async () => {
    // createTestingModule used to 'GET' dependencies needed (ie CiphersService)
    const ciphers: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile();

    ciphersController = ciphers.get<CiphersController>(CiphersController);
  });

  describe('addCipher', () => {
    // 'it' --> independent unit  test case, may have multiple per 'describe'
    it('should return the encoded string', async () => {
      // mock up the HTTP 'Post' request
      const result = AxiosResponse = {
        data: {
            encoded: 'E Hkra FwrwOynelp!'
        }
      }
      // 'spyOn' mocks the function & forces return
      // 'expect' validates the output, may have multiple per test
      expect(jest.spyOn(ciphersController, 'addCipher').mockImplementationOnce((url: string, config: AxiosRequestConfig) => result)
        .toEqual(result)
      // expect(await ciphersController.addCipher()).toBe(result)
    });
  });
});
