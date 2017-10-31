import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Photo } from '../../models/photo.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	// name: 'photos',
	segment: 'photos'
})
@Component({
	selector: 'page-photos',
	templateUrl: 'photos.html',
})
export class PhotosPage {

	items: Observable<Array<Photo>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PhotosPage');
	}

	getItems() {
		this.items = this.system.getPhotos();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push('PhotoDetailPage', { id: id });
	}

}
