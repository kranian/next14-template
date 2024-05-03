function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
// Ignore all type errors in this file (it should only appear in development in other way https://stackoverflow.com/questions/69091242/nextjs-how-to-type-error-page-with-typescript)