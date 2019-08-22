import React from 'react';
import './organizational.desktop.scss';
import './organizational.mobile.scss';

export const SectionTitle = props => {
  const titleLow = `${props.section}`.toLowerCase().replace(' ', '');

  return (
    <div className={`section__title section__title__${titleLow}`}>
      { props.section}
    </div>
  )
}