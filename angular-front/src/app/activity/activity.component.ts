import { Component } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{
  activities: Activity[] = [];
  item?: Activity 
  constructor(private activityService: ActivityService,){}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
    console.log("hello")
    this.activityService.getActivities()
    .subscribe(activities => this.activities = activities);
  }
}
