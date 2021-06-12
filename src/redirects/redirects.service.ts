import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import {AppNotFound} from '../views/AppNotFound';
import {RedirectsType} from '../../graphql/redirects.type';
import {redirects as Redirects} from '@prisma/client';

/**
 * URL: http://localhost:4000/direct/jifflr
 **/

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
  async direct(app, headers, res): Promise<void> {
    const name = app.toLowerCase();
    const device = this.deviceParser(headers['user-agent']);

    if (this.apps[name]) {
      try {
        await this.db.redirects.update({
          where: {
            app_name: app,
          },
          data: {
            [device]: {increment: 1},
          },
        });

        // Redirect to the appropriate page
        return res.redirect(this.apps[name][device]);
      } catch (err) {
        // If Database not available
        throw new InternalServerErrorException({
          message: 'Database not available',
        });
      }
    } else {
      // If App not exist in our record, sends Not Found page
      return res.status(400).send(AppNotFound);
    }
  }

  async redirects(): Promise<Redirects[]> {
    try {
      return await this.db.redirects.findMany();
    } catch (err) {
      throw new InternalServerErrorException({
        message: 'Database not available',
      });
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
