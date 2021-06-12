import {Resolver, Query} from '@nestjs/graphql';
import {UsersType} from './users.type';
import {UsersService} from '../src/users/users.service';

@Resolver((of) => UsersType)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [UsersType])
  users() {
    return this.usersService.users();
  }
}
