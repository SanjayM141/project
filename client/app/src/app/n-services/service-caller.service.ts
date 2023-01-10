//append_imports_start

import * as sd_cSlFBTUiTj5sazJp from 'app/sd-services/active_or_deactive_employee'; //_splitter_
import * as sd_cWyj4TV2hjnyIJSw from 'app/sd-services/active_or_deactive_projects'; //_splitter_
import * as sd_Hc0qTKh9zmt6TrEm from 'app/sd-services/add_or_update_project'; //_splitter_
import * as sd_fC5enAPiMiCcXcjr from 'app/sd-services/add_update_emp'; //_splitter_
import * as sd_35TZRpoubNqfddNl from 'app/sd-services/client'; //_splitter_
import * as sd_y2b7ijfWzSqYLzKv from 'app/sd-services/dashbord'; //_splitter_
import * as sd_g1X98PAngpHzUT5b from 'app/sd-services/designations'; //_splitter_
import * as sd_4QKlAg4TRyFNXzEn from 'app/sd-services/designation_api'; //_splitter_
import * as sd_Im0ZaV3RMDKb0ciS from 'app/sd-services/employees_api'; //_splitter_
import * as sd_QNxCOa5ZMgTaoHtI from 'app/sd-services/employee_details'; //_splitter_
import * as sd_dFWmPvYRall5NhAO from 'app/sd-services/employee_type'; //_splitter_
import * as sd_7dHz0o3LrIPpklg3 from 'app/sd-services/emp_details_service'; //_splitter_
import * as sd_EHFBoAHQE5qcm1MD from 'app/sd-services/get_hr_info'; //_splitter_
import * as sd_nJ0lzHT8cpyN1tcM from 'app/sd-services/get_profile'; //_splitter_
import * as sd_zmuZl9ubfO2j26Ni from 'app/sd-services/get_project'; //_splitter_
import * as sd_RxBFNFN1m4sIAeA6 from 'app/sd-services/login'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_cSlFBTUiTj5sazJp: sd_cSlFBTUiTj5sazJp.active_or_deactive_employee,
    private sd_cWyj4TV2hjnyIJSw: sd_cWyj4TV2hjnyIJSw.active_or_deactive_projects,
    private sd_Hc0qTKh9zmt6TrEm: sd_Hc0qTKh9zmt6TrEm.add_or_update_project,
    private sd_fC5enAPiMiCcXcjr: sd_fC5enAPiMiCcXcjr.add_update_emp,
    private sd_35TZRpoubNqfddNl: sd_35TZRpoubNqfddNl.client,
    private sd_y2b7ijfWzSqYLzKv: sd_y2b7ijfWzSqYLzKv.dashbord,
    private sd_g1X98PAngpHzUT5b: sd_g1X98PAngpHzUT5b.designations,
    private sd_4QKlAg4TRyFNXzEn: sd_4QKlAg4TRyFNXzEn.designation_api,
    private sd_Im0ZaV3RMDKb0ciS: sd_Im0ZaV3RMDKb0ciS.employees_api,
    private sd_QNxCOa5ZMgTaoHtI: sd_QNxCOa5ZMgTaoHtI.employee_details,
    private sd_dFWmPvYRall5NhAO: sd_dFWmPvYRall5NhAO.employee_type,
    private sd_7dHz0o3LrIPpklg3: sd_7dHz0o3LrIPpklg3.emp_details_service,
    private sd_EHFBoAHQE5qcm1MD: sd_EHFBoAHQE5qcm1MD.get_hr_info,
    private sd_nJ0lzHT8cpyN1tcM: sd_nJ0lzHT8cpyN1tcM.get_profile,
    private sd_zmuZl9ubfO2j26Ni: sd_zmuZl9ubfO2j26Ni.get_project,
    private sd_RxBFNFN1m4sIAeA6: sd_RxBFNFN1m4sIAeA6.login
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
