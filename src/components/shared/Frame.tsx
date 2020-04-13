import styled from 'styled-components'
import React from 'react'

interface Image {
  image: string
  title: string
}

const InnerFrame = styled.div`
  --n: 9;
  --d: 16;
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
export const Frame = (info: Image) => {
  return (
    <InnerFrame>
      <img src={info.image} alt={info.title} />
    </InnerFrame>
  )
}
