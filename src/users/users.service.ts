import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  construtor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
}
