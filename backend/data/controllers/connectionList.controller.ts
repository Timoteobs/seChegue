import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IConnectionListService } from "../interfaces/IServices/connectioListServices.interface";
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

}

export default ConnectionListController;