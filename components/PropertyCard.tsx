import { Property } from '@/lib/models/Property';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ property }: { property: Property }) {
  const badgeClass = property.verificationStatus === 'verified'
    ? styles.badgeVerified
    : property.verificationStatus === 'pending'
      ? styles.badgePending
      : styles.badgeRejected;

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{property.title}</h2>
      <p className={styles.address}><span>Address: </span>{property.address}</p>
      <p className={styles.description}>{property.description}</p>
      <div>
        <span className={`${styles.badge} ${badgeClass}`}>
          {property.verificationStatus.charAt(0).toUpperCase() + property.verificationStatus.slice(1)}
        </span>
        <p className={styles.coordinates}>
          {property.latitude && property.longitude && `Lat: ${property.latitude}, Lng: ${property.longitude}`}
        </p>
      </div>
    </article>
  );
}
