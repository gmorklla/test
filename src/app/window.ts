export interface IWindow {
  id:number,
  height:number,
  width:number,
  name:string,
  controls:[{
    id:number,
    name:string,
    type:string,
    attributes:{
      id:number,
      cols:string,
      style:string
    },
    options: any[],
    tag:string
  }],
  designId:number,
  type:string
}

