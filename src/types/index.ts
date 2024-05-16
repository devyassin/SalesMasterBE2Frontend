export interface Client {
  nom: string;
  adresse: string;
  email: string;
  telephone: string;
}

export interface Produit {
  produitId:number;
  nom: string;
  description: string;
  prix: number;
  quantiteEnStock: number;
  image:string;
}
