import styled, { keyframes } from 'styled-components'
import { Box } from 'components/elements'
import sample from 'lodash/sample'
import range from 'lodash/range'
import React from 'react'
import { radii, cx } from 'theme'

const animate = keyframes`
0%{
  transform: translateY(0) rotate(0deg);
  opacity: 1;
}

100%{
  transform: translateY(-1000px) rotate(720deg);
  opacity: 0;
}
`

const CUBES_N = 30
const CUBES_RANGE = range(1, CUBES_N)

const cubesStyle = CUBES_RANGE.reduce((acc, index) => {
  const size = sample(range(40, 120, 10))
  const left = sample(range(0, 100, 5))
  const delay = sample(range(0, 8))
  const duration = sample(range(8, 25, 1))

  const css = `
  li:nth-child(${index}) {
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation-delay: ${delay}s;
    animation-duration: ${duration}s;
  }
  `
  return acc + css
}, '')

const CubesBackground = styled('ul')`
  li {
    border-radius: ${radii[4]};
    position: absolute;
    display: block;
    list-style: none;
    background: ${props => cx(props.bg)};
    animation: ${animate} 25s linear infinite;
    bottom: -150px;
  }

  ${cubesStyle};
`

export default ({ bg = 'rgba(255, 255, 255, 0.2)', ...props }) => (
  <CubesBackground bg={bg} {...props}>
    {CUBES_RANGE.map(n => (
      <li key={`circles_cube_${n}`} />
    ))}
  </CubesBackground>
)
