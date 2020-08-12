import React from 'react';
import Card from '../Card';

const Steps = () => (
  <div className="Steps">
    <Card
      image="/assets/icon-brand-recognition.svg"
      title="Brand Recognition"
      description="Boost your brand recognition with each click. Generic links don't mean a
      thing. Branded links help instil confidence in your content."
      line
    />
    <Card
      image="/assets/icon-detailed-records.svg"
      title="Detailed Records"
      description="Gain insights into who is clicking your links. Knowing when and where
  people engage with your content helps inform better decisions."
      line
    />
    <Card
      image="/assets/icon-fully-customizable.svg"
      title="Fully Customizable"
      description="Improve brand awareness and content discoverability through customizable
  links, supercharging audience engagement."
    />
  </div>
);

export default Steps;
