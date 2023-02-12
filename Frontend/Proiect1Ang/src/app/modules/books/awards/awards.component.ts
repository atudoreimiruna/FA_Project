import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Award } from 'src/app/interfaces/award';
import { Subscription } from 'rxjs';
import { AwardsService } from 'src/app/services/awards.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit , OnDestroy{

  public awards!: Award[];
  
  displayedColumns: string[] = ['id', 'name', 'contest', 'data'];
  public parentMessage = 'message from parent';
  public message: any;
  public subscription!: Subscription;
  public id!: Number; 
  public sub : any;
  

  constructor(
    private router: Router,
    private data: DataService,
    private route : ActivatedRoute,
    private awardsService : AwardsService,
  ) { }


  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.getAllAwards();
      }
  })
}

  public getAllAwards(): void {
    this.awardsService.getAwards(this.id).subscribe((result ) => {
      this.awards = result;
    });
  }
  
  public receiveMessage(message: any): void {
    console.log(message);
  }
    
  public goToBookProfile(id: any) : void {
    this.router.navigate(['/book', id]);
  }

    public logout() : void {
    this.data.changeMessage('Hello from Readers');
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
    if(this.sub)
      this.sub.unsubscribe();
  }

}


