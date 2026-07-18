/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppDivision = 'gemini-motors' | 'ev' | 'auto-services' | 'green-tech' | 'about-us';

export type VehicleSubTab = 'lcv' | 'mhcv' | 'ev' | 'gensets';

export interface Vehicle {
  id: string;
  name: string;
  category: 'lcv' | 'mhcv' | 'ev' | 'gensets';
  description: string;
  imageUrl: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface FuelService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  imageUrl?: string;
}

export interface GreenTechProduct {
  id: string;
  title: string;
  category: 'solar-pv' | 'solar-thermal' | 'led' | 'waste';
  description: string;
  benefits: string[];
  imageUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ServiceAppointment {
  model: string;
  registrationNumber: string;
  date: string;
  timeSlot: string;
  companyName: string;
  contactPerson: string;
  phone: string;
}

export interface BulkEnquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedVolume: string;
  requirements: string;
}
