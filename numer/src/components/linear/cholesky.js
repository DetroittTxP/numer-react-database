import { Typography,Form,InputNumber,Select,Button } from "antd"
import { useEffect, useState } from "react";
import axios from 'axios'
const {Title} = Typography;
const {Item} = Form;
const { Option } = Select;

export const Cholesky=()=>{
    const [size,Setsize] = useState(3)
    const [matirx,Setmatrix] = useState(Array.from({length:size},()=>Array(size).fill(null)));
    const [result,Setresult] = useState([]);
    const [showtable,Setshowtable] = useState(false);

    useEffect(()=>{Setmatrix(Array.from({length:size},()=>Array(size).fill(null)))},[size])

    const handlechange=(i,j,value)=>{
        let newmatrix = [...matirx];
        newmatrix[i][j] = value;
        Setmatrix(newmatrix);
    }

    const handlesubmit=async()=>{
         await axios.post('http://localhost:1234/choleskey',{matirx})
         .then(res=>Setresult(res.data)).catch(err=>alert(err))
         Setshowtable(true);
    }

    return(
        <div>
            <div className="bisection">
                <Title level={2}>CHOLESKY DECOMPOSITION</Title>

                <Select 
                    onChange={(value)=>Setsize(parseInt(value))}
                    style={{width:80,marginLeft:20}}
                    defaultValue='3'
                >

                    <Option value='3'>3X3</Option>
                    <Option value='4'>4X4</Option>

                </Select>
                <br/><br/>

                <Form onFinish={handlesubmit}>
                    <Item name='matrix'>

                            {matirx.map((row,rowindex)=>(
                                <div key={rowindex}>
                                    
                                    {row.map((_,colindex)=>(
                                        <div className="input-linear">
                                             <InputNumber onChange={(value)=>handlechange(rowindex,colindex,value)} key={colindex} style={{width:48,}}/>&nbsp;
                                             {colindex <= size-1 ? `x${colindex+1}` : '' } {colindex <= size-2 ? '+' : ''} 
                                        </div>
                                    ))}

                                </div>
                            ))}

                    </Item>

                    <Button id="linear-submit" htmlType="submit" type="primary">CALCULATE</Button>
                    <Button id="linear-reset" type="primary" danger>RESET</Button>
                </Form>
                <br/>
                <br/>

                { showtable && <table className="table-jordan">
                            {result.map((row,rowIndex)=>(
                                  <th key={rowIndex}>
                                       {row.map((col,colindex)=>(
                                          <tr key={colindex}>
                                              <td >
                                                    {col}
                                              </td>
                                          </tr>
                                       ))}
                                  </th>
                                ))}            
                        </table>}
            </div>
        </div>
    )
}