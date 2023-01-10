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
export class get_hr_info {
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

  //   service flows_get_hr_info

  async get_hr_details(is_active: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          is_active: is_active,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_FiYoQK2quiPVR4aP(bh);
      //appendnew_next_get_hr_details
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
      return await this.errorHandler(bh, e, 'sd_x3QnbSfP3LwrQhTl');
    }
  }

  async active_or_deactive_hr_contact_info(
    hr_ids: any = undefined,
    is_active: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          hr_ids: hr_ids,
          is_active: is_active,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Mx0wK5ulH1gdaTKe(bh);
      //appendnew_next_active_or_deactive_hr_contact_info
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8W0o8JhX4xDBHvhV');
    }
  }

  async add_or_update_hr_contact_info(
    hrValues: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          hrValues: hrValues,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_aWxmy5M4RS8jz6xC(bh);
      //appendnew_next_add_or_update_hr_contact_info
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
      return await this.errorHandler(bh, e, 'sd_xGHcokoZKIidgWAQ');
    }
  }

  //appendnew_flow_get_hr_info_start

  async sd_FiYoQK2quiPVR4aP(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/get_hr_contact_info' +
        '?is_active=' +
        bh.input.is_active;
      bh = await this.sd_KlSqqyNZf2xFgQ7p(bh);
      //appendnew_next_sd_FiYoQK2quiPVR4aP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FiYoQK2quiPVR4aP');
    }
  }

  async sd_KlSqqyNZf2xFgQ7p(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_KlSqqyNZf2xFgQ7p
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KlSqqyNZf2xFgQ7p');
    }
  }

  async sd_Mx0wK5ulH1gdaTKe(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/active_or_deactive_hr_contact_info';
      bh.local.body = {
        hr_id: bh.input.hr_ids,
        is_active: bh.input.is_active,
      };
      bh = await this.sd_ufydVK0Xbk0PImRa(bh);
      //appendnew_next_sd_Mx0wK5ulH1gdaTKe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mx0wK5ulH1gdaTKe');
    }
  }

  async sd_ufydVK0Xbk0PImRa(bh) {
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
      //appendnew_next_sd_ufydVK0Xbk0PImRa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ufydVK0Xbk0PImRa');
    }
  }

  async sd_aWxmy5M4RS8jz6xC(bh) {
    try {
      bh.local.url =
        'http://localhost:8081/api/admin/add_or_update_hr_contact_info';
      if (!bh.input.hrValues.hr_contact_number) {
        bh.input.hrValues.hr_contact_number = 0; //Add Operation
      }
      bh.local.body = { hr_contact_info: bh.input.hrValues };
      bh = await this.sd_OAkbJVFDd4bgriCZ(bh);
      //appendnew_next_sd_aWxmy5M4RS8jz6xC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aWxmy5M4RS8jz6xC');
    }
  }

  async sd_OAkbJVFDd4bgriCZ(bh) {
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
      //appendnew_next_sd_OAkbJVFDd4bgriCZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OAkbJVFDd4bgriCZ');
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
  //appendnew_flow_get_hr_info_Catch
}
