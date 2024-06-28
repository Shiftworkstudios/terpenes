import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const terpenes = [
  { name: 'Geraniol', aroma: 'Floral', effects: ['Anti-inflammatory', 'Antioxidant'], vaporPoint: '230°C' },
  { name: 'Borneol', aroma: 'Woody', effects: ['Anti-inflammatory', 'Analgesic'], vaporPoint: '210°C' },
  { name: 'Camphene', aroma: 'Earthy', effects: ['Antioxidant', 'Cardiovascular benefits'], vaporPoint: '159°C' },
  { name: 'Delta-3-Carene', aroma: 'Sweet, earthy', effects: ['Anti-inflammatory', 'Bone-protective'], vaporPoint: '168°C' },
  { name: 'Eucalyptol', aroma: 'Minty', effects: ['Anti-inflammatory', 'Antibacterial'], vaporPoint: '176°C' },
  { name: 'α-Bisabolol', aroma: 'Floral', effects: ['Anti-inflammatory', 'Antimicrobial'], vaporPoint: '153°C' },
  { name: 'Limonene', aroma: 'Citrus', effects: ['Mood elevation', 'Anti-anxiety'], vaporPoint: '176°C' },
  { name: 'Linalool', aroma: 'Floral', effects: ['Sedative', 'Anxiolytic'], vaporPoint: '198°C' },
  { name: 'Valencene', aroma: 'Citrus', effects: ['Anti-inflammatory', 'Antiallergic'], vaporPoint: '130°C' },
  { name: 'Phytol', aroma: 'Floral', effects: ['Anxiolytic', 'Antioxidant'], vaporPoint: '203°C' },
  { name: 'Myrcene', aroma: 'Earthy', effects: ['Sedative', 'Analgesic'], vaporPoint: '168°C' },
  { name: 'α-Pinene', aroma: 'Pine', effects: ['Anti-inflammatory', 'Bronchodilator'], vaporPoint: '156°C' },
  { name: 'Ocimene', aroma: 'Sweet, herbal', effects: ['Antiviral', 'Anti-inflammatory'], vaporPoint: '50°C' },
  { name: 'β-Ocimene', aroma: 'Sweet, herbal', effects: ['Antiviral', 'Anti-inflammatory'], vaporPoint: '177°C' },
  { name: 'Trans-Nerolidol', aroma: 'Floral, woody', effects: ['Sedative', 'Antiparasitic'], vaporPoint: '122°C' },
  { name: 'β-Caryophyllene', aroma: 'Spicy', effects: ['Anti-inflammatory', 'Analgesic'], vaporPoint: '160°C' },
  { name: 'α-Humulene', aroma: 'Woody, earthy', effects: ['Anti-inflammatory', 'Appetite suppressant'], vaporPoint: '198°C' },
  { name: 'β-Pinene', aroma: 'Pine', effects: ['Anti-inflammatory', 'Bronchodilator'], vaporPoint: '166°C' },
  { name: 'Terpinolene', aroma: 'Herbal', effects: ['Antioxidant', 'Sedative'], vaporPoint: '186°C' },
  { name: 'Isopulegol', aroma: 'Minty', effects: ['Anxiolytic', 'Gastroprotective'], vaporPoint: '185°C' },
  { name: 'Guaiol', aroma: 'Woody', effects: ['Anti-inflammatory', 'Antimicrobial'], vaporPoint: '92°C' },
  { name: 'Caryophyllene Oxide', aroma: 'Woody, spicy', effects: ['Analgesic', 'Anti-fungal'], vaporPoint: '256°C' },
  { name: 'Fenchol', aroma: 'Camphor-like', effects: ['Antibacterial', 'Antioxidant'], vaporPoint: '201°C' },
  { name: 'Sabinene', aroma: 'Woody, spicy', effects: ['Anti-inflammatory', 'Antioxidant'], vaporPoint: '163°C' },
  { name: 'α-Terpineol', aroma: 'Floral', effects: ['Sedative', 'Antioxidant'], vaporPoint: '219°C' },
  { name: 'γ-Terpinene', aroma: 'Citrusy', effects: ['Antioxidant', 'Anti-inflammatory'], vaporPoint: '183°C' },
  { name: 'α-Phellandrene', aroma: 'Minty', effects: ['Anti-inflammatory', 'Analgesic'], vaporPoint: '159°C' },
  { name: 'Citronellol', aroma: 'Citrus', effects: ['Anti-inflammatory', 'Antispasmodic'], vaporPoint: '225°C' },
  { name: 'Nerol', aroma: 'Sweet, rose-like', effects: ['Sedative', 'Anti-inflammatory'], vaporPoint: '224°C' },
  { name: 'p-Cymene', aroma: 'Woody', effects: ['Anti-inflammatory', 'Antimicrobial'], vaporPoint: '177°C' },
  { name: 'Geranyl Acetate', aroma: 'Floral', effects: ['Anti-inflammatory', 'Antimicrobial'], vaporPoint: '245°C' },
  { name: 'Menthol', aroma: 'Minty', effects: ['Analgesic', 'Anti-inflammatory'], vaporPoint: '212°C' },
  { name: 'Pulegone', aroma: 'Minty', effects: ['Antipyretic', 'Anti-inflammatory'], vaporPoint: '224°C' },
  { name: 'α-Cedrene', aroma: 'Woody', effects: ['Anti-inflammatory', 'Antiseptic'], vaporPoint: '262°C' },
  { name: 'Camphor', aroma: 'Minty', effects: ['Analgesic', 'Antispasmodic'], vaporPoint: '204°C' },
  { name: 'Isoborneol', aroma: 'Woody', effects: ['Antiviral', 'Anti-inflammatory'], vaporPoint: '218°C' },
  { name: 'Farnesene', aroma: 'Woody, citrus', effects: ['Anti-inflammatory', 'Antimicrobial'], vaporPoint: '280°C' },
  { name: 'α-Terpinene', aroma: 'Woody', effects: ['Antioxidant', 'Anti-inflammatory'], vaporPoint: '174°C' },
  { name: 'Carene', aroma: 'Sweet, pungent', effects: ['Anti-inflammatory', 'Bone-protective'], vaporPoint: '168°C' },
  { name: 'Sabinene Hydrate', aroma: 'Spicy', effects: ['Antioxidant', 'Antimicrobial'], vaporPoint: '194°C' }
];

