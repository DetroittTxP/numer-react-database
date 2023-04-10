

const Linearspline=(points,x)=>{
     
    let index = 0 ;
    while( index < points.length - 1 && points[index+1].x < x){
        index++;
    }
    let fx1 = points[index+1].y;
    let fx2 = points[index].y;
    let x1 =points[index].x;
    let x2 = points[index+1].x;

    let m2 = (fx2 - fx1) / (x2-x1);
    let fx = fx1 + m2 *  (x-x1);
    return fx;
}

// let points = [
//     {x:2,y:9.5},
//     {x:4,y:8.0},
//     {x:6,y:10.5},
//     {x:8,y:39.5},
//     {x:10,y:72.5}
// ]

// let x = 7;

// console.log(Linearspline(points,x));