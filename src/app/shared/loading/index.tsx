/* eslint-disable react/require-default-props */
import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

type IProps = {
  color?: 'secondary' | 'primary';
  width?: number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
};
export default function Loading(props: IProps): JSX.Element {
  const { color, justifyContent, width } = props;

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent={justifyContent || 'center'}
      alignItems="center"
    >
      <CircularProgress
        style={{ minWidth: width || 24 }}
        size="large"
        color={color}
      />
    </Box>
  );
}
