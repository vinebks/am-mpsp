import React from 'react';
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    dfMessenger: {
      dfMessengerBotMessage: '#878fac',
    },
  }),
);

export default function HomeUser(): JSX.Element {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      // justifyContent="flex-end"
      alignItems="center"
      flex={1}
      paddingRight={3}
    >
      <Box
        display="flex"
        // justifyContent="flex-end"
        alignItems="center"
        height="100%"
        flex={1}
        paddingLeft={3}
        paddingRight={3}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
          height="80%"
          boxShadow={0}
          paddingRight={2}
          style={{
            backgroundColor: 'transparent',
            borderRadius: '20px',
          }}
        >
          <Box
            justifyContent="flex-end"
            width="50%"
            height="95%"
            boxShadow={5}
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              width="97.5%"
              margin={1}
              height="15%"
              boxShadow={0}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
              }}
            >
              <TextField
                label="Insira o numero do protocolo"
                style={{ width: '80%', color: 'white', margin: '10px' }}
              />

              <Button
                variant="contained"
                style={{
                  borderRadius: '50px',
                  backgroundColor: '#2e547e',
                  color: 'white',
                  textTransform: 'capitalize',
                  height: '80%',
                  width: '20%',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                Buscar
              </Button>
            </Box>
            <Box
              // display="flex"
              //  alignItems="center"
              width="100%"
              margin={0}
              height="81.5%"
              boxShadow={0}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
              }}
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
                height="15%"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="30%"
                  margin={1}
                  height="80%"
                  boxShadow={3}
                  color="white"
                  style={{
                    backgroundColor: '#2e547e',
                    borderRadius: '20px',
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      borderRadius: '20px',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                      }}
                    >
                      Criar novo chamado
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="97.5%"
                margin={1}
                height="80%"
                boxShadow={3}
                color="white"
                style={{
                  backgroundColor: '#2e547e',
                  borderRadius: '20px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="25%"
        height="80%"
        paddingRight={3}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="95%"
          boxShadow={5}
          style={{ backgroundColor: 'white', borderRadius: '20px' }}
        >
          <iframe
            title="teste"
            allow="microphone;"
            width="97%"
            height="97%"
            style={{
              borderRadius: '20px',
              border: 'none',
            }}
            src="https://console.dialogflow.com/api-client/demo/embedded/b82bedfb-b617-41dd-8167-47fb1d43c0ac"
          />
        </Box>
      </Box>
    </Box>
  );
}
