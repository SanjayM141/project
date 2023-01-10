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
export class active_or_deactive_projects {
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

  //   service flows_active_or_deactive_projects

  async active_or_deactive_projects(
    project_ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          project_ids: project_ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_n5K0nMbU1HbcPbCv(bh);
      //appendnew_next_active_or_deactive_projects
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VrC9gqyLQVqqdbRP');
    }
  }

  //appendnew_flow_active_or_deactive_projects_start

  async sd_n5K0nMbU1HbcPbCv(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_projects';
      bh.local.body = {
        project_id: bh.input.project_ids,
        is_active: bh.input.is_active,
      };
      bh = await this.sd_9OSswn0YFaY1TqCI(bh);
      //appendnew_next_sd_n5K0nMbU1HbcPbCv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n5K0nMbU1HbcPbCv');
    }
  }

  async sd_9OSswn0YFaY1TqCI(bh) {
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
      //appendnew_next_sd_9OSswn0YFaY1TqCI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9OSswn0YFaY1TqCI');
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
  //appendnew_flow_active_or_deactive_projects_Catch
}
