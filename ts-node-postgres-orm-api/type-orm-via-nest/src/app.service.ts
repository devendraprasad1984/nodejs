import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    return 'Hello TEST via new endpoint!';
  }
}