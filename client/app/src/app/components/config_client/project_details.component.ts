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
import { active_or_deactive_projects } from 'app/sd-services/active_or_deactive_projects'; //_splitter_
import { get_project } from 'app/sd-services/get_project'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './resusable_popup.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-project_details',
  templateUrl: './project_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class project_detailsComponent implements AfterViewInit {
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
      this.sd_szVGdiASIrttizre(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_szVGdiASIrttizre(bh) {
    try {
      bh = this.sd_WO7dwimSblDlGkZF(bh);
      //appendnew_next_sd_szVGdiASIrttizre
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_szVGdiASIrttizre');
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
      return this.errorHandler(bh, e, 'sd_TA7aJn0CZ3seClit');
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
      return this.errorHandler(bh, e, 'sd_rhRmhiG5gXxpsLn2');
    }
  }

  select_deselect_projects(
    currentProject: any = undefined,
    state: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentProject: currentProject, state: state };
      bh.local = {};
      bh = this.sd_TT9e653Ag5HrQFGE(bh);
      //appendnew_next_select_deselect_projects
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sS2P2QAK4f47qWdx');
    }
  }

  activate_deactivate_projects(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mNoz0ARvjsD5mwhg(bh);
      //appendnew_next_activate_deactivate_projects
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T8VZyTGfkqq6m5Oc');
    }
  }

  selectAll(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_vPmf9ixoFWsqfj36(bh);
      //appendnew_next_selectAll
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3w3rsrJ5lXsbvIgp');
    }
  }

  update_table(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zAxsSnny6NSE9lQ9(bh);
      //appendnew_next_update_table
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JdKrHoXioaBd6dZ3');
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
      bh = this.sd_LysdEE9X6qFDIdTb(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzYxxoWByJQHTe9y');
    }
  }

  //appendnew_flow_project_detailsComponent_start

  sd_WO7dwimSblDlGkZF(bh) {
    try {
      this.page.options = undefined;
      this.page.selectedProjects = [];
      bh = this.sd_uqCccXS9cNkW4IWm(bh);
      //appendnew_next_sd_WO7dwimSblDlGkZF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WO7dwimSblDlGkZF');
    }
  }

  sd_uqCccXS9cNkW4IWm(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([]);
      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];
      page.selectedState = true; // Default
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_uqCccXS9cNkW4IWm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uqCccXS9cNkW4IWm');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      bh = this.updateTable(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jsNsmQ8glTVgBzST');
    }
  }

  updateTable(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v6og16bUkfc9Jcfv');
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
      return this.errorHandler(bh, e, 'sd_2DGIvJGuThextiC4');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3rV5WNHj2D9IIDom');
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
        if (el.project_name.toLowerCase().includes(filterValue)) {
          bh.local.filteredIds.push(el.project_id);
          return true;
        }
      });
      page.all =
        bh.local.filteredIds.length != 0 &&
        bh.local.filteredIds.every((el) => page.selectedProjects.includes(el));
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LcG2GKIkO5AqpNWy');
    }
  }

  sd_TT9e653Ag5HrQFGE(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedProjects.push(bh.input.currentProject.project_id);
      } else {
        page.selectedProjects = page.selectedProjects.filter((el) => {
          return el != bh.input.currentProject.project_id;
        });
      }
      page.all = page.selectedProjects.length == page.filteredData.length;
      //appendnew_next_sd_TT9e653Ag5HrQFGE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TT9e653Ag5HrQFGE');
    }
  }

  sd_mNoz0ARvjsD5mwhg(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.actOrDeactProject(bh);
      //appendnew_next_sd_mNoz0ARvjsD5mwhg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mNoz0ARvjsD5mwhg');
    }
  }

  async actOrDeactProject(bh) {
    try {
      const active_or_deactive_projectsInstance: active_or_deactive_projects =
        this.__page_injector__.get(active_or_deactive_projects);

      let outputVariables =
        await active_or_deactive_projectsInstance.active_or_deactive_projects(
          this.page.selectedProjects,
          bh.local.is_active
        );

      bh = this.updateTableAfterActOrDeact(bh);
      //appendnew_next_actOrDeactProject
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zBpnMPWBcadzbh6q');
    }
  }

  updateTableAfterActOrDeact(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTableAfterActOrDeact
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XAQs2EjSoMdw235u');
    }
  }

  sd_vPmf9ixoFWsqfj36(bh) {
    try {
      const page = this.page;
      page.selectedProjects = [];
      for (let x of page.filteredData) {
        x.selected = bh.input.event.checked;
        if (x.selected) page.selectedProjects.push(x.project_id);
      }
      //appendnew_next_sd_vPmf9ixoFWsqfj36
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vPmf9ixoFWsqfj36');
    }
  }

  sd_zAxsSnny6NSE9lQ9(bh) {
    try {
      const page = this.page;
      page.selectedProjects = [];
      page.all = false;
      bh = this.getProject(bh);
      //appendnew_next_sd_zAxsSnny6NSE9lQ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zAxsSnny6NSE9lQ9');
    }
  }

  async getProject(bh) {
    try {
      const get_projectInstance: get_project =
        this.__page_injector__.get(get_project);

      let outputVariables = await get_projectInstance.get_project(
        undefined,
        this.page.selectedState
      );
      bh.local.get_project_response = outputVariables.input.projectresult;

      bh = this.sd_QphFjGEtC60pKZA3(bh);
      //appendnew_next_getProject
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XmL7RXEefpcd9HZW');
    }
  }

  sd_QphFjGEtC60pKZA3(bh) {
    try {
      const page = this.page;
      bh.local.project_details = bh.local.get_project_response.response;
      page.tableData = bh.local.project_details;
      page.filteredData = bh.local.project_details;
      //appendnew_next_sd_QphFjGEtC60pKZA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QphFjGEtC60pKZA3');
    }
  }

  sd_LysdEE9X6qFDIdTb(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'project',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['project-popup', bh.input.action];
      bh = this.sd_dyFnBfL5ZKrihyHb(bh);
      //appendnew_next_sd_LysdEE9X6qFDIdTb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LysdEE9X6qFDIdTb');
    }
  }

  sd_dyFnBfL5ZKrihyHb(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_E4M6ClKrXvqZERHV(bh);

        //appendnew_next_sd_dyFnBfL5ZKrihyHb;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dyFnBfL5ZKrihyHb');
    }
  }

  sd_E4M6ClKrXvqZERHV(bh) {
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
      return this.errorHandler(bh, e, 'sd_E4M6ClKrXvqZERHV');
    }
  }

  tableUpdate(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_tableUpdate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eU8zdIodPXfjwktw');
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
  //appendnew_flow_project_detailsComponent_Catch
}
