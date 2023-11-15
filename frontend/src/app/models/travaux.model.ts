import { Gare } from "./gare.model";

export class Travaux {
    id?: any;
    demande_debut?: string;
    demande_fin?: string;
    fin_reel?: string;
    heure_debut?: string;
    heure_fin?: string;
    parcours?: string;
    type?: string;
    date_creation?: string;
    canton?: string;
    regime?: string;
    etat?: string;
    commentaire?: string;
    gare?: Gare;
}
