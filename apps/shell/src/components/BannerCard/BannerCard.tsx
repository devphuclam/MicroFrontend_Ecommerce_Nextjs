'use client';
import React from 'react';
import './BannerCard.scss';
import { StaticImageData } from 'next/image';

type BannerCardProps = {
  label?: string;
  image?: string | StaticImageData;
  height?: string;
};

const BannerCard = ({ label, image, height = '532px' }: BannerCardProps) => {
  return (
    <div
      className='banner-card-container'
      style={{
        height: height,
        backgroundImage: `url(${typeof image === 'string' ? image : image?.src})`,
      }}
    >
      <div className='banner-card-label'>{label}</div>
    </div>
  );
};

export default BannerCard;
