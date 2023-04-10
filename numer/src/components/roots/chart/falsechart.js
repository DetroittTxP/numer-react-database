import {Line} from 'react-chartjs-2';
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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const Falsechart = (props)=>{
    const {chartData} = props;

    const data = {
        labels:chartData.map((e)=>e.iteration),
        datasets:[
            {
                label: 'X1',
                data:chartData.map((e)=>e.x1),
                borderColor: '#e52165',
                backgroundColor: '#e52165',
            },
            {
                label:'ERROR',
                data:chartData.map((e)=>e.error),
                borderColor:'#0d1137',
                backgroundColor:'#0d1137',
            }
        ]
    }



    return(
        <div>
            <Line data={data}/>
        </div>
    )
}