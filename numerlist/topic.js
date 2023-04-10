const fs = require('fs');

// const routes = [
//   { path: '/', element: '' },
//   { path: '/bisection', element: "<Bisection />" },
//   { path: '/falseposition', element: "<Falseposition />" },
//   { path: '/onepoint', element: "<Onepoint />" },
//   { path: '/taylor', element: 'taylor' },
//   { path: '/newton', element: "<Newtonraphson />" },
//   { path: '/secant', element: "<Secant />"},
//   { path: '/cramer', element: "<Cramer />" }
// ];

// fs.writeFileSync('route.json',JSON.stringify(routes,null,2));


// const topic = [
//     {roots:[
//       {title:'BISECTION',key:'/bisection'},
//       {title:'FALSE-POSITION',key:'/falseposition'},
//       {title:'ONE-POINT',key:'/onepoint'},
//       {title:'TAYLOR SERIES',key:'/taylor'},
//       {title:'NEWTON-RAPHSON',key:'/newton'},
//       {title:'SECANT',key:'/secant'},
//     ]},
//     {linear:[
//       {title:'CRAMER',key:'/cramer'},
//       {title:'GAUSS ELIMINATION',key:'/gauss'},
//       {title:'GAUSS-JORDAN',key:'/gaussjordan'},
//       {title:'LU DECOMPOSITION',key:'/lu'},
//       {title:'CHOLESKY DECOMPOSITION',key:'/cholesky'},
//       {label:'JACOBI ITERATION', key:'/jacobi'},
//       {label:'GAUSS-SEIDEL',key:'/seidel'}
//       ]
//     },
//     {interpolation:[
//       {label:'NEWTON DIVIDED DIFFERENCE',key:'/newtoninterpolation', children:[
//         {label:'POLYNOMIAL INTERPOLATION' , key:'/newtoninterpolation/polynomial'}  
//        ]},
//       {label:'LAGRANGE INTERPOLATION', key:'/lagrange', children:[
//           {label:'POLYNOMIAL INTERPOLATION' , key:'/lagrange/polynomial'}  
//         ]},
//       {label:'SPLINE INTERPOLATION', key:'/spline'},
//     ]}
//   ]



const menu = [
  {label:'HOME', key:'/'},
  {label:'ROOTS OF EQUATION',key:'root', children:[
    {label:'BISECTION', key:'/bisection'},
    {label:'FALSE-POSITION', key:'/falseposition'},
    {label:'ONE-POINT ITERATION', key:'/onepoint'},
    {label:'TAYLOR SERIES', key:'/taylor'},
    {label:'NEWTON RAPHSON', key:'/newton'},
    {label:'SECANT', key:'/secant'},
   ]},
  {label:'LINEAR' ,key:'/linear', children:[
    {label:'CRAMER', key:'/cramer'},
    {label:'GAUSS ELIMINATION',key:'/gauss'},
    {label:'GAUSS-JORDAN',key:'/gaussjordan'},
    {label:'LU DECOMPOSITION',key:'/lu'},
    {label:'CHOLESKY DECOMPOSITION',key:'/cholesky'},
    {label:'JACOBI ITERATION', key:'/jacobi'},
    {label:'GAUSS-SEIDEL',key:'/seidel'}
  ]},
  {label:'INTERPOLATION',children:[
    {label:'NEWTON DIVIDED DIFFERENCE',key:'/newtoninterpolation', children:[
        {label:'POLYNOMIAL INTERPOLATION' , key:'/newtoninterpolation/polynomial'}  
    ]},
    {label:'LAGRANGE INTERPOLATION', key:'/lagrange', children:[
        {label:'POLYNOMIAL INTERPOLATION' , key:'/lagrange/polynomial'}  
    ]},
    {label:'SPLINE INTERPOLATION', key:'/spline'},
  ]},
]  

  // fs.writeFileSync('numerTopic.json',JSON.stringify(topic,null,2));
  //  fs.writeFileSync('menu.json',JSON.stringify(menu,null,2))

const breadcrumb = [
  {label:'BISECTION', key:'/bisection'},
  {label:'FALSE-POSITION', key:'/falseposition'},
  {label:'ONE-POINT ITERATION', key:'/onepoint'},
  {label:'TAYLOR SERIES', key:'/taylor'},
  {label:'NEWTON RAPHSON', key:'/newton'},
  {label:'SECANT', key:'/secant'},
  {label:'CRAMER', key:'/cramer'},
  {label:'GAUSS ELIMINATION',key:'/gauss'},
  {label:'GAUSS-JORDAN',key:'/gaussjordan'},
  {label:'LU DECOMPOSITION',key:'/lu'},
  {label:'CHOLESKY DECOMPOSITION',key:'/cholesky'},
  {label:'JACOBI ITERATION', key:'/jacobi'},
  {label:'GAUSS-SEIDEL',key:'/seidel'},
  {topic:'NEWTON DIVIDED DIFFERENCE',title:'POLYNOMIAL INTERPOLATION',key: '/newtoninterpolation/polynomial',seg:'newton'},
  {topic:'NEWTON DIVIDED DIFFERENCE',title:'QUADRATIC INTERPOLATION',key:'/newtoninterpolation/quadratic',seg:'newton'},
  {topic:'NEWTON DIVIDED DIFFERENCE',title:'LINEAR INTERPOLATION' ,key:'/newtoninterpolation/linear',seg:'newton'},
  {topic:'LAGRANGE INTERPOLATION',title:'POLYNOMIAL INTERPOLATION',key: '/lagrange/polynomial',seg:'lagrange'},
  {topic:'LAGRANGE INTERPOLATION',title:'QUADRATIC INTERPOLATION',key:'/lagrange/quadratic',seg:'lagrange'},
  {topic:'LAGRANGE INTERPOLATION',title:'LINEAR INTERPOLATION' ,key:'/lagrange/linear',seg:'lagrange'},
  {topic:'SPLINE INTERPOLATION',title:'LINEAR SPLINE' ,key:'/spline/linear',seg:'spline'},
  {topic:'SPLINE INTERPOLATION',title:'QUADRATIC SPLINE' ,key:'/spline/quadratic',seg:'spline'},
  {topic:'SPLINE INTERPOLATION',title:'CUBIC SPLINE' ,key:'/spline/cubic',seg:'spline'},
  
]

fs.writeFileSync('breadcrumb.json',JSON.stringify(breadcrumb,null,2));