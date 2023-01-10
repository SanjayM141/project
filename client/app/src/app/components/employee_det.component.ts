/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { emp_details_service } from 'app/sd-services/emp_details_service'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './config_client/resusable_popup.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employee_det',
  templateUrl: './employee_det.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employee_detComponent {
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
      this.sd_W14dWk0kXjuc44lY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_W14dWk0kXjuc44lY(bh) {
    try {
      bh = this.sd_kb4fcXMGY7QF1hj7(bh);
      //appendnew_next_sd_W14dWk0kXjuc44lY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W14dWk0kXjuc44lY');
    }
  }

  sd_tzf0ACgXXJFti72o(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rDu43UW1mqJWYPoy(bh);
      //appendnew_next_sd_tzf0ACgXXJFti72o
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tzf0ACgXXJFti72o');
    }
  }

  open_popup(
    action: any = undefined,
    currentRecordData: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action: action, currentRecordData: currentRecordData };
      bh.local = {};
      bh = this.sd_U1loMScKFgj4wi8v(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RvN7wh0JX3slP3R6');
    }
  }

  //appendnew_flow_employee_detComponent_start

  sd_kb4fcXMGY7QF1hj7(bh) {
    try {
      bh = this.sd_LsGRswRrwSzjC4Qc(bh);
      //appendnew_next_sd_kb4fcXMGY7QF1hj7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kb4fcXMGY7QF1hj7');
    }
  }

  sd_LsGRswRrwSzjC4Qc(bh) {
    try {
      let outputVariables = this.sd_tzf0ACgXXJFti72o();

      //appendnew_next_sd_LsGRswRrwSzjC4Qc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LsGRswRrwSzjC4Qc');
    }
  }

  async sd_rDu43UW1mqJWYPoy(bh) {
    try {
      const emp_details_serviceInstance: emp_details_service =
        this.__page_injector__.get(emp_details_service);

      let outputVariables =
        await emp_details_serviceInstance.emp_details_service();
      this.page.emp_details = outputVariables.local.emp_details_output;

      //appendnew_next_sd_rDu43UW1mqJWYPoy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rDu43UW1mqJWYPoy');
    }
  }

  sd_U1loMScKFgj4wi8v(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'employee',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['employee-popup', bh.input.action];
      bh = this.sd_5ZwidKhXsGyN6WO9(bh);
      //appendnew_next_sd_U1loMScKFgj4wi8v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U1loMScKFgj4wi8v');
    }
  }

  sd_5ZwidKhXsGyN6WO9(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_TpHvKgKTwGk6l2L8(bh);

        //appendnew_next_sd_5ZwidKhXsGyN6WO9;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5ZwidKhXsGyN6WO9');
    }
  }

  sd_TpHvKgKTwGk6l2L8(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.dataupdated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.tableUpdate(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpHvKgKTwGk6l2L8');
    }
  }

  tableUpdate(bh) {
    try {
      let outputVariables = this.sd_tzf0ACgXXJFti72o();

      //appendnew_next_tableUpdate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7X52a2mPr2ZEVVzZ');
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
  //appendnew_flow_employee_detComponent_Catch
}
