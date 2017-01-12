//CWF Note: this file is not needed if you are using 'in-memory-data.service.ts', which is defined in Tour-of-Heros: Lesson 7, 'HTTP'

import { Hero } from './hero';

//CWF Note: declare variable HEROES of type Hero, an array with the element objects defined inline
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
