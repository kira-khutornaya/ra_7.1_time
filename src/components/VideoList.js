import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Video from './Video';

function VideoList({ list }) {
  return list.map((item) => (
    <Video
      url={item.url}
      date={item.date}
      key={nanoid()}
    />
  ));
}

VideoList.defaultProps = {
  list: [],
};

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
};

export default VideoList;
