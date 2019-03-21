export class Location {
  id: number;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  lng: number;
  lat: number;

  constructor(
    id: number,
    street: string,
    zipCode: string,
    city: string,
    country: string,
    lng: number,
    lat: number,
  ) {
    this.id = id;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
    this.country = country;
    this.lng = lng;
    this.lat = lat;
   }
}
