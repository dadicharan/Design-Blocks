
export enum Category {
  ALL = 'All',
  HALL = 'Hall',
  KITCHEN = 'Kitchen',
  BEDROOM = 'Bedroom',
  BATHROOM = 'Bathroom',
  BALCONY = 'Balcony'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}
