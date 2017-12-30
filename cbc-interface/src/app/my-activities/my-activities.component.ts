import { Component, OnInit } from '@angular/core';

import { Activity } from '../shared/activity.model';
import { MyActivitiesService } from './my-activities.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {
  activities: Activity[];

  constructor(private myActivitiesService: MyActivitiesService) { }

  ngOnInit() {
    this.activities = this.myActivitiesService.getActivities()
    this.myActivitiesService.activitiesChanged.subscribe(
      (activities: Activity[]) => {
        this.activities = activities;
      }
    );
  }

  onEditItem(index: number){
    this.myActivitiesService.startedEditing.next(index);
    
  }
}