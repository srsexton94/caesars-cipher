import { Test, TestingModule } from '@nestjs/testing';
import { CiphersController } from './ciphers.controller';
import { CiphersService } from './ciphers.service';

describe('CiphersController', () => {
  let ciphersController: CiphersController;

  beforeEach(async () => {
    const ciphers: TestingModule = await Test.createTestingModule({
      controllers: [CiphersController],
      providers: [CiphersService],
    }).compile();

    ciphersController = ciphers.get<CiphersController>(CiphersController);
  });

  describe('root', () => {
    it('should return an error?', () => {
      expect(ciphersController.connect()).toBe();
    });
  });
});
