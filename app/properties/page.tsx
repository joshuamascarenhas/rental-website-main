'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Property } from '@/lib/models/Property';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesListPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>All Properties</h1>

      {loading && <div className={styles.loading}>Loading...</div>}

      {!loading && properties.length > 0 && (
        <div className={styles.grid}>
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      {!loading && properties.length === 0 && (
        <div className={styles.emptyState}>
          No properties yet.
          <a href="/properties/new" className={styles.link}>
            {' '}Add the first property?
          </a>
        </div>
      )}
    </section>
  );
}
