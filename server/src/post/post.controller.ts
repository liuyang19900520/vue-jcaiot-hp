import { Body, Controller, Get, Post, Request } from '@nestjs/common';
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

  @Get()
  async listMenu(@Request() req): Promise<PostDocument[]> {
    return this.postService.findAll();
  }
}