import React from 'react';

export default function Error({ statusCode }) {
  return <h1>{statusCode ? `Server Error: ${statusCode}` : 'Client Error'}</h1>;
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};
