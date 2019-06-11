import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private key = "a702851b098e22c0836738d9a18c2b28";
  private apiURL = "https://www.food2fork.com/api/search?key=";
  page: number =1;
  searchValue: string;
  constructor(private httpClient: HttpClient) { }

  getRecipe(searchValue){
    //onsole.log(this.apiURL+this.key+"&q="+searchValue);
    this.searchValue = searchValue;
    return this.httpClient.get(this.apiURL+this.key+"&q="+this.searchValue+"&page="+this.page);
  }

  changepage(page) {
    this.page = page;
    return this.httpClient.get(this.apiURL+this.key+"&q="+this.searchValue+"&page="+this.page); 
  }
}
