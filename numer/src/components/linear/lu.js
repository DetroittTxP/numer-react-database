import { Typography,Form,InputNumber, Button ,Select} from "antd";
import { useEffect, useState } from "react";

const {Title} = Typography
const {Item} = Form;
const {Option} = Select;

const Lu =()=>{
    const [size,Setsize] = useState(3);
    const [matrix,Setmatrix] = useState(Array.from({length:size},()=>Array(size+1).fill(null)))
    
    useEffect(()=>{
       Setmatrix(Array.from({length:size},()=>Array(size+1).fill(null)))
    },[size])

    const handlechange=(row,col,value)=>{
        let newMatrix = [...matrix];
        newMatrix[row][col] = value;
        Setmatrix(newMatrix);

    }

    return(
     <div>
        <div className="bisection">
            <Title level={2}>LU DECOMPOSITION</Title>

            <Select 
                defaultValue='3'
                onChange={(value)=>Setsize(parseInt(value))}
                style={{width:80,marginLeft:20}}    
            >
                 <Option value='3'>3x3</Option>
                 <Option value='4'>4x4</Option>
            </Select>
            <br/><br/>
            
            <Form>
                <Item name='matrix'>
                     {matrix.map((row,rowindex)=>(
                        <div key={rowindex} >
                            {row.map((col,colindex)=>(
                                <div className="input-linear">
                                    <InputNumber onChange={(value)=>handlechange(rowindex,colindex,value)} style={{width:48}}/>&nbsp;
                                    {colindex <= size-1 ? `x${colindex+1}`:''} {colindex<= size-2? '+' : ''}{colindex=== size-1 ? '=' : ''}
                                </div>
                            ))}
                        </div>
                     ))}
                </Item>
                
                <Button id="linear-submit" type="primary">CALCULATE</Button>
                <Button id="linear-reset" type="primary" danger>RESET</Button>
                
            </Form>

        </div>
     </div>
    )
}

export default Lu;