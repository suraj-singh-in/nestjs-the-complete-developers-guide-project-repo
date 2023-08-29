import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  async create(content: string) {
    return this.messageRepo.create(content);
  }
}
