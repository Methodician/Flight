import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@app/animations/router.animations';
import { MediaQueryService } from '@app/services/media-query.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['../../shared/page-styles.css', './apps.component.css'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})
export class AppsComponent implements OnInit {

  deviceGroup = "desktop";
  private bimMapSlides: Array<any> = [];
  private bimSatelliteSlides: Array<any> = [];
  private cwHomeSlides: Array<any> = [];
  private cwLockSlides: Array<any> = [];
  private cwDetailSlides: Array<any> = [];
  private cwMaintenanceSlides: Array<any> = [];
  private gssSlides: Array<any> = [];

  constructor(private querySvc: MediaQueryService) { }

  ngOnInit() {
    this.querySvc.deviceGroup.subscribe(device => this.deviceGroup = device);
    this.addSlides();
  }

  panelChanged(panel) {
    console.log(panel);
  }
  openChange($e, group) {
    console.log($e);
    console.log(group);
  }

  isOpen(group) {
    console.log(group);
    return true;
  }

  addSlides() {
    this.bimMapSlides.push({
      image: '../../assets/images/BIM/BIM_v1_welcome_and_explanation.jpg',
      text: 'Layout and explanations',
      alt: 'Layout and explanations for BIM Earth main page'
    });

    this.bimMapSlides.push({
      image: '../../assets/images/BIM/BIM_v1_login.jpg',
      text: 'Login',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    
    this.bimMapSlides.push({
      image: '../../assets/images/BIM/BIM_v1_filters.jpg',
      text: 'Map layer filters',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    this.bimMapSlides.push({
      image: '../../assets/images/BIM/BIM_v1_create_boundary.jpg',
      text: 'Creating a new boundary',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    this.bimSatelliteSlides.push({
      image: '../../assets/images/BIM/BIM_v1_satellite_boundaries.jpg',
      text: 'Various boundaries in wilderness',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    this.bimSatelliteSlides.push({
      image: '../../assets/images/BIM/BIM_v1_create_content.jpg',
      text: 'Adding new content to a boundary',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    this.bimSatelliteSlides.push({
      image: '../../assets/images/BIM/BIM_v1_boundary_selected.jpg',
      text: 'Content available for selected boundary',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    this.bimSatelliteSlides.push({
      image: '../../assets/images/BIM/BIM_v1_content_example.jpg',
      text: 'Content details for selected boundary',
      alt: 'Layout and explanations for BIM Earth main page'
    });
    /*this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_menu_open.png',
      text: 'menu open',
      alt: 'community warehouse example with open menu'
    });*/
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_menu_collapsed_clean.png',
      text: 'menu collapsed',
      alt: 'community warehouse example with collapsed menu'
    });
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_completed_filter_clean.png',
      text: 'completed filter active',
      alt: 'community warehouse example completed filter active'
    });
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_incomplete_filter_clean.png',
      text: 'completed filter off',
      alt: 'community warehouse example completed filter inactive'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_waiver_clean.png',
      text: 'locked area waiver',
      alt: 'community warehouse example locked area waiver'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_items_clean.png',
      text: 'lock area items',
      alt: 'community warehouse example lock area items'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_summary_clean.png',
      text: 'lock area summary',
      alt: 'community warehouse example lock area summary'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_survey_clean.png',
      text: 'lock area survey',
      alt: 'community warehouse example lock area survey'
    });
    this.cwDetailSlides.push({
      image: '../../assets/images/ODA/cw_req_details_clean.png',
      text: 'request details',
      alt: 'community warehouse example request details'
    });
    this.cwDetailSlides.push({
      image: '../../assets/images/ODA/cw_req_items_clean.png',
      text: 'request items',
      alt: 'community warehouse example request items'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_agencies_clean.png',
      text: 'agencies',
      alt: 'community warehouse example case managers'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_case_managers_clean.png',
      text: 'case managers',
      alt: 'community warehouse example case managers'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_case_manager_edit_clean.png',
      text: 'case managers edit',
      alt: 'community warehouse example case managers edit'
    });
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_filters_open_clean.png',
      text: 'filters open',
      alt: 'oil camps attendent app filters open'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_filters_closed_clean.png',
      text: 'filters closed',
      alt: 'oil camps attendent app filters closed'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_tasks_overview_clean.png',
      text: 'tasks overview',
      alt: 'oil camps attendent app tasks overview'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_tasks_modal_clean.png',
      text: 'tasks modal',
      alt: 'oil camps attendent app tasks modal'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_notes_modal_clean.png',
      text: 'notes modal',
      alt: 'oil camps attendent app notes modal'
    })
  }

}
