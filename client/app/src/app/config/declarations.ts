import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-emp_details_service
import { emp_details_service } from '../sd-services/emp_details_service';
//CORE_REFERENCE_IMPORT-employee_detComponent
import { employee_detComponent } from '../components/employee_det.component';
//CORE_REFERENCE_IMPORT-active_or_deactive_employee
import { active_or_deactive_employee } from '../sd-services/active_or_deactive_employee';
//CORE_REFERENCE_IMPORT-employee_type
import { employee_type } from '../sd-services/employee_type';
//CORE_REFERENCE_IMPORT-hr_contact_infoComponent
import { hr_contact_infoComponent } from '../components/config_client/hr_contact_info.component';
//CORE_REFERENCE_IMPORT-get_hr_info
import { get_hr_info } from '../sd-services/get_hr_info';
//CORE_REFERENCE_IMPORT-add_or_update_project
import { add_or_update_project } from '../sd-services/add_or_update_project';
//CORE_REFERENCE_IMPORT-login
import { login } from '../sd-services/login';
//CORE_REFERENCE_IMPORT-resusable_popupComponent
import { resusable_popupComponent } from '../components/config_client/resusable_popup.component';
//CORE_REFERENCE_IMPORT-client
import { client } from '../sd-services/client';
//CORE_REFERENCE_IMPORT-clientComponent
import { clientComponent } from '../components/config_client/client.component';
//CORE_REFERENCE_IMPORT-add_update_emp
import { add_update_emp } from '../sd-services/add_update_emp';
//CORE_REFERENCE_IMPORT-employee_details
import { employee_details } from '../sd-services/employee_details';
//CORE_REFERENCE_IMPORT-designation_api
import { designation_api } from '../sd-services/designation_api';
//CORE_REFERENCE_IMPORT-employees_api
import { employees_api } from '../sd-services/employees_api';
//CORE_REFERENCE_IMPORT-active_or_deactive_projects
import { active_or_deactive_projects } from '../sd-services/active_or_deactive_projects';
//CORE_REFERENCE_IMPORT-add_projectComponent
//CORE_REFERENCE_IMPORT-get_project
import { get_project } from '../sd-services/get_project';
//CORE_REFERENCE_IMPORT-get_profile
import { get_profile } from '../sd-services/get_profile';
//CORE_REFERENCE_IMPORT-authService
import { authService } from '../services/auth/auth.service';
//CORE_REFERENCE_IMPORT-employeesComponent
import { employeesComponent } from '../components/employees.component';
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/Login/login.component';
//CORE_REFERENCE_IMPORT-timesheet_summaryComponent
import { timesheet_summaryComponent } from '../components/timesheet_summary.component';
//CORE_REFERENCE_IMPORT-timesheetComponent
import { timesheetComponent } from '../components/timesheet.component';
//CORE_REFERENCE_IMPORT-employee_typeComponent
import { employee_typeComponent } from '../components/config_client/employee_type.component';
//CORE_REFERENCE_IMPORT-job_titleComponent
import { job_titleComponent } from '../components/config_client/job_title.component';
//CORE_REFERENCE_IMPORT-project_detailsComponent
import { project_detailsComponent } from '../components/config_client/project_details.component';
//CORE_REFERENCE_IMPORT-timesheet_statusComponent
import { timesheet_statusComponent } from '../components/timesheet_status.component';
//CORE_REFERENCE_IMPORT-employee_detailsComponent
import { employee_detailsComponent } from '../components/employee_details.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboard.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/base_layout/profile.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/base_layout/header.component';
//CORE_REFERENCE_IMPORT-navigation_menuComponent
import { navigation_menuComponent } from '../components/base_layout/navigation_menu.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/base_layout/home.component';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { employees_tempComponent } from 'app/components/employees_temp.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employee_detComponent
  employee_detComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-hr_contact_infoComponent
  hr_contact_infoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-resusable_popupComponent
  resusable_popupComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-clientComponent
  clientComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_projectComponent
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employeesComponent
  employeesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-timesheet_summaryComponent
  timesheet_summaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-timesheetComponent
  timesheetComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employee_typeComponent
  employee_typeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-job_titleComponent
  job_titleComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-project_detailsComponent
  project_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-timesheet_statusComponent
  timesheet_statusComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employee_detailsComponent
  employee_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
  profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
  headerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navigation_menuComponent
  navigation_menuComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  loginComponent,
  employees_tempComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-emp_details_service
emp_details_service,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-active_or_deactive_employee
  active_or_deactive_employee,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-employee_type
  employee_type,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-get_hr_info
  get_hr_info,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-active_or_deactive_projects
  active_or_deactive_projects,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-add_or_update_project
  add_or_update_project,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-login
  login,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-client
  client,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-add_update_emp
  add_update_emp,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-employee_details
  employee_details,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-designation_api
  designation_api,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-employees_api
  employees_api,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-active_or_deactive_projects
  active_or_deactive_projects,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-get_project
  get_project,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-get_profile
  get_profile,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-authService
  authService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
  commonService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'login', component: loginComponent },
  {
    path: 'home',
    component: homeComponent,
    canActivate: [authService],
    children: [
      { path: 'profile', component: profileComponent },
      { path: 'employee', component: employeesComponent },
      { path: 'project_details', component: project_detailsComponent },
      { path: 'dashbord', component: dashboardComponent },
      { path: 'designations', component: job_titleComponent },
      { path: 'hr_contact', component: hr_contact_infoComponent },
      { path: 'client', component: clientComponent },
      { path: 'employee_type', component: employee_typeComponent },
      { path: 'todos', component: employees_tempComponent },
      { path: 'employee_det', component: employee_detComponent },
    ],
  },
  { path: 'todos', component: employees_tempComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
