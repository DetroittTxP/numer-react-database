const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swaggerAutogen.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles)