import {Controller, Get, Request, Response, Param} from '@nestjs/common';
import {RedirectsService} from './redirects.service';

@Controller('direct')
export class RedirectsController {
  constructor(private redirectsService: RedirectsService) {}

  @Get('/:app')
  updateRedirects(
    @Param('app') app: string,
    @Request() req: Request,
    @Response() res: Response,
  ): Promise<void> {
    return this.redirectsService.direct(app, req.headers, res);
  }
}
