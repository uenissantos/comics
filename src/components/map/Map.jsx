 
import React, { useCallback, useMemo, useState } from "react";
  import {
    GoogleMap,
    Marker,
    LoadScript,
    StandaloneSearchBox,
    DirectionsService,
    DirectionsRenderer,
  } from "@react-google-maps/api";
  import * as Styled from './styles'
  
  export const Map = () => {
     const key= import.meta.env.VITE_KEY_GOOGLE_MAP


const myPosition={lat:-22.713045320169293, 
  lng:-43.44924987151032}
    const [map, setMap] = useState();
    const [searchBoxB, setSearchBoxB] =useState();
    const [pointA, setPointA] = useState({
      lat:'',
      lng:""
    });
    const [pointB, setPointB] = useState({
      lat:'',
      lng:""
    });
  
    const [origin, setOrigin] = useState(
      null
    );
    const [destination, setDestination] =
      useState(null);
  
    const [response, setResponse] =
      useState(null);
  
   
    const onMapLoad = (map) => {
      
      setMap(map);
    };
  
  /*   const onLoadA = (ref) => {
      setSearchBoxA(ref);
    };
   */
    const onLoadB = (ref) => {
      setSearchBoxB(ref);
    };
  
    const onPlacesChangedB = () => {
      const places = searchBoxB.getPlaces();
      const place = places[0];
      console.log(places);
      const location = {
        lat: place.geometry.location.lat() ,
        lng: place.geometry.location.lng() ,
      };


      const myLocation = {
        lat:-22.713045320169293, 
          lng:-43.44924987151032

      };  

      setPointB(location);
      setOrigin(myLocation);
      setPointA(myLocation)
      setDestination(null);
      setResponse(null);
      map.panTo(location);
    };
  
    const traceRoute = () => {
    
        setOrigin(pointA);
        setDestination(pointB);
console.log('LOG DOIS POINT' ,pointA);

   

    };
  
    const directionsServiceOptions =
      // @ts-ignore
      useMemo(() => {
        return {
          origin,
          destination,
          travelMode: "DRIVING",
        };
      }, [origin, destination]);
  
    const directionsCallback = useCallback((res) => {
      if (res !== null && res.status === "OK") {
        setResponse(res);
      } else {
        console.log(res);
      }
    }, []);
  
    const directionsRendererOptions = useMemo(() => {
      return {
        directions: response,
      };
    }, [response]);
  
    return (
      <Styled.Map>
        <div className="map">
        <LoadScript
          googleMapsApiKey={key}
          libraries={["places"]}
        >
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={myPosition}
            zoom={15}
          >
            <div className="address">
            
              <StandaloneSearchBox
                onLoad={onLoadB}
                onPlacesChanged={onPlacesChangedB}
              >
                <input
                  className="addressField"
                  placeholder="Digite o endereço final"
                />
              </StandaloneSearchBox>
              <button onClick={traceRoute}>Traçar rota</button>
            </div>
  
            { <Marker position={myPosition} />}
            {response && pointB && <Marker position={pointB} />}
  
            {origin && destination && (
              <DirectionsService
                options={directionsServiceOptions}
                callback={directionsCallback}
              />
            )}
  
            {response && directionsRendererOptions && (
              <DirectionsRenderer options={directionsRendererOptions} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      </Styled.Map>
    );
  };