/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

class MailMarkettingController {
  public async index(req: Request, res: Response): Promise<any> {
    try {
      return res.send({ response: true });
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }
}

export default new MailMarkettingController();
