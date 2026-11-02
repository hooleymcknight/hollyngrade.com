'use client';
import { useEffect } from "react";
import Script from 'next/script';

const resizePlayer = () => {
    const iframe = document.querySelector('#twitch-player iframe');
    if (!iframe) return;
    const playerWidth = getComputedStyle(iframe).width.match(/\d+/g);
    if (!playerWidth || !playerWidth.length) return;
    (iframe as HTMLIFrameElement).height = String(Number(playerWidth[0]) * 9 / 16);
}

export default function TwitchPlayer () {
    const initPlayer = (Twitch: Window["Twitch"]) => {
        if (!document.querySelectorAll('#twitch-player *').length && Twitch) {
            const hgTwitch = new Twitch.Player('twitch-player', {
                width: '100%',
                height: 400,
                channel: 'hollyngrade',
                muted: true,
                layout: 'video',
                parent: ['hollyngrade.com']
            });

            hgTwitch.addEventListener(Twitch.Player.ONLINE, () => {
                document.querySelector('#twitch-offline')?.classList.add('hidden');
                document.querySelector('.twitch-player-container')?.classList.remove('hidden');
                resizePlayer();
            });

            hgTwitch.addEventListener(Twitch.Player.OFFLINE, () => {
                document.querySelector('.twitch-player-container')?.classList.add('hidden');
                document.querySelector('#twitch-offline')?.classList.remove('hidden');
            });
        }
    }

    useEffect(() => {
        if (!window.Twitch) {
            initPlayer(window.Twitch);
        }

        resizePlayer();

        window.removeEventListener('resize', resizePlayer);
        window.addEventListener('resize', resizePlayer);
    }, []);

    return (
        <div className="twitch-player-container w-full hidden">
            <div id="twitch-player" className="w-full mt-8"></div>
            <Script
                src="https://player.twitch.tv/js/embed/v1.js"
                onLoad={() => { initPlayer(window.Twitch) }}
            />
        </div>
    )
}