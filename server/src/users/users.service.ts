import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export interface LoginResponse {
  success: boolean;
}

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  // Get all users from Database
  async user(name, password): Promise<LoginResponse> {
    try {
      const user = await this.db.users.findUnique({
        where: {name},
      });

      // If login credentials are correct, sends success:true
      return user && (await bcrypt.compare(password, user.password))
        ? {success: true}
        : {success: false};
    } catch (err) {
      throw new InternalServerErrorException({
        message: 'Database not available',
      });
    }
  }
}
