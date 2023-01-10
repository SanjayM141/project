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
export class add_update_emp {
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

  //   service flows_add_update_emp

  async add_edit_employee(empData: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          empData: empData,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ZBFC9dWX5frdrmqz(bh);
      //appendnew_next_add_edit_employee
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
      return await this.errorHandler(bh, e, 'sd_KbmtUuKD3NesgKKv');
    }
  }

  //appendnew_flow_add_update_emp_start

  async sd_ZBFC9dWX5frdrmqz(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/add_or_update_employee';
      // console.log(bh.input.empData)
      bh.local.body = {
        employee: {
          employee_id: 0,
          employee_name:
            bh.input.empData.first_name + ' ' + bh.input.empData.last_name,
          employee_code: JSON.stringify(bh.input.empData.employee_id),
          reporting_manager: bh.input.empData.reporting_managers,
          employee_type_id: bh.input.empData.employee_type,
          designation_id: bh.input.empData.designation,
          email: bh.input.empData.email,
          password: 'password@123',
          contact_no: bh.input.empData.contact_no,
          is_active: true,
          created_date: bh.input.empData.start_date,
          modified_date: bh.input.empData.start_date,
          start_date: bh.input.empData.start_date,
        },
      };
      bh = await this.sd_mFuzRrwnVO8xRozq(bh);
      //appendnew_next_sd_ZBFC9dWX5frdrmqz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZBFC9dWX5frdrmqz');
    }
  }

  async sd_mFuzRrwnVO8xRozq(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_mFuzRrwnVO8xRozq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mFuzRrwnVO8xRozq');
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
  //appendnew_flow_add_update_emp_Catch
}
