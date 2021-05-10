import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledBackgroundImage = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -10;
`;

export default function NextImage({ url, alt = '', width, height, layout, fit, quality = 75 }) {
  const props = {
    src: url,
    quality,
    alt,
  };

  // with predefined width and height:
  if (width && height) {
    return <Image {...props} width={width} height={height} />;
  }

  // with predefined width and height with layout prop:
  if (width && height && layout) {
    return <Image {...props} width={width} height={height} layout={layout} />;
  }

  // with layout fill (dynamic image size)
  if (fit) {
    return <Image {...props} layout="fill" objectFit={fit} />;
  }

  return (
    <StyledBackgroundImage>
      <Image {...props} layout="fill" objectFit="cover" />
    </StyledBackgroundImage>
  );
}
