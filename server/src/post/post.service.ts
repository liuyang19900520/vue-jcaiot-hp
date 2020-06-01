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

  async findMain(num: number): Promise<PostDocument[]> {
    return this.postModel.find().limit(num);
  }

  async findPostList(pageNo: number): Promise<any> {
    const contentCount = 3;
    const skipCount = contentCount * pageNo;

    const content = await this.postModel.find().skip(skipCount).limit(contentCount);
    const countAll = Math.ceil(await this.postModel.countDocuments() / contentCount);
    const result = { 'content': [content], 'countAll': countAll };
    console.log('result===', result);
    return result;
  }


}