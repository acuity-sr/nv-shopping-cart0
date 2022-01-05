// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import faker, * as Faker from "faker";
import { createApi } from "unsplash-js";
import fetch from "cross-fetch";
import chalk from "chalk";

let _startTime: number;

export function init(startTime: number, seed: number) {
  faker.seed(seed);
  _startTime = startTime;
  return faker;
}

/**
 * Generates a pseudo random CUID - predictability being derived from faker.seed().
 */
export function cuid(): string {
  _startTime += faker.datatype.number({ min: 1, max: 1000 });
  return [
    `c`,
    new Date(_startTime).getTime().toString(36),
    faker.datatype.number().toString(36).padStart(4, "0"),
    `fake`,
    faker.random.alphaNumeric(8),
  ].join(``);
}

/**
 * Provides a monotonically increasing timeline from startTime
 */
export function now(): string {
  _startTime += faker.datatype.number({ min: 1, max: 1000 });
  return new Date(_startTime).toISOString();
}

export function excludeRelation(relation: string, stack: string[]): boolean {
  return stack.includes(relation);
}

/**
 * An implementation of the autoincrement function for mocking/seeding the database
 * Invoke within model mocker files that require it, to create an auto-incrementor.
 */
export function createAutoIncrementor() {
  return () => {
    let counter = 0;
    return (): number => ++counter;
  };
}

/**
 * Optionally return `val` or `undefined`
 */
export function opt<T>(val: T): T | undefined {
  return faker.datatype.boolean() ? val : undefined;
}

/**
 * Get a number - count or a random number between min and max
 */
export function getCount({
  count,
  min,
  max,
}: {
  count?: number;
  min?: number;
  max?: number;
}): number {
  return count !== undefined ? count : faker.datatype.number({ min, max });
}

/**
 * remove all undefined's, Null's, [], {} from input object
 * useful to clean up randomness in seeder objects
 */
export function removeEmpties(
  obj: Record<string, unknown>
): Record<string, unknown> | undefined {
  const _rmEmpties = (_obj: unknown): unknown | undefined => {
    switch (Object.prototype.toString.call(_obj)) {
      case "[object Object]": {
        const result = Object.entries(_obj as Record<string, unknown>).reduce(
          (acc: Record<string, unknown>, [key, val]) => {
            const reduced = _rmEmpties(val);
            if (reduced !== undefined) {
              acc[key] = reduced;
            }
            return acc;
          },
          {}
        );
        return Object.keys(result).length > 0 ? result : undefined;
      }
      case "[object Array]": {
        const reduced = (_obj as unknown[])
          .map((el) => _rmEmpties(el))
          .filter((el) => el !== undefined);
        return reduced.length > 0 ? reduced : undefined;
      }
      case "[object string]": {
        return _obj === "Null" ? undefined : _obj;
      }
      default:
        return _obj;
    }
  };
  return _rmEmpties(obj) as Record<string, unknown> | undefined;
}

/**
 * Unsplash's free plan has low rate-limits. So we create a caching wrapper here,
 * to batch-fetch and cache responses. Additionally, our seeder can call this method
 * in a tight loop. So we creating a gating mechanism so first request wins.
 */
export const unsplash = (() => {
  const _unsplashCache: Record<string, string[]> = {};
  const _prev: Record<string, string[]> = {};
  let unsplashRequest: Record<string, Promise<void>> = {};
  let count: Record<string, { await: number; request: number }> = {};
  // simple debugging aide, to help unroll this logic.
  // Remember, this is code for mock data - not mission critical, but a huge DX convenience.
  // Do enough to make it work, but time to move on....
  let verbose = false;
  let debug = (msg: string) => (verbose ? console.log(msg) : undefined);
  return async function (
    _faker: Faker.FakerStatic,
    args: string = ""
  ): Promise<string> {
    args = args.length ? args : "unicorn";
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      const msg = [
        chalk.red("ERROR: Missing 'process.env.UNSPLASH_ACCESS_KEY'"),
        chalk.yellow(
          "       Please get one @ 'https://unsplash.com/developers' and retry"
        ),
      ].join("\n");
      console.error(msg);
      process.exit(-1);
    }
    const accessKey: string = process.env.UNSPLASH_ACCESS_KEY;

    count[args] = count[args] || { await: 0, request: 0 };
    count[args].request++;
    debug(
      `request '${args}' #${count[args].request}, awaiting: ${count[args].await}`
    );

    _unsplashCache[args] = _unsplashCache[args] || [];
    _prev[args] = _prev[args] || [];

    return new Promise<string>((_resolve, reject) => {
      const idx = count[args].request;
      const resolve = (img: string) => {
        _resolve(img);
      };
      if (_unsplashCache[args].length) {
        debug(
          `resolving from cache '${args}' #${idx}, awaiting: ${count[args].await}`
        );
        const r: string = _unsplashCache[args].shift()!;
        _prev[args].push(r);
        resolve(r);
      } else if (args in unsplashRequest) {
        count[args].await++;
        debug(
          `awaiting previous call for new batch '${args}' #${idx}, awaiting: ${count[args].await}`
        );
        return unsplashRequest[args].then(() => {
          count[args].await--;
          debug(
            `resolved previous call '${args}' #${idx}, awaiting: ${count[args].await}`
          );
          if (_unsplashCache[args].length === 0) {
            debug(
              `recycling images for '${args}' #${idx}, awaiting: ${count[args].await}`
            );
            _unsplashCache[args] = _prev[args];
          }
          if (_unsplashCache[args].length === 0) {
            throw new Error(`No images found for '${args}'`);
          } else {
            if (count[args].await === 0) {
              delete unsplashRequest[args];
            }
            const r = _unsplashCache[args].shift()!;
            _prev[args].push(r);
            resolve(r);
          }
        });
      } else {
        debug(
          `requesting new batch '${args}' #${idx}, awaiting: ${count[args].await}`
        );
        unsplashRequest[args] = createApi({
          accessKey,
          fetch,
        })
          .search.getPhotos({
            query: args === "__*__" ? "unicorns" : args, // reverse empty args placeholder
            perPage: 1000,
            orientation: "landscape",
          })
          .then((result) => {
            _unsplashCache[args] =
              result.response?.results.map((r) => r.urls.small) ?? [];
            if (_unsplashCache[args].length > 0) {
              debug(
                `resolving from fresh-batch '${args}' #${idx}, awaiting: ${count[args].await}`
              );
              resolve(_unsplashCache[args].shift()!);
            } else if (_prev[args].length > 0) {
              debug(
                `recycling images for '${args}' #${idx}, awaiting: ${count[args].await}`
              );
              _unsplashCache[args] = _prev[args];
              resolve(_unsplashCache[args].shift()!);
            } else {
              throw new Error(`No images found for '${args}'`);
            }
          })
          .catch(reject);
      }
    });
  };
})();
