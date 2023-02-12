import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import "@angular/compiler"
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Reader } from 'src/app/interfaces/reader';
import { ReadersService } from 'src/app/services/readers.service';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})

export class ReadersComponent implements OnInit, OnDestroy{

  public readers!: Reader[];

  displayedColumns: string[] = ['id', 'name', 'phone'];
  public parentMessage = 'message from parent';
  public message: any;
  public subscription!: Subscription;
  public id!: Number; 
  public sub : any;

  constructor(
    private readersService: ReadersService,
    private router: Router,
    private data: DataService,
    private route : ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.getAllReaders();
      }
  })
}

  public getAllReaders(): void {
    this.readersService.getReaders(this.id).subscribe((result) => {
      this.readers = result;
    });
  }

  
  public receiveMessage(message: any): void {
    console.log(message);
  }
    

  public logout() : void {
    this.data.changeMessage('Hello from Readers');
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  public goToBookProfile(id: any) : void {
    this.router.navigate(['/book', id]);
  }
  
  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}



