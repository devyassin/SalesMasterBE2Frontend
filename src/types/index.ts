export interface Client {
  clientId: number;
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
  NOUVELLE = "NOUVELLE",
  ENCOURS = "ENCOURS",
  COMPLETEE = "COMPLETEE",
}

export interface Vente {
  venteId: number;
  dateVente: Date;
  clientName: string;
  statut: Status;
  total: number;
  totalProductTypes: number;
  produitQauntiteDaos: ProduitQauntite[];
}

export interface Facture {
  factureId: number;
  dateFacturation: Date;
  montantTotal: number;
  vente: Vente;
  pdf: string;
}

export interface User {
  email: string;
  motDePasse: string;
}

export interface CardDataStats {
  totalClients: number;
  totalVentes: number;
  totalUsers: number;
  totalProducts: number;
  totalFactures: number;
}

export interface VenteCountDataStats {
  venteNouvelleCount: number;
  venteEncoursCount: number;
  venteCompletedCount: number;
}

export interface StockStatusCountResponse {
  stockFaibleCount: number;
  stockMoyenCount: number;
  stockOptimalCount: number;
}
