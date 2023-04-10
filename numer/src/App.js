import { Breadcrumb, Menu} from 'antd'
import './sass/style.css';
import {Header} from './header';
import {useNavigate,useLocation} from 'react-router-dom'
import { useEffect,useState } from 'react';
import menu from './menu.json'
import { Numerical } from './numerical';
import topic from './topic.json'

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [roots,Setroots] = useState(false);
  const [linear,Setlinear] = useState(false);
  const [inter,Setinter] = useState(false);
  const [integration,Setintegration] = useState(false);
  const [leastsq,Setleastsq] = useState(false);
    
  useEffect(()=>{
  if(location.pathname === '/'){Setroots(false); Setlinear(false);Setinter(false); Setintegration(false)}
  topic.forEach((e)=>{
     if(e.key ===location.pathname && e.topic === 'linear'){
         Setlinear(true);
          Setroots(false);
          Setinter(false);
          Setintegration(false)
          Setleastsq(false);
     }
     else if(e.key === location.pathname && e.topic === 'root' ){
           Setroots(true);
           Setlinear(false);
           Setinter(false);
           Setintegration(false)
           Setleastsq(false);
     }
     else if(e.key === location.pathname && e.refer === 'interpolation')
     {
       Setroots(false);
       Setlinear(false);
       Setinter(true);
       Setintegration(false)
       Setleastsq(false);
     }
     else if(e.key === location.pathname && e.topic === 'integration'){
      Setroots(false);
      Setlinear(false);
      Setinter(false);
      Setintegration(true)
      Setleastsq(false);
    }
    else if(e.key === location.pathname && e.topic === 'Regression'){
      Setroots(false);
      Setlinear(false);
      Setinter(false);
      Setintegration(false);
      Setleastsq(true);
    }
     
  })

    
},[location.pathname])

  return (
    <div>
        <Header/>
        <Menu
         onClick={({key})=>{
          navigate(key);
          if(key === '/'){Setroots(false); Setlinear(false);Setinter(false);Setintegration(false)}

          topic.forEach((e)=>{
            if(e.key ===location.pathname && e.topic === 'linear'){
                Setlinear(true);
                 Setroots(false);
                 Setinter(false);
                 Setintegration(false)
            }
            else if(e.key === location.pathname && e.topic === 'root' ){
                  Setroots(true);
                  Setlinear(false);
                  Setinter(false);
                  Setintegration(false)
            }
            else if(e.key === location.pathname && e.refer === 'interpolation')
            {
              Setroots(false);
              Setlinear(false);
              Setinter(true);
              Setintegration(false)
            }
            else if(e.key === location.pathname && e.topic === 'integration'){
              Setroots(false);
              Setlinear(false);
              Setinter(false);
              Setintegration(true)
            }
            else if(e.key === location.pathname && e.topic === 'Regression'){
              Setroots(false);
              Setlinear(false);
              Setinter(false);
              Setintegration(false);
              Setleastsq(true);
            }
           
         })
          
         }}
         className='my-menu'
         mode='horizontal'
         items={menu}

        />
        <br/>
        <Breadcrumb className='breadcrumb'>
             {location.pathname !== '/' && <Breadcrumb.Item href='/'>HOME</Breadcrumb.Item> }
             {roots && <Breadcrumb.Item>ROOTS OF EQUATION</Breadcrumb.Item> } 
             {linear && <Breadcrumb.Item>LINEAR ALGEBRA</Breadcrumb.Item>}
             {inter && <Breadcrumb.Item>INTERPOLATION</Breadcrumb.Item>}
             {integration && <Breadcrumb.Item>INTEGRATION</Breadcrumb.Item>}
             {leastsq && <Breadcrumb.Item>REGRESSION</Breadcrumb.Item>}
     
             {topic.map((e,index)=>{
                if(e.key === location.pathname){
                  return <Breadcrumb.Item key={index}>{e.label}</Breadcrumb.Item> 
                }
                
                return null;
             })}

             {topic.map((e)=>{
                if (e.key === location.pathname && e.topic !== 'root' && 
                    e.topic !== 'linear' && 
                    e.topic !== 'integration' && 
                    e.topic !== 'Regression') {
                  return (
                    <>
                      <Breadcrumb.Item>{e.topic}</Breadcrumb.Item>
                      <Breadcrumb.Item>{e.title}</Breadcrumb.Item>
                    </>
                  );
                }
                return null;
             })}

          
        </Breadcrumb>
        <Numerical/>             
        
    </div>
  );
}

export default App;

 
















































































































