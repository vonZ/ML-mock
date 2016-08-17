import React, {PropTypes} from 'react';

const Hero = ({imo, bgImage}) => {
  const bgImgStyle = {
    backgroundImage: 'url(https://bytebucket.org/memryline/memryline.web/raw/1f6e82b1ae07c9824a3dd0cea143d861c4571029/Memryline/Resources/Images/4.jpg?token=1c265ec7ed34272c55722af5125970fd7af5f15e)'
  }
  return (
    <div className="hero-section" style={bgImgStyle}>
      <div className="overflow-description">
          <div className="row">
              <div className="column">
                  <div className="overflow-description__content text-center">
                      <h1 className="overflow-description__heading">Till minne av</h1>
                      <span className="overflow-description__main">{imo}</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  imo: PropTypes.string,
  bgImage: PropTypes.string
}

export default Hero;
