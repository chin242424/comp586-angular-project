import {Appliance} from '../appliances/appliance';

export interface Drop {
  id: number;
  date: string;
  description: string;
  appliance: Appliance;
}
