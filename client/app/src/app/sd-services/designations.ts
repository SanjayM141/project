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
export class designations {
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

  //   service flows_designations

  async get_designations(
    designationsresult: any = undefined,
    currentState: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          designationsresult: designationsresult,
          currentState: currentState,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_seThFoXCC6NN6Moh(bh);
      //appendnew_next_get_designations
      return (
        // formatting output variables
        {
          input: {
            designationsresult: bh.input.designationsresult,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ICamTUoeRez99xGB');
    }
  }

  async active_or_deactive_designations(
    designation_ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          designation_ids: designation_ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Sd2quDZfVjlEFsyv(bh);
      //appendnew_next_active_or_deactive_designations
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FFfZBUnJ6s7fylGM');
    }
  }

  async add_designations(
    designation_name: any = undefined,
    designation_count: any = undefined,
    designation_id: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          designation_name: designation_name,
          designation_count: designation_count,
          designation_id: designation_id,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_LraoTwMG4lQkD6NW(bh);
      //appendnew_next_add_designations
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v6XSNxFl3e3ZpRDy');
    }
  }

  //appendnew_flow_designations_start

  async sd_seThFoXCC6NN6Moh(bh) {
    try {
      bh.local.getprojecturl =
        'http://localhost:8081/api/admin/get_designation';
      bh.local.is_active = { is_active: bh.input.currentState };
      bh = await this.sd_St6aBzZ6bc3T7nRS(bh);
      //appendnew_next_sd_seThFoXCC6NN6Moh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_seThFoXCC6NN6Moh');
    }
  }

  async sd_St6aBzZ6bc3T7nRS(bh) {
    try {
      let requestOptions = {
        url: bh.local.getprojecturl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.is_active,
        body: undefined,
      };
      bh.input.designationsresult = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_St6aBzZ6bc3T7nRS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_St6aBzZ6bc3T7nRS');
    }
  }

  async sd_Sd2quDZfVjlEFsyv(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_designation';
      bh.local.body = {
        designation_id: bh.input.designation_ids,
        is_active: bh.input.is_active,
      };
      bh = await this.sd_yBaIlY4X2bPEFnZH(bh);
      //appendnew_next_sd_Sd2quDZfVjlEFsyv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Sd2quDZfVjlEFsyv');
    }
  }

  async sd_yBaIlY4X2bPEFnZH(bh) {
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
      //appendnew_next_sd_yBaIlY4X2bPEFnZH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yBaIlY4X2bPEFnZH');
    }
  }

  async sd_LraoTwMG4lQkD6NW(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/add_or_update_designation';
      bh.local.body = {
        designation: {
          designation_id: bh.input.designation_id,
          designation_name: bh.input.designation_name,
          // designation_count : bh.input.designation_count,
        },
      };
      bh = await this.sd_ADeiVP9lXtg8wDnU(bh);
      //appendnew_next_sd_LraoTwMG4lQkD6NW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LraoTwMG4lQkD6NW');
    }
  }

  async sd_ADeiVP9lXtg8wDnU(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ADeiVP9lXtg8wDnU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ADeiVP9lXtg8wDnU');
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
  //appendnew_flow_designations_Catch
}
