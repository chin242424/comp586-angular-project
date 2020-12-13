// import {Appliance} from '../appliances/appliance';

import {Appliance} from '../appliances/appliance';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  telephone: string;
  appliances: Appliance[];

}
