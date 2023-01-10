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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { commonService } from '../../services/common/common.service'; //_splitter_
import { login } from 'app/sd-services/login'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_PBtRfE5uX5wehbJr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_PBtRfE5uX5wehbJr(bh) {
    try {
      bh = this.sd_Tb1imGa4qCp7YZ1E(bh);
      //appendnew_next_sd_PBtRfE5uX5wehbJr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PBtRfE5uX5wehbJr');
    }
  }

  loginUser(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bNgFOSklfonPSuOx(bh);
      //appendnew_next_loginUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Ojm88ewAJIo4cOA');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_Tb1imGa4qCp7YZ1E(bh) {
    try {
      bh = this.sd_yAFDCBgj6RkS8R0a(bh);
      //appendnew_next_sd_Tb1imGa4qCp7YZ1E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tb1imGa4qCp7YZ1E');
    }
  }

  sd_yAFDCBgj6RkS8R0a(bh) {
    try {
      bh = this.sd_nkrw5uazfJdmx6dK(bh);
      //appendnew_next_sd_yAFDCBgj6RkS8R0a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yAFDCBgj6RkS8R0a');
    }
  }

  sd_nkrw5uazfJdmx6dK(bh) {
    try {
      this.page.commonservice = this.__page_injector__.get(commonService);
      bh = this.sd_zktIDGXDTtTdpVbZ(bh);
      //appendnew_next_sd_nkrw5uazfJdmx6dK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nkrw5uazfJdmx6dK');
    }
  }

  sd_zktIDGXDTtTdpVbZ(bh) {
    try {
      const page = this.page;
      page.loginform = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });
      //appendnew_next_sd_zktIDGXDTtTdpVbZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zktIDGXDTtTdpVbZ');
    }
  }

  async sd_bNgFOSklfonPSuOx(bh) {
    try {
      const loginInstance: login = this.__page_injector__.get(login);

      let outputVariables = await loginInstance.login_api(
        this.page.loginform.value,
        undefined
      );
      bh.local.loginresponse = outputVariables.input.loginresponse;

      bh = this.sd_6b8obnhe72SvZn7P(bh);
      //appendnew_next_sd_bNgFOSklfonPSuOx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bNgFOSklfonPSuOx');
    }
  }

  async sd_6b8obnhe72SvZn7P(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.local.loginresponse.message,
          'Invalid Username or Password ',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_cqDCb8pDnB76mCSi(bh);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['eq'](
          bh.local.loginresponse.message,
          'Deactivated user login',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RM41TU79lEK8kZuE(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hbXbfe4lRQbnWKa5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6b8obnhe72SvZn7P');
    }
  }

  sd_cqDCb8pDnB76mCSi(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Invalid Username or Password', 'Ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_cqDCb8pDnB76mCSi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cqDCb8pDnB76mCSi');
    }
  }

  sd_RM41TU79lEK8kZuE(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Deactivated User', 'Ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_RM41TU79lEK8kZuE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RM41TU79lEK8kZuE');
    }
  }

  sd_hbXbfe4lRQbnWKa5(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Login Successful', 'Ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_rL2lMnvsSJpN3pQq(bh);
      //appendnew_next_sd_hbXbfe4lRQbnWKa5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hbXbfe4lRQbnWKa5');
    }
  }

  sd_rL2lMnvsSJpN3pQq(bh) {
    try {
      const page = this.page;
      page.commonservice.validUserToken = bh.local.loginresponse.response.token;
      bh.local.info = {
        loggedIn: true,
        designation: bh.local.loginresponse.response.designation_id,
        validUserToken: bh.local.loginresponse.response.token,
      };
      bh = this.sd_yTKRXf3Zip4IvjjC(bh);
      //appendnew_next_sd_rL2lMnvsSJpN3pQq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rL2lMnvsSJpN3pQq');
    }
  }

  sd_yTKRXf3Zip4IvjjC(bh) {
    try {
      sessionStorage.setItem('info', JSON.stringify(bh.local.info));
      bh = this.sd_lw2JQ1UZBqAr0hxE(bh);
      //appendnew_next_sd_yTKRXf3Zip4IvjjC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yTKRXf3Zip4IvjjC');
    }
  }

  async sd_lw2JQ1UZBqAr0hxE(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/dashbord');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_lw2JQ1UZBqAr0hxE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lw2JQ1UZBqAr0hxE');
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
  //appendnew_flow_loginComponent_Catch
}
