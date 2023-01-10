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
export class employee_type {
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

  //   service flows_employee_type

  async get_employee_type(
    result: any = undefined,
    currentState: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          result: result,
          currentState: currentState,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dxpyaEeTddr3SDX9(bh);
      //appendnew_next_get_employee_type
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iyJ0c6Q5gW34zLQv');
    }
  }

  async active_or_deactive_employee_type(
    ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          ids: ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_q6YkbkyFXCxjxsWq(bh);
      //appendnew_next_active_or_deactive_employee_type
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UeQ6tSH1Vrf1h7hO');
    }
  }

  async add_or_update_employee_type(
    typeValues: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          typeValues: typeValues,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_5d7koEKGlFBUA5s6(bh);
      //appendnew_next_add_or_update_employee_type
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
      return await this.errorHandler(bh, e, 'sd_4a06d00zAGcn2AoW');
    }
  }

  //appendnew_flow_employee_type_start

  async sd_dxpyaEeTddr3SDX9(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/get_employee_type';
      bh.local.is_active = { is_active: bh.input.currentState };
      bh = await this.sd_kG7ey65J7r8jXD8I(bh);
      //appendnew_next_sd_dxpyaEeTddr3SDX9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dxpyaEeTddr3SDX9');
    }
  }

  async sd_kG7ey65J7r8jXD8I(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.is_active,
        body: undefined,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_kG7ey65J7r8jXD8I
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kG7ey65J7r8jXD8I');
    }
  }

  async sd_q6YkbkyFXCxjxsWq(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_employee_type';
      bh.local.body = {
        employee_type_id: bh.input.ids,
        is_active: bh.input.is_active,
      };
      bh = await this.sd_f3fj5v6Q1JWaquTB(bh);
      //appendnew_next_sd_q6YkbkyFXCxjxsWq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q6YkbkyFXCxjxsWq');
    }
  }

  async sd_f3fj5v6Q1JWaquTB(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: undefined,
        params: {},
        body: bh.local.body,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_f3fj5v6Q1JWaquTB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f3fj5v6Q1JWaquTB');
    }
  }

  async sd_5d7koEKGlFBUA5s6(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/add_or_update_employee_type';
      bh.input.typeValues.is_active = true; //Default - Newly added types are active
      bh.input.typeValues.modified_date = new Date();
      if (!bh.input.typeValues.employee_type_id) {
        bh.input.typeValues.employee_type_id = 0; //Add Operation
        bh.input.typeValues.created_date = new Date();
      }

      bh.local.body = { employee_type: bh.input.typeValues };
      bh = await this.sd_uiPUynjbuZYhfkB4(bh);
      //appendnew_next_sd_5d7koEKGlFBUA5s6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5d7koEKGlFBUA5s6');
    }
  }

  async sd_uiPUynjbuZYhfkB4(bh) {
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
      //appendnew_next_sd_uiPUynjbuZYhfkB4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uiPUynjbuZYhfkB4');
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
  //appendnew_flow_employee_type_Catch
}
