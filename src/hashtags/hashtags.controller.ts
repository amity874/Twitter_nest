import { Controller, Get, Param } from '@nestjs/common';
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return 'top k hashtags';
  }
  @Get('/:tag/posts')
  getpostForHashtag(@Param() param): string {
    return 'show all posts with hasjtags ${param.tag}';
  }
}
