
import { Category, Project, Service } from './types';

export const PROJECTS: Project[] = [
  { id: '1', title: 'Aetheric Living Hall', category: Category.HALL, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200' },
  { id: '2', title: 'Quantum Kitchen Hub', category: Category.KITCHEN, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200' },
  { id: '3', title: 'Nebula Suite', category: Category.BEDROOM, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200' },
  { id: '4', title: 'Crystal Stream Bath', category: Category.BATHROOM, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200' },
  { id: '5', title: 'Skyline Terrace', category: Category.BALCONY, image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200' },
  { id: '6', title: 'Prism Reception', category: Category.HALL, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200' },
  { id: '7', title: 'Cybernetic Culinary', category: Category.KITCHEN, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200' },
  { id: '8', title: 'Obsidian Rest', category: Category.BEDROOM, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200' },
  { id: '9', title: 'Vertex Balcony', category: Category.BALCONY, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200' },
  { id: '10', title: 'Zenit Bath', category: Category.BATHROOM, image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200' },
];

export const SERVICES: Service[] = [
  { 
    title: 'Bespoke Halls', 
    description: 'Transforming entryways and living areas into grand statements of futuristic luxury.', 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800' 
  },
  { 
    title: 'Smart Kitchens', 
    description: 'Ultra-modern culinary spaces featuring integrated tech and seamless cabinetry.', 
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800' 
  },
  { 
    title: 'Bedroom Sanctuaries', 
    description: 'Quiet, architectural retreats designed for ultimate recovery and digital detox.', 
    image: 'https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=800' 
  },
  { 
    title: 'Custom Cabinetry', 
    description: 'Architectural storage solutions that disappear into the structure of your home.', 
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800' 
  },
  { 
    title: 'Space Visualization', 
    description: 'Full 4K immersive walkthroughs of your future space before a single brick is laid.', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800' 
  },
  { 
    title: 'Commercial Design', 
    description: 'High-performance office environments for the next generation of global industry.', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800' 
  },
];
