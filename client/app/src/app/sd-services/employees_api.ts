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
export class employees_api {
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

  //   service flows_employees_api

  async getEmpList(is_active: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          is_active: is_active,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_F3mRzwfYmuNs5UX6(bh);
      //appendnew_next_getEmpList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ajxU3hO2hGMNUNuw');
    }
  }

  //appendnew_flow_employees_api_start

  async sd_F3mRzwfYmuNs5UX6(bh) {
    try {
      let k = bh.input.is_active;

      bh.local.url =
        'http://localhost:8081/api/admin/get_employee' + '?is_active=' + k;

      bh = await this.sd_U9dFVc0jeiCzDNfY(bh);
      //appendnew_next_sd_F3mRzwfYmuNs5UX6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F3mRzwfYmuNs5UX6');
    }
  }

  async sd_U9dFVc0jeiCzDNfY(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_RuG10azRqiO1gScy(bh);
      //appendnew_next_sd_U9dFVc0jeiCzDNfY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9dFVc0jeiCzDNfY');
    }
  }

  async sd_RuG10azRqiO1gScy(bh) {
    try {
      // console.log(bh.local.result)
      //appendnew_next_sd_RuG10azRqiO1gScy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RuG10azRqiO1gScy');
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
  //appendnew_flow_employees_api_Catch
}
