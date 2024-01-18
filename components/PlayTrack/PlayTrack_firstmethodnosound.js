import React, { useState, useEffect } from 'react';
import "./PlayTrack.css";

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function PlayTrack (props) {

    const [is_paused, setPaused] = useState(false);
    const [is_playing, setPlay] = useState(true);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('login ready', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();

        };
    }, []);

    function handleClick (){
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying)
    }

        return (
            <>
                 <div className="container">
                    <div className="PlayTrack">

                        <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />

                        <div className="now-playing__side">
                            <div className="now-playing__name">{current_track.name}</div>
                            <div className="now-playing__artist">{current_track.artists[0].name}</div>
                            <button className="PlayButton" onClick={handleClick}> {isPlaying ? 'Pause' : 'Play'} </button>

                          


                        </div>
                    </div>
                </div>
                </>
        );
    }



export default PlayTrack;