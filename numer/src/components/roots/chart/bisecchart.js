import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip
    
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Tooltip
)  

export const Bichart = (props)=>{
    const { chartData } = props;

    const data={
        labels:chartData.map((e)=>e.iteration), 
        datasets:[
          {
            label:'XM',
            data:chartData.map((e)=>e.xm),
            borderColor: '#e52165',
            backgroundColor: '#e52165',
            fill:true,
            yAxisID: 'xm'
          },
          {
            label:'ERROR',
            data:chartData.map((e)=>e.error),
            borderColor:'#0d1137',
            backgroundColor:'#0d1137',
            fill:true,
            yAxisID: 'error'
          }
        ]
    }

    const options = {
        responsive:true,
        scales:{
            xm:{
                type:'linear',
                display:true,
                position:'left',
            },
            error:{
                type: 'linear',
                display:true,
                position:'right',
                grid:{
                    drawOnChartArea: false,
                },  
                ticks: {
                    callback: (value)=>`${value} %`
                }
            }
        },
        plugins:{
            tooltip:{
                callbacks:{
                    title:(element)=>{
                        return `ITERATION: ${element[0].label}`
                    },
                    label:(element)=>{
                        if(element.datasetIndex === 1){
                            return `ERROR: ${element.parsed.y} %`

                        }else{
                            return `XM: ${element.parsed.y}`
                        }
                    },                              
                }
            }
        }
 
        
    }





    return(
        <div>
            
            <br/>
            <Line data={data} options={options} />
        </div>
    )
}