import {Resolver, Query} from '@nestjs/graphql';
import {RedirectsType} from './redirects.type';
import {RedirectsService} from '../src/redirects/redirects.service';

@Resolver((of) => RedirectsType)
export class RedirectsResolver {
  constructor(private redirectsService: RedirectsService) {}

  @Query((returns) => [RedirectsType])
  redirects() {
    return this.redirectsService.redirects();
  }
}
