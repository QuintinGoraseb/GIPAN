import React from "react";
import "../Leaflet/map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";





const position = [51.505, -0.09]


export default function Gmap() {

  // Markers
  const marker = [
    {
        geocode: [-17.914570, 19.783819 ],
        popUp: [
          "GIPAN OFFICE: RUNDU",<br/>,
          "Address: 103 ABC Street",<br/>,
          "Tel: +00 110 111 00",<br/>,
          "Email: info@gipan.org",
        ]
    },
    {
        geocode: [-18.055320, 13.842820 ],
        popUp: [
            "GIPAN OFFICE: OPUWO",<br/>,
            "Address: 103 ABC Street",<br/>,
            "Tel: +00 110 111 00",<br/>,
            "Email: info@gipan.org",
        ]
    },
    {
        geocode: [-19.242180, 17.715879 ],
        popUp: [
          "GIPAN OFFICE: TSUMEB",<br/>,
          "Address: 103 ABC Street",<br/>,
          "Tel: +00 110 111 00",<br/>,
          "Email: info@gipan.org",
        ]
    },
    {
        geocode: [-22.560881, 17.065756 ],
        popUp: [
          "GIPAN OFFICE: WINDHOEK",<br/>,
          "Address: 103 ABC Street",<br/>,
          "Tel: +00 110 111 00",<br/>,
          "Email: info@gipan.org",
        ]
    },
    {
        geocode: [-24.626860, 17.963200 ],
        popUp: [
          "GIPAN OFFICE: MARIENTAL",<br/>,
          "Address: 103 ABC Street",<br/>,
          "Tel: +00 110 111 00",<br/>,
          "Email: info@gipan.org",
        ]
    },
    {
      geocode: [-26.647551, 15.153610 ],
      popUp: [
        "GIPAN OFFICE: LUDERITZ",<br/>,
        "Address: 103 ABC Street",<br/>,
        "Tel: +00 110 111 00",<br/>,
        "Email: info@gipan.org",
      ]
  },
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    //iconUrl: require("/img/body/marker.png"),
    iconSize: [38, 38]
  })

  return(
    <section className="map bg-[#fff] mb-20">
      <div className="container lg-lg-container mx-auto">
        <MapContainer className="shadow-custom3" center={[-23.2335499, 17.3231107]} zoom={5} scrollWheelZoom={false} doubleClickZoom={false} zoomControl={false} >
          <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            {marker.map(marker =>(
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </section>
  );
}