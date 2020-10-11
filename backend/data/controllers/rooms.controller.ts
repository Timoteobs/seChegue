import { inject } from "inversify";
import { controller, httpGet, httpPost, httpDelete, request, response, httpPut } from "inversify-express-utils";
import { IRoomsService } from "../interfaces/IServices/roomsServices.interface";
import Rooms from "../model/rooms.model";
import TYPES from "../types";

@controller('')
class RoomsController {

  constructor(@inject(TYPES.IroomsService) private service: IRoomsService) { }

  @httpPost('/rooms')
  post(@request() req: Request<any>, @response() res: Response<any>): Promise<any> {
    return new Promise((resolve) => {
      this.service.save(new Rooms(req.body))
        .then((result: any) => resolve(result))
        .catch((error: any) => resolve(error));
    });
  }

}

export default RoomsController;