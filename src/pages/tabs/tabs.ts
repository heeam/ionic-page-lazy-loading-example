import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

@IonicPage({
	segment: 'tabs'
})
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1Root: any = 'PostsPage';
	tab2Root: any = 'CommentsPage';
	tab3Root: any = 'AlbumsPage';
	tab4Root: any = 'PhotosPage';
	tab5Root: any = 'TodosPage';
	tab6Root: any = 'UsersPage';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}
