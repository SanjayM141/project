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
export class dashbord {
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

  //   service flows_dashbord

  async getDashbord(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_KvoLqbU24mkGVDf8(bh);
      //appendnew_next_getDashbord
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EE9FB2HUwgX29Q4Q');
    }
  }

  async get_employee(
    employeeresult: any = undefined,
    currentState: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          employeeresult: employeeresult,
          currentState: currentState,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_li9ppiTk4Ca5I6hD(bh);
      //appendnew_next_get_employee
      return (
        // formatting output variables
        {
          input: {
            employeeresult: bh.input.employeeresult,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T1d3rhVMK6Bej2WW');
    }
  }

  //appendnew_flow_dashbord_start

  async sd_KvoLqbU24mkGVDf8(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/dashboard';
      bh = await this.sd_j9KEVXH8ck9OKHtd(bh);
      //appendnew_next_sd_KvoLqbU24mkGVDf8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KvoLqbU24mkGVDf8');
    }
  }

  async sd_j9KEVXH8ck9OKHtd(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_j9KEVXH8ck9OKHtd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j9KEVXH8ck9OKHtd');
    }
  }

  async sd_li9ppiTk4Ca5I6hD(bh) {
    try {
      bh.local.getemployeeurl = 'http://localhost:8081/api/admin/get_employee';
      bh.local.is_active = { is_active: bh.input.currentState };
      bh = await this.sd_I718GCGrvSDF4jeY(bh);
      //appendnew_next_sd_li9ppiTk4Ca5I6hD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_li9ppiTk4Ca5I6hD');
    }
  }

  async sd_I718GCGrvSDF4jeY(bh) {
    try {
      let requestOptions = {
        url: bh.local.getemployeeurl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.is_active,
        body: undefined,
      };
      bh.input.employeeresult = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_I718GCGrvSDF4jeY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I718GCGrvSDF4jeY');
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
  //appendnew_flow_dashbord_Catch
}
