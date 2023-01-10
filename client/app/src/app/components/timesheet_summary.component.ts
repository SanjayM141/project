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
import { Angular2Csv } from 'angular2-csv/Angular2-csv'; //_splitter_
import * as XLSX from 'xlsx'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-timesheet_summary',
  templateUrl: './timesheet_summary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class timesheet_summaryComponent implements AfterViewInit {
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
      this.sd_qVUPYZScht18f4cZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_qVUPYZScht18f4cZ(bh) {
    try {
      bh = this.sd_D1DTdxT2cP1YnccR(bh);
      //appendnew_next_sd_qVUPYZScht18f4cZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qVUPYZScht18f4cZ');
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
      return this.errorHandler(bh, e, 'sd_fpmM8KmfBUZQe8yz');
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
      return this.errorHandler(bh, e, 'sd_FiCpCfYAMk6hMy7h');
    }
  }

  downloadCSV(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bIBTJzoTVT3PDeIX(bh);
      //appendnew_next_downloadCSV
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OSICqNRnU8FdBEID');
    }
  }

  downloadXlsx(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Tw1yIf2fYXgX7Rvh(bh);
      //appendnew_next_downloadXlsx
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oM3lB3P4LrvHklGD');
    }
  }

  //appendnew_flow_timesheet_summaryComponent_start

  sd_D1DTdxT2cP1YnccR(bh) {
    try {
      bh = this.sd_xyM68hLAorsH8cUt(bh);
      //appendnew_next_sd_D1DTdxT2cP1YnccR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D1DTdxT2cP1YnccR');
    }
  }

  sd_xyM68hLAorsH8cUt(bh) {
    try {
      this.page.angular2Csv = Angular2Csv;
      bh = this.sd_M2o2KF4OI22n5Vym(bh);
      //appendnew_next_sd_xyM68hLAorsH8cUt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xyM68hLAorsH8cUt');
    }
  }

  sd_M2o2KF4OI22n5Vym(bh) {
    try {
      this.page.xlsx = XLSX;
      bh = this.sd_AqGKXFVb1iQL6Kmy(bh);
      //appendnew_next_sd_M2o2KF4OI22n5Vym
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M2o2KF4OI22n5Vym');
    }
  }

  sd_AqGKXFVb1iQL6Kmy(bh) {
    try {
      this.page.activeRoute = this.__page_injector__.get(ActivatedRoute);
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_AqGKXFVb1iQL6Kmy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AqGKXFVb1iQL6Kmy');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      page.dataSource = new MatTableDataSource([
        {
          emp_id: '01',
          emp_name: 'Sakthi',
          emp_type: 'External',
          emp_mail: 'sakthi@gmail.com',
          repo_manager: 'Bala',
          nod_worked: '22',
          nod_leaves: '2',
          total_duration: '110',
          approved_timeSheet: 'https://approved_timeSheet-url',
          approval_image: 'https://approval_image-url',
          timeSheet_status: 'Approved',
        },
        {
          emp_id: '02',
          emp_name: 'Sakthi',
          emp_type: 'External',
          emp_mail: 'sakthi@gmail.com',
          repo_manager: 'Bala',
          nod_worked: '22',
          nod_leaves: '2',
          total_duration: '110',
          approved_timeSheet: 'https://approved_timeSheet-url',
          approval_image: 'https://approval_image-url',
          timeSheet_status: 'Approved',
        },
        {
          emp_id: '03',
          emp_name: 'Sakthi',
          emp_type: 'External',
          emp_mail: 'sakthi@gmail.com',
          repo_manager: 'Bala',
          nod_worked: '22',
          nod_leaves: '2',
          total_duration: '110',
          approved_timeSheet: 'https://approved_timeSheet-url',
          approval_image: 'https://approval_image-url',
          timeSheet_status: 'Approved',
        },
        {
          emp_id: '04',
          emp_name: 'Sakthi',
          emp_type: 'External',
          emp_mail: 'sakthi@gmail.com',
          repo_manager: 'Bala',
          nod_worked: '22',
          nod_leaves: '2',
          total_duration: '110',
          approved_timeSheet: 'https://approved_timeSheet-url',
          approval_image: 'https://approval_image-url',
          timeSheet_status: 'Approved',
        },
        {
          emp_id: '05',
          emp_name: 'Sakthi',
          emp_type: 'External',
          emp_mail: 'sakthi@gmail.com',
          repo_manager: 'Bala',
          nod_worked: '22',
          nod_leaves: '2',
          total_duration: '110',
          approved_timeSheet: 'https://approved_timeSheet-url',
          approval_image: 'https://approval_image-url',
          timeSheet_status: 'Approved',
        },
      ]);

      page.data = page.dataSource.filteredData;

      page.timesheet_status = [
        { value: 'approved', viewValue: 'Approved' },
        { value: 'rejected', viewValue: 'Rejected' },
        { value: 'pending', viewValue: 'Pending' },
      ];

      page.cards = [
        {
          cardTitle: 'Total',
          cardLabel: '7',
          cardType: 'total',
        },
        {
          cardTitle: 'Approved',
          cardLabel: '5',
          cardType: 'approved',
        },
        {
          cardTitle: 'Pending',
          cardLabel: '2',
          cardType: 'pending',
        },
        {
          cardTitle: 'Rejected',
          cardLabel: '0',
          cardType: 'rejected',
        },
      ];

      page.timesheetMonth = page.activeRoute.snapshot.paramMap.get('id');
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TkBHCJDiBKZIKkar');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VwxYiKGRSESZarxD');
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
      return this.errorHandler(bh, e, 'sd_7eNjQw6utY1QiZnO');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sJlZkU9MNK6KdBTa');
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
      return this.errorHandler(bh, e, 'sd_iNXh7l08be2Y9mbU');
    }
  }

  sd_bIBTJzoTVT3PDeIX(bh) {
    try {
      const page = this.page;
      let status = ['approved', 'rejected', 'pending'];

      let options = {
        // title: 'User Details',
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        // showTitle: true,
        useBom: true,
        headers: [
          'Employee ID',
          'Employee Name',
          'Type',
          'Mail ID',
          'Reporting Manager',
          'No of days worked',
          'No of leaves Taken',
          'Total Duration',
          'Approved Timesheet',
          'Approval Image',
          'Timesheet Status',
        ],
      };

      let fileName = `${page.timesheetMonth} Timesheet Status`;

      new page.angular2Csv(page.data, fileName, options);
      //appendnew_next_sd_bIBTJzoTVT3PDeIX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bIBTJzoTVT3PDeIX');
    }
  }

  sd_Tw1yIf2fYXgX7Rvh(bh) {
    try {
      const page = this.page;
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(page.data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, `${page.timesheetMonth} Timesheet Status.xlsx`);
      //appendnew_next_sd_Tw1yIf2fYXgX7Rvh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tw1yIf2fYXgX7Rvh');
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
  //appendnew_flow_timesheet_summaryComponent_Catch
}
