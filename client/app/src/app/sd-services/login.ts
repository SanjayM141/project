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
export class login {
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

  //   service flows_login

  async login_api(
    details: any = undefined,
    loginresponse: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          details: details,
          loginresponse: loginresponse,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_12io4AwOfLY6YtNR(bh);
      //appendnew_next_login_api
      return (
        // formatting output variables
        {
          input: {
            loginresponse: bh.input.loginresponse,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YbFa6H6QX9o7f3nJ');
    }
  }

  //appendnew_flow_login_start

  async sd_12io4AwOfLY6YtNR(bh) {
    try {
      bh.local.loginurl = 'http://localhost:8081/api/user/login';
      bh.local.requestbody = { login: bh.input.details };
      bh = await this.sd_MRcOgHqTa1F24ofy(bh);
      //appendnew_next_sd_12io4AwOfLY6YtNR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_12io4AwOfLY6YtNR');
    }
  }

  async sd_MRcOgHqTa1F24ofy(bh) {
    try {
      let requestOptions = {
        url: bh.local.loginurl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.requestbody,
      };
      bh.input.loginresponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_MRcOgHqTa1F24ofy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MRcOgHqTa1F24ofy');
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
  //appendnew_flow_login_Catch
}
