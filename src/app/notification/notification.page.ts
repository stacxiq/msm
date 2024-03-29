import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  
  notiList: Observable<any[]>;
  notiData: any;
  constructor(private navCtrl: NavController,
    private firestoreService: FirebaseService,
    private network : NetworkService
    ) { }

    ngOnInit() {
      this.network.getCurrentNetworkStatus();
      this.notiList = this.firestoreService.getFirestoreData('notifyList');
    }
    ngAfterViewInit() {
      this.notiList.subscribe(data => {
        this.notiData = data;
        console.log(data);
      });
    }
  gotohome()
  {
      this.navCtrl.navigateForward('/home');
  }

}
