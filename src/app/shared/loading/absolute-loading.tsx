/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Box } from '@material-ui/core';
import Loading from '.';

type IProps = {
  color?: 'secondary' | 'primary';
  width?: number;
};
export default function AbsoluteLoading(props: IProps): JSX.Element {
  return (
    <Box
      display="flex"
      flex={1}
      position="absolute"
      top={0}
      bottom={0}
      right={0}
      left={0}
      bgcolor="rgba(18, 42, 78, 0.016)"
      zIndex={99}
    >
      <Loading {...props} />
    </Box>
  );
}
