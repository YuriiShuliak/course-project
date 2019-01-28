import { ICity } from './weather.model';

export class CityList {
  cityList: ICity[] = [{
    name: 'Kiev',
    id: 703448,
    isFav: false
  },
  {
    name: 'Lviv',
    id: 702550,
    isFav: false
  },
  {
    name: 'Odessa',
    id: 698740,
    isFav: false
  },
  {
    name: 'Kharkiv',
    id: 706483,
    isFav: false
  },
  {
    name: 'Kherson',
    id: 706448,
    isFav: false
  },
  {
    name: 'Ivano-Frankivsk',
    id: 707471,
    isFav: false
  }];
}
export class WindDir {
  windDirs = [{ name: 'n', deg: 0 }, { name: 'ne', deg: 45 }, { name: 'e', deg: 90 },
  { name: 'se', deg: 135 }, { name: 's', deg: 180 }, { name: 'sw', deg: 225 },
  { name: 'w', deg: 270 }, { name: 'nw', deg: 315 }, { name: 'n', deg: 360 }];

  windDirection(deg: number): string {
    let dir: string = this.windDirs[0].name;
    let min: number = Math.abs(deg - this.windDirs[0].deg);
    this.windDirs.forEach(i => {
      if (Math.abs(deg - i.deg) < min) {
        dir = i.name;
        min = Math.abs(deg - i.deg);
      }
    });
    return 'wi-from-' + dir;
  }
}