'use client';

import { useState } from 'react';
import styles from './PropertyForm.module.css';

interface PropertyFormProps {
  landlordId: string;
  onSuccess: () => void;
}

export default function PropertyForm({ landlordId, onSuccess }: PropertyFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          address,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          landlordId,
        }),
      });
      if (!res.ok) throw new Error('Failed to create property');
      setTitle('');
      setDescription('');
      setAddress('');
      setLatitude('');
      setLongitude('');
      onSuccess();
    } catch (err: any) {
      setError(err.message || 'Error saving property');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.heading}>Add New Property</h2>

      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className={styles.textarea}
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Address"
        className={styles.input}
        value={address}
        onChange={e => setAddress(e.target.value)}
        required
      />

      <div className={styles.flexRow}>
        <input
          type="text"
          placeholder="Latitude"
          className={`${styles.input} ${styles.halfWidth}`}
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Longitude"
          className={`${styles.input} ${styles.halfWidth}`}
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
          required
        />
      </div>

      <button disabled={loading} className={styles.button} type="submit">
        {loading ? 'Saving...' : 'Submit Property'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
