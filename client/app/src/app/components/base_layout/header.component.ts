/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { get_profile } from 'app/sd-services/get_profile'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-header',
  templateUrl: './header.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class headerComponent {
  @Input('profile_values')
  public profile_values: any = undefined;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_kDhMrgsgJxiCpZwW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_kDhMrgsgJxiCpZwW(bh) {
    try {
      bh = this.sd_myejKFCDW9u1dR96(bh);
      //appendnew_next_sd_kDhMrgsgJxiCpZwW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kDhMrgsgJxiCpZwW');
    }
  }

  signOut(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zyUdjgXxt4g5tTMJ(bh);
      //appendnew_next_signOut
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yj1yaXaxOuKv2bZM');
    }
  }

  //appendnew_flow_headerComponent_start

  sd_myejKFCDW9u1dR96(bh) {
    try {
      this.page.profile_values = {};
      this.page.loaded = false;
      bh = this.sd_BU00MZwbq6Bfayxa(bh);
      //appendnew_next_sd_myejKFCDW9u1dR96
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_myejKFCDW9u1dR96');
    }
  }

  sd_BU00MZwbq6Bfayxa(bh) {
    try {
      bh.local.info = JSON.parse(sessionStorage.getItem('info'));
      bh = this.sd_jaRi162DKf5p56bc(bh);
      //appendnew_next_sd_BU00MZwbq6Bfayxa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BU00MZwbq6Bfayxa');
    }
  }

  async sd_jaRi162DKf5p56bc(bh) {
    try {
      const get_profileInstance: get_profile =
        this.__page_injector__.get(get_profile);

      let outputVariables = await get_profileInstance.get_profile(
        bh.local.info.validUserToken,
        undefined
      );
      bh.local.profileresponse = outputVariables.input.profileresult;

      bh = this.sd_gwmLPtPo1t1TtkhG(bh);
      //appendnew_next_sd_jaRi162DKf5p56bc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jaRi162DKf5p56bc');
    }
  }

  sd_gwmLPtPo1t1TtkhG(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.local.profileresponse.hasError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_W2C28Wus4kB4LNp3(bh);
      } else if (
        this.sdService.operators['true'](
          bh.local.profileresponse.hasError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sSXXDabjs8mFA1Ug(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gwmLPtPo1t1TtkhG');
    }
  }

  sd_W2C28Wus4kB4LNp3(bh) {
    try {
      const page = this.page;
      page.profile_values = bh.local.profileresponse.response[0];
      page.initials = page.profile_values.employee_name
        .split(' ')
        .slice(0, 2)
        .map((x) => x[0])
        .join('');
      page.loaded = true;
      //appendnew_next_sd_W2C28Wus4kB4LNp3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W2C28Wus4kB4LNp3');
    }
  }

  sd_sSXXDabjs8mFA1Ug(bh) {
    try {
      sessionStorage.clear();
      bh = this.sd_ek00tKNDYHjxZqZ1(bh);
      //appendnew_next_sd_sSXXDabjs8mFA1Ug
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sSXXDabjs8mFA1Ug');
    }
  }

  async sd_ek00tKNDYHjxZqZ1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_ek00tKNDYHjxZqZ1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ek00tKNDYHjxZqZ1');
    }
  }

  sd_zyUdjgXxt4g5tTMJ(bh) {
    try {
      sessionStorage.clear();
      bh = this.sd_kV3WUsQP1vJ14KsX(bh);
      //appendnew_next_sd_zyUdjgXxt4g5tTMJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zyUdjgXxt4g5tTMJ');
    }
  }

  async sd_kV3WUsQP1vJ14KsX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_kV3WUsQP1vJ14KsX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kV3WUsQP1vJ14KsX');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_headerComponent_Catch
}
