import { Controller, Get } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Message } from '../types/Messages';

@Controller('room')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  find(): Message[] {
    return [
      {
        id: 0,
        text: 'Hello!',
        userId: Date.now() + '',
        timeSent: Date.now(),
      },
      {
        id: 1,
        text: 'How are you?',
        userId: Date.now() + '',
        timeSent: Date.now(),
      },
    ];
  }
}
