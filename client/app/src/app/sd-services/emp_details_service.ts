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
export class emp_details_service {
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

  //   service flows_emp_details_service

  async emp_details_service(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          emp_details_output: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_NyLj9Ye0cQ3U0EX6(bh);
      //appendnew_next_emp_details_service
      return (
        // formatting output variables
        {
          input: {},
          local: {
            emp_details_output: bh.local.emp_details_output,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hDdQjdHm4LXkM5ic');
    }
  }

  async add_or_update_employee(
    emp_detailsValues: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          emp_detailsValues: emp_detailsValues,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_w3UUKgclEr7cLots(bh);
      //appendnew_next_add_or_update_employee
      return (
        // formatting output variables
        {
          input: {
            emp_detailsValues: bh.input.emp_detailsValues,
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KGIMGOoDTPR1ENc1');
    }
  }

  //appendnew_flow_emp_details_service_start

  async sd_NyLj9Ye0cQ3U0EX6(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/get_employee_details';
      bh = await this.sd_hQe3qTWUCKmVrRdA(bh);
      //appendnew_next_sd_NyLj9Ye0cQ3U0EX6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NyLj9Ye0cQ3U0EX6');
    }
  }

  async sd_hQe3qTWUCKmVrRdA(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.emp_details_output = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = await this.sd_76jOG1f9JSI4H3P3(bh);
      //appendnew_next_sd_hQe3qTWUCKmVrRdA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hQe3qTWUCKmVrRdA');
    }
  }

  async sd_76jOG1f9JSI4H3P3(bh) {
    try {
      bh.local.emp_details_output = bh.local.emp_details_output.response;
      //appendnew_next_sd_76jOG1f9JSI4H3P3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_76jOG1f9JSI4H3P3');
    }
  }

  async sd_w3UUKgclEr7cLots(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/employee_details';

      bh.input.emp_detailsValues.contact_no = parseInt(
        bh.input.emp_detailsValues.contact_no
      );
      if (!bh.input.emp_detailsValues.employee_id) {
        bh.input.emp_detailsValues.employee_id = 0; //Add Operation
      }
      bh.local.body = { employee_details: bh.input.emp_detailsValues };

      //if(!bh.input.projectValues.project_id){
      //     bh.input.projectValues.project_id = 0; //Add operation
      // }

      // bh.local.body = { employee_details : {
      //     "employee_id":employee_id,
      //    "contact_no": parseInt(bh.input.emp_detailsValues.contact_no),
      //     "employee_name": bh.input.emp_detailsValues.employee_name,

      // }
      // bh.input.emp_detailsValues
      //};
      bh = await this.sd_m8aRFbEjYaf2oEdE(bh);
      //appendnew_next_sd_w3UUKgclEr7cLots
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w3UUKgclEr7cLots');
    }
  }

  async sd_m8aRFbEjYaf2oEdE(bh) {
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
      //appendnew_next_sd_m8aRFbEjYaf2oEdE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m8aRFbEjYaf2oEdE');
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
  //appendnew_flow_emp_details_service_Catch
}
