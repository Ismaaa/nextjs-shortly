import React from 'react';
import Title from '../elements/Title';
import Text from '../elements/Text';
import Button from '../elements/Button';

const Headline = () => (
  <div className="Headline">
    <Title text="More than just shorter links" />
    <Text left>
      Build your brand's recognition and get detailed insights on how your links
      are performing.
    </Text>
    <div className="section">
      <Button title="Get Started" rounded left />
    </div>
  </div>
);

export default Headline;
