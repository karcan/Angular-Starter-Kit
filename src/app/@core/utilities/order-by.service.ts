import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class OrderByService{

  /**
   *
   * @param array @example [{foo:'value1',bar:100},{foo:'value2',bar:50}]
   * @param keys {foo: 'asc', bar: 'desc'}
   * @returns ordered array
   */
  OrderBy(array:any,keys:any):any{

    var obLen = function(obj:any) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };

    var obIx = function(obj:any, ix:any) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (size == ix)
                    return key;
                size++;
            }
        }
        return false;
    };

    var keySort = function(a:any, b:any, d:any) {
        d = d !== null ? d : 1;
        if (a == b)
            return 0;
        return a > b ? 1 * d : -1 * d;
    };

    var KL = obLen(keys);

    if (!KL)
        return array.sort(keySort);

    for ( var k in keys) {
        keys[k] =
                keys[k] == 'desc' || keys[k] == -1  ? -1
              : (keys[k] == 'skip' || keys[k] === 0 ? 0
              : 1);
    }

    array.sort(function(a:any, b:any) {
        var sorted = 0, ix = 0;

        while (sorted === 0 && ix < KL) {
            var k = obIx(keys, ix);
            if (k) {
                var dir = keys[k];
                sorted = keySort(a[k], b[k], dir);
                ix++;
            }
        }
        return sorted;
    });

    return array;

  }
}
