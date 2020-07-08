import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './interfaces/post.interface';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postService.create(createPostDto);
  }

  @Get('main')
  async listMenu(@Query('limit') num: number): Promise<PostDocument[]> {
    return this.postService.findMain(num);
  }

  @Get()
  async listPostByPage(@Query('pageNo') pageNo: number,@Query('pageCount') pageCount: number): Promise<any> {

    const result = this.postService.findPostList(pageNo,pageCount);
    console.log('test for ====', result);
    return result;
  }


}