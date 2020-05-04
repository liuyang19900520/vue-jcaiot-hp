import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<PostDocument>) {
  }

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const createPost = new this.postModel(createPostDto);
    return createPost.save();
  }

  async findAll(): Promise<PostDocument[]> {
    return this.postModel.find().exec();
  }

}