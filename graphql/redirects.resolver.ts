import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import {RedirectsType} from './redirects.type';
import {RedirectsService} from '../src/redirects/redirects.service';
import {Headers} from '../src/redirects/header.decorator';

@Resolver((of) => RedirectsType)
export class RedirectsResolver {
  constructor(private redirectsService: RedirectsService) {}

  @Mutation((returns) => RedirectsType)
  redirect(@Args('app') app: string, @Headers() headers: any) {
    return this.redirectsService.redirect(app, headers);
  }
}
