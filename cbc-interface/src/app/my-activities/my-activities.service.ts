import { EventEmitter } from '@angular/core';

import { Activity } from '../shared/activity.model';
import { Subject } from 'rxjs/Subject';

export class MyActivitiesService {
  activitiesChanged = new EventEmitter<Activity[]>();
  startedEditing = new Subject<number>();
  private activities: Activity[] =  [
    new Activity(
      'Case1', 
      'Visit', 
      25, 
      '123 Wayne Street', 
      'Birdville', 
      'VA',
      '28762'),
    new Activity(
      'Case2', 
      'Court Date', 
      120, 
      '345 Court Rd', 
      'Woof Town', 
      'VA',
      '28763')
  ];

  getActivities() {
    return this.activities.slice();
  }

  getActivity(index: number){
    return this.activities[index];
  }

  addActivity(activity: Activity){
    this.activities.push(activity);
    this.activitiesChanged.emit(this.activities.slice())
  }

  updateActivity(index: number, newActivity: Activity){
    this.activities[index] = newActivity;
    this.activitiesChanged.next(this.activities.slice());
  }

  addActivities(activities: Activity[]){
    this.activities.push(...activities);
    this.activitiesChanged.emit(this.activities.slice());
  }

  deleteActivity(index: number){
    this.activities.splice(index,1);
    this.activitiesChanged.next(this.activities.slice());
  }

}
