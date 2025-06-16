
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, MapPin, AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface WaterSource {
  id: number;
  name: string;
  state: string;
  type: 'river' | 'lake' | 'groundwater' | 'reservoir' | 'coastal';
  quality: 'excellent' | 'good' | 'moderate' | 'poor';
  coordinates: { x: number; y: number };
  details: {
    description: string;
    capacity?: string;
    issues?: string[];
    treatments?: string[];
  };
}

const IndiaWaterMap = () => {
  const [selectedSource, setSelectedSource] = useState<WaterSource | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const waterSources: WaterSource[] = [
    {
      id: 1,
      name: "Ganges River",
      state: "Uttar Pradesh",
      type: "river",
      quality: "moderate",
      coordinates: { x: 55, y: 35 },
      details: {
        description: "The holiest river in India, source of water for millions but faces pollution challenges.",
        capacity: "525 billion cubic meters annually",
        issues: ["Industrial pollution", "Sewage discharge", "Religious activities impact"],
        treatments: ["Namami Gange project", "Sewage treatment plants", "Industrial monitoring"]
      }
    },
    {
      id: 2,
      name: "Yamuna River",
      state: "Delhi",
      type: "river",
      quality: "poor",
      coordinates: { x: 50, y: 30 },
      details: {
        description: "Major tributary of Ganges, severely polluted in Delhi stretch.",
        issues: ["Highly polluted in urban areas", "Foam formation", "Heavy metal contamination"],
        treatments: ["Yamuna Action Plan", "Wetland restoration", "Pollution monitoring"]
      }
    },
    {
      id: 3,
      name: "Narmada River",
      state: "Madhya Pradesh",
      type: "river",
      quality: "good",
      coordinates: { x: 45, y: 50 },
      details: {
        description: "One of the major rivers of peninsular India, relatively less polluted.",
        capacity: "45.6 billion cubic meters annually",
        treatments: ["Narmada Valley Development", "Check dams", "Watershed management"]
      }
    },
    {
      id: 4,
      name: "Dal Lake",
      state: "Jammu & Kashmir",
      type: "lake",
      quality: "moderate",
      coordinates: { x: 48, y: 15 },
      details: {
        description: "Famous lake in Srinagar, facing eutrophication issues.",
        issues: ["Eutrophication", "Sewage inflow", "Encroachment"],
        treatments: ["Lake restoration project", "Sewage diversion", "Dredging operations"]
      }
    },
    {
      id: 5,
      name: "Vembanad Lake",
      state: "Kerala",
      type: "lake",
      quality: "good",
      coordinates: { x: 38, y: 85 },
      details: {
        description: "Largest lake in Kerala, important for backwater tourism and fishing.",
        capacity: "2000 sq km area",
        treatments: ["Pollution control", "Mangrove restoration", "Sustainable tourism"]
      }
    },
    {
      id: 6,
      name: "Sardar Sarovar Dam",
      state: "Gujarat",
      type: "reservoir",
      quality: "excellent",
      coordinates: { x: 35, y: 48 },
      details: {
        description: "Largest dam on Narmada river, provides water and electricity.",
        capacity: "9.5 billion cubic meters",
        treatments: ["Water quality monitoring", "Catchment area protection", "Regular maintenance"]
      }
    },
    {
      id: 7,
      name: "Bhakra Nangal Dam",
      state: "Punjab",
      type: "reservoir",
      quality: "good",
      coordinates: { x: 48, y: 22 },
      details: {
        description: "One of India's largest dams, crucial for irrigation in Punjab and Haryana.",
        capacity: "9.34 billion cubic meters",
        treatments: ["Silt management", "Water conservation", "Irrigation efficiency"]
      }
    },
    {
      id: 8,
      name: "Chennai Coastal Waters",
      state: "Tamil Nadu",
      type: "coastal",
      quality: "moderate",
      coordinates: { x: 55, y: 75 },
      details: {
        description: "Coastal water sources including desalination plants.",
        issues: ["Seawater intrusion", "Coastal pollution"],
        treatments: ["Desalination plants", "Coastal protection", "Groundwater recharge"]
      }
    },
    {
      id: 9,
      name: "Mumbai Coastal Zone",
      state: "Maharashtra",
      type: "coastal",
      quality: "poor",
      coordinates: { x: 35, y: 62 },
      details: {
        description: "Heavily polluted coastal waters due to industrial and urban discharge.",
        issues: ["Industrial pollution", "Sewage discharge", "Oil spills"],
        treatments: ["Coastal zone management", "Pollution control", "Waste treatment"]
      }
    },
    {
      id: 10,
      name: "Rajasthan Groundwater",
      state: "Rajasthan",
      type: "groundwater",
      quality: "poor",
      coordinates: { x: 40, y: 40 },
      details: {
        description: "Groundwater in arid regions, often high in fluoride and salinity.",
        issues: ["High fluoride content", "Salinity", "Over-extraction"],
        treatments: ["Water harvesting", "Fluoride removal plants", "Recharge projects"]
      }
    }
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'excellent': return <CheckCircle className="w-4 h-4" />;
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'moderate': return <Info className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'river': return 'bg-blue-500';
      case 'lake': return 'bg-cyan-500';
      case 'groundwater': return 'bg-brown-500';
      case 'reservoir': return 'bg-indigo-500';
      case 'coastal': return 'bg-teal-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredSources = activeFilter === 'all' 
    ? waterSources 
    : waterSources.filter(source => source.type === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Water Sources Across India
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  size="sm"
                  variant={activeFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('all')}
                >
                  All Sources
                </Button>
                <Button
                  size="sm"
                  variant={activeFilter === 'river' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('river')}
                >
                  Rivers
                </Button>
                <Button
                  size="sm"
                  variant={activeFilter === 'lake' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('lake')}
                >
                  Lakes
                </Button>
                <Button
                  size="sm"
                  variant={activeFilter === 'reservoir' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('reservoir')}
                >
                  Reservoirs
                </Button>
                <Button
                  size="sm"
                  variant={activeFilter === 'coastal' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('coastal')}
                >
                  Coastal
                </Button>
                <Button
                  size="sm"
                  variant={activeFilter === 'groundwater' ? 'default' : 'outline'}
                  onClick={() => setActiveFilter('groundwater')}
                >
                  Groundwater
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* India Map SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-96 border-2 border-gray-200 rounded-lg bg-gradient-to-b from-blue-50 to-green-50">
                  {/* Simplified India outline */}
                  <path
                    d="M20 15 L25 10 L35 8 L45 10 L55 12 L65 15 L70 20 L75 25 L78 35 L80 45 L75 55 L70 65 L65 70 L60 75 L55 80 L50 85 L45 88 L40 85 L35 82 L30 78 L25 70 L22 60 L20 50 L18 40 L20 30 L20 15 Z"
                    fill="#e8f4f8"
                    stroke="#2563eb"
                    strokeWidth="0.5"
                  />
                  
                  {/* State boundaries (simplified) */}
                  <g stroke="#94a3b8" strokeWidth="0.2" fill="none">
                    <path d="M20 15 L30 20 L40 25 L50 30 L60 25 L70 20 L75 25" />
                    <path d="M25 35 L35 40 L45 45 L55 40 L65 45 L70 50" />
                    <path d="M30 55 L40 60 L50 65 L60 60 L65 65" />
                  </g>

                  {/* Water Source Markers */}
                  {filteredSources.map((source) => (
                    <g key={source.id}>
                      <circle
                        cx={source.coordinates.x}
                        cy={source.coordinates.y}
                        r="2"
                        className={`${getTypeColor(source.type)} cursor-pointer hover:opacity-80 transition-opacity`}
                        onClick={() => setSelectedSource(source)}
                      />
                      <circle
                        cx={source.coordinates.x}
                        cy={source.coordinates.y}
                        r="3"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        className="cursor-pointer"
                        onClick={() => setSelectedSource(source)}
                      />
                    </g>
                  ))}
                </svg>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Rivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span>Lakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span>Reservoirs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span>Coastal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                    <span>Groundwater</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Panel */}
        <div className="space-y-4">
          {selectedSource ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    {selectedSource.name}
                  </span>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getQualityColor(selectedSource.quality)}`}>
                    {getQualityIcon(selectedSource.quality)}
                    {selectedSource.quality}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>State:</strong> {selectedSource.state}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Type:</strong> {selectedSource.type.charAt(0).toUpperCase() + selectedSource.type.slice(1)}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-gray-700">{selectedSource.details.description}</p>
                </div>

                {selectedSource.details.capacity && (
                  <div>
                    <h4 className="font-semibold mb-2">Capacity</h4>
                    <p className="text-sm text-gray-700">{selectedSource.details.capacity}</p>
                  </div>
                )}

                {selectedSource.details.issues && (
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Issues</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {selectedSource.details.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedSource.details.treatments && (
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Solutions & Treatments</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {selectedSource.details.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-600 mb-2">Select a Water Source</h3>
                <p className="text-sm text-gray-500">
                  Click on any marker on the map to view detailed information about water sources across India.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Sources:</span>
                <span className="font-semibold">{waterSources.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rivers:</span>
                <span className="font-semibold">{waterSources.filter(s => s.type === 'river').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lakes:</span>
                <span className="font-semibold">{waterSources.filter(s => s.type === 'lake').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Good Quality:</span>
                <span className="font-semibold text-green-600">
                  {waterSources.filter(s => s.quality === 'good' || s.quality === 'excellent').length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Need Attention:</span>
                <span className="font-semibold text-red-600">
                  {waterSources.filter(s => s.quality === 'poor').length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndiaWaterMap;
