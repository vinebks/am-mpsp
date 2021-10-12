import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: 'fit-content',
    '& div': {
      display: 'flex',
      flexwrap: 'nowrap',
      width: '100%',
      '& div.MuiFormControl-root:not(:first-child):not(:last-child)': {
        marginRight: 12.5,
        marginLeft: 12.5,
      },
      '& div.MuiFormControl-root:first-child': {
        marginRight: 12.5,
      },
      '& div.MuiFormControl-root:last-child': {
        marginLeft: 12.5,
      },
      '& div.MuiFormControl-root:only-child': {
        marginRight: 0,
        marginLeft: 0,
      },
      '& .makeStyles-root-152': {
        flexDirection: 'row',
      },
    },
  },
});
type IProps = {
  onSubmit: () => void;
};
export function Form(props: PropsWithChildren<IProps>): JSX.Element {
  const { root } = styles(props);

  const { onSubmit, children } = props;

  return (
    <form onSubmit={onSubmit} className={root}>
      {children}
    </form>
  );
}
