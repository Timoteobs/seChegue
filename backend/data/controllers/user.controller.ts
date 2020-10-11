import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IUserService } from "../interfaces/IServices/userServices.interface";
import User from "../model/user.model";
import TYPES from "../types";
import * as express from 'express';

@controller('')
class UserController {

  constructor(@inject(TYPES.IUserService) private service: IUserService) { }

  @httpPost('/users')
  post(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    console.log("aqui")
    return new Promise((resolve) => {
      this.service.save(new User(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpGet('/users/email/:email')
  getByEmail(@request() req: express.Request<any>, @response() res: express.Response<any>) {
    return new Promise((resolve) => {
      this.service.getByEmail(req.params.email)
        .then(result => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpGet('/users/name/:name')
  getByName(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    console.log(req)
    return new Promise((resolve) => {
      this.service.getByName(req.params.name)
        .then(result => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

}

export default UserController;