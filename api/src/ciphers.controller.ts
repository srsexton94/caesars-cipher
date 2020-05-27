import { Controller, Post, Body } from '@nestjs/common';
import { CiphersService } from './ciphers.service';

// routes to "your-domain".com/
// fine-tune 'any' later on
@Controller('ciphers')
export class CiphersController {
  constructor(private readonly ciphersService: CiphersService) {}

  @Post()
  addCipher(
    @Body('phrase') ciphPhrase: string,
    @Body('offset') ciphOffset: number
  ) {
    const res = this.ciphersService.addCipher(ciphPhrase, ciphOffset)
    return { encoded: res }
  }
}
