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
import { Router } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-timesheet_status',
  templateUrl: './timesheet_status.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class timesheet_statusComponent implements AfterViewInit {
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
      this.sd_fWDVzFx2s7phcEYj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_fWDVzFx2s7phcEYj(bh) {
    try {
      bh = this.sd_QgzDzudvSuvypqFe(bh);
      //appendnew_next_sd_fWDVzFx2s7phcEYj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fWDVzFx2s7phcEYj');
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
      return this.errorHandler(bh, e, 'sd_OuvwYZvCfzqUElcS');
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
      return this.errorHandler(bh, e, 'sd_TmZSub7gCKadd2Fm');
    }
  }

  particularYear(year: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { year: year };
      bh.local = {};
      bh = this.sd_BDPXPO54WwPmlwWN(bh);
      //appendnew_next_particularYear
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kDMOFIoYhAXX53jJ');
    }
  }

  //appendnew_flow_timesheet_statusComponent_start

  sd_QgzDzudvSuvypqFe(bh) {
    try {
      this.page.year = 2022;
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_QgzDzudvSuvypqFe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QgzDzudvSuvypqFe');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          tsMonths: 'Jan-2022',
          tsSent: 50,
          approved: 50,
          rejected: 1,
          approvalsRem: 0,
        },
        {
          tsMonths: 'Feb-2022',
          tsSent: 50,
          approved: 48,
          rejected: 2,
          approvalsRem: 0,
        },
        {
          tsMonths: 'Mar-2022',
          tsSent: 50,
          approved: 46,
          rejected: 4,
          approvalsRem: 0,
        },
        {
          tsMonths: 'Apr-2022',
          tsSent: 50,
          approved: 47,
          rejected: 2,
          approvalsRem: 1,
        },
        {
          tsMonths: 'May-2022',
          tsSent: 50,
          approved: 48,
          rejected: 2,
          approvalsRem: 0,
        },
        {
          tsMonths: 'Jun-2022',
          tsSent: 50,
          approved: 19,
          rejected: 1,
          approvalsRem: 30,
        },
      ]);

      page.state = [
        { value: 2018, viewValue: 2018 },
        { value: 2019, viewValue: 2019 },
        { value: 2020, viewValue: 2020 },
        { value: 2021, viewValue: 2021 },
        { value: 2022, viewValue: 2022 },
      ];
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mZjRoeQp2cJITPSU');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_97S7aP0z5ulgUDHL');
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
      return this.errorHandler(bh, e, 'sd_itYaXEVSxGYNKdEB');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YRDY4omKGPDaauYy');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page; // console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      // console.log(this.page.tableData.filteredData)

      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bBVmfS3wEerng9UP');
    }
  }

  async sd_BDPXPO54WwPmlwWN(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/timesheet-status/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.year }),
        ]);
      //appendnew_next_sd_BDPXPO54WwPmlwWN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BDPXPO54WwPmlwWN');
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
  //appendnew_flow_timesheet_statusComponent_Catch
}
