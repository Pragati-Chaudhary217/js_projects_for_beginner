let arr=[12,1,21,1425,32,23,34,54];

let temp;
Array.prototype.sorting=function(callback){
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if ((callback(arr[j],arr[j+1]))) {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }

        }
    }
}
arr.sorting((a,b)=>a>b)
console.log(arr)
