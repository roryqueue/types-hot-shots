// Type definitions for hot-shots 4.4
// Project: https://github.com/brightcove/hot-shots
// Definitions by: Rory Quinlan <https://github.com/roryqueue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Client;

interface SendMetric {
    (
      stat: string|string[],
      value: number,
      sampleRate?: number,
      tags?: string[],
      callback?: (error: Error|null, sentBytes: number) => void 
    ): void;
}

declare class Client {
    constructor(
        host: string,
        port: string|number,
        prefix?: string,
        suffix?: string,
        globalize?: boolean,
        cacheDns?: boolean,
        mock?: boolean,
        globalTags?: string[],
        errorHandler?: (err: Error) => void,
        maxBufferSize?: number,
        bufferFlushInterval?: number,
        sampleRate?: number
    );

    timing(
      stat: string|string[],
      time: number,
      sampleRate?: number,
      tags?: string[],
      callback?: (error: Error|null, sentBytes: number) => void 
    ): void;

    static increment: SendMetric;
    static decrement: SendMetric;
    static gauge: SendMetric;
    static histogram: SendMetric;
    static unique: SendMetric;
    static set: SendMetric;
}
