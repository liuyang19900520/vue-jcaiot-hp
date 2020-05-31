import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './interfaces/post.interface';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postService.create(createPostDto);
  }

  @Post('/main')
  async listMenu(@Body('num') num: number): Promise<PostDocument[]> {
    console.log(num);
    return this.postService.findMain(num);
  }

  @Post('/page')
  async listPostByPage(@Body('pageNo') pageNo: number): Promise<any> {
    console.log('test for ====', pageNo);
    return this.postService.findPostList(pageNo);
  }



}