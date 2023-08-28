import { MessagesRepository } from './messages.repository';

export class MessageService {
  messageRepo: MessagesRepository;

  constructor() {
    // Services is creating its own dependencies
    // DO NOT THIS ON REAL REPOs
    this.messageRepo = new MessagesRepository();
  }

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
