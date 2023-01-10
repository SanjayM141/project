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
import { employee_type } from 'app/sd-services/employee_type'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './resusable_popup.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employee_type',
  templateUrl: './employee_type.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employee_typeComponent implements AfterViewInit {
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
      this.sd_Hm0C99ji8WbsD8WU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_Hm0C99ji8WbsD8WU(bh) {
    try {
      bh = this.sd_RZvmWDrXeoZaA8qd(bh);
      //appendnew_next_sd_Hm0C99ji8WbsD8WU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hm0C99ji8WbsD8WU');
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
      return this.errorHandler(bh, e, 'sd_I3V69b1x2e6I66Xe');
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
      return this.errorHandler(bh, e, 'sd_JBLIIhZ098KI4nmY');
    }
  }

  select_deselect_types(
    currentType: any = undefined,
    state: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentType: currentType, state: state };
      bh.local = {};
      bh = this.sd_WVz4XQzdmFEYkkeD(bh);
      //appendnew_next_select_deselect_types
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sdt3bLkTay3FXRQm');
    }
  }

  activate_deactivate_types(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mfc5wLOPOpyf7DYa(bh);
      //appendnew_next_activate_deactivate_types
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8npPbRPEdfeSLBGA');
    }
  }

  selectAll(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_paZLKgaWAqNpzH14(bh);
      //appendnew_next_selectAll
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BBE34NUtKSGd7f30');
    }
  }

  update_table(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TUFTjNNRMD2XGYJK(bh);
      //appendnew_next_update_table
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HudbVrw1v4iOQZau');
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
      bh = this.sd_ModmZEN4pd5MZygb(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jjMgUXlcQDY7Pfg3');
    }
  }

  //appendnew_flow_employee_typeComponent_start

  sd_RZvmWDrXeoZaA8qd(bh) {
    try {
      this.page.options = undefined;
      this.page.selectedTypes = [];
      bh = this.sd_fIaZ7i4QkGGqEStk(bh);
      //appendnew_next_sd_RZvmWDrXeoZaA8qd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RZvmWDrXeoZaA8qd');
    }
  }

  sd_fIaZ7i4QkGGqEStk(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([]);
      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];
      page.selectedState = true; // Default
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_fIaZ7i4QkGGqEStk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fIaZ7i4QkGGqEStk');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      bh = this.updateTable(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kSyrhu3H2vjgAq9o');
    }
  }

  updateTable(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5tpYJMK9O4ywWU9K');
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
      return this.errorHandler(bh, e, 'sd_lJtIrxcTlW9W6DH0');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4sq3vEJfZlbneqzj');
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
        if (el.employee_type_name.toLowerCase().includes(filterValue)) {
          bh.local.filteredIds.push(el.employee_type_id);
          return true;
        }
      });
      page.all =
        bh.local.filteredIds.length != 0 &&
        bh.local.filteredIds.every((el) => page.selectedTypes.includes(el));
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_krb2vTNJzS9lwaqk');
    }
  }

  sd_WVz4XQzdmFEYkkeD(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedTypes.push(bh.input.currentType.employee_type_id);
      } else {
        page.selectedTypes = page.selectedTypes.filter((el) => {
          return el != bh.input.currentType.employee_type_id;
        });
      }
      page.all = page.selectedTypes.length == page.filteredData.length;
      //appendnew_next_sd_WVz4XQzdmFEYkkeD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WVz4XQzdmFEYkkeD');
    }
  }

  sd_mfc5wLOPOpyf7DYa(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.actOrDeactProject(bh);
      //appendnew_next_sd_mfc5wLOPOpyf7DYa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfc5wLOPOpyf7DYa');
    }
  }

  async actOrDeactProject(bh) {
    try {
      const employee_typeInstance: employee_type =
        this.__page_injector__.get(employee_type);

      let outputVariables =
        await employee_typeInstance.active_or_deactive_employee_type(
          this.page.selectedTypes,
          bh.local.is_active
        );

      bh = this.updateTableAfterActOrDeact(bh);
      //appendnew_next_actOrDeactProject
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F1FHKBdJXHoxJ0AQ');
    }
  }

  updateTableAfterActOrDeact(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTableAfterActOrDeact
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q9CChyibqELo8UyE');
    }
  }

  sd_paZLKgaWAqNpzH14(bh) {
    try {
      const page = this.page;
      page.selectedTypes = [];
      for (let x of page.filteredData) {
        x.selected = bh.input.event.checked;
        if (x.selected) page.selectedTypes.push(x.employee_type_id);
      }
      //appendnew_next_sd_paZLKgaWAqNpzH14
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_paZLKgaWAqNpzH14');
    }
  }

  sd_TUFTjNNRMD2XGYJK(bh) {
    try {
      const page = this.page;
      page.selectedTypes = [];
      page.all = false;
      bh = this.getType(bh);
      //appendnew_next_sd_TUFTjNNRMD2XGYJK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TUFTjNNRMD2XGYJK');
    }
  }

  async getType(bh) {
    try {
      const employee_typeInstance: employee_type =
        this.__page_injector__.get(employee_type);

      let outputVariables = await employee_typeInstance.get_employee_type(
        undefined,
        this.page.selectedState
      );
      bh.local.type_response = outputVariables.input.result;

      bh = this.sd_LYtjfd1fQDNuLqxd(bh);
      //appendnew_next_getType
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bFKOBYBlxK109KNO');
    }
  }

  sd_LYtjfd1fQDNuLqxd(bh) {
    try {
      const page = this.page;
      bh.local.type_details = bh.local.type_response.response;
      page.tableData = bh.local.type_details;
      page.filteredData = bh.local.type_details;
      //appendnew_next_sd_LYtjfd1fQDNuLqxd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LYtjfd1fQDNuLqxd');
    }
  }

  sd_ModmZEN4pd5MZygb(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'employee type',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['type-popup', bh.input.action];
      bh = this.sd_69jzkxK8FG0NNdCr(bh);
      //appendnew_next_sd_ModmZEN4pd5MZygb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ModmZEN4pd5MZygb');
    }
  }

  sd_69jzkxK8FG0NNdCr(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_ibykKt5eagx2mKcE(bh);

        //appendnew_next_sd_69jzkxK8FG0NNdCr;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_69jzkxK8FG0NNdCr');
    }
  }

  sd_ibykKt5eagx2mKcE(bh) {
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
      return this.errorHandler(bh, e, 'sd_ibykKt5eagx2mKcE');
    }
  }

  tableUpdate(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_tableUpdate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i0vhC1qAUGEJtrok');
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
  //appendnew_flow_employee_typeComponent_Catch
}
