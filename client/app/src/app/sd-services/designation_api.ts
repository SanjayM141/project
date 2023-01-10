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
export class designation_api {
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

  //   service flows_designation_api

  async sd_gpEpYlm9JmwKj7RC(is_active: any = undefined, ...others) {
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
      bh = await this.sd_RqiCMMwRc6wAE358(bh);
      //appendnew_next_sd_gpEpYlm9JmwKj7RC
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
      return await this.errorHandler(bh, e, 'sd_gpEpYlm9JmwKj7RC');
    }
  }

  //appendnew_flow_designation_api_start

  async sd_RqiCMMwRc6wAE358(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/get_designation';
      bh = await this.sd_7n4zuzzXC85itzLH(bh);
      //appendnew_next_sd_RqiCMMwRc6wAE358
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RqiCMMwRc6wAE358');
    }
  }

  async sd_7n4zuzzXC85itzLH(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: { is_active: 'true' },
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_7n4zuzzXC85itzLH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7n4zuzzXC85itzLH');
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
  //appendnew_flow_designation_api_Catch
}
