import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    return ['noussa', 'nada', 'john', 'doe'];
  }
}
