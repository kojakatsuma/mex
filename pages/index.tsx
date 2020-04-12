import Link from 'next/link';
import { Link as MuiLink, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    cursor: 'pointer'
  }
}))

export default () => {
  const { link } = useStyles()
  return (
    <>
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
