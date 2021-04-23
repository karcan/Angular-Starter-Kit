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

  min(array:any[]):number{
    return array.reduce((a,b)=>((b || 0) > (a || 0)) ? a : (b), array[0]);
  }
  max(array:any[]):number{
    return array.reduce((a,b)=>((b || 0) < (a || 0)) ? a : (b), array[0]);
  }
  sum(array:any[]):number{
    return array.reduce((a, b) => a + (b || 0), 0);
  }
  avg(array:any[]):number{
    return array.reduce((a, b) => a + (b || 0), 0) / array.length;
  }

  /**
     * @param arrayOfObjects @example [{number1: 5, number2: 10},{number1: 10, number2: 25}]
     * @param propertyName @example 'number1'
     * @returns number
   */
  minByProperty(arrayOfObjects:any[],propertyName:string):number{
    return this.min(this.toArrayByProperty(arrayOfObjects,propertyName));
  }
  maxByProperty(arrayOfObjects:any[],propertyName:string):number{
    return this.max(this.toArrayByProperty(arrayOfObjects,propertyName));
  }
  sumByProperty(arrayOfObjects:any[],propertyName:string):number{
    return this.sum(this.toArrayByProperty(arrayOfObjects,propertyName));
  }
  avgByProperty(arrayOfObjects:any[],propertyName:string):number{
    return this.avg(this.toArrayByProperty(arrayOfObjects,propertyName));
  }
}
