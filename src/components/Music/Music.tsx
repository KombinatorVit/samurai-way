// Music.jsx
import React from 'react';
import styles from './Music.module.css';

const Music = () => {
    const musicData = [
        { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:30' },
        { id: 2, title: 'Track 2', artist: 'Artist 2', duration: '4:15' },
        { id: 3, title: 'Melody 3', artist: 'Artist 3', duration: '2:50' },
    ];
    
    return (
        <div className={styles.music}>
            <h2>My Music Playlist</h2>
            {musicData.map(track => (
                <div key={track.id} className={styles.musicItem}>
                    <p>{track.title} - {track.artist} ({track.duration})</p>
                </div>
            ))}
        </div>
    );
};

export default Music;
