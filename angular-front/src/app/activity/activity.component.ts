import { Component } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {

  item?: Activity
  activities: Activity[] = [];
  planList: Activity[] = [];
  todoList: Activity[] = [];
  doneList: Activity[] = [];
  constructor(private activityService: ActivityService,) { }

  ngOnInit(): void {
    this.getActivities();
    this.getPlanList();
    this.getTodoList();
    this.getDoneList();
  }

  getActivities() {
    this.activityService.getActivities()
      .subscribe(activities => this.activities = activities);
  }

  getPlanList() {
    this.activityService.getByStatus("planning")
      .subscribe(planning => this.planList = planning);
  }
  getTodoList() {
    this.activityService.getByStatus("todo")
      .subscribe(todo => this.todoList = todo);
  }
  getDoneList() {
    this.activityService.getByStatus("done")
      .subscribe(done => this.doneList = done);
  }

  updateActivity() {
    if (this.item) {
      this.activityService.updateActivity(this.item).subscribe(() => { this.getActivities() })
    }
  }
  // updateStatus(status: string){
  //   if (this.item) {
  //     this.activityService.updateActivity({ status: status }).subscribe(() => { this.getActivities()})
  //   }
  // }
  drop(event: CdkDragDrop<Activity[]>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // this.activityService.updateActivity({ status: status }).subscribe(() => { this.getPlanList(), this.getTodoList(), this.getDoneList() })
      console.log("status")
    }
  }
}
