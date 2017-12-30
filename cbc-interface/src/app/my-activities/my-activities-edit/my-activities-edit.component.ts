import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Activity } from '../../shared/activity.model';
import { MyActivitiesService } from '../my-activities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-activities-edit',
  templateUrl: './my-activities-edit.component.html',
  styleUrls: ['./my-activities-edit.component.css']
})
export class MyActivitiesEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Activity;

  constructor(private myActivitiesService: MyActivitiesService) { }

  ngOnInit() {
    this.subscription = this.myActivitiesService.startedEditing
      .subscribe(
        (index:number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.myActivitiesService.getActivity(index);
          this.slForm.setValue({
            caseName: this.editedItem.caseName,
            activityType: this.editedItem.activityType,
            expectedDuration: this.editedItem.expectedDuration,
            address: this.editedItem.address,
            city: this.editedItem.city,
            state: this.editedItem.state,
            zipCode: this.editedItem.zipCode
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
    const value = form.value;

    const newActivity = new Activity(
      value.caseName,
      value.activityType,
      value.expectedDuration,
      value.address,
      value.city,
      value.state,
      value.zipCode
    );
    if (this.editMode){
      this.myActivitiesService.updateActivity(this.editedItemIndex, newActivity);
    } else {
      this.myActivitiesService.addActivity(newActivity);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.myActivitiesService.deleteActivity(this.editedItemIndex);
    this.onClear();
  }

}

