import express from 'express';

export class Server {

    constructor(port, routes){
        this.port = port,
        this.routes = routes;
        this.app = express();
    }

    start(){
        //middlewares    
        this.app.use(express.json());
        
        this.app.use(this.routes);

        this.app.listen(this.port, () =>{
            console.log('Server is running on port ', this.port)
        })
    }
}






