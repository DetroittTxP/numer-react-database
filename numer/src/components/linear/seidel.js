
import {Typography,Form,InputNumber,Button,Select} from 'antd';
import {useEffect, useState} from 'react';
const {Title} = Typography;
const {Item} = Form;
const {Option} = Select;
export const Seidel =()=>{
    const [size,Setsize] = useState(3);
    const [matrix,Setmatrix] = useState(Array.from({length:size},() => Array(size).fill(null)))
    const [x0,Setx0] = useState(Array.from({length:size}).fill(null));

    useEffect(()=>{
        Setmatrix(Array.from({length:size},() => Array(size).fill(null)))
    },[size])

    return(
        <div>
            <div className='bisection'>
                <Title level={2}>GAUSS-SEIDEL</Title>      
                
                <Select defaultValue='3' 
                        onChange={(value)=>Setsize(parseInt(value))} 
                        style={{width:80,marginLeft:20}} >

                    <Option value='3'>3X3</Option>
                    <Option value='4'>4X4</Option>
                </Select>

                <br/><br/>
                
                <div className='formLinear'>    
                    <Form>
                        <Item name='matrix'>
                             {matrix.map((row,rowindex) =>(
                                <div key={rowindex}>
                                    {row.map((col,colindex)=>(
                                        <div className='input-linear' >
                                              <InputNumber style={{width:48}} key={colindex} />&nbsp;
                                              {`x${colindex+1}`}{colindex+1 === size ? '=' : '+'}
                                        </div>
                                    ))}

                                    <InputNumber   style={{width:48,marginLeft:21}} />
                                </div>
                             ))}
                            <Title level={5} >STARTING VALUE</Title>
                            {x0.map((_,index)=>(
                                <div className='input-linear'>
                                   {`x${index+1}=`} <InputNumber onChange={(e)=>Setx0(e)}   style={{width:48}}/>&nbsp;
                                    
                                </div>
                             ))}
                        </Item>    

                        
                        <div className="gauss-btn">
                            <Button   type="primary" htmlType="submit">CALCULATE</Button>
                            <Button  danger type="primary" >RESET</Button>        
                         </div>
                    </Form>


                </div>      

            </div>
        </div>
    )
}