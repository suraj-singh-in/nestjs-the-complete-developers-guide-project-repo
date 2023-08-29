import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessagesRepository],
})
export class MessagesModule {}
