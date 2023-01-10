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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { employee_detailsComponent } from './employee_details.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employees_temp',
  templateUrl: './employees_temp.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employees_tempComponent {
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
      this.sd_pQwWKv7BoiD0mMu8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_pQwWKv7BoiD0mMu8(bh) {
    try {
      bh = this.sd_Pmh5GWn0g9DiJhtn(bh);
      //appendnew_next_sd_pQwWKv7BoiD0mMu8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pQwWKv7BoiD0mMu8');
    }
  }

  add_employee(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YbKorkyOWKS50mfI(bh);
      //appendnew_next_add_employee
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oWijgMAlOgj5kP4A');
    }
  }

  //appendnew_flow_employees_tempComponent_start

  sd_Pmh5GWn0g9DiJhtn(bh) {
    try {
      bh = this.sd_XasCzXRoQYsFRY5r(bh);
      //appendnew_next_sd_Pmh5GWn0g9DiJhtn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pmh5GWn0g9DiJhtn');
    }
  }

  sd_XasCzXRoQYsFRY5r(bh) {
    try {
      const page = this.page;
      page.addemp = {
        employee_id: '123',
        first_name: 'hema',
        last_name: 'latha',
        employee_type: 'external',
        joining_date: '2022-07-24T18:30:00.000Z',
        end_date: '2022-12-20T16:37:15.638Z',
        designation: 'se',
        reporting_managers: ['Divya', 'Paul'],
        email_id: 'hema@hema.com',
        contact_no: '9123456789',
        header: 'Add Employee',
      };

      //appendnew_next_sd_XasCzXRoQYsFRY5r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XasCzXRoQYsFRY5r');
    }
  }

  sd_YbKorkyOWKS50mfI(bh) {
    try {
      const employee_detailsDialog = this.__page_injector__.get(MatDialog);
      const employee_detailsDialogRef = employee_detailsDialog.open(
        employee_detailsComponent,
        {
          data: this.page.addemp,
          height: 'calc(100% - 80px)',
          panelClass: 'employee-popup',
          width: '100%',
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YbKorkyOWKS50mfI');
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
  //appendnew_flow_employees_tempComponent_Catch
}
