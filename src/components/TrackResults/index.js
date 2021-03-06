import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AudioPlayer from 'src/components/AudioPlayer';

const TrackResults = ({ results }) => (

  <Card.Group centered>
    {results?.tracks?.items.map((track) => (
      <Card
        key={track.id}
        image={track.album.images && track.album.images.length > 0 && track.album.images[0].url}
        header={track.name}
        meta={track.artist}
        extra={<AudioPlayer url={track.preview_url} />}
      />
    ))}
  </Card.Group>

);

TrackResults.propTypes = {
  results: PropTypes.object.isRequired,
};

export default TrackResults;
