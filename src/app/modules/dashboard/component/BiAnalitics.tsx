/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Box } from '@material-ui/core';

export default function Analise(): JSX.Element {
  return (
    <Box
      display="flex"
      flex={1}
      style={{ backgroundColor: '#1b1c1c' }}
      justifyContent="center"
      alignItems="center"
    >
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        width="75%"
        height="870px"
        src="https://app.powerbi.com/view?r=eyJrIjoiMmJmMWJmYzUtZGIwOS00ZDlhLWE2ZjktMDM2MzI3M2EyZDc5IiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9&pageName=ReportSection7c1dbbb383896ce702cc"
        frameBorder={0}
        allowFullScreen={true}
      />
    </Box>
  );
}
