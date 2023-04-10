
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';

  import {Line} from 'react-chartjs-2'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );




export const ChartIn= ({intergatedata}) =>{

        const data = {
            labels:intergatedata.map((e) => e.x),
            datasets:[
                {
                    label:'F(X)',
                    data: intergatedata.map((e)=> e.fx),
                    fill: true, 
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                    borderColor: 'rgba(255, 99, 132, 1)', 
                    
                 },
                 {
                    label:'HEHE',
                    data: intergatedata.map((e)=> e.trapArea),
                    borderColor: 'rgb(53, 162, 235)',
                     backgroundColor: 'rgba(53, 162, 235, 0.5)',
                     fill:true
                 },
            
            
            ],
    
        }
        const option={
            plugins:{
                tooltip:{
                    callbacks:{
                        title:(element)=>{
                            return `X: ${element[0].label}`
                        },              
                    }
                }
            }
        }


        return(
            <div>
                <Line data={data} options={option}/>
            </div>
        )
}