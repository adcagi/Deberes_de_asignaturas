// average.ts
export default function avg(args : number[]){
   let sum = 0
   for(let value of args){
       sum +=value
   }
   return sum/args.length
}
