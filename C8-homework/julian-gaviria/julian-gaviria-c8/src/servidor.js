import express from "express";

export class Server {
    constructor(port, routes) {
        (this.port = port), (this.routes = routes), (this.app = express());
    }
    start() {
        this.app.use(express.json());
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto", this.port);
        });
    }
}
