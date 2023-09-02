import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.userService.getUserById(userId);
  }
}
