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
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { designations } from 'app/sd-services/designations'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_designation',
  templateUrl: './add_designation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_designationComponent {
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
      this.sd_O5B2JTE4Dvtb2GXD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_O5B2JTE4Dvtb2GXD(bh) {
    try {
      bh = this.sd_ajIkEONPC98QU25t(bh);
      //appendnew_next_sd_O5B2JTE4Dvtb2GXD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O5B2JTE4Dvtb2GXD');
    }
  }

  close_popup(employee_details: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { employee_details: employee_details };
      bh.local = {};
      bh = this.sd_qhHHdeelNXhwu5RF(bh);
      //appendnew_next_close_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LNRGKxTAHdUXtPey');
    }
  }

  addDesignation(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RU5l01M0832wcYLJ(bh);
      //appendnew_next_addDesignation
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0nC2TEUR39hFotAR');
    }
  }

  //appendnew_flow_add_designationComponent_start

  sd_ajIkEONPC98QU25t(bh) {
    try {
      bh = this.sd_jw8m1q3hsIX8gVbA(bh);
      //appendnew_next_sd_ajIkEONPC98QU25t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajIkEONPC98QU25t');
    }
  }

  sd_jw8m1q3hsIX8gVbA(bh) {
    try {
      bh = this.sd_mh2T0MKHuMXE6a1f(bh);
      //appendnew_next_sd_jw8m1q3hsIX8gVbA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jw8m1q3hsIX8gVbA');
    }
  }

  sd_mh2T0MKHuMXE6a1f(bh) {
    try {
      this.page.popupdata = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_jbjouTfbz3usvzwc(bh);
      //appendnew_next_sd_mh2T0MKHuMXE6a1f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mh2T0MKHuMXE6a1f');
    }
  }

  sd_jbjouTfbz3usvzwc(bh) {
    try {
      const page = this.page;
      page.add_addDesignation_form = new FormGroup({
        designation_name: new FormControl(''),
        designation_count: new FormControl(''),
      });
      //appendnew_next_sd_jbjouTfbz3usvzwc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jbjouTfbz3usvzwc');
    }
  }

  sd_qhHHdeelNXhwu5RF(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.popupdata);

      //appendnew_next_sd_qhHHdeelNXhwu5RF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qhHHdeelNXhwu5RF');
    }
  }

  sd_RU5l01M0832wcYLJ(bh) {
    try {
      const page = this.page; // console.log(page.add_addDesignation_form.value);

      page.designation_name =
        page.add_addDesignation_form.value.designation_name;
      page.designation_count =
        page.add_addDesignation_form.value.designation_count;
      // console.log(page.designation_name, page.designation_count);
      bh = this.sd_O95EIEGHRHD81zIx(bh);
      //appendnew_next_sd_RU5l01M0832wcYLJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RU5l01M0832wcYLJ');
    }
  }

  async sd_O95EIEGHRHD81zIx(bh) {
    try {
      const designationsInstance: designations =
        this.__page_injector__.get(designations);

      let outputVariables = await designationsInstance.add_designations(
        this.page.designation_name,
        this.page.designation_count
      );

      //appendnew_next_sd_O95EIEGHRHD81zIx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O95EIEGHRHD81zIx');
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
  //appendnew_flow_add_designationComponent_Catch
}
