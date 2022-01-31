/* eslint-disable @typescript-eslint/naming-convention */
export interface Point{
  _id: string;
  id: number;
  latitud: number;
  longitud: number;
  titulo: string;
  descripcion: string;
  tipo?: any;
  sector_id: number;
  created_at: string;
  updated_at: string;
}
