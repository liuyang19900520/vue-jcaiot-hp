import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/main')
  async listMenu(@Param('limit') num: number): Promise<PostDocument[]> {
    console.log(num);
    return this.postService.findMain(num);
  }

  @Get('/')
  async listPostByPage(@Param('pageNo') pageNo: number,@Param('pageCount') pageCount: number): Promise<any> {
    console.log('test for ====', pageNo);
    const result = this.postService.findPostList(pageNo,pageCount);
    return result;
  }


}