import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-verkiezingen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verkiezingen.component.html',
  styleUrl: './verkiezingen.component.css'
})
export class VerkiezingenComponent {

  url = 'https://xanderwemmers.nl/api/verkiezingen';

  // Angular gebruikt geen axios maar Angular heeft zijn eigen HttpClient
  http = inject(HttpClient);

  partijen: any = [];

  ngOnInit()
  {
    this.http.get(this.url).subscribe(data => this.partijen = data);
  }

}
