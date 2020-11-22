import { Film } from "./film.interface"

export interface FilmResponse{
    count: number;
    next: string;
    previous?: any;
    results: Film[];// El observable llama a esta propiedad
}