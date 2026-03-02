'use client';
import { useEffect } from "react";

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
        if (!document.querySelectorAll('#twitch-embed')) {
            setTimeout(embedTwitch, 100);
            return;
        }
        
        if (!document.querySelectorAll('#twitch-embed *').length) {
            new Twitch.Embed("twitch-embed", {
                width: '100%',
                height: 480,
                channel: "hollyngrade",
                muted: false,
                layout: 'video',
                // Only needed if this page is going to be embedded on other websites
                parent: ["hollyngrade.com"]
            });
        }
    }

    useEffect(() => {
        if (!document.querySelectorAll('#twitch-embed *').length && props.live) {
            embedTwitch();
        }

        resizeTE();

        window.removeEventListener('resize', resizeTE);
        window.addEventListener('resize', resizeTE);
    }, []);

    return (
        <div className="twitch-embed-container" data-active={props.live}>
            <div id="twitch-embed" className="w-full mt-8 pb-8"></div>
            <script src="https://embed.twitch.tv/embed/v1.js"></script>
        </div>
    );
}