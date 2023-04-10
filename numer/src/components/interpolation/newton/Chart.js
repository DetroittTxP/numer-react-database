
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

export const Chart = ({chartData,originaldata,yValue})=>{

    const data = {
        labels:chartData.map((e)=>e.x) ,
        datasets:[
            {
                label: 'ค่าประมาณ',
                data:chartData.map((e)=>e.y) ,
                fill: false,
                borderColor: '#101820FF',
                pointBackgroundColor: [],
                
                tension:0.1,
                
            },
            {
                label:'ข้อมมูลเดิม',
                data:originaldata,
                fill:true,
                borderColor: ' #FEE715FF ',
                backgroundColor:' #FEE715FF '
            }
           

        ]   
    }
    
      data.datasets[0].data.forEach((value)=>{
        if(value === yValue.y)
        {
            data.datasets[0].pointBackgroundColor.push('red')
        }
        
        data.datasets[0].pointBackgroundColor.push('#101820FF')
      })

    const option = {
        responsive: true,
    }

    return(
         <div  >
            <Line data={data}   options={option} />
         </div>
    )
}