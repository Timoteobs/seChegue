import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { ILifeProjectService } from "../interfaces/IServices/lifeProjectServices.interface";
import LifeProject from "../model/lifeProject.model";;
import TYPES from "../types";

@controller('')
class LifProjectController {

  constructor(@inject(TYPES.IlifeProjectService) private service: ILifeProjectService) { }

  @httpPost('/lifeProject')
  post(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new LifeProject(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

}

export default UserController;