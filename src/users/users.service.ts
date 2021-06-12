import {Injectable} from '@nestjs/common';
import {users as Users} from '@prisma/client';
import {PrismaService} from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  // Get all users from Database
  async users(): Promise<Users[]> {
    return await this.db.users.findMany();
  }
}
