"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function VideoEmbed({ videoId, poster, title }) {
    const [playing, setPlaying] = useState(false);
    const [imgSrc, setImgSrc] = useState(
        poster || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    );

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: playing ? 'default' : 'pointer',
                background: '#000',
            }}
            onClick={() => !playing && setPlaying(true)}
        >
            {playing ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
            ) : (
                <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imgSrc}
                        alt={title}
                        onError={() => setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'var(--gold)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <polygon points="5,3 19,12 5,21" />
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
