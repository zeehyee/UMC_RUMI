// temp.controller.js

import { status } from '../../config/response.status.js';
import { CheckFlag, getTempData } from '../services/temp.service.js';
import { response } from '../../config/response.js';

export const tempTest = (req, res, next) => {
    console.log("/temp/test");
    res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+ req.params.flag);  //flag의 파라미터를 얻어옴
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}