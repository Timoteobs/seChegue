import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IUserService } from "../interfaces/IServices/userServices.interface";
import User from "../model/user.model";
import TYPES from "../types";
import * as express from 'express';

@controller('')
class UserController {

  constructor(@inject(TYPES.IUserService) private service: IUserService) { }

  @httpPost('/user')
  post(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new User(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

}

export default UserController;