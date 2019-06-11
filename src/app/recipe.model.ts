export class Recipe {

    publisher: string;
    f2f_url: string;
    title: string;
    source_url: string;
    recipe_id: number;
    image_url: string;
    social_rank: number;
    publisher_url: string; 

    constructor(publisher: string,f2f_url: string, title: string,source_url: string, 
        recipe_id: number, image_url: string, social_rank: number, publisher_url: string) {
            this.publisher= publisher;
            this.f2f_url= f2f_url;
            this.title=title;
            this.source_url=source_url;
            this.recipe_id=recipe_id;
            this.image_url=image_url;
            this.social_rank=social_rank;
            this.publisher_url=publisher_url;
        }
}