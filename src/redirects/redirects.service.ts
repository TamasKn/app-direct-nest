import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import {redirects as Redirects} from '@prisma/client';

@Injectable()
export class RedirectsService {
  constructor(private db: PrismaService) {}

  // Get all apps and its redirects data from DB
  async redirects(): Promise<Redirects[]> {
    return await this.db.redirects.findMany();
  }
}
