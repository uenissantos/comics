 
import * as Styled from './styles'
          import React from "react";

          import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
         export const Map = () => {   

                 const key='AIzaSyDvIx7ngQlx5CG5ki_N5HQOwpAZI6l71gU'
             

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:key
  })
        
const position={lat:-22.713045320169293, 
  lng:-43.44924987151032}




  return (
              <Styled.Map>
    
    <div className="map">
  

{    isLoaded && (
      <GoogleMap
        mapContainerStyle={{width:'100%',height:'100%'}}
        center={position}
        zoom={13}
     
      >
        { 
        <Marker position={ position}  options={
          {
            label:{
              text: 'posição da loja',
              className:"map-marker"
            }
          }
        }/>
        }
        <></>
      </GoogleMap>
  ) }

    </div>
              </Styled.Map>
           
              );
          
          };
