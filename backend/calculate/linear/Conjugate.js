var pcg = require("conjugate-gradient")
  , CSRMatrix = require("csr-matrix")
 
//Create a matrix
var A = CSRMatrix.fromDense([[-2, 1, 0],
                             [ 1,-2, 1],
                             [ 0, 1,-2]])
 
//Create input vector
var B = new Float64Array([1, 0, 0])
 
//Solve equation:
//
//  A x = B
//
console.log(pcg(A, B))