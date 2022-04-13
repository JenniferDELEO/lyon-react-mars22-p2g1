import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoxDetail() {
  const { boite } = useParams();

  return <div>Detail of the box number {boite}</div>;
}
