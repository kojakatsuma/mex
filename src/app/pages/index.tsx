import Link from 'next/link';
import { Typography, Link as MuiLink, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    cursor: 'pointer'
  }
}))

export default () => {
  const { link } = useStyles()
  return (
    <>
      <Typography variant='h1'>Mex</Typography>
      <Typography variant='h6'>here is mexico.</Typography>
      <br />
      <Link href='log'>
        <MuiLink className={link} variant='h2' underline='none'>log</MuiLink>
      </Link>
      <br />
      <Link href='text'>
        <MuiLink className={link} variant='h2' underline='none'>text</MuiLink>
      </Link>
    </>
  )
}
