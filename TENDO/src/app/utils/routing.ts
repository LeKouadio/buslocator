export const getRoute = async (start: [number, number], end: [number, number]) => {
  try {
    // OSRM expects [lng, lat]
    const url = `https://router.project-osrm.org/route/v1/walking/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      // OSRM returns [lng, lat], Leaflet expects [lat, lng]
      return data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
    }
  } catch (error) {
    console.error('Error fetching route:', error);
  }
  return [start, end]; // Fallback to straight line
};
