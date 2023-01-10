/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class add_or_update_project {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_add_or_update_project

  async add_or_update_project(
    projectValues: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          projectValues: projectValues,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dl8q5501BYXPBZ36(bh);
      //appendnew_next_add_or_update_project
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NRsHfPbly1AYsA15');
    }
  }

  //appendnew_flow_add_or_update_project_start

  async sd_dl8q5501BYXPBZ36(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/add_or_update_project';
      if (!bh.input.projectValues.client_id) {
        bh.input.projectValues.client_id = 1; //No need for operation but req param in api
      }
      if (!bh.input.projectValues.project_id) {
        bh.input.projectValues.project_id = 0; //Add operation
      }
      bh.local.body = { projects: bh.input.projectValues };
      bh = await this.sd_TdTXwOv4Q1uBU16x(bh);
      //appendnew_next_sd_dl8q5501BYXPBZ36
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dl8q5501BYXPBZ36');
    }
  }

  async sd_TdTXwOv4Q1uBU16x(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_TdTXwOv4Q1uBU16x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TdTXwOv4Q1uBU16x');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_add_or_update_project_Catch
}
