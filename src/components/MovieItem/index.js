import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="close-button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="25" color="#231f20" />
          </button>
          <div className="video-player-container">
            <ReactPlayer url={videoUrl} controls className="video-player" />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
