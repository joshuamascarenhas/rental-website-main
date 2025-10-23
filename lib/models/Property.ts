// lib/models/Property.ts

export interface Property {
  id: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
  landlordId: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}
