import {Expertise} from '../expertises/expertise';


export interface Technician {
  id: number;
  firstName: string;
  lastName: string;
  expertises: Expertise[];
}
