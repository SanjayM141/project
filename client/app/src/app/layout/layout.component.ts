import { Component } from '@angular/core';
import { NLocalStorageService, NTokenService, NHTTPLoaderService } from 'neutrinos-seed-services';
import { commonService } from 'app/services/common/common.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <n-snackbar></n-snackbar>`
})
export class LayoutComponent {
  constructor(private nLocalstorage: NLocalStorageService, private nTokenService: NTokenService, private httpLoaderService: NHTTPLoaderService, private common: commonService) { }
  ngOnInit() {
    if (this.nLocalstorage.getValue('accessToken')) {
      this.nTokenService.updateSessionStorage();
    }
    this.httpLoaderService._isHTTPRequestInProgress$.subscribe(res => {
      this.common.spinner = res;
    });

  }
}
