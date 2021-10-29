import React from 'react';
import PropTypes from 'prop-types';
import withPretty from './withPretty';
import DateTime from './DateTime';

const DateTimePretty = withPretty(DateTime);

function Video({ url, date }) {
  return (
    <div className="video">
      <iframe src={url} title={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      <DateTimePretty date={date} />
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Video;
