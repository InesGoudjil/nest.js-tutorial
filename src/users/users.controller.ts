import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      success: true,
      message: 'Users retrieved successfully',
    };
  }
  @Get('profile')
  getProfile() {
    return 'User profile';
  }
}
