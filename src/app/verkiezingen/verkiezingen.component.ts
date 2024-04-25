import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Partij } from '../partij';


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

  partijen: Partij[] = [];

  ngOnInit()
  {
    this.http.get(this.url).subscribe(data => this.partijen = data as Partij[]);
  }

  toggle(p: Partij)
  {
    p.Selected = !p.Selected;
  }

  totaalZetels()
  {
    var sum = 0;

    for(var p of this.partijen)
    {
      sum += p.Zetels;
    }

    return sum;
  }

  totaalSelected()
  {
    var sum = 0;

    for(var p of this.partijen)
    {
      if (p.Selected)
        sum += p.Zetels;
    }

    return sum;
  }

  kleur()
  {
    if (this.totaalSelected() > this.totaalZetels() / 2)
      return 'green';
    else
      return 'red';
  }

}
