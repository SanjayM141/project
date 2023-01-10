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
import { designations } from 'app/sd-services/designations'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './resusable_popup.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-job_title',
  templateUrl: './job_title.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class job_titleComponent implements AfterViewInit {
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
      this.sd_2Lwc3qGYMKuZJkSH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_2Lwc3qGYMKuZJkSH(bh) {
    try {
      bh = this.sd_FTuCS7Xvt9l4j7e3(bh);
      //appendnew_next_sd_2Lwc3qGYMKuZJkSH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Lwc3qGYMKuZJkSH');
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
      return this.errorHandler(bh, e, 'sd_LSHc4te1JfB2sAVS');
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
      return this.errorHandler(bh, e, 'sd_USKDrkgMl2GS6ts0');
    }
  }

  stateChange(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_CHPcMMmwBWSBmUqR(bh);
      //appendnew_next_stateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eooDCA6C9ZfXSt0h');
    }
  }

  select_deselect_designations(
    currentDesignations: any = undefined,
    state: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDesignations: currentDesignations, state: state };
      bh.local = {};
      bh = this.sd_P6daIOSJKOZBdyp6(bh);
      //appendnew_next_select_deselect_designations
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CGOqqEjtBUxQbCia');
    }
  }

  activate_deactivate_designations(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1uIQOJySwKdbJXB7(bh);
      //appendnew_next_activate_deactivate_designations
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sfGQcixXuJLF4JyW');
    }
  }

  selectAll(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_nplMaqJ1CjaG2oHr(bh);
      //appendnew_next_selectAll
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hoZ8IArbKY3ZwjUy');
    }
  }

  update_table(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AXqJqB9duczqId6n(bh);
      //appendnew_next_update_table
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2IaW4d5pIcz01AjB');
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
      bh = this.sd_oriG6azCeTB8fzQv(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_65beyd93YtzD9Rfj');
    }
  }

  //appendnew_flow_job_titleComponent_start

  sd_FTuCS7Xvt9l4j7e3(bh) {
    try {
      this.page.options = undefined;
      this.page.selectedDesignations = [];
      bh = this.sd_rxdpyYKNm4iPJnQZ(bh);
      //appendnew_next_sd_FTuCS7Xvt9l4j7e3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FTuCS7Xvt9l4j7e3');
    }
  }

  sd_rxdpyYKNm4iPJnQZ(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([]);
      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];
      page.selectedState = true; // Default
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_rxdpyYKNm4iPJnQZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rxdpyYKNm4iPJnQZ');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      bh = this.updateTable(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ohB1khtScEpzm9bu');
    }
  }

  updateTable(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FT3jRJhvPzLlrzEk');
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
      return this.errorHandler(bh, e, 'sd_IESzCn4hhi2CL8Rs');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XxYAE018lmgOV7qn');
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
        if (el.designation_name.toLowerCase().includes(filterValue)) {
          bh.local.filteredIds.push(el.designation_id);
          return true;
        }
      });
      page.all =
        bh.local.filteredIds.length != 0 &&
        bh.local.filteredIds.every((el) =>
          page.selectedDesignations.includes(el)
        );
      // console.log(page.filteredData);
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N5e7AMsj8DiBMUz2');
    }
  }

  sd_CHPcMMmwBWSBmUqR(bh) {
    try {
      const page = this.page;
      page.selectedDesignations = [];
      page.all = false;
      bh = this.sd_kpkC6ws0YWIRM9zH(bh);
      //appendnew_next_sd_CHPcMMmwBWSBmUqR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CHPcMMmwBWSBmUqR');
    }
  }

  async sd_kpkC6ws0YWIRM9zH(bh) {
    try {
      const designationsInstance: designations =
        this.__page_injector__.get(designations);

      let outputVariables = await designationsInstance.get_designations(
        undefined,
        this.page.selectedState
      );
      bh.local.get_designations_response =
        outputVariables.input.designationsresult;

      bh = this.sd_bLvtlz6dZZqWmoY3(bh);
      //appendnew_next_sd_kpkC6ws0YWIRM9zH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kpkC6ws0YWIRM9zH');
    }
  }

  sd_bLvtlz6dZZqWmoY3(bh) {
    try {
      const page = this.page;
      bh.local.designations_details =
        bh.local.get_designations_response.response;
      page.tableData = bh.local.designations_details;
      page.filteredData = bh.local.designations_details;
      //appendnew_next_sd_bLvtlz6dZZqWmoY3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bLvtlz6dZZqWmoY3');
    }
  }

  sd_P6daIOSJKOZBdyp6(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedDesignations.push(
          bh.input.currentDesignations.designation_id
        );
      } else {
        page.selectedDesignations = page.selectedDesignations.filter((el) => {
          return el != bh.input.currentDesignations.designation_id;
        });
      }
      page.all = page.selectedDesignations.length == page.filteredData.length;
      //appendnew_next_sd_P6daIOSJKOZBdyp6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P6daIOSJKOZBdyp6');
    }
  }

  sd_1uIQOJySwKdbJXB7(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.sd_kcSMnOux0JnOKnj1(bh);
      //appendnew_next_sd_1uIQOJySwKdbJXB7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1uIQOJySwKdbJXB7');
    }
  }

  async sd_kcSMnOux0JnOKnj1(bh) {
    try {
      const designationsInstance: designations =
        this.__page_injector__.get(designations);

      let outputVariables =
        await designationsInstance.active_or_deactive_designations(
          this.page.selectedDesignations,
          bh.local.is_active
        );

      bh = this.updateTableAfterActOrDeact(bh);
      //appendnew_next_sd_kcSMnOux0JnOKnj1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kcSMnOux0JnOKnj1');
    }
  }

  updateTableAfterActOrDeact(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTableAfterActOrDeact
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rF3SxGIVVu2xX2tp');
    }
  }

  sd_nplMaqJ1CjaG2oHr(bh) {
    try {
      const page = this.page;
      page.selectedDesignations = [];
      for (let x of page.filteredData) {
        x.selected = bh.input.event.checked;
        if (x.selected) page.selectedDesignations.push(x.designation_id);
      }
      //appendnew_next_sd_nplMaqJ1CjaG2oHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nplMaqJ1CjaG2oHr');
    }
  }

  sd_AXqJqB9duczqId6n(bh) {
    try {
      const page = this.page;
      page.selectedDesignations = [];
      page.all = false;
      bh = this.sd_1fv40Ld3iVpvmctH(bh);
      //appendnew_next_sd_AXqJqB9duczqId6n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AXqJqB9duczqId6n');
    }
  }

  async sd_1fv40Ld3iVpvmctH(bh) {
    try {
      const designationsInstance: designations =
        this.__page_injector__.get(designations);

      let outputVariables = await designationsInstance.get_designations(
        undefined,
        this.page.selectedState
      );
      bh.local.get_designations_response =
        outputVariables.input.designationsresult;

      bh = this.sd_K6bXCb9j1gkdaHL5(bh);
      //appendnew_next_sd_1fv40Ld3iVpvmctH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1fv40Ld3iVpvmctH');
    }
  }

  sd_K6bXCb9j1gkdaHL5(bh) {
    try {
      const page = this.page;
      bh.local.designations_details =
        bh.local.get_designations_response.response;
      page.tableData = bh.local.designations_details;
      page.filteredData = bh.local.designations_details;
      // page.all = false;

      // bh.local.project_details = bh.local.get_project_response.response;
      // page.tableData = bh.local.project_details;
      // page.filteredData = bh.local.project_details;
      //appendnew_next_sd_K6bXCb9j1gkdaHL5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K6bXCb9j1gkdaHL5');
    }
  }

  sd_oriG6azCeTB8fzQv(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'designation',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['designation-popup', bh.input.action];
      bh = this.sd_1sTXVsQvkDBxk38N(bh);
      //appendnew_next_sd_oriG6azCeTB8fzQv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oriG6azCeTB8fzQv');
    }
  }

  sd_1sTXVsQvkDBxk38N(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_eknTXYw0Au2v7LRJ(bh);

        //appendnew_next_sd_1sTXVsQvkDBxk38N;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1sTXVsQvkDBxk38N');
    }
  }

  sd_eknTXYw0Au2v7LRJ(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.dataupdated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.tableUpdates(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eknTXYw0Au2v7LRJ');
    }
  }

  tableUpdates(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_tableUpdates
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cbMw9l7mHvoC7F7s');
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
  //appendnew_flow_job_titleComponent_Catch
}
