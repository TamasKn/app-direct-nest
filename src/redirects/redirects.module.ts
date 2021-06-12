import {Module} from '@nestjs/common';
import {RedirectsService} from './redirects.service';
import {PrismaModule} from '../../prisma/prisma.module';
import {RedirectsResolver} from '../../graphql/redirects.resolver';

@Module({
  imports: [PrismaModule],
  providers: [RedirectsService, RedirectsResolver],
})
export class RedirectsModule {}
