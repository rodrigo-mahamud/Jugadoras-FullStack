import React from "react";
import Jugadora from "./Jugadora";

const JugadoraList = ({ jugadoras }) => {
   return (
      <div>
         {jugadoras.map((jugadora) => (
            <Jugadora key={jugadora._id} jugadora={jugadora} />
         ))}
      </div>
   );
};

export default JugadoraList;
