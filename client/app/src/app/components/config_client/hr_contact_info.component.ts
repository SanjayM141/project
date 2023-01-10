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
import { get_hr_info } from 'app/sd-services/get_hr_info'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './resusable_popup.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-hr_contact_info',
  templateUrl: './hr_contact_info.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class hr_contact_infoComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
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
      this.sd_LrjnXiQH5YBiWaHo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_LrjnXiQH5YBiWaHo(bh) {
    try {
      bh = this.sd_srw6tqWS9NWG6rrk(bh);
      //appendnew_next_sd_LrjnXiQH5YBiWaHo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LrjnXiQH5YBiWaHo');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WLOb8hVVP9pkMik0');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RIMR0aLO9tIFyfUS');
    }
  }

  update_table(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_IuMS4MprjGXP4z9W(bh);
      //appendnew_next_update_table
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZGUCkF4FEkkvQ50');
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
      bh = this.sd_sdYgNJgAoqdTGBP4(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZzfWoNCb0wOGC8AT');
    }
  }

  select_deselect_hr(
    currentHr: any = undefined,
    state: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentHr: currentHr, state: state };
      bh.local = {};
      bh = this.sd_urGMDARY22Fi6NE0(bh);
      //appendnew_next_select_deselect_hr
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6I7TXfKtfGyNmR69');
    }
  }

  activate_deactivate_hr(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_uHGmrLOUWIJrPp4H(bh);
      //appendnew_next_activate_deactivate_hr
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2I074pcD7JX38oT');
    }
  }

  selectAll(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_2Ith2ZR5erqamaJ7(bh);
      //appendnew_next_selectAll
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1nMq2wdYGUt5NdaB');
    }
  }

  //appendnew_flow_hr_contact_infoComponent_start

  sd_srw6tqWS9NWG6rrk(bh) {
    try {
      this.page.options = undefined;
      this.page.selectedHrs = [];
      bh = this.sd_ATCfT0fVJmBViv3K(bh);
      //appendnew_next_sd_srw6tqWS9NWG6rrk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srw6tqWS9NWG6rrk');
    }
  }

  sd_ATCfT0fVJmBViv3K(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([]);
      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];
      page.selectedState = true; // Default
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_ATCfT0fVJmBViv3K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ATCfT0fVJmBViv3K');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      bh = this.updateTable(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YRUzSY8TfUTwVWe6');
    }
  }

  updateTable(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CURDlVq0JPJa3mQR');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qSMFZRLMt7dKbyX');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c0mf9A7FzlJCGGz3');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      const filterValue = (
        bh.input.filterEvent.target as HTMLInputElement
      ).value.toLowerCase();
      bh.local.filteredIds = [];
      page.filteredData = page.tableData.filter((el) => {
        if (el.hr_name.toLowerCase().includes(filterValue)) {
          bh.local.filteredIds.push(el.hr_id);
          return true;
        }
      });
      page.all =
        bh.local.filteredIds.length != 0 &&
        bh.local.filteredIds.every((el) => page.selectedHrs.includes(el));
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jiisoXXdBHmHBb6u');
    }
  }

  sd_IuMS4MprjGXP4z9W(bh) {
    try {
      const page = this.page;
      page.selectedHrs = [];
      page.all = false;
      bh = this.get_hr_details(bh);
      //appendnew_next_sd_IuMS4MprjGXP4z9W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IuMS4MprjGXP4z9W');
    }
  }

  async get_hr_details(bh) {
    try {
      const get_hr_infoInstance: get_hr_info =
        this.__page_injector__.get(get_hr_info);

      let outputVariables = await get_hr_infoInstance.get_hr_details(
        this.page.selectedState
      );
      bh.local.get_hr_response = outputVariables.local.result;

      bh = this.sd_gjj9glcv62CSDhVq(bh);
      //appendnew_next_get_hr_details
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UQ8HRJvYhVFI8ohA');
    }
  }

  sd_gjj9glcv62CSDhVq(bh) {
    try {
      const page = this.page;
      bh.local.hr_details = bh.local.get_hr_response.response;
      page.tableData = bh.local.hr_details;
      page.filteredData = bh.local.hr_details;
      //appendnew_next_sd_gjj9glcv62CSDhVq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gjj9glcv62CSDhVq');
    }
  }

  sd_sdYgNJgAoqdTGBP4(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'hr contact info',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['hr-popup', bh.input.action];
      bh = this.sd_UJdeDRzHFOuiimfM(bh);
      //appendnew_next_sd_sdYgNJgAoqdTGBP4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sdYgNJgAoqdTGBP4');
    }
  }

  sd_UJdeDRzHFOuiimfM(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_TAz3GeefONmboogg(bh);

        //appendnew_next_sd_UJdeDRzHFOuiimfM;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UJdeDRzHFOuiimfM');
    }
  }

  sd_TAz3GeefONmboogg(bh) {
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
      return this.errorHandler(bh, e, 'sd_TAz3GeefONmboogg');
    }
  }

  tableUpdate(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_tableUpdate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UkmJMZpg0MtHDOaK');
    }
  }

  sd_urGMDARY22Fi6NE0(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedHrs.push(bh.input.currentHr.hr_id);
      } else {
        page.selectedHrs = page.selectedHrs.filter((el) => {
          return el != bh.input.currentHr.hr_id;
        });
      }
      page.all = page.selectedHrs.length == page.filteredData.length;
      //appendnew_next_sd_urGMDARY22Fi6NE0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_urGMDARY22Fi6NE0');
    }
  }

  sd_uHGmrLOUWIJrPp4H(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.actOrDeactHr(bh);
      //appendnew_next_sd_uHGmrLOUWIJrPp4H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uHGmrLOUWIJrPp4H');
    }
  }

  async actOrDeactHr(bh) {
    try {
      const get_hr_infoInstance: get_hr_info =
        this.__page_injector__.get(get_hr_info);

      let outputVariables =
        await get_hr_infoInstance.active_or_deactive_hr_contact_info(
          this.page.selectedHrs,
          bh.local.is_active
        );

      bh = this.updateTableAfterActOrDeact(bh);
      //appendnew_next_actOrDeactHr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rbEcuYY5doPRhRUX');
    }
  }

  updateTableAfterActOrDeact(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTableAfterActOrDeact
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dmGEGrkKB4WUGjV2');
    }
  }

  sd_2Ith2ZR5erqamaJ7(bh) {
    try {
      const page = this.page;
      page.selectedHrs = [];
      for (let x of page.filteredData) {
        x.selected = bh.input.event.checked;
        if (x.selected) page.selectedHrs.push(x.hr_id);
      }
      //appendnew_next_sd_2Ith2ZR5erqamaJ7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Ith2ZR5erqamaJ7');
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
  //appendnew_flow_hr_contact_infoComponent_Catch
}
