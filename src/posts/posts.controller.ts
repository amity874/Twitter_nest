import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return 'details of the uernames';
  }
  @Get('/:postId')
  getPpostDetails(@Param() param): string {
    return `details of user id = ${param.userId}`;
  }
  @Post('/')
  createNewPost(): string {
    return 'you post was created';
  }
  @Delete('/:postId')
  deletePost(@Param() param): string {
    return `delete postid ${param.postId} `;
  }
  @Put('/:postId/like')
  likePost(@Param() parent): string {
    return `liked post $ {param.postId}`;
  }
  @Delete('/:postId/like')
  unlikePost(@Param() parent): string {
    return `Unlike post $ {param.postId}`;
  }
}
