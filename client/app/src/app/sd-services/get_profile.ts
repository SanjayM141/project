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
export class get_profile {
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

  //   service flows_get_profile

  async get_profile(
    token: any = undefined,
    profileresult: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          token: token,
          profileresult: profileresult,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_qDDcGHwvqGTBW3Cv(bh);
      //appendnew_next_get_profile
      return (
        // formatting output variables
        {
          input: {
            profileresult: bh.input.profileresult,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sE2kN1biEMYdKK80');
    }
  }

  //appendnew_flow_get_profile_start

  async sd_qDDcGHwvqGTBW3Cv(bh) {
    try {
      bh.local.getprofileurl = 'http://localhost:8081/api/user/get_profile';
      bh.local.header = {
        Authorization: `Bearer ${bh.input.token}`,
      };
      bh = await this.sd_f9BQ1qlCHPeVZ1S9(bh);
      //appendnew_next_sd_qDDcGHwvqGTBW3Cv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qDDcGHwvqGTBW3Cv');
    }
  }

  async sd_f9BQ1qlCHPeVZ1S9(bh) {
    try {
      let requestOptions = {
        url: bh.local.getprofileurl,
        method: 'get',
        responseType: 'json',
        headers: bh.local.header,
        params: {},
        body: undefined,
      };
      bh.input.profileresult = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_f9BQ1qlCHPeVZ1S9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f9BQ1qlCHPeVZ1S9');
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
  //appendnew_flow_get_profile_Catch
}
