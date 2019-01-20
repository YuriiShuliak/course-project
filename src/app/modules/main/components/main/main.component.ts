import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface ICity {
  name: string;
  id: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value = '';
  myControl = new FormControl();
  options: ICity[] = [{
    name: 'Kiev',
    id: 703448
  },
  {
    name: 'Lviv',
    id: 702550
  },
  {
    name: 'Odessa',
    id: 4166787
  },
  {
    name: 'Kharkiv',
    id: 706483
  },
  {
    name: 'Kherson',
    id: 706448
  }];
  filteredOptions: Observable<ICity[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith('1'),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): ICity[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
