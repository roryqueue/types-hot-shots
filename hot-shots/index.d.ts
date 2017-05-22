// Type definitions for hot-shots 4.4
// Project: https://github.com/brightcove/hot-shots
// Definitions by: Rory Quinlan <https://github.com/roryqueue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = HotShotClient;

interface SendMetric {
    (
      stat: string|string[],
      value: number,
      sampleRate?: number,
      tags?: string[],
      callback?: ErrorOrBytesCallback
    ): void;
}

type ErrorOrBytesCallback = (error?: Error|null, sentBytes?: number) => void 


declare class HotShotClient {
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
    callback?: ErrorOrBytesCallback
  ): void;

  static increment: SendMetric;
  static decrement: SendMetric;
  static gauge: SendMetric;
  static histogram: SendMetric;
  static unique: SendMetric;
  static set: SendMetric;

  check(
    name: string,
    status: 0 | 1 | 2 | 3,
    options?: {
      date_happened?: Date,
      hostname?: string,
      message?: string
    },
    tags?: ReadonlyArray<string> | ErrorOrBytesCallback,
    callback?: ErrorOrBytesCallback
  ): void

  event(
    title: string,
    text?: string,
    options?: {
      date_happened?: Date,
      hostname?: string,
      aggregation_key?: string,
      priority?: 'normal' | 'low',
      source_type_name?: string,
      alert_type?: 'error' | 'warning' | 'info' | 'success',
    },
    tags?: ReadonlyArray<string> | ErrorOrBytesCallback,
    callback?: ErrorOrBytesCallback
  ): void

  sendAll(
    stat: string | ReadonlyArray<string>,
    value: number,
    sampleRate?: number,
    tag?: ReadonlyArray<string>,
    callback?: ErrorOrBytesCallback
  ): void
}
