import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-vistadetalle',
  templateUrl: './vistadetalle.component.html',
  styleUrls: ['./vistadetalle.component.css'],
})
export class VistadetalleComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  pictogram: any;
  id: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getPictogramById(this.id).subscribe((data) => {
      this.pictogram = data;
    });
  }
}
