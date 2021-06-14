// GraphQL TypeDefs

import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType('users')
export class UsersType {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  password: string;
}

@ObjectType('response')
export class ResponseType {
  @Field()
  success: boolean;
}
