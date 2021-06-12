import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import {redirects as Redirects, Prisma} from '@prisma/client';

@Injectable()
export class RedirectsService {
  private apps = {
    jifflr: {
      web: 'https://jifflr.com/',
      ios: 'https://apps.apple.com/gb/app/jifflr/id1434427409',
      android:
        'https://play.google.com/store/apps/details?id=uk.jifflr.app&hl=en_GB',
    },
  };

  constructor(private db: PrismaService) {}

  // Retrieve the appropriate URL if the app is exist in our record
  async redirect(app, headers): Promise<void> {
    const name = app.toLowerCase();
    const device = this.deviceParser(headers['user-agent']);

    if (this.apps[name]) {
      await this.db.redirects.update({
        where: {
          id: 6,
        },
        data: {
          [device]: {increment: 1},
        },
      });

      // Redirect to the appropriate page

      // Make this function with REST API because of redirect and url parsing
    } else {
      console.log('No app');
    }
  }

  // Parsing the user's device OS
  deviceParser(agent: string): string {
    let device;

    if (agent.includes('Android')) {
      device = 'android';
    } else if (agent.includes('iPhone')) {
      device = 'ios';
    } else if (agent.includes('iPad')) {
      device = 'ios';
    } else {
      device = 'web';
    }

    return device;
  }
}
