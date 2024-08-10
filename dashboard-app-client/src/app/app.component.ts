import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('api/test').subscribe((d) => {
      this.data = d;
    });
  }
}
