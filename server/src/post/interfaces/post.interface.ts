export class PostDocument extends Document {
  readonly title: string;
  readonly content: string;
  readonly updateTime: string;
  readonly mainPic: string;
  readonly summary: string;
}