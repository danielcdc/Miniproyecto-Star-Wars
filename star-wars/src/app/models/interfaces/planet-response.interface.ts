import { Planet } from "./planet.interface"

export interface PlanetResponse{
    count: number;
    next: string;
    previous?: any;
    results: Planet[];// El observable llama a esta propiedad
}