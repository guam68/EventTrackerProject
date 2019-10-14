import { CatchService } from './../../services/catch.service';
import { Component, OnInit } from '@angular/core';
import { Catch } from 'src/app/models/catch';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catch-list',
  templateUrl: './catch-list.component.html',
  styleUrls: ['./catch-list.component.css']
})
export class CatchListComponent implements OnInit {
  catches: Catch[] = [];

  constructor(private catchService: CatchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.refreshCatches();
  }

  refreshCatches() {
    this.catchService.index().subscribe(
      data => {
        console.log(data);

        this.catches = data;
      },

      err => console.error('Fetch index err: ' + err)
    );
  }

}
