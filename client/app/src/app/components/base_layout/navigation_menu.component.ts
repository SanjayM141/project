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
//append_imports_end

@Component({
  selector: 'bh-navigation_menu',
  templateUrl: './navigation_menu.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navigation_menuComponent {
  @Input('showlable')
  public showlable: any = true;
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
      this.sd_MXCErC1Ar6NgWHg6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_MXCErC1Ar6NgWHg6(bh) {
    try {
      bh = this.sd_cnBy4xbfSp2BiOAl(bh);
      //appendnew_next_sd_MXCErC1Ar6NgWHg6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MXCErC1Ar6NgWHg6');
    }
  }

  //appendnew_flow_navigation_menuComponent_start

  sd_cnBy4xbfSp2BiOAl(bh) {
    try {
      bh = this.sd_dPUTta6FdGb0H0CO(bh);
      //appendnew_next_sd_cnBy4xbfSp2BiOAl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cnBy4xbfSp2BiOAl');
    }
  }

  sd_dPUTta6FdGb0H0CO(bh) {
    try {
      bh.local.info = JSON.parse(sessionStorage.getItem('info'));
      bh = this.sd_AxdFFtNPwyBxjlTS(bh);
      //appendnew_next_sd_dPUTta6FdGb0H0CO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPUTta6FdGb0H0CO');
    }
  }

  sd_AxdFFtNPwyBxjlTS(bh) {
    try {
      const page = this.page;
      page.menu = [
        {
          displayName: 'Dashboard',
          iconName: 'desktop_windows',
          route: 'dashbord',
          designation: 'all',
        },
        {
          displayName: 'Employees',
          iconName: 'how_to_reg',
          route: 'employee',
          designation: 'admin',
        },
        {
          displayName: 'HR Contact Info',
          iconName: 'ballot',
          route: 'entradasGADE',
          designation: 'employee',
        },
        // {
        //     displayName: 'Timesheet',
        //     iconName: 'ballot',
        //     route: 'todos',
        //     designation: 'employee',
        // },
        {
          displayName: 'Timesheet Summary',
          iconName: 'ballot',
          route: 'entradasGADE',
          designation: 'employee',
        },
        {
          displayName: 'Timesheet Status',
          iconName: 'ballot',
          route: 'timesheet-status',
          designation: 'admin',
        },
        {
          displayName: 'Client',
          iconName: 'groups',
          route: 'client',
          designation: 'admin',
        },
        {
          displayName: 'Projects',
          iconName: 'description',
          route: 'project_details',
          designation: 'admin',
        },
        {
          displayName: 'Job Title',
          iconName: 'assignment_ind',
          route: '/todos',
          designation: 'admin',
        },
        {
          displayName: 'Employee type',
          iconName: 'format_list_bulleted',
          route: 'employee_type',
          designation: 'admin',
        },
        {
          displayName: 'HR Contact Info',
          iconName: 'contacts',
          route: 'hr_contact',
          designation: 'admin',
        },
        {
          displayName: 'Employee Details',
          iconName: 'how_to_reg',
          route: 'employee_det',
          designation: 'admin',
        },
      ];

      page.designation = bh.local.info.designation == 1 ? 'admin' : 'employee';
      //appendnew_next_sd_AxdFFtNPwyBxjlTS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AxdFFtNPwyBxjlTS');
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
  //appendnew_flow_navigation_menuComponent_Catch
}
