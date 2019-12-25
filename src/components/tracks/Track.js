import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCompactDisc, faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { Link }from 'react-router-dom';


const Track = (props) => {
    const {track} = props;
    console.log(track)
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="card-text">
                        <strong><FontAwesomeIcon icon={faPlay} /> Track: </strong>{track.track_name} <br />
                        <strong><FontAwesomeIcon icon={faCompactDisc} /> Album: </strong>{track.album_name}
                    </p>
                    <Link className="btn btn-dark btn-block" to={`lyrics/track/${track.track_id}`} ><FontAwesomeIcon icon={faChevronRight} /> View Lyrics</Link>
                </div>
            </div>
        </div>
    )
}

export default Track;