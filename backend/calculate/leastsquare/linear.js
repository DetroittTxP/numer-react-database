const { lusolve } = require('mathjs');

const Leastlinear = (points,x)=>{
    let sumX = 0,sumXX = 0,sumY = 0,sumXY = 0;
    let n = points.length;

    for(let i = 0 ;i<points.length;i++){
        sumX+= points[i].x
        sumXX+=  points[i].x * points[i].x
        sumY += points[i].fx
        sumXY += points[i].x * points[i].fx
    }

    let m = [
        [n,sumX],
        [sumX,sumXX]
    ]
    let mans = [sumY,sumXY];
    
    let ansmatrix = lusolve(m,mans);
    
    let fx = ansmatrix[0][0] + (ansmatrix[1][0] * x)
    return fx;
}

const DataLinearRegression=(points,x)=>{
    let min = points[0].x;
    let max = points[points.length-1].x;
    let gap = (max-min) / 100;
    let datasource = [];

    for(let i = min ; i<=(gap+max) ;i+= gap){
        datasource.push({
             x:i,
             y:Leastlinear(points,i)
        })
    }

    if(!datasource.find(e => e.x === x)){
         datasource.push({
            x:x,
            y:Leastlinear(points,x)
         })

        datasource.sort((a,b) => a.x-b.x);  
    }

    datasource.forEach((e)=> console.log(e))

    return datasource;
}

let points = [
    {x:10,fx:5},
    {x:15,fx:9},
    {x:20,fx:15},
    {x:30,fx:18},
    {x:40,fx:22},
    {x:50,fx:30},
    {x:60,fx:35},
    {x:70,fx:38},
    {x:80,fx:43}
]

DataLinearRegression(points,65);

module.exports = Leastlinear;