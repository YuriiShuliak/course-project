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
  },
  {
    name: 'Luhansk',
    id: 702658,
    isFav: false
  },
  {
    name: 'Donetsk',
    id: 709717,
    isFav: false
  },
  {
    name: 'Zaporizhzhya',
    id: 687700,
    isFav: false
  },
  {
    name: 'Dnipropetrovsk',
    id: 709930,
    isFav: false
  },
  {
    name: 'Poltava',
    id: 696643,
    isFav: false
  },
  {
    name: 'Sumy',
    id: 692194,
    isFav: false
  },
  {
    name: 'Kremenchuk',
    id: 704147,
    isFav: false
  },
  {
    name: 'Mykolayiv',
    id: 700569,
    isFav: false
  },
  {
    name: 'Simferopol',
    id: 693805,
    isFav: false
  },
  {
    name: 'Kryvyy Rih',
    id: 703845,
    isFav: false
  },
  {
    name: 'Cherkasy',
    id: 710791,
    isFav: false
  },
  {
    name: 'Chernihiv',
    id: 710735,
    isFav: false
  },
  {
    name: 'Zhytomyr',
    id: 686967,
    isFav: false
  },
  {
    name: 'Vinnytsya',
    id: 689558,
    isFav: false
  },
  {
    name: 'Khmelnytskyy',
    id: 706369,
    isFav: false
  },
  {
    name: 'Chernivtsi',
    id: 710719,
    isFav: false
  },
  {
    name: 'Rivne',
    id: 7046809,
    isFav: false
  },
  {
    name: 'Lutsk',
    id: 702569,
    isFav: false
  },
  {
    name: 'Ternopil',
    id: 691650,
    isFav: false
  },
  {
    name: 'Uzhhorod',
    id: 690548,
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