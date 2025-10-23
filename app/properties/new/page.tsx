"use client";
import { useFirebaseUser } from '@/hooks/useFirebaseUser';
import PropertyForm from '@/components/PropertyForm';

export default function NewPropertyPage() {
  const user = useFirebaseUser();

  // You can add full UI here if you want to show loading/require login
  if (!user) return <div className="text-center mt-10">Please log in as landlord to add a property.</div>;

  return (
    <div>
      <PropertyForm landlordId={user.uid} onSuccess={() => alert('Property created!')} />
    </div>
  );
}
