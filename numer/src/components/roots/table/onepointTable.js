import {Table,Button} from 'antd';
import { useState } from 'react';


export const OnepointTable = (props)=>{
    const {datasource} = props;
    const [Showtable,Setshowtable] = useState(false);
    const columns = [
        {
             title: 'ITERATION',
             dataIndex:'iteration',
             key: 'iteration',
        },
        {
             title: 'X0',
             dataIndex:'x0',
             key: 'x0',
        }, 
        {
             title: 'X1',
             dataIndex:'x1',
             key: 'x1',
        },
        
   ]
    return(
        <div className='Table'>
            <Button style={{marginRight:5}}  onClick={()=>Setshowtable(!Showtable)}  >{Showtable ? 'HIDE' : 'SHOW'} TABLE</Button>
            <br/><br/>
            {Showtable && <Table columns={columns} dataSource={datasource}/>}
        </div>
    )
}