import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    // DONT DO THIS ON REAL APP
    // USE DEPENDENCY INJECTIOn
    this.messageService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message
  }
}
