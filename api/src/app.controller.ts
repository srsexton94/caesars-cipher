import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// routes to "your-domain".com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  connect(): string {
    return this.appService.connect();
  }
}
