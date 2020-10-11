import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { ILifeProjectService } from "../interfaces/IServices/lifeProjectServices.interface";
import LifeProject from "../model/lifeProject.model";;
import TYPES from "../types";
import * as express from 'express';

@controller('')
class LifeProjectController {

  constructor(@inject(TYPES.ILifeProjectService) private service: ILifeProjectService) { }

  @httpPost('/lifeProject')
  post(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new LifeProject(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }
  @httpPut('/lifeProject')
  put(@request() req: express.Request<any>, @response() res: express.Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.update(new LifeProject(req.body))
        .then(result => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

  
  @httpDelete('/lifeProject/:id')
  delete(@request() req: Request, @response() res: Response) {
    return new Promise((resolve) => {
      this.service.delete(Number(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

}
export default LifeProjectController;