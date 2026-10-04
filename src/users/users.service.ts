import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['John Doe', 'Jane Smith', 'Alice Johnson'];
  getUsers() {
    return this.users;
  }
  getTotalUser() {
    return this.users.length;
  }
}
