import { Button, Table } from "antd"
import { useState } from "react"



export const NewtonTable=(props)=>{
    const {datasource} = props;
    const [Showtable,Setshowtable] = useState(false);

    const columns = [
        {
            title: 'ITERATION',
            dataIndex: 'iteration',
            key: 'iteration'
        },
        {
            title: 'X1',
            dataIndex: 'x1',
            key: 'x1'
        },
        {
            title: 'X0',
            dataIndex: 'x0',
            key: 'x0'
        },
        {
            title: 'ERROR',
            dataIndex: 'error',
            key: 'error'
        },
       
    ]

    return(
        <div className="table">
            <Button onClick={()=>Setshowtable(!Showtable)}>{Showtable ? 'HIDE' : 'SHOW'} TABLE</Button>
            <br/><br/>
            {Showtable && <Table columns={columns} dataSource={datasource} style={{marginLeft:20}}/>}
        </div>
    )
}
