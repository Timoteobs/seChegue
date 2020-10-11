import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IConnectionListService } from "../interfaces/IServices/connectionListServices.interface";
import ConnectionList from "../model/connectionList.model";
import TYPES from "../types";
import * as express from 'express';

@controller('')
class ConnectionListController {

  constructor(@inject(TYPES.IConnectionListService) private service: IConnectionListService) { }

  @httpPost('/connectionList')
  post(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new ConnectionList(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpPut('/connectionList')
  put(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.update(new ConnectionList(req.body))
        .then(result => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpDelete('/connetionList/:id')
  delete(@request() req: Request, @response() res: Response) {
    return new Promise((resolve) => {
      this.service.delete(Number(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }
}

export default ConnectionListController;