import {Module} from '@nestjs/common';
import {RedirectsModule} from './redirects/redirects.module';
import {UsersModule} from './users/users.module';
import {GraphQLModule} from '@nestjs/graphql';

@Module({
  imports: [
    RedirectsModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({req}) => {
        return {req};
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
