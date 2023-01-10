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
import { employee_details } from 'app/sd-services/employee_details'; //_splitter_
import { add_update_emp } from 'app/sd-services/add_update_emp'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employee_details',
  templateUrl: './employee_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employee_detailsComponent {
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
      this.sd_TtYOYb9grIpWEtaW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_TtYOYb9grIpWEtaW(bh) {
    try {
      bh = this.sd_5PXnOlgAs7QkbLRZ(bh);
      //appendnew_next_sd_TtYOYb9grIpWEtaW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TtYOYb9grIpWEtaW');
    }
  }

  add_employee(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9oXqYqb9h2MWBe71(bh);
      //appendnew_next_add_employee
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEgyo5FJ7rtLN5sj');
    }
  }

  close_popup(employee_details: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { employee_details: employee_details };
      bh.local = {};
      bh = this.sd_0nNP1QCfmlInXbol(bh);
      //appendnew_next_close_popup
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FgAqgBcLRQH13pvo');
    }
  }

  editEmployee(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GvbP8QzIhzSLZYHV(bh);
      //appendnew_next_editEmployee
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B6Yoe9MfY89ziRD5');
    }
  }

  //appendnew_flow_employee_detailsComponent_start

  sd_5PXnOlgAs7QkbLRZ(bh) {
    try {
      this.page.employee_type = [];
      this.page.designation_list = [];
      this.page.managers_list = [];
      this.page.today = new Date();
      bh = this.sd_De4nh3DiVZozFgCn(bh);
      //appendnew_next_sd_5PXnOlgAs7QkbLRZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5PXnOlgAs7QkbLRZ');
    }
  }

  sd_De4nh3DiVZozFgCn(bh) {
    try {
      bh = this.sd_qldiFAFQrTzbuB5A(bh);
      //appendnew_next_sd_De4nh3DiVZozFgCn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_De4nh3DiVZozFgCn');
    }
  }

  sd_qldiFAFQrTzbuB5A(bh) {
    try {
      this.page.sample = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_WTQ7m1Cj84bzo68i(bh);
      //appendnew_next_sd_qldiFAFQrTzbuB5A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qldiFAFQrTzbuB5A');
    }
  }

  sd_WTQ7m1Cj84bzo68i(bh) {
    try {
      const page = this.page;
      page.add_employee_form = new FormGroup({
        employee_id: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]/),
        ]),
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        employee_type: new FormControl('', [Validators.required]),
        start_date: new FormControl(new Date(), [Validators.required]),
        // 'end_date': new FormControl(''),
        designation: new FormControl('', [Validators.required]),
        reporting_managers: new FormControl(''),
        email: new FormControl('', [Validators.email]),
        contact_no: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]{10,10}$/),
        ]),
      });

      //Fetching edit emp details

      //     let joining_date = new Date(page.sample.start_date);
      //     let last_date = new Date(page.sample.end_date);

      // page.add_employee_form.controls['employee_id'].setValue(page.sample.employee_id);
      // page.add_employee_form.controls['first_name'].setValue((page.sample.employee_name).split(' ')[0]);
      // page.add_employee_form.controls['last_name'].setValue((page.sample.employee_name).split(' ').at(-1));
      // page.add_employee_form.controls['start_date'].setValue(joining_date);
      // page.add_employee_form.controls['end_date'].setValue(last_date);
      // page.add_employee_form.controls['reporting_managers'].setValue(page.sample?.reporting_manager);
      // page.add_employee_form.controls['email'].setValue(page.sample.email);
      // page.add_employee_form.controls['contact_no'].setValue(page.sample.contact_no);
      // page.add_employee_form.controls['employee_type'].setValue(page.sample.employee_type_id);
      // page.add_employee_form.controls['designation'].setValue(page.sample.designation_id);

      page.active_employee = true;

      if (page.sample != '') {
        page.header = 'Edit Employee';
        this.editEmployee();
      } else {
        page.header = 'Add Employee';
      }
      bh = this.emp_details(bh);
      //appendnew_next_sd_WTQ7m1Cj84bzo68i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WTQ7m1Cj84bzo68i');
    }
  }

  async emp_details(bh) {
    try {
      const employee_detailsInstance: employee_details =
        this.__page_injector__.get(employee_details);

      let outputVariables = await employee_detailsInstance.get_details_emp();
      bh.local.result = outputVariables.local.result;

      bh = this.sd_MKQz4rcZ8HorIjUK(bh);
      //appendnew_next_emp_details
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7fo16ptWP55dH9gQ');
    }
  }

  sd_MKQz4rcZ8HorIjUK(bh) {
    try {
      const page = this.page;
      page.employee_type = bh.local.result.response.employee_type;
      page.designation_list = bh.local.result.response.designation;
      page.managers_list = bh.local.result.response.manager;
      // console.log('res',bh.local.response)
      //appendnew_next_sd_MKQz4rcZ8HorIjUK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MKQz4rcZ8HorIjUK');
    }
  }

  async sd_9oXqYqb9h2MWBe71(bh) {
    try {
      const add_update_empInstance: add_update_emp =
        this.__page_injector__.get(add_update_emp);

      let outputVariables = await add_update_empInstance.add_edit_employee(
        this.page.add_employee_form.value
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_3flcIh2ljpiJ4ZET(bh);
      //appendnew_next_sd_9oXqYqb9h2MWBe71
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9oXqYqb9h2MWBe71');
    }
  }

  sd_3flcIh2ljpiJ4ZET(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(bh.local.result.message, 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_IGJ5v4fyidHyijnt(bh);
      //appendnew_next_sd_3flcIh2ljpiJ4ZET
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3flcIh2ljpiJ4ZET');
    }
  }

  sd_IGJ5v4fyidHyijnt(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.add_employee);

      //appendnew_next_sd_IGJ5v4fyidHyijnt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IGJ5v4fyidHyijnt');
    }
  }

  sd_0nNP1QCfmlInXbol(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.addemp);

      //appendnew_next_sd_0nNP1QCfmlInXbol
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0nNP1QCfmlInXbol');
    }
  }

  sd_GvbP8QzIhzSLZYHV(bh) {
    try {
      const page = this.page;
      let joining_date = new Date(page.sample.start_date);
      // let last_date = new Date(page.sample.end_date);

      console.log('sample', page.sample);

      page.add_employee_form.controls['employee_id'].setValue(
        page.sample.employee_id
      );
      page.add_employee_form.controls['first_name'].setValue(
        page.sample.employee_name.split(' ')[0]
      );
      page.add_employee_form.controls['last_name'].setValue(
        page.sample.employee_name.split(' ').at(-1)
      );
      page.add_employee_form.controls['start_date'].setValue(joining_date);
      // page.add_employee_form.controls['end_date'].setValue(last_date);
      page.add_employee_form.controls['reporting_managers'].setValue(
        page.sample?.reporting_manager
      );
      page.add_employee_form.controls['email'].setValue(page.sample.email);
      page.add_employee_form.controls['contact_no'].setValue(
        page.sample.contact_no
      );
      page.add_employee_form.controls['employee_type'].setValue(
        page.sample.employee_type_id
      );
      page.add_employee_form.controls['designation'].setValue(
        page.sample.designation_id
      );

      //appendnew_next_sd_GvbP8QzIhzSLZYHV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GvbP8QzIhzSLZYHV');
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
  //appendnew_flow_employee_detailsComponent_Catch
}
