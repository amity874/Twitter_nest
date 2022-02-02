import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { userInfo } from 'os';
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param() param): string {
    return `details of the uernames = ${param.username}`;
  }
  @Get('/:userId')
  getUserByuserId(@Param() param): string {
    return `details of user id = ${param.userId}`;
  }
  @Put('/:userId/follow')
  followuser(): string {
    return 'you follow userInfo';
  }
  @Get('/:userId/followees')
  getFolloweesofUser(): string {
    return `get followees of given user`;
  }
}
