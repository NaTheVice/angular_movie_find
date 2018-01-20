import { Pipe } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe {
transform(array: Array<any>, args: string): Array<any> {
  //console.log('huhu, die args: ' +args)
        if (typeof args[0] === "undefined") {
            return array;
        }


        array.sort((a: any, b: any) => {
            //console.log(a[args])
            let left    = Number(new Date(a[args]));
            let right   = Number(new Date(b[args]));
            //console.log('left: '+left)

            return right - left 
        });

        return array;
    }
}
