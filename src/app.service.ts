import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Everyone. I am happy starting full-stack developer position in SG Company!. Thanks for giving change';
  }
}
