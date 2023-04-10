import {Routes ,Route  } from 'react-router-dom';
import Bisection from './components/roots/bisection';
import Secant from './components/roots/secant';
import Onepoint from './components/roots/onepoint';
import Falseposition from './components/roots/falseposition';
import { Newtonraphson } from './components/roots/newtonraphson';
import { Taylorseries } from './components/roots/taylorseries';
import { Cramer } from './components/linear/cramer';
import { Gauss } from './components/linear/gauss';
import { Gaussjordan } from './components/linear/gaussjordan';
import Lu from './components/linear/lu';
import { Cholesky } from './components/linear/cholesky';
import { Jacobi } from './components/linear/jacobi';
import {Seidel} from './components/linear/seidel'
import { Newtonpolynomial } from './components/interpolation/newton/newtonpolynomial';
import Newtonlinear from './components/interpolation/newton/newtonlinear'
import { Newtonquadratic } from './components/interpolation/newton/newtonquadratic';
import { Lagrangelinear } from './components/interpolation/lagrange/lagrangelinear';
import { Lagrangequadratic } from './components/interpolation/lagrange/lagrangequadratic';
import { Lagrangepolynomial } from './components/interpolation/lagrange/lagrangepolynomial';
import { Linearspline } from './components/interpolation/spline/linearspline';
import {Trap} from './components/integration/Trap';
import {CompositeTrap} from './components/integration/compositeTrap'
import { Simpson } from './components/integration/Simpson';
import { Compositesimpson } from './components/integration/compositeSimpson';
import { Regression } from './components/regression/Regression';
import { Polyregression } from './components/regression/Polyregression';
import { Quadraticspline } from './components/interpolation/spline/quadraticspline';
import { Cubicspline } from './components/interpolation/spline/cubicspline';





export const Numerical =()=>{
    return(
        <Routes>
            <Route path='/' element={null} />
            <Route path='/bisection' element={<Bisection/>} />
            <Route path='/falseposition' element={<Falseposition/>} />
            <Route path='/onepoint' element={<Onepoint/>} />
            <Route path='/taylor' element={<Taylorseries/>} />
            <Route path='/newton' element={<Newtonraphson/>} />
            <Route path='/secant' element={<Secant/>} />
            <Route path='/cramer' element={<Cramer/>} />
            <Route path='/gauss'  element={<Gauss/>}/>
            <Route path='/gaussjordan' element={<Gaussjordan/>}/>
            <Route path='/lu' element={<Lu/>} />
            <Route path='/cholesky' element={<Cholesky/>}/>
            <Route path='/jacobi' element={<Jacobi/>}/>
            <Route path='/seidel' element={<Seidel/>}/>
            <Route path='/newtoninterpolation/polynomial' element={<Newtonpolynomial/>}/>
            <Route path='/newtoninterpolation/quadratic' element={<Newtonquadratic/>}/>
            <Route path='/newtoninterpolation/linear' element={<Newtonlinear/>}/>
            <Route path='/lagrange/linear' element={<Lagrangelinear/>}/>
            <Route path='/lagrange/quadratic' element={<Lagrangequadratic/>}/>
            <Route path='/lagrange/polynomial' element={<Lagrangepolynomial/>}/>
            <Route path='/spline/linear' element={<Linearspline/>}/>
            <Route path='/spline/quadratic' element={<Quadraticspline/>}/>
            <Route path='/spline/cubic' element={<Cubicspline/>} />
            <Route path='/trap' element={<Trap/>}/>
            <Route path='/compositetrap' element={<CompositeTrap/>}/>
            <Route path='/simpson' element={<Simpson/>}/>
            <Route path='/compositesimpson' element={<Compositesimpson/>}/>
            <Route path='/regression' element={<Regression/>}/>
            <Route path='/polyregression' element={<Polyregression/>}/>
         </Routes>
    )

}