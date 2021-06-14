// GraphQL TypeDefs

import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType('redirects')
export class RedirectsType {
  @Field()
  id: number;

  @Field()
  app_name: string;

  @Field()
  ios: string;

  @Field()
  android: string;

  @Field()
  web: string;
}
