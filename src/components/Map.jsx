import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";


const Map = () => (
  <div>
    <ComposableMap 
    projectionConfig={{
        rotate: [-5.0, -42.0, -5],
        center: [30, 10],
        scale: 280
    }}
    style={
        {   
            width: "100%", height: "100%"}
        

    
        
        }>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[39.700001, 47.233334]}
        dx={-90}
        dy={-30}
        connectorProps={{
            stroke: "white",
            strikeWidth: 2,
            strokeLinecap: "round"
        }}>
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                {"Rostov"}
            </text>
      </Annotation>
    </ComposableMap>
  </div>
);

export default Map;

