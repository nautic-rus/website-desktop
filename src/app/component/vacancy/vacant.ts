export class Vacant {
  name: string;
  responsibilities: string[];
  requirements: string[];
  conditions: string[];
  salary: string;
  experience: string;
  office: string;
  metro: string;



  img: string;
  thumb: string;
  video: string;
  // mainProps = [];
  props = [];
  subDescription1 = '';
  subDescription2 = '';
  subDetails = [];
  fishTypes = '';
  recycles = '';
  indexPath = 0;
  constructor(name: string) {
    this.name = name;
  }

  getNameUpper(): string{
    return this.name.toUpperCase();
  }

  getDescNameUpper(): string{
    return this.name.toUpperCase();
  }
}
