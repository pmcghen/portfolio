import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../scss/components/_card.scss';

const HomepageCard = ({ img, alt, link }) => {
  const image = getImage(img);
  return (
    <div className="card">
      <Link to={link}>
        <GatsbyImage
          image={image}
          alt={alt}
        />
      </Link>
    </div>
  )
}

export default HomepageCard;
