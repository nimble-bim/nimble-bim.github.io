import React from 'react';

export const SectionTitle = props => {
  const titleLow = `${props.section}`.toLowerCase().replace(' ', '');

  return (
    <div className={`tagline tagline__${titleLow}`}>
      { props.section}
    </div>
  )
}