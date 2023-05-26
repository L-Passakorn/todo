import { Component } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  
  activities: Activity[] = [];
  item?: Activity
  planList: Activity[] = [];
  todoList: Activity[] = [];
  doneList: Activity[] = [];
  constructor(private activityService: ActivityService,) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }
  // getPlanList() {
  //   this.activityService.getActivities()
  //     .subscribe(activities => this.planList = activities);
  // }
  // getTodoList() {
  //   this.activityService.getActivities()
  //     .subscribe(activities => this.todoList = activities);
  // }
  // getDoneList() {
  //   this.activityService.getActivities()
  //     .subscribe(activities => this.doneList = activities);
  // }

  updateActivity() {
    if (this.item) {
      this.activityService.updateActivity(this.item._id, this.item)
    }
  }
}
