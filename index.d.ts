// Functions

type AccessorFn = (_: object) => any;
export function accessor(fn: AccessorFn, fields?: string[], name?: string): AccessorFn;
export function accessorFields(fn: Function): string[];
export function accessorName(fn: Function): string;

export type Order = 'ascending' | 'descending';

export function compare(fields: string | string[] | AccessorFn | AccessorFn[], orders?: Order | Order[]): (a: any, b: any) => number;

export function constant<V>(v: V): () => V;

export function debounce<F extends Function>(delay: number, func: F): F;

export function field(field: string, name?: string): AccessorFn;

export function id(_: object): symbol;

export function identity<V>(v: V): () => V;

export function key(fields: string[], flat?: boolean): (_: object) => string;

export function one(): 1;
export function zero(): 0;
export function truthy(): true;
export function falsy(): false;

// Type Checkers

export function isArray<T>(a: any | T[]): a is T[];
export function isBoolean(a: any): a is boolean;
export function isDate(a: any): a is Date;
export function isFunction(a: any): a is Function;
export function isNumber(a: any): a is number;
export function isObject(a: any): a is object;
export function isRegExp(a: any): a is RegExp;
export function isString(a: any): a is string;

// Type Coercion

export function toBoolean(a: any): boolean;
export function toDate(a: any, parser?: (_: any) => number): number;
export function toNumber(a: any): number;
export function toString(a: any): string;

// Objects

export function extend(target: object, ...source: object[]): object;
export function inherits(child: object, parent: object): object;

export interface FastMap {
  size: number;
  empty: number;
  has: (f: string) => boolean;
  get: (f: string) => any;
  set: (f: string, v: any) => void;
  delete: (f: string) => void;
  clean: () => void;
}
export function fastmap(_?: object): FastMap;

// Arrays

export function array<T extends any[]>(v: T): T;
export function array<T>(v: T): T[];

export function extentIndex(array: number[], accessor?: AccessorFn): number[];

export function merge(compare: (a: any, b: any) => number,
  array1: any[], array2: any[]): any[];
export function merge(compare: (a: any, b: any) => number,
  array1: any[], array2: any[], output?: any[]): void;

export function panLinear(domain: number[], delta: number): number[];
export function panLog(domain: number[], delta: number): number[];
export function panPow(domain: number[], delta: number, exponent: number): number[];

export function peek(array: any[]): any;

export function toSet<T>(array: T[]): { [T: string]: true }

export function visitArray(array: any[] | undefined,
  filter: (any: any) => boolean | undefined,
  visitor: (v: any, i: number, arr: any[]) => void): void;

export function zoomLinear(domain: number[],
  anchor: number | null, scale: number): number[];

export function zoomLog(domain: number[],
  anchor: number | null, scale: number): number[];

export function zoomPow(domain: number[],
  anchor: number | null, scale: number, exponent: number): number[];

// Strings

export function pad(str: string, len: number,
  char?: string, align?: 'left' | 'center' | 'right'): string;

export function repeat(str: string, count: number): string;

export function splitAccessPath(path: string): string[];
export function stringValue(a: any): string;

export function truncate(a: string, length: number,
  align?: 'left' | 'center' | 'right', ellipsis?: string): string;

// Logging

export interface LoggerInterface {
  level: (_: number) => number | LoggerInterface;
  warn(...args: any[]): LoggerInterface;
  info(...args: any[]): LoggerInterface;
  debug(...args: any[]): LoggerInterface;
}

export const None: number;
export const Warn: number;
export const Info: number;
export const Debug: number;

export function logger(_?: number): LoggerInterface;
export function log(...args: any[]): void;
export function error(msg: string): Error;
