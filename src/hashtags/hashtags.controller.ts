import { Controller, Get } from '@nestjs/common';
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return 'top k hashtags';
  }
}
