import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { ParamIdDto } from './interfaces/param_id.dto';
import { SendMessageDto } from './interfaces/send_message.dto';
import { SupportRequestDocument } from './schemas/support_request.schema';
import { ReadMessageDto } from './interfaces/read_message.dto';
import { JwtAuthManagerGuard } from 'src/auth/jwt-auth.manager.guard';
import { JwtAuthClientGuard } from 'src/auth/jwt-auth.client.guard';
import { JwtAuthClientManagerGuard } from 'src/auth/jwt-auth.client.manager.guard';

@Controller('api')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(JwtAuthClientManagerGuard)
  @Post('common/support-requests/:id/messages') // добавить сообщение
  public addMessage(
    @Param() { id }: ParamIdDto,
    @Body() body: SendMessageDto,
  ): Promise<SupportRequestDocument> {
    return this.chatService.addMessage(body, id);
  }

  @UseGuards(JwtAuthClientManagerGuard)
  @Post('common/support-requests/:id/messages/read') // Прочитать сообщение
  public readMessage(
    @Param() { id }: ParamIdDto,
    @Body() body: ReadMessageDto,
  ): any {
    return this.chatService.readMessage(body, id);
  }

  @UseGuards(JwtAuthClientGuard)
  @Get('client/support-requests')
  public findUserRequest(@Query() params: any): any {
    return this.chatService.findUserRequest(params);
  }

  @UseGuards(JwtAuthManagerGuard)
  @Get('manager/support-request')
  public findRequestById(@Query() params: any): any {
    return this.chatService.findRequestById(params);
  }

  @UseGuards(JwtAuthManagerGuard)
  @Get('manager/support-requests-users')
  public getUsersFromRequests(): Promise<any> {
    return this.chatService.getUsersFromRequests();
  }
}
