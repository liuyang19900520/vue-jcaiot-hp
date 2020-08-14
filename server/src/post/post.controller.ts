import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
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

  @Put()
  async update(@Body() createPostDto: CreatePostDto) {
    await this.postService.update(createPostDto);
  }

  @Get('main')
  async listMenu(@Query('limit') num: number): Promise<PostDocument[]> {
    return this.postService.findMain(num);
  }

  @Get()
  async listPostByPage(@Query('pageNo') pageNo: number, @Query('pageCount') pageCount: number): Promise<any> {
    const result = this.postService.findPostList(pageNo, pageCount);
    return result;
  }

  @Get(':id')
  async findPostById(@Param('id') id): Promise<any> {
    const result = this.postService.findPostById(id);
    return result;
  }

}