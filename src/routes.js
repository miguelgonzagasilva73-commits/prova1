import health from '../src/controller/healthController.js';
import calculadora from '../src/controller/calculadoraController.js';
import parte1 from '../src/controller/parte1Controller.js'
import parte2 from '../src/controller/parte2Controller.js';   
import parte3 from '../src/controller/parte3Controller.js'

export function addRoutes(api) {    
  api.use(health);
  api.use(calculadora);
  api.use(parte1);         
  api.use(parte2);          
  api.use(parte3);    
      
}