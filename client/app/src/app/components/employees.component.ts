/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { employee_details } from 'app/sd-services/employee_details'; //_splitter_
import { employees_api } from 'app/sd-services/employees_api'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { employee_detailsComponent } from './employee_details.component'; //_splitter_
import { active_or_deactive_employee } from 'app/sd-services/active_or_deactive_employee'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employees',
  templateUrl: './employees.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employeesComponent {
  @ViewChild(MatPaginator, { read: MatPaginator })
  public MatPaginator: any = null;
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
      this.sd_FoaWI23orsCzQGcA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_FoaWI23orsCzQGcA(bh) {
    try {
      bh = this.sd_IqNiRFL1f30yEgHh(bh);
      //appendnew_next_sd_FoaWI23orsCzQGcA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FoaWI23orsCzQGcA');
    }
  }

  edit(event: any = undefined, val: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event, val: val };
      bh.local = {};
      bh = this.sd_nuIeq5GFpiIW5qCz(bh);
      //appendnew_next_edit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJzZr2iYJaUeCJHi');
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
      return this.errorHandler(bh, e, 'sd_iOPjKxQXwDPKqc4y');
    }
  }

  valueChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_yYWekYiLjp4TZWJk(bh);
      //appendnew_next_valueChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WPOQQfRYJDJqzrW8');
    }
  }

  find_designation(designation_id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { designation_id: designation_id };
      bh.local = { designation_name: undefined };
      bh = this.sd_2iHFknqtD3FzfXhQ(bh);
      //appendnew_next_find_designation
      return bh.local.designation_name;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qqikESV5314G0qjW');
    }
  }

  findType(type_id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { type_id: type_id };
      bh.local = { type_name: undefined };
      bh = this.sd_sXyALdQFBBBXiraf(bh);
      //appendnew_next_findType
      return bh.local.type_name;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UVd6EkOBtwsvsLsX');
    }
  }

  select_deselect_emp(
    state: any = undefined,
    currentEmployee: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { state: state, currentEmployee: currentEmployee };
      bh.local = {};
      bh = this.sd_jJKYLLa9PhzoZ1Nf(bh);
      //appendnew_next_select_deselect_emp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DsmjR4rM6QkDA8kA');
    }
  }

  active_deactive_emp(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_m0DV5DjUqkKyCaJG(bh);
      //appendnew_next_active_deactive_emp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iy6D4CuIp6Bk4Qun');
    }
  }

  //appendnew_flow_employeesComponent_start

  sd_IqNiRFL1f30yEgHh(bh) {
    try {
      this.page.is_active = 'Yes';
      this.page.is_activeEmp = true;
      this.page.designation_res = undefined;
      this.page.selectedEmployee = [];
      this.page.selectedState = true;
      bh = this.sd_AmzspBlUrVEh1RIq(bh);
      //appendnew_next_sd_IqNiRFL1f30yEgHh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IqNiRFL1f30yEgHh');
    }
  }

  async sd_AmzspBlUrVEh1RIq(bh) {
    try {
      const employee_detailsInstance: employee_details =
        this.__page_injector__.get(employee_details);

      let outputVariables = await employee_detailsInstance.get_details_emp();
      this.page.designation_res = outputVariables.local.result;

      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_AmzspBlUrVEh1RIq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AmzspBlUrVEh1RIq');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      page.is_activeEmp = page.is_active == 'Yes' ? true : false;
      bh = this.empList(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywLDz4KvAZCddg2s');
    }
  }

  async empList(bh) {
    try {
      const employees_apiInstance: employees_api =
        this.__page_injector__.get(employees_api);

      let outputVariables = await employees_apiInstance.getEmpList(
        this.page.is_activeEmp
      );
      bh.local.result = outputVariables.local.result;

      bh = this.resultMapping(bh);
      //appendnew_next_empList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hFsFz1Tkww0yHph9');
    }
  }

  resultMapping(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(bh.local.result.response);

      page.state = [
        { value: true, viewValue: 'Yes' },
        { value: false, viewValue: 'No' },
      ];

      page.selectedEmployee = [];
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_resultMapping
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ipKLe8Wt61OKWuHs');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_GQzLCLwFAkfHU1Kx(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qQVrTpOPkSirdWtU');
    }
  }

  sd_GQzLCLwFAkfHU1Kx(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_LDdimC8wmf9iGJzk(bh);
      //appendnew_next_sd_GQzLCLwFAkfHU1Kx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GQzLCLwFAkfHU1Kx');
    }
  }

  sd_LDdimC8wmf9iGJzk(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      // console.log(bh.local.dataSource);
      //appendnew_next_sd_LDdimC8wmf9iGJzk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LDdimC8wmf9iGJzk');
    }
  }

  sd_nuIeq5GFpiIW5qCz(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.val,
          'Add Employee',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_T4FC9JoY8syZgvIs(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.val,
          'edit',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_T4FC9JoY8syZgvIs(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nuIeq5GFpiIW5qCz');
    }
  }

  sd_T4FC9JoY8syZgvIs(bh) {
    try {
      const employee_detailsDialog = this.__page_injector__.get(MatDialog);
      const employee_detailsDialogRef = employee_detailsDialog.open(
        employee_detailsComponent,
        {
          autoFocus: false,
          data: bh.input.event,
          disableClose: true,
          height: 'calc(100% - 100px)',
          width: '90%',
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T4FC9JoY8syZgvIs');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();

      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CQFfVVOZB6sRd3jH');
    }
  }

  sd_yYWekYiLjp4TZWJk(bh) {
    try {
      const page = this.page;
      console.log('selected value', bh.input.event);

      page.selectedState = bh.input.event.value == true ? true : false;
      page.is_activeEmp = page.selectedState;

      page.selectedState == true ? 'Activate' : 'Deactivate';

      // if(bh.input.event.value == true){
      //     page.selectedState =true;
      //     page.is_activeEmp = true;
      // }else{
      //     page.selectedState =false;
      //     page.is_activeEmp = false;
      // }

      console.log('state', page.selectedState);
      bh = this.sd_CWgWPMFy0C2z4gdk(bh);
      //appendnew_next_sd_yYWekYiLjp4TZWJk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yYWekYiLjp4TZWJk');
    }
  }

  async sd_CWgWPMFy0C2z4gdk(bh) {
    try {
      const employees_apiInstance: employees_api =
        this.__page_injector__.get(employees_api);

      let outputVariables = await employees_apiInstance.getEmpList(
        this.page.is_activeEmp
      );
      bh.local.result = outputVariables.local.result;

      bh = this.resultMapping(bh);
      //appendnew_next_sd_CWgWPMFy0C2z4gdk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CWgWPMFy0C2z4gdk');
    }
  }

  sd_2iHFknqtD3FzfXhQ(bh) {
    try {
      const page = this.page;
      bh.local.designation_name = page.designation_res?.response?.designation
        .filter((x) => x.designation_id == bh.input.designation_id)
        .map((obj) => obj.designation_name);
      //appendnew_next_sd_2iHFknqtD3FzfXhQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2iHFknqtD3FzfXhQ');
    }
  }

  sd_sXyALdQFBBBXiraf(bh) {
    try {
      const page = this.page;
      bh.local.type_name = page.designation_res?.response?.employee_type
        .filter((x) => x.employee_type_id == bh.input.type_id)
        .map((obj) => obj.employee_type_name);
      //appendnew_next_sd_sXyALdQFBBBXiraf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sXyALdQFBBBXiraf');
    }
  }

  sd_jJKYLLa9PhzoZ1Nf(bh) {
    try {
      const page = this.page;
      if (bh.input.state) {
        page.selectedEmployee.push(bh.input.currentEmployee.employee_id);
      } else {
        page.selectedEmployee = page.selectedEmployee.filter((el) => {
          return el != bh.input.currentEmployee.employee_id;
        });
      }
      //appendnew_next_sd_jJKYLLa9PhzoZ1Nf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jJKYLLa9PhzoZ1Nf');
    }
  }

  sd_m0DV5DjUqkKyCaJG(bh) {
    try {
      const page = this.page;
      bh.local.is_active = !page.selectedState;
      bh = this.sd_9XbZQu8m9KtwFXmv(bh);
      //appendnew_next_sd_m0DV5DjUqkKyCaJG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m0DV5DjUqkKyCaJG');
    }
  }

  async sd_9XbZQu8m9KtwFXmv(bh) {
    try {
      const active_or_deactive_employeeInstance: active_or_deactive_employee =
        this.__page_injector__.get(active_or_deactive_employee);

      let outputVariables =
        await active_or_deactive_employeeInstance.active_or_deactive_employee(
          this.page.selectedEmployee,
          bh.local.is_active
        );

      bh = this.empList(bh);
      //appendnew_next_sd_9XbZQu8m9KtwFXmv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9XbZQu8m9KtwFXmv');
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
  //appendnew_flow_employeesComponent_Catch
}
