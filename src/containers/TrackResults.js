import { connect } from 'react-redux';

import TrackResults from 'src/components/TrackResults';

const mapStateToProps = (state) => ({
  results: state.items,
});

export default connect(mapStateToProps)(TrackResults);
