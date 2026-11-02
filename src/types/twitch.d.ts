// the options when you init the player
interface TwitchPlayerOptions {
    width: number | string;
    height: number | string;
    channel: string;
    muted: boolean;
    layout: string;
    parent: string[];
}

// result of new Twitch.Player
interface TwitchPlayerInstance {
    addEventListener(event: string, callback: () => void): void;
}

// the events and such
interface TwitchPlayerConstructor {
    new (elementId: string, options: TwitchPlayerOptions): TwitchPlayerInstance;
    ONLINE: string;
    OFFLINE: string;
}

declare global {
    interface Window {
        Twitch?: {
            Player: TwitchPlayerConstructor;
        }
    }
}

export {};