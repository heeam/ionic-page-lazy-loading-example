import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.interface';

import { SystemProvider } from '../../providers/system/system';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	// name: 'users',
	segment: 'users'
})
@Component({
	selector: 'page-users',
	templateUrl: 'users.html',
})
export class UsersPage {

	items: Observable<Array<User>>;

	constructor(
		public system: SystemProvider,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.getItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UsersPage');
	}

	getItems() {
		this.items = this.system.getUsers();
	}

	navigateToDetail(id: number) {
		this.navCtrl.push('UserDetailPage', { id: id });
	}

}
