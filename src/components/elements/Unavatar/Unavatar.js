import React from 'react'
import { Image } from 'components/elements'
import styled from 'styled-components'

const StyledImage = styled(Image)`
  max-width: inherit;
`

export default ({ from = '', query, ...props }) => (
  <StyledImage
    borderRadius={2}
    src={`https://unavatar.now.sh/${from ? `${from}/${query}` : query}`}
    height='100%'
    {...props}
  />
)
