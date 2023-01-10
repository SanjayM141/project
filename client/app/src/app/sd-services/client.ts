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
export class client {
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

  //   service flows_client

  async get_client(
    clientresult: any = undefined,
    currentState: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          clientresult: clientresult,
          currentState: currentState,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_W4BqvpceUY7tP0Di(bh);
      //appendnew_next_get_client
      return (
        // formatting output variables
        {
          input: {
            clientresult: bh.input.clientresult,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xHynuERzkebxu5PA');
    }
  }

  async active_or_deactive_clients(
    client_ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          client_ids: client_ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_RLkfebbay4cHC2ke(bh);
      //appendnew_next_active_or_deactive_clients
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AjUfadiQUEcREAim');
    }
  }

  async add_or_update_client(
    clientValues: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          clientValues: clientValues,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_m9Wdned871YSXo8b(bh);
      //appendnew_next_add_or_update_client
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
      return await this.errorHandler(bh, e, 'sd_RYzlJZD2Ye7whogi');
    }
  }

  //appendnew_flow_client_start

  async sd_W4BqvpceUY7tP0Di(bh) {
    try {
      bh.local.getclienturl = 'http://localhost:8081/api/admin/get_client';
      bh.local.is_active = { is_active: bh.input.currentState };
      bh = await this.sd_dQm5i8peabcThoQ5(bh);
      //appendnew_next_sd_W4BqvpceUY7tP0Di
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W4BqvpceUY7tP0Di');
    }
  }

  async sd_dQm5i8peabcThoQ5(bh) {
    try {
      let requestOptions = {
        url: bh.local.getclienturl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.is_active,
        body: undefined,
      };
      bh.input.clientresult = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_dQm5i8peabcThoQ5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dQm5i8peabcThoQ5');
    }
  }

  async sd_RLkfebbay4cHC2ke(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_client';
      bh.local.body = {
        client_id: bh.input.client_ids,
        is_active: bh.input.is_active,
      };
      bh = await this.sd_uXT8Uv6zh6boC4Cp(bh);
      //appendnew_next_sd_RLkfebbay4cHC2ke
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RLkfebbay4cHC2ke');
    }
  }

  async sd_uXT8Uv6zh6boC4Cp(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'put',
        responseType: 'json',
        headers: [],
        params: {},
        body: bh.local.body,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_uXT8Uv6zh6boC4Cp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uXT8Uv6zh6boC4Cp');
    }
  }

  async sd_m9Wdned871YSXo8b(bh) {
    try {
      bh.local.url = 'http://localhost:8081/api/admin/add_or_update_client';
      if (!bh.input.clientValues.client_id) {
        bh.input.clientValues.client_id = 0; //Add Operation
      }
      bh.local.body = { client: bh.input.clientValues };
      bh = await this.sd_SesfOgYis9QfpUTr(bh);
      //appendnew_next_sd_m9Wdned871YSXo8b
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m9Wdned871YSXo8b');
    }
  }

  async sd_SesfOgYis9QfpUTr(bh) {
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
      //appendnew_next_sd_SesfOgYis9QfpUTr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SesfOgYis9QfpUTr');
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
  //appendnew_flow_client_Catch
}
