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
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms'; //_splitter_
import { formatDate } from '@angular/common'; //_splitter_
import { get_profile } from 'app/sd-services/get_profile'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-profile',
  templateUrl: './profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profileComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_RONQtvIVUvD7HpyQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_RONQtvIVUvD7HpyQ(bh) {
    try {
      bh = this.sd_qNJ5fTfcnpGE28Pr(bh);
      //appendnew_next_sd_RONQtvIVUvD7HpyQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RONQtvIVUvD7HpyQ');
    }
  }

  setformValues(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TmR4B8BCoeLSvCai(bh);
      //appendnew_next_setformValues
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n6KyME9UVI2hbahu');
    }
  }

  //appendnew_flow_profileComponent_start

  sd_qNJ5fTfcnpGE28Pr(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_Rjzi2zbSMyIrdjNw(bh);
      //appendnew_next_sd_qNJ5fTfcnpGE28Pr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qNJ5fTfcnpGE28Pr');
    }
  }

  sd_Rjzi2zbSMyIrdjNw(bh) {
    try {
      bh = this.sd_pU1gGEWG8h4Xvlfg(bh);
      //appendnew_next_sd_Rjzi2zbSMyIrdjNw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rjzi2zbSMyIrdjNw');
    }
  }

  sd_pU1gGEWG8h4Xvlfg(bh) {
    try {
      bh = this.sd_mwTgpm2n5cj02R9S(bh);
      //appendnew_next_sd_pU1gGEWG8h4Xvlfg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pU1gGEWG8h4Xvlfg');
    }
  }

  sd_mwTgpm2n5cj02R9S(bh) {
    try {
      const page = this.page;
      page.profile_details = page.fb.group({
        first_name: [''],
        last_name: [''],
        employee_id: [''],
        designation_name: [''],
        employee_type_name: [''],
        start_date: [''],
        email: [''],
        contact_no: [''],
      });

      bh = this.sd_ONF46GfAz20lnHRh(bh);
      //appendnew_next_sd_mwTgpm2n5cj02R9S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mwTgpm2n5cj02R9S');
    }
  }

  sd_ONF46GfAz20lnHRh(bh) {
    try {
      bh.local.info = JSON.parse(sessionStorage.getItem('info'));
      bh = this.sd_SaeHzfI8CO4AcRIC(bh);
      //appendnew_next_sd_ONF46GfAz20lnHRh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ONF46GfAz20lnHRh');
    }
  }

  async sd_SaeHzfI8CO4AcRIC(bh) {
    try {
      const get_profileInstance: get_profile =
        this.__page_injector__.get(get_profile);

      let outputVariables = await get_profileInstance.get_profile(
        bh.local.info.validUserToken,
        undefined
      );
      bh.local.profileresponse = outputVariables.input.profileresult;

      bh = this.sd_kWeZTLRQ9CNoKJCU(bh);
      //appendnew_next_sd_SaeHzfI8CO4AcRIC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SaeHzfI8CO4AcRIC');
    }
  }

  sd_kWeZTLRQ9CNoKJCU(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.local.profileresponse.hasError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4BFAd6sCTuC8YlIq(bh);
      } else if (
        this.sdService.operators['true'](
          bh.local.profileresponse.hasError,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_9glMvD6SERj1zrhB(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kWeZTLRQ9CNoKJCU');
    }
  }

  sd_4BFAd6sCTuC8YlIq(bh) {
    try {
      const page = this.page;
      page.profile_values = bh.local.profileresponse.response[0];
      this.setformValues();
      //appendnew_next_sd_4BFAd6sCTuC8YlIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4BFAd6sCTuC8YlIq');
    }
  }

  sd_9glMvD6SERj1zrhB(bh) {
    try {
      sessionStorage.clear();
      bh = this.sd_GAZldkRnW7XKnrqK(bh);
      //appendnew_next_sd_9glMvD6SERj1zrhB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9glMvD6SERj1zrhB');
    }
  }

  async sd_GAZldkRnW7XKnrqK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_GAZldkRnW7XKnrqK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GAZldkRnW7XKnrqK');
    }
  }

  sd_TmR4B8BCoeLSvCai(bh) {
    try {
      const page = this.page;
      let profiledetails = {
        first_name: page.profile_values.employee_name.split(' ')[0],
        last_name: page.profile_values.employee_name.split(' ').at(-1),
        employee_id: page.profile_values.employee_id,
        designation_name: page.profile_values.designation_name,
        employee_type_name: page.profile_values.employee_type_name,
        start_date: formatDate(
          page.profile_values.start_date,
          'dd/MM/yyyy',
          'en'
        ),
        email: page.profile_values.email,
        contact_no: page.profile_values.contact_no,
      };
      page.profile_details.setValue(profiledetails);
      //appendnew_next_sd_TmR4B8BCoeLSvCai
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TmR4B8BCoeLSvCai');
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
  //appendnew_flow_profileComponent_Catch
}
