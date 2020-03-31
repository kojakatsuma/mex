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
      <Link href='text/1'>
        <MuiLink className={link} variant='h5' underline='none'>生活を改善する3月</MuiLink>
      </Link>
    </>
  )
}
