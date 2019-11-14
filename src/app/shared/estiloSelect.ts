export interface EstiloSelect {
  id: number;
  name: string;
  type: string;
  attributes: {
    id: number;
    cols: string;
    style: string;
  };
  options: [];
  tag: string;
}
