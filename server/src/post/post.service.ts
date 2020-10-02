import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { SystemException } from '../common/exceptions/system.exception';
import { ApiErrorCode } from '../common/exceptions/api-error-code';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<PostDocument>) {
  }

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const createPost = new this.postModel(createPostDto);
    return createPost.save();
  }

  async update(createPostDto: CreatePostDto): Promise<PostDocument> {
    return this.postModel.update({ '_id': createPostDto._id }, { $set: createPostDto });
  }

  async findMain(num: number): Promise<PostDocument[]> {
    return this.postModel.find(null,null,{sort:{'updateTime':-1}}).limit(Number(num));
  }

  async findPostList(pageNo: number, pageCount: number): Promise<any> {
    const skipCount = pageCount * pageNo;
    const content = await this.postModel.find(null,null,{sort:{'updateTime':-1}}).skip(skipCount).limit(Number(pageCount));
    const countAll = Math.ceil(await this.postModel.countDocuments() / pageCount);
    const result = { 'content': content, 'countAll': countAll };
    return result;
  }

  async findPostById(id): Promise<PostDocument> {
    const content = await this.postModel.findOne({ '_id': id });
    return content;
  }

  async deletePostById(id): Promise<any> {
    const content = await this.postModel.deleteOne({ '_id': id });
    let result = {};
    if (content.deletedCount === 1) {
      result = { 'deleteResult': 'success' };
    } else {
      throw new SystemException(ApiErrorCode.DELETE_ERROR, 'DELETE_ERROR', HttpStatus.OK);
    }
    return result;
  }

}