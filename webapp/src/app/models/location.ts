export class Location {
  id: number;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  lat: number;
  lng: number;

  constructor(
    id: number,
    street: string,
    zipCode: string,
    city: string,
    country: string,
    lat: number,
    lng: number,
  ) {
    this.id = id;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
    this.country = country;
    this.lat = lat;
    this.lng = lng;
   }
}
