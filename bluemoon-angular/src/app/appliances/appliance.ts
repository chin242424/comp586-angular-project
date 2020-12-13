import {Customer} from '../customers/customer';
import {ApplianceType} from '../appliancetypes/appliancetype';
import {Drop} from '../drops/drop';


export interface Appliance {
  id: number;
  name: string;
  purchaseDate: string;
  type: ApplianceType;
  customer: Customer;
  drops: Drop[];
}
