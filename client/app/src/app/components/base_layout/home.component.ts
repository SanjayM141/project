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
import { commonService } from '../../services/common/common.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_rr8Z4lKHrzLQfDPO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_rr8Z4lKHrzLQfDPO(bh) {
    try {
      bh = this.sd_OM8hOwnKReTlbqR8(bh);
      //appendnew_next_sd_rr8Z4lKHrzLQfDPO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rr8Z4lKHrzLQfDPO');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_OM8hOwnKReTlbqR8(bh) {
    try {
      this.page.showlable = true;
      bh = this.sd_yhV1pEnGLL2lKFCH(bh);
      //appendnew_next_sd_OM8hOwnKReTlbqR8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OM8hOwnKReTlbqR8');
    }
  }

  sd_yhV1pEnGLL2lKFCH(bh) {
    try {
      this.page.commonservice = this.__page_injector__.get(commonService);
      //appendnew_next_sd_yhV1pEnGLL2lKFCH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yhV1pEnGLL2lKFCH');
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
  //appendnew_flow_homeComponent_Catch
}
