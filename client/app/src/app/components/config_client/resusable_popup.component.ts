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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { employees_api } from 'app/sd-services/employees_api'; //_splitter_
import { add_or_update_project } from 'app/sd-services/add_or_update_project'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { client } from 'app/sd-services/client'; //_splitter_
import { get_hr_info } from 'app/sd-services/get_hr_info'; //_splitter_
import { employee_type } from 'app/sd-services/employee_type'; //_splitter_
import { emp_details_service } from 'app/sd-services/emp_details_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-resusable_popup',
  templateUrl: './resusable_popup.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class resusable_popupComponent {
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
      this.sd_vqulKHKT72zXceag(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_vqulKHKT72zXceag(bh) {
    try {
      bh = this.sd_BKdI6WHqQEBe0XeD(bh);
      //appendnew_next_sd_vqulKHKT72zXceag
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vqulKHKT72zXceag');
    }
  }

  close_popup(dataupdated: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { dataupdated: dataupdated };
      bh.local = {};
      bh = this.sd_fpYlT0B2Re3KOEHt(bh);
      //appendnew_next_close_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_roEx8P8X37JkYdEJ');
    }
  }

  addRecord(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9IFS4fHMJfGgKnmv(bh);
      //appendnew_next_addRecord
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n7JtRPHd5MbW5C6y');
    }
  }

  setValues(values: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { values: values };
      bh.local = {};
      bh = this.sd_WE6JzU7bbm57bTGK(bh);
      //appendnew_next_setValues
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dc14tzeqMnd1sTt0');
    }
  }

  //appendnew_flow_resusable_popupComponent_start

  sd_BKdI6WHqQEBe0XeD(bh) {
    try {
      bh = this.sd_5E324qtmyNb6meiv(bh);
      //appendnew_next_sd_BKdI6WHqQEBe0XeD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKdI6WHqQEBe0XeD');
    }
  }

  sd_5E324qtmyNb6meiv(bh) {
    try {
      bh = this.sd_IZlUe2iUYqLoCzs5(bh);
      //appendnew_next_sd_5E324qtmyNb6meiv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5E324qtmyNb6meiv');
    }
  }

  sd_IZlUe2iUYqLoCzs5(bh) {
    try {
      this.page.popup = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_ZQM1qaMCmbFGVBUP(bh);
      //appendnew_next_sd_IZlUe2iUYqLoCzs5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IZlUe2iUYqLoCzs5');
    }
  }

  sd_ZQM1qaMCmbFGVBUP(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'project',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_u4aZ1HadLV7EE5pc(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Fk99JSHzsHubZBID(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'hr contact info',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4ULrw9RMpcPUnrXO(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'employee type',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Pz6WEm6Pq5QX0uya(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'employee',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_k8Zhn5MjZFy70mfm(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZQM1qaMCmbFGVBUP');
    }
  }

  sd_u4aZ1HadLV7EE5pc(bh) {
    try {
      const page = this.page;
      page.add_form = new FormGroup({
        project_name: new FormControl(''),
        project_code: new FormControl(''),
        project_start_date: new FormControl(new Date()),
      });
      if (page.popup.action == 'edit') {
        page.add_form.addControl('project_id', new FormControl(''));
        this.setValues(page.popup.data);
      }
      //appendnew_next_sd_u4aZ1HadLV7EE5pc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u4aZ1HadLV7EE5pc');
    }
  }

  sd_Fk99JSHzsHubZBID(bh) {
    try {
      const page = this.page;
      page.add_form = new FormGroup({
        client_name: new FormControl(''),
      });
      if (page.popup.action == 'edit') {
        page.add_form.addControl('client_id', new FormControl(''));
        this.setValues(page.popup.data);
      }
      //appendnew_next_sd_Fk99JSHzsHubZBID
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fk99JSHzsHubZBID');
    }
  }

  sd_4ULrw9RMpcPUnrXO(bh) {
    try {
      const page = this.page;
      page.add_form = new FormGroup({
        hr_id: new FormControl(''),
      });
      if (page.popup.action == 'edit') {
        page.add_form.addControl('hr_contact_number', new FormControl(''));
        this.setValues(page.popup.data);
      }
      bh = this.sd_Y4M3KH7Qo029B9L8(bh);
      //appendnew_next_sd_4ULrw9RMpcPUnrXO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ULrw9RMpcPUnrXO');
    }
  }

  async sd_Y4M3KH7Qo029B9L8(bh) {
    try {
      const employees_apiInstance: employees_api =
        this.__page_injector__.get(employees_api);

      let outputVariables = await employees_apiInstance.getEmpList(true);
      bh.local.emp_response = outputVariables.local.result;

      bh = this.sd_93RfvtHYEcvzcbuq(bh);
      //appendnew_next_sd_Y4M3KH7Qo029B9L8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y4M3KH7Qo029B9L8');
    }
  }

  sd_93RfvtHYEcvzcbuq(bh) {
    try {
      const page = this.page;
      let details = bh.local.emp_response.response;
      page.hr_list = [];
      for (let employee of details) {
        if (employee.designation_id == 1) {
          let emp = {};
          Object.assign(emp, { hr_name: employee.employee_name });
          Object.assign(emp, { hr_id: employee.employee_id });
          page.hr_list.push(emp);
        }
      }

      //appendnew_next_sd_93RfvtHYEcvzcbuq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93RfvtHYEcvzcbuq');
    }
  }

  sd_Pz6WEm6Pq5QX0uya(bh) {
    try {
      const page = this.page;
      page.add_form = new FormGroup({
        employee_type_name: new FormControl(''),
      });
      if (page.popup.action == 'edit') {
        page.add_form.addControl('employee_type_id', new FormControl(''));
        this.setValues(page.popup.data);
      }
      //appendnew_next_sd_Pz6WEm6Pq5QX0uya
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pz6WEm6Pq5QX0uya');
    }
  }

  sd_k8Zhn5MjZFy70mfm(bh) {
    try {
      const page = this.page;
      page.add_form = new FormGroup({
        employee_name: new FormControl('', [Validators.required]),
        contact_no: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]{10,10}$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        // 'contact_no': new FormControl(''),
      });
      if (page.popup.action == 'edit') {
        page.add_form.addControl('employee_id', new FormControl(''));
        this.setValues(page.popup.data);
      }
      //appendnew_next_sd_k8Zhn5MjZFy70mfm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k8Zhn5MjZFy70mfm');
    }
  }

  sd_fpYlT0B2Re3KOEHt(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.input.dataupdated);

      //appendnew_next_sd_fpYlT0B2Re3KOEHt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fpYlT0B2Re3KOEHt');
    }
  }

  sd_9IFS4fHMJfGgKnmv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'project',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_JzH12P0qeRxswRmF(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'client',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_f1NIpxtsy0eghUgK(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'hr contact info',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_G4jnMo0kJoi3QeHe(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'employee type',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_t0DjNBkaFtqG7VAy(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.popup.popup_name,
          'employee',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZUee6vY85X6UBZ30(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9IFS4fHMJfGgKnmv');
    }
  }

  async sd_JzH12P0qeRxswRmF(bh) {
    try {
      const add_or_update_projectInstance: add_or_update_project =
        this.__page_injector__.get(add_or_update_project);

      let outputVariables =
        await add_or_update_projectInstance.add_or_update_project(
          this.page.add_form.value,
          undefined
        );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_b4Cq51Nwc6n2Vlmj(bh);
      //appendnew_next_sd_JzH12P0qeRxswRmF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JzH12P0qeRxswRmF');
    }
  }

  sd_b4Cq51Nwc6n2Vlmj(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.response.message, 'Ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.close(bh);
      //appendnew_next_sd_b4Cq51Nwc6n2Vlmj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b4Cq51Nwc6n2Vlmj');
    }
  }

  close(bh) {
    try {
      let outputVariables = this.close_popup(true);

      //appendnew_next_close
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1XvhMbzisEWKwZXd');
    }
  }

  async sd_f1NIpxtsy0eghUgK(bh) {
    try {
      const clientInstance: client = this.__page_injector__.get(client);

      let outputVariables = await clientInstance.add_or_update_client(
        this.page.add_form.value,
        undefined
      );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_b4Cq51Nwc6n2Vlmj(bh);
      //appendnew_next_sd_f1NIpxtsy0eghUgK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f1NIpxtsy0eghUgK');
    }
  }

  async sd_G4jnMo0kJoi3QeHe(bh) {
    try {
      const get_hr_infoInstance: get_hr_info =
        this.__page_injector__.get(get_hr_info);

      let outputVariables =
        await get_hr_infoInstance.add_or_update_hr_contact_info(
          this.page.add_form.value,
          undefined
        );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_b4Cq51Nwc6n2Vlmj(bh);
      //appendnew_next_sd_G4jnMo0kJoi3QeHe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G4jnMo0kJoi3QeHe');
    }
  }

  async sd_t0DjNBkaFtqG7VAy(bh) {
    try {
      const employee_typeInstance: employee_type =
        this.__page_injector__.get(employee_type);

      let outputVariables =
        await employee_typeInstance.add_or_update_employee_type(
          this.page.add_form.value,
          undefined
        );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_b4Cq51Nwc6n2Vlmj(bh);
      //appendnew_next_sd_t0DjNBkaFtqG7VAy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t0DjNBkaFtqG7VAy');
    }
  }

  async sd_ZUee6vY85X6UBZ30(bh) {
    try {
      const emp_details_serviceInstance: emp_details_service =
        this.__page_injector__.get(emp_details_service);

      let outputVariables =
        await emp_details_serviceInstance.add_or_update_employee(
          this.page.add_form.value,
          undefined
        );
      bh.local.response = outputVariables.input.response;

      bh = this.sd_b4Cq51Nwc6n2Vlmj(bh);
      //appendnew_next_sd_ZUee6vY85X6UBZ30
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZUee6vY85X6UBZ30');
    }
  }

  sd_WE6JzU7bbm57bTGK(bh) {
    try {
      const page = this.page;
      page.add_form.patchValue(bh.input.values);
      //appendnew_next_sd_WE6JzU7bbm57bTGK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WE6JzU7bbm57bTGK');
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
  //appendnew_flow_resusable_popupComponent_Catch
}
