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
export class active_or_deactive_employee {
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

  //   service flows_active_or_deactive_employee

  async active_or_deactive_employee(
    employees_ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          employees_ids: employees_ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_kQ3YYFMI6ptkIRzo(bh);
      //appendnew_next_active_or_deactive_employee
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_74eOh7mCxL4i9Vx1');
    }
  }

  //appendnew_flow_active_or_deactive_employee_start

  async sd_kQ3YYFMI6ptkIRzo(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_employee';
      bh.local.body = {
        employee_id: bh.input.employees_ids,
        is_active: bh.input.is_active,
      };

      // console.log(bh.input.state.employee_id)
      bh = await this.sd_BBQ9gf7pmRlbKLRn(bh);
      //appendnew_next_sd_kQ3YYFMI6ptkIRzo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kQ3YYFMI6ptkIRzo');
    }
  }

  async sd_BBQ9gf7pmRlbKLRn(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_BBQ9gf7pmRlbKLRn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BBQ9gf7pmRlbKLRn');
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
  //appendnew_flow_active_or_deactive_employee_Catch
}
