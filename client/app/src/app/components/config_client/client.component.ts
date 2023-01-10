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
import { client } from 'app/sd-services/client'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { resusable_popupComponent } from './resusable_popup.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client',
  templateUrl: './client.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class clientComponent implements AfterViewInit {
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
      this.sd_iSbSkAmHDK9hs44z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_iSbSkAmHDK9hs44z(bh) {
    try {
      bh = this.sd_pp1yqTZZVLPc7zWt(bh);
      //appendnew_next_sd_iSbSkAmHDK9hs44z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iSbSkAmHDK9hs44z');
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
      return this.errorHandler(bh, e, 'sd_Wc8zd2MPIyRMofmL');
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
      return this.errorHandler(bh, e, 'sd_R3XaayGspdtmxxbg');
    }
  }

  update_table(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lLZaUxORqvJ9T7gZ(bh);
      //appendnew_next_update_table
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_twQgoDDJoDHWvKJd');
    }
  }

  select_deselect_clients(
    currentClient: any = undefined,
    state: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentClient: currentClient, state: state };
      bh.local = {};
      bh = this.sd_2xv8hMqcrTnvgBGu(bh);
      //appendnew_next_select_deselect_clients
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Tmvg9vS0pJPrnmb');
    }
  }

  activate_deactivate_clients(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_yMbnijhkm2zupMvc(bh);
      //appendnew_next_activate_deactivate_clients
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vXmEzhrQqwZEXdxW');
    }
  }

  selectAll(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_gg60CKT4QoYG4PWW(bh);
      //appendnew_next_selectAll
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gN8oKb7d2DWmgDAi');
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
      bh = this.sd_GmySg8pTgzdvsULx(bh);
      //appendnew_next_open_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yl6IXcqRpKZJ03Cn');
    }
  }

  //appendnew_flow_clientComponent_start

  sd_pp1yqTZZVLPc7zWt(bh) {
    try {
      this.page.options = undefined;
      this.page.selectedClients = [];
      bh = this.sd_VP1KdQ9v50bkk53M(bh);
      //appendnew_next_sd_pp1yqTZZVLPc7zWt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pp1yqTZZVLPc7zWt');
    }
  }

  sd_VP1KdQ9v50bkk53M(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([]);
      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];
      page.selectedState = true; // Default
      bh = this.sd_E9QbOlnVduPNV5MO_2(bh);
      //appendnew_next_sd_VP1KdQ9v50bkk53M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VP1KdQ9v50bkk53M');
    }
  }

  sd_E9QbOlnVduPNV5MO_2(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      bh = this.updateTable(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f3nhgLwHJl1QpH4n');
    }
  }

  updateTable(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Di33zw7TqeTYAnim');
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
      return this.errorHandler(bh, e, 'sd_ZpLroZYf3NNqp0Qr');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ibc9jh6xk7EIAHuy');
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
        if (el.client_name.toLowerCase().includes(filterValue)) {
          bh.local.filteredIds.push(el.client_id);
          return true;
        }
      });
      page.all =
        bh.local.filteredIds.length != 0 &&
        bh.local.filteredIds.every((el) => page.selectedClients.includes(el));
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hhqq23Q0X2aKRsDx');
    }
  }

  sd_lLZaUxORqvJ9T7gZ(bh) {
    try {
      const page = this.page;
      page.selectedClients = [];
      page.all = false;
      bh = this.getClient(bh);
      //appendnew_next_sd_lLZaUxORqvJ9T7gZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lLZaUxORqvJ9T7gZ');
    }
  }

  async getClient(bh) {
    try {
      const clientInstance: client = this.__page_injector__.get(client);

      let outputVariables = await clientInstance.get_client(
        undefined,
        this.page.selectedState
      );
      bh.local.get_client_response = outputVariables.input.clientresult;

      bh = this.sd_2EPzPNZgTvrEtZzx(bh);
      //appendnew_next_getClient
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a5r1WGwkLUBxMLF2');
    }
  }

  sd_2EPzPNZgTvrEtZzx(bh) {
    try {
      const page = this.page;
      bh.local.client_details = bh.local.get_client_response.response;
      page.tableData = bh.local.client_details;
      page.filteredData = bh.local.client_details;
      //appendnew_next_sd_2EPzPNZgTvrEtZzx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2EPzPNZgTvrEtZzx');
    }
  }

  sd_2xv8hMqcrTnvgBGu(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedClients.push(bh.input.currentClient.client_id);
      } else {
        page.selectedClients = page.selectedClients.filter((el) => {
          return el != bh.input.currentClient.client_id;
        });
      }
      page.all = page.selectedClients.length == page.filteredData.length;
      //appendnew_next_sd_2xv8hMqcrTnvgBGu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xv8hMqcrTnvgBGu');
    }
  }

  sd_yMbnijhkm2zupMvc(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.actOrDeactClient(bh);
      //appendnew_next_sd_yMbnijhkm2zupMvc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMbnijhkm2zupMvc');
    }
  }

  async actOrDeactClient(bh) {
    try {
      const clientInstance: client = this.__page_injector__.get(client);

      let outputVariables = await clientInstance.active_or_deactive_clients(
        this.page.selectedClients,
        bh.local.is_active
      );

      bh = this.updateTableAfterActOrDeact(bh);
      //appendnew_next_actOrDeactClient
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pjKL1TjaLDMVk0QE');
    }
  }

  updateTableAfterActOrDeact(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_updateTableAfterActOrDeact
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LitXSx02pnjUWfUu');
    }
  }

  sd_gg60CKT4QoYG4PWW(bh) {
    try {
      const page = this.page;
      page.selectedClients = [];
      for (let x of page.filteredData) {
        x.selected = bh.input.event.checked;
        if (x.selected) page.selectedClients.push(x.client_id);
      }
      //appendnew_next_sd_gg60CKT4QoYG4PWW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gg60CKT4QoYG4PWW');
    }
  }

  sd_GmySg8pTgzdvsULx(bh) {
    try {
      const page = this.page;
      bh.local.popupdata = {
        action: bh.input.action,
        popup_name: 'client',
        data: bh.input.currentRecordData,
      };
      bh.local.panelClass = ['client-popup', bh.input.action];
      bh = this.sd_6WaDjefiCwSbgHKr(bh);
      //appendnew_next_sd_GmySg8pTgzdvsULx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GmySg8pTgzdvsULx');
    }
  }

  sd_6WaDjefiCwSbgHKr(bh) {
    try {
      const resusable_popupDialog = this.__page_injector__.get(MatDialog);
      const resusable_popupDialogRef = resusable_popupDialog.open(
        resusable_popupComponent,
        { data: bh.local.popupdata, panelClass: bh.local.panelClass }
      );
      resusable_popupDialogRef.afterClosed().subscribe((event) => {
        bh.local.dataupdated = event;
        this.sd_UjHyzKrwQFuJTTPb(bh);

        //appendnew_next_sd_6WaDjefiCwSbgHKr;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6WaDjefiCwSbgHKr');
    }
  }

  sd_UjHyzKrwQFuJTTPb(bh) {
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
      return this.errorHandler(bh, e, 'sd_UjHyzKrwQFuJTTPb');
    }
  }

  tableUpdate(bh) {
    try {
      let outputVariables = this.update_table();

      //appendnew_next_tableUpdate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zXf5NfP2c3mUuH1X');
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
  //appendnew_flow_clientComponent_Catch
}
