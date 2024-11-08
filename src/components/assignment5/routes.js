import React from "react";

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

    if (selectedAirlineID === null) {
        return <g></g>;
    }

    const filteredRoutes = routes.filter(route => route.AirlineID === selectedAirlineID);

    return (
        <g>
            {filteredRoutes.map((route, index) => {
                const [sourceX, sourceY] = projection([route.SourceLongitude, route.SourceLatitude]);
                const [destX, destY] = projection([route.DestLongitude, route.DestLatitude]);

                return (
                    <line
                        key={index}
                        x1={sourceX}
                        y1={sourceY}
                        x2={destX}
                        y2={destY}
                        stroke="#992a5b"
                        strokeWidth={0.1}
                    />
                );
            })}
        </g>
    );
}

export { Routes }