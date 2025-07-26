import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Instrumentos } from "../Models/instrumentos.models";


const dataPath = path.join(__dirname,"../Repositories/instrumentos.json")

export class InstrumentosController{
    private instrumentos: Instrumentos[];

    constructor() {
        this.instrumentos = JSON.parse(fs.readFileSync(dataPath,"utf-8"));
    }
    
    todos_instrumentos = (req: Request, resp : Response) => {
            resp.json(this.instrumentos);   
        }
            
    
    
    getById = (req: Request, resp:Response) => {
       try {
        const id = req.params.id;
        const instrumento = this.instrumentos.find((inst) => inst.id === parseInt(id));  
       
        if (instrumento) {
            resp.json(instrumento);
        } else {
            resp.status(404).json({ error: "Instrumento no encontrado" });
        }
        
       } catch (error) {
        console.error("Error al leer el archivo:", error);
        resp.status(500).json({ error: "Error interno del servidor" });
        
       }
       
    }
    getParams = (req:Request, resp: Response)=>{
        /*
        .toString() = elimina los espacios
        .split(" ")[0] = considera la primera palabra de la cadena de texto 
        .normalize("NFD") = dscompone los caracteres con tilde
        .replace(/[\u0300-\u036f]/g, "") = elimina las tildes
        */
        const {nombre} = req.params;
        const params = this.instrumentos.filter((inst) =>
             inst.nombre.toLowerCase().toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(nombre))
        resp.json(params)
    }

    getQuery = (req:Request, resp:Response) => {
       
        const {tipo} = req.query;
        const {origen} = req.query;
    
    if (tipo) {
        const tipoFiltrado = tipo.toString().toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const instrumentosFiltrados = this.instrumentos.filter((inst) =>
             inst.tipo.toLowerCase().trim().split(" ")[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") === tipoFiltrado);
        resp.json(instrumentosFiltrados);
        
        
    }else if (origen) { 
        const origenFiltrado = origen.toString().toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const instrumentosFiltrados = this.instrumentos.filter((inst) =>
             inst.origen.toLowerCase().toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === origenFiltrado);

                resp.json(instrumentosFiltrados);
    }
}

}