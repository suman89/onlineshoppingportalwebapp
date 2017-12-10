
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '../model/store';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-store-search',
  templateUrl: '../stores/stores.component.html',
  styleUrls: ['./store-search.component.css']
})
export class StoreSearchComponent implements OnInit {

  stores: Store[] = [];

  constructor(private storeService: StoreService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    console.log("g");
    this.getStores();
  }

  getStores(): void {
    var storeType = this.route.snapshot.paramMap.get('storeType');
    this.storeService.getStoreByStoreType(storeType)
      .subscribe(stores => this.stores = stores);
  }

}
