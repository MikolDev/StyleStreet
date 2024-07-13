import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/';

  constructor() { }
}
