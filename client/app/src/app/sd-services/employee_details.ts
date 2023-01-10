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
export class employee_details {
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

  //   service flows_employee_details

  async get_details_emp(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_pKXkamSbOOxfp2xx(bh);
      //appendnew_next_get_details_emp
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
      return await this.errorHandler(bh, e, 'sd_lC20Dv6aubOopna9');
    }
  }

  //appendnew_flow_employee_details_start

  async sd_pKXkamSbOOxfp2xx(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/get_details_for_add_employee';
      bh = await this.sd_zMRgXdaTMHwypqgt(bh);
      //appendnew_next_sd_pKXkamSbOOxfp2xx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pKXkamSbOOxfp2xx');
    }
  }

  async sd_zMRgXdaTMHwypqgt(bh) {
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
      //appendnew_next_sd_zMRgXdaTMHwypqgt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zMRgXdaTMHwypqgt');
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
  //appendnew_flow_employee_details_Catch
}
