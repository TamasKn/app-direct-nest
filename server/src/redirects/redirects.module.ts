import {Module} from '@nestjs/common';
import {RedirectsService} from './redirects.service';
import {PrismaModule} from '../../prisma/prisma.module';
import {RedirectsResolver} from '../../graphql/redirects.resolver';
import { RedirectsController } from './redirects.controller';

@Module({
  imports: [PrismaModule],
  providers: [RedirectsService, RedirectsResolver],
  controllers: [RedirectsController],
})
export class RedirectsModule {}
