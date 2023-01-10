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
export class get_project {
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

  //   service flows_get_project

  async get_project(
    projectresult: any = undefined,
    currentState: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          projectresult: projectresult,
          currentState: currentState,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_E74exE9TjAuz0S4D(bh);
      //appendnew_next_get_project
      return (
        // formatting output variables
        {
          input: {
            projectresult: bh.input.projectresult,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wLXXPjhNcvx7mEdQ');
    }
  }

  //appendnew_flow_get_project_start

  async sd_E74exE9TjAuz0S4D(bh) {
    try {
      bh.local.getprojecturl = 'http://localhost:8081/api/admin/get_project';
      bh.local.is_active = { is_active: bh.input.currentState };
      bh = await this.sd_8G6iqV9c8RelunnY(bh);
      //appendnew_next_sd_E74exE9TjAuz0S4D
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_E74exE9TjAuz0S4D');
    }
  }

  async sd_8G6iqV9c8RelunnY(bh) {
    try {
      let requestOptions = {
        url: bh.local.getprojecturl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.is_active,
        body: undefined,
      };
      bh.input.projectresult = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_8G6iqV9c8RelunnY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8G6iqV9c8RelunnY');
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
  //appendnew_flow_get_project_Catch
}
