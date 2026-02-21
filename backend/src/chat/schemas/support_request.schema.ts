import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {
  Document
} from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type SupportRequestDocument = SupportRequest & Document;

@Schema()
export class SupportRequest {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  public user: User;

  @Prop({ required: true })
  public createdAt: Date;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Message' })
  public messages: any;

  @Prop()
  public isActive: boolean;
}

export const SupportRequestSchema =
  SchemaFactory.createForClass(SupportRequest);
