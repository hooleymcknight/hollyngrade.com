'use client';
import { useEffect } from "react";
import Script from 'next/script'

const resizeTE = () => {
    const teiFrame = document.querySelector('#twitch-embed iframe');
    if (!teiFrame) return;
    const teWidth = getComputedStyle(teiFrame).width.match(/\d+/g);
    if (!teWidth || !teWidth.length) {
        return;
    }

    teiFrame.height = teWidth[0] * 9 / 16;
}

export default function TwitchEmbed (props) {

    const embedTwitch = () => {
        if (!document.querySelectorAll('#twitch-embed *').length) {
            const hgTwitch = new Twitch.Player("twitch-embed", {
                width: '100%',
                height: 480,
                channel: "hollyngrade",
                muted: true,
                layout: 'video',
                // Only needed if this page is going to be embedded on other websites
                parent: ["hollyngrade.com"]
            });

            hgTwitch.addEventListener(Twitch.Player.ONLINE, () => {
                document.querySelector('.twitch-embed-container').classList.remove('hidden');
                resizeTE();
            });
            hgTwitch.addEventListener(Twitch.Player.OFFLINE, () => {
                document.querySelector('.twitch-embed-container').classList.add('hidden');
            });

            // (new Twitch.Embed...).getPlayer()._playerState.playback uses "Playing" and "Idle"
            // This doesn't use that, but...save the info here anyway. We like to know things.
            
            // hgTwitch.addEventListener(Twitch.Embed.VIDEO_READY, () => {
            //     console.log('video ready');
            //     console.log(hgTwitch.getPlayer()?._playerState.playback); 
            // });
        }
    }

    useEffect(() => {
        if (!window.Twitch && props.live) {
            embedTwitch();
        }

        resizeTE();

        window.removeEventListener('resize', resizeTE);
        window.addEventListener('resize', resizeTE);
    }, []);

    return (
        <div className="twitch-embed-container w-full hidden">
            <div id="twitch-embed" className="w-full mt-8"></div>
            <Script
                src="https://embed.twitch.tv/embed/v1.js"
                onLoad={embedTwitch}
            />
        </div>
    );
}