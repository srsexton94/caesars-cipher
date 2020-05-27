import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  connect(): string {
    return 'Connected to CaesarsCipher API!';
  }
}
