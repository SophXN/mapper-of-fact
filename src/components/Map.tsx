import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29waHhuIiwiYSI6ImNscm1xZ21vdTExbmwyd2tpdmVmODUxb2QifQ.i5vkGZLlgjIpHgS0ZqpXcA";

export const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement, // Type assertion for the container
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4))); // Use non-null assertion since we know map is initialized
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });
  }, [lng, lat, zoom]);

  return (
    <div className="relative flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
      <div className="sidebar w 20 absolute bottom-0 right-0 h-8">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