const TerpeneCard = ({ terpene }) => (
  <Card className="w-full max-w-sm m-2">
    <CardHeader className="font-bold text-lg">{terpene.name}</CardHeader>
    <CardContent>
      <p><strong>Aroma:</strong> {terpene.aroma}</p>
      <p><strong>Effects:</strong> {terpene.effects.join(', ')}</p>
      <p><strong>Vaporization Point:</strong> {terpene.vaporPoint}</p>
    </CardContent>
  </Card>
);

const TerpeneInfo = () => (
  <div className="p-4 bg-green-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">What are Terpenes?</h2>
    <p>Terpenes are aromatic compounds found in many plants, especially conifers and citrus fruits. They're responsible for the distinct smells of many plants and have various potential health benefits. Terpenes play a crucial role in plant defense mechanisms and can also affect animal behavior when released into the air.</p>
  </div>
);

const TerpeneEffects = () => (
  <div className="p-4 bg-blue-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">Common Terpene Effects</h2>
    <ul className="list-disc list-inside">
      <li>Anti-inflammatory</li>
      <li>Analgesic (pain relief)</li>
      <li>Anxiolytic (anxiety reduction)</li>
      <li>Sedative</li>
      <li>Mood elevation</li>
      <li>Antioxidant</li>
      <li>Antimicrobial</li>
      <li>Bronchodilator</li>
      <li>Antiallergic</li>
      <li>Bone-protective</li>
    </ul>
  </div>
);

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const terpenesPerPage = 9;

  const filteredTerpenes = terpenes.filter(terpene =>
    terpene.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    terpene.aroma.toLowerCase().includes(searchTerm.toLowerCase()) ||
    terpene.effects.some(effect => effect.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastTerpene = currentPage * terpenesPerPage;
  const indexOfFirstTerpene = indexOfLastTerpene - terpenesPerPage;
  const currentTerpenes = filteredTerpenes.slice(indexOfFirstTerpene, indexOfLastTerpene);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Comprehensive Terpenes Dashboard</h1>
      
      <Tabs defaultValue="info" className="w-full">
        <TabsList>
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="effects">Effects</TabsTrigger>
          <TabsTrigger value="terpenes">Terpenes</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <TerpeneInfo />
        </TabsContent>
        <TabsContent value="effects">
          <TerpeneEffects />
        </TabsContent>
        <TabsContent value="terpenes">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search terpenes..."
              className="w-full p-2 pl-10 border rounded"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center">
            {currentTerpenes.map((terpene, index) => (
              <TerpeneCard key={index} terpene={terpene} />
            ))}
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-1 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              <ChevronLeft />
            </button>
            <span>{currentPage} of {Math.ceil(filteredTerpenes.length / terpenesPerPage)}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastTerpene >= filteredTerpenes.length}
              className="mx-1 p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              <ChevronRight />
            </button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 p-4 bg-yellow-100 rounded-lg flex items-start">
        <AlertCircle className="mr-2 flex-shrink-0" />
        <p className="text-sm">
          Disclaimer: This information is for educational purposes only and not intended as medical advice. Always consult with a healthcare professional before using terpenes for health purposes.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
