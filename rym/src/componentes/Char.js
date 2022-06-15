import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Char ()
{
      
    const { id } = useParams();
      return (
        
      <div>
        <h1>{id}</h1>
        <Link to="/index">Volver</Link>
      </div>
    );
  }