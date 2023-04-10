// import { useState } from "react"
import { Button, Table } from "antd"
import { useState } from "react";
const SecantTable = (props)=>{
     const { datasource } = props;
     const [ShowTable,SetShowTable] = useState(false);

     const columns = [
        {
             title: 'ITERATION',
             dataIndex:'iteration',
             key: 'iteration',
        },
        {
             title: 'X2',
             dataIndex:'x2',
             key: 'x2',
        }, 
        {
             title: 'X1',
             dataIndex:'x1',
             key: 'x1',
        },
        {
             title: 'X0',
             dataIndex:'x0',
             key: 'x0',
        },
        {
          title: 'FX0',
          dataIndex:'fx0',
          key: 'fx0',
        },
       {
          title: 'FX1',
          dataIndex:'fx1',
          key: 'fx1',
       },
   ]

     return(
        <div className="Table">
            <Button onClick={()=>SetShowTable(!ShowTable)} style={{marginRight:50}}>{ShowTable ? 'HIDE' : 'SHOW'} TABLE</Button>
            <br/><br/>
            {ShowTable && <Table dataSource={datasource} columns={columns}/>}

        </div>
     )
}

export default SecantTable