import {Resolver, Query, Args} from '@nestjs/graphql';
import {ResponseType} from './users.type';
import {UsersService} from '../src/users/users.service';

@Resolver((of) => ResponseType)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => ResponseType)
  login(@Args('name') name: string, @Args('password') password: string) {
    return this.usersService.user(name, password);
  }
}
