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
import { get_project } from 'app/sd-services/get_project'; //_splitter_
import { dashbord } from 'app/sd-services/dashbord'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_D4PJgJdNp4EP4yNi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_D4PJgJdNp4EP4yNi(bh) {
    try {
      bh = this.sd_314z6yzKG3mbXEvP(bh);
      //appendnew_next_sd_D4PJgJdNp4EP4yNi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D4PJgJdNp4EP4yNi');
    }
  }

  mycharclick(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_W92nFxpSQEYP2ZNN(bh);
      //appendnew_next_mycharclick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vVPTefzPGPrnBC13');
    }
  }

  onSelected(
    yearValue: any = undefined,
    monthValue: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { yearValue: yearValue, monthValue: monthValue };
      bh.local = {};
      bh = this.sd_PIb2A03OoagIU4g2(bh);
      //appendnew_next_onSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OhyWKqX2NQPAS5yV');
    }
  }

  dashboardChart(
    yearData: any = undefined,
    monthData: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { yearData: yearData, monthData: monthData };
      bh.local = {};
      bh = this.dashboardData(bh);
      //appendnew_next_dashboardChart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ThGLClqlDnuawHzy');
    }
  }

  getMonthName(
    monthNum: any = undefined,
    monthName: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { monthNum: monthNum, monthName: monthName };
      bh.local = {};
      bh = this.sd_M92VrIDockPFmqfm(bh);
      //appendnew_next_getMonthName
      return bh.input.monthName;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FJlCrJaxvivxzuiy');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_314z6yzKG3mbXEvP(bh) {
    try {
      this.page.barChartLabels = this.page.barChartLabels;
      this.page.barChartData = this.page.barChartData;
      this.page.sverticalbarChartData = this.page.sverticalbarChartData;
      this.page.recordsState = 'true';
      this.page.chartReady = 'true';
      bh = this.clientData(bh);
      //appendnew_next_sd_314z6yzKG3mbXEvP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_314z6yzKG3mbXEvP');
    }
  }

  async clientData(bh) {
    try {
      const clientInstance: client = this.__page_injector__.get(client);

      let outputVariables = await clientInstance.get_client(
        undefined,
        this.page.recordsState
      );
      bh.local.clientresult = outputVariables.input.clientresult;

      bh = this.projectData(bh);
      //appendnew_next_clientData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JwS6rHWltjELv8Hh');
    }
  }

  async projectData(bh) {
    try {
      const get_projectInstance: get_project =
        this.__page_injector__.get(get_project);

      let outputVariables = await get_projectInstance.get_project(
        undefined,
        this.page.recordsState
      );
      bh.local.projectresult = outputVariables.input.projectresult;

      bh = this.employeeData(bh);
      //appendnew_next_projectData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7v1aQ0ONwRKUHNbz');
    }
  }

  async employeeData(bh) {
    try {
      const dashbordInstance: dashbord = this.__page_injector__.get(dashbord);

      let outputVariables = await dashbordInstance.get_employee(
        undefined,
        this.page.recordsState
      );
      bh.local.employeeresult = outputVariables.input.employeeresult;

      bh = this.sd_6ZuIpg8P2Jpog4BM(bh);
      //appendnew_next_employeeData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lCDmBGjCWVy2vHJX');
    }
  }

  sd_6ZuIpg8P2Jpog4BM(bh) {
    try {
      const page = this.page;
      const employeLength = bh.local.employeeresult.response.length;
      const clientLength = bh.local.clientresult.response.length;
      const projectLength = bh.local.projectresult.response.length;
      // cards data
      page.cards = [
        {
          cardTitle: 'Clients',
          cardTitleNum: clientLength,
          cardIcon: 'how_to_reg',
          bgColor: '#F36D37',
          cardRoutes: 'client',
        },
        {
          cardTitle: 'Projects',
          cardTitleNum: projectLength,
          cardIcon: 'folder_special',
          bgColor: '#6E8D41',
          cardRoutes: 'project_details',
        },
        {
          cardTitle: 'Employees',
          cardTitleNum: employeLength,
          cardIcon: 'person',
          bgColor: '#7D358C',
          cardRoutes: 'employee',
        },
      ];

      // pai chart

      bh = this.sd_rPCVJR28NtMwvh4D(bh);
      //appendnew_next_sd_6ZuIpg8P2Jpog4BM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6ZuIpg8P2Jpog4BM');
    }
  }

  sd_rPCVJR28NtMwvh4D(bh) {
    try {
      const page = this.page;
      page.years = [
        { value: 2018, viewValue: 2018 },
        { value: 2019, viewValue: 2019 },
        { value: 2020, viewValue: 2020 },
        { value: 2021, viewValue: 2021 },
        { value: 2022, viewValue: 2022 },
        { value: 2023, viewValue: 2023 },
      ];

      page.months = [
        { viewValue: 'Jan', value: 1 },
        { viewValue: 'Feb', value: 2 },
        { viewValue: 'Mar', value: 3 },
        { viewValue: 'Apr', value: 4 },
        { viewValue: 'May', value: 5 },
        { viewValue: 'Jun', value: 6 },
        { viewValue: 'July', value: 7 },
        { viewValue: 'Ang', value: 8 },
        { viewValue: 'Sep', value: 9 },
        { viewValue: 'Oct', value: 10 },
        { viewValue: 'Nov', value: 11 },
        { viewValue: 'Dec', value: 12 },
      ];

      page.selectedYear = 2022;
      page.selectedMonth = 12;
      this.getMonthName(page.selectedMonth);
      // console.log(page.selectedTeam);
      bh = this.sd_BDPQjxMtlo7duh0I(bh);
      //appendnew_next_sd_rPCVJR28NtMwvh4D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rPCVJR28NtMwvh4D');
    }
  }

  sd_BDPQjxMtlo7duh0I(bh) {
    try {
      let outputVariables = this.dashboardChart(
        this.page.selectedYear,
        this.page.selectedMonth
      );

      //appendnew_next_sd_BDPQjxMtlo7duh0I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BDPQjxMtlo7duh0I');
    }
  }

  sd_W92nFxpSQEYP2ZNN(bh) {
    try {
      const page = this.page;
      alert('chart clicked');
      //appendnew_next_sd_W92nFxpSQEYP2ZNN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W92nFxpSQEYP2ZNN');
    }
  }

  sd_PIb2A03OoagIU4g2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.monthValue, bh.input.yearValue);
      this.getMonthName(bh.input.monthValue);
      bh = this.callDashboardChart(bh);
      //appendnew_next_sd_PIb2A03OoagIU4g2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PIb2A03OoagIU4g2');
    }
  }

  callDashboardChart(bh) {
    try {
      let outputVariables = this.dashboardChart(
        bh.input.yearValue,
        bh.input.monthValue
      );

      //appendnew_next_callDashboardChart
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z8hvBw0teQKmF9W0');
    }
  }

  async dashboardData(bh) {
    try {
      const dashbordInstance: dashbord = this.__page_injector__.get(dashbord);

      let outputVariables = await dashbordInstance.getDashbord();
      bh.local.dashboardResult = outputVariables.local.response;

      bh = this.sd_kBIybMqPQYYwt8P3(bh);
      //appendnew_next_dashboardData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fyn2DAK5vgOYJNrH');
    }
  }

  sd_kBIybMqPQYYwt8P3(bh) {
    try {
      const page = this.page;
      let dashboard_apiData = bh.local.dashboardResult.response;
      let year = bh.input.yearData;
      let month = bh.input.monthData;

      const paiObj = dashboard_apiData.find(
        (obj) => obj.year == year && obj.month_id == month
      );
      let paiData;
      if (paiObj == undefined) {
        paiData = [0, 0, 0];
      } else {
        delete paiObj.year;
        delete paiObj.month_id;
        delete paiObj.total;
        paiData = Object.values(paiObj);
      }

      // console.log(paiData);

      page.pieChartData = [
        {
          data: paiData,
        },
      ];

      page.pieChartLabels = ['Approve', 'pending', 'Rejected'];

      page.pieChartOptions = {
        responsive: true,
      };

      page.pieChartColor = [
        {
          backgroundColor: ['#6E8D41', '#28ADE4', '#F36D37'],
          borderColor: ['#fff'],
        },
      ];
      //appendnew_next_sd_kBIybMqPQYYwt8P3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kBIybMqPQYYwt8P3');
    }
  }

  sd_M92VrIDockPFmqfm(bh) {
    try {
      const page = this.page; // if(bh.input.monthNum != 'undefined')
      // let monthNum = bh.input.monthNum
      const date = new Date();
      date.setMonth(bh.input.monthNum - 1);
      page.selectedMonthName = date.toLocaleString('en-US', { month: 'short' });

      //appendnew_next_sd_M92VrIDockPFmqfm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M92VrIDockPFmqfm');
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
  //appendnew_flow_dashboardComponent_Catch
}
