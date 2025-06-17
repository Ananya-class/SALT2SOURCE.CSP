
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Droplets, AlertTriangle, CheckCircle } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface WaterSource {
  id: number;
  name: string;
  type: 'river' | 'lake' | 'reservoir' | 'well' | 'treatment_plant' | 'beach';
  coordinates: [number, number];
  quality: 'excellent' | 'good' | 'moderate' | 'poor';
  description: string;
  capacity?: string;
  issues?: string[];
  treatments?: string[];
}

const LeafletWaterMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Vishakhapatnam water sources data
  const vishakhapatnamWaterSources: WaterSource[] = [
    {
      id: 1,
      name: "Meghadrigedda Reservoir",
      type: "reservoir",
      coordinates: [17.8, 83.2],
      quality: "good",
      description: "Main water supply reservoir for Vishakhapatnam city, provides water to over 2 million people.",
      capacity: "24 TMC",
      treatments: ["Water treatment plant", "Chlorination", "Regular quality monitoring"]
    },
    {
      id: 2,
      name: "Yeleru Reservoir",
      type: "reservoir", 
      coordinates: [17.9, 83.1],
      quality: "excellent",
      description: "Secondary water source with excellent water quality, serves eastern parts of the city.",
      capacity: "15 TMC",
      treatments: ["Modern filtration", "UV treatment", "Quality control"]
    },
    {
      id: 3,
      name: "Gosthani River",
      type: "river",
      coordinates: [17.7, 83.3],
      quality: "moderate",
      description: "River flowing through Vishakhapatnam, faces pollution challenges from urban discharge.",
      issues: ["Industrial pollution", "Sewage discharge", "Solid waste"],
      treatments: ["River cleaning drives", "Sewage treatment plants", "Industrial monitoring"]
    },
    {
      id: 4,
      name: "Mudasarlova Park Lake",
      type: "lake",
      coordinates: [17.78, 83.35],
      quality: "good",
      description: "Recreational lake with decent water quality, popular tourist spot.",
      treatments: ["Lake maintenance", "Pollution control", "Regular dredging"]
    },
    {
      id: 5,
      name: "RK Beach Coastal Area",
      type: "beach",
      coordinates: [17.72, 83.32],
      quality: "moderate",
      description: "Popular beach area, coastal water quality affected by urban runoff.",
      issues: ["Plastic pollution", "Sewage outfall", "Tourist activities"],
      treatments: ["Beach cleaning", "Waste management", "Sewage diversion"]
    },
    {
      id: 6,
      name: "Kommadi Water Treatment Plant",
      type: "treatment_plant",
      coordinates: [17.85, 83.25],
      quality: "excellent",
      description: "Modern water treatment facility serving northern Vishakhapatnam.",
      capacity: "200 MLD",
      treatments: ["Advanced filtration", "Reverse osmosis", "Chemical treatment"]
    },
    {
      id: 7,
      name: "Tenneti Park Wells",
      type: "well",
      coordinates: [17.74, 83.33],
      quality: "good",
      description: "Groundwater wells serving local communities near Tenneti Park.",
      treatments: ["Regular testing", "Chlorination", "Community monitoring"]
    },
    {
      id: 8,
      name: "Lawsons Bay Beach",
      type: "beach",
      coordinates: [17.71, 83.31],
      quality: "poor",
      description: "Beach area with water quality concerns due to industrial proximity.",
      issues: ["Industrial discharge", "Heavy metal contamination", "Oil spills"],
      treatments: ["Industrial monitoring", "Cleanup operations", "Pollution control"]
    }
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return '#22c55e';
      case 'good': return '#3b82f6';
      case 'moderate': return '#eab308';
      case 'poor': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'river': return '🏞️';
      case 'lake': return '🏞️';
      case 'reservoir': return '🏗️';
      case 'well': return '🕳️';
      case 'treatment_plant': return '🏭';
      case 'beach': return '🏖️';
      default: return '💧';
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Vishakhapatnam
    const map = L.map(mapRef.current).setView([17.7231, 83.3012], 11);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add water sources as markers
    vishakhapatnamWaterSources.forEach((source) => {
      const icon = L.divIcon({
        html: `<div style="background-color: ${getQualityColor(source.quality)}; border: 2px solid white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${getTypeIcon(source.type)}</div>`,
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker(source.coordinates, { icon }).addTo(map);

      // Create popup content
      const popupContent = `
        <div style="min-width: 200px; font-family: system-ui;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
            ${source.name}
          </h3>
          <div style="margin-bottom: 8px;">
            <span style="background-color: ${getQualityColor(source.quality)}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">
              ${source.quality.toUpperCase()}
            </span>
          </div>
          <p style="margin: 8px 0; color: #4b5563; font-size: 14px;">
            ${source.description}
          </p>
          ${source.capacity ? `<p style="margin: 4px 0; color: #6b7280; font-size: 12px;"><strong>Capacity:</strong> ${source.capacity}</p>` : ''}
          ${source.issues ? `
            <div style="margin: 8px 0;">
              <strong style="color: #dc2626; font-size: 12px;">Issues:</strong>
              <ul style="margin: 4px 0; padding-left: 16px; color: #6b7280; font-size: 12px;">
                ${source.issues.map(issue => `<li>${issue}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          ${source.treatments ? `
            <div style="margin: 8px 0;">
              <strong style="color: #059669; font-size: 12px;">Treatments:</strong>
              <ul style="margin: 4px 0; padding-left: 16px; color: #6b7280; font-size: 12px;">
                ${source.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Add city boundary (approximate)
    const cityBounds = L.circle([17.7231, 83.3012], {
      radius: 25000,
      fillColor: '#3b82f6',
      fillOpacity: 0.1,
      color: '#1d4ed8',
      weight: 2,
      opacity: 0.5
    }).addTo(map);

    cityBounds.bindPopup('<strong>Vishakhapatnam City Area</strong><br>Major port city and industrial hub');

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card className="shadow-xl animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Vishakhapatnam Water Sources Map
          </CardTitle>
          <p className="text-blue-100">
            Interactive map showing water sources, treatment facilities, and quality data across Vishakhapatnam
          </p>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Map Container */}
          <div 
            ref={mapRef} 
            className="w-full h-96 md:h-[500px] lg:h-[600px] animate-scale-in"
            style={{ zIndex: 1 }}
          />
          
          {/* Legend */}
          <div className="p-6 bg-gray-50">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              Legend
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Water Quality */}
              <div>
                <h5 className="font-medium text-sm text-gray-700 mb-2">Water Quality</h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Excellent</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span>Good</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span>Moderate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>Poor</span>
                  </div>
                </div>
              </div>

              {/* Source Types */}
              <div>
                <h5 className="font-medium text-sm text-gray-700 mb-2">Source Types</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span>🏗️</span>
                    <span>Reservoirs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏞️</span>
                    <span>Rivers & Lakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏭</span>
                    <span>Treatment Plants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏖️</span>
                    <span>Coastal Areas</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h5 className="font-medium text-sm text-gray-700 mb-2">Quick Stats</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Sources:</span>
                    <span className="font-semibold">{vishakhapatnamWaterSources.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reservoirs:</span>
                    <span className="font-semibold">{vishakhapatnamWaterSources.filter(s => s.type === 'reservoir').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Good Quality:</span>
                    <span className="font-semibold text-green-600">
                      {vishakhapatnamWaterSources.filter(s => s.quality === 'good' || s.quality === 'excellent').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Need Attention:</span>
                    <span className="font-semibold text-red-600">
                      {vishakhapatnamWaterSources.filter(s => s.quality === 'poor').length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h5 className="font-medium text-sm text-gray-700 mb-2">How to Use</h5>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>• Click on markers to view details</p>
                  <p>• Zoom in/out with mouse wheel</p>
                  <p>• Drag to pan around the map</p>
                  <p>• Colors indicate water quality</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeafletWaterMap;
