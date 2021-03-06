import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IRoomsService } from "../interfaces/IServices/roomsServices.interface";
import Rooms from "../model/rooms.model";
import TYPES from "../types";
import * as express from 'express';

@controller('')
class RoomsController {

  constructor(@inject(TYPES.IRoomsService) private service: IRoomsService) { }

  @httpPost('/rooms')
  post(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new Rooms(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpPut('/rooms')
  put(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.update(new Rooms(req.body))
        .then(result => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  @httpGet('/rooms/name/:name')
  getByName(@request() req: Request, @response() res: Response) {
    return new Promise((resolve) => {
      this.service.getByName(String(req.body))
        .then((result: Rooms[]) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }


}

export default RoomsController;