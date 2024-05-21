export interface Client {
  nom: string;
  adresse: string;
  email: string;
  telephone: string;
}

export interface Produit {
  produitId: number;
  nom: string;
  description: string;
  prix: number;
  quantiteEnStock: number;
  image: string;
}

export interface ProduitQauntite {
  produit: Produit;
  quantite: number;
}

export enum Status {
  NOUVELLE,
  ENCOURS,
  COMPLETEE,
}
export interface Vente {
  dateVente: Date;
  clientName: string;
  statut: Status;
  total: number;
  totalProductTypes: number;
  // produitQauntiteDaos: ProduitQauntite[];
}
