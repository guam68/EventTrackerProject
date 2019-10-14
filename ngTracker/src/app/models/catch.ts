export class Catch {
  id: number;
  length: number;
  weight: number;
  date: Date;
  technique: string;
  lat: number;
  longitude: number;

  constructor(id?: number, length?: number, weight?: number, date?: Date, technique?: string,
              lat?: number, longitude?: number) {
    this.id = id;
    this.length = length;
    this.weight = weight;
    this.date = date;
    this.technique = technique;
    this.lat = lat;
    this.longitude = longitude;
  }
}
