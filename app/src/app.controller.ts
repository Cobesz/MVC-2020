import { Controller, Get, Render } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/about')
  @Render('about')
  about() {
    return { title: 'About Page' };
  }
}
