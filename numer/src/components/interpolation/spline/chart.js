
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


export const Chart = ({Splinedata,OriginalY,OriginalX,yValue}) => {
    
    const Originaldata = OriginalX.map((value,index)=>{
        return {x:value,y:OriginalY[index]}
    })

    const data = {
         labels: Splinedata.map((e)=>e.x),
         datasets:[
            {
                label:'F(X)',
                data: Splinedata.map((e)=>e.y),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointBackgroundColor: []
            },
            {
                label:'Original Data',
                data:Originaldata,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
         ]
    }    
    data.datasets[0].data.forEach((value)=>{
        if(value === yValue.y)
        {
            data.datasets[0].pointBackgroundColor.push('#101820FF')
        }
        data.datasets[0].pointBackgroundColor.push('red')
       
      })

  return (
    <Line data={data} />
  )
}
