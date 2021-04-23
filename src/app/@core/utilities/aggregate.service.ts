import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AggregateService{

  private toArrayByProperty(array:any[], propertyName:string):any[] {
    return array.map(v=>{
      return v[propertyName]
    });
  }

  min(array:any[]):any{
    return array.reduce((a,b)=>((b || 0) > (a || 0)) ? a : (b), array[0]);
  }
  max(array:any[]):any{
    return array.reduce((a,b)=>((b || 0) < (a || 0)) ? a : (b), array[0]);
  }
  sum(array:any[]):any{
    return array.reduce((a, b) => a + (b || 0), 0);
  }
  avg(array:any[]):any{
    return array.reduce((a, b) => a + (b || 0), 0) / array.length;
  }

  minByProperty(array:any[],propertyName:string):any{
    return this.min(this.toArrayByProperty(array,propertyName));
  }
  maxByProperty(array:any[],propertyName:string):any{
    return this.max(this.toArrayByProperty(array,propertyName));
  }
  sumByProperty(array:any[],propertyName:string):any{
    return this.sum(this.toArrayByProperty(array,propertyName));
  }
  avgByProperty(array:any[],propertyName:string):any{
    return this.avg(this.toArrayByProperty(array,propertyName));
  }
}
