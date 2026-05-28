
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model entries
 * 
 */
export type entries = $Result.DefaultSelection<Prisma.$entriesPayload>
/**
 * Model entry_plants
 * 
 */
export type entry_plants = $Result.DefaultSelection<Prisma.$entry_plantsPayload>
/**
 * Model locations
 * 
 */
export type locations = $Result.DefaultSelection<Prisma.$locationsPayload>
/**
 * Model photos
 * 
 */
export type photos = $Result.DefaultSelection<Prisma.$photosPayload>
/**
 * Model plant_families
 * 
 */
export type plant_families = $Result.DefaultSelection<Prisma.$plant_familiesPayload>
/**
 * Model plants
 * 
 */
export type plants = $Result.DefaultSelection<Prisma.$plantsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entries
 * const entries = await prisma.entries.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Entries
   * const entries = await prisma.entries.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entries`: Exposes CRUD operations for the **entries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entries.findMany()
    * ```
    */
  get entries(): Prisma.entriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry_plants`: Exposes CRUD operations for the **entry_plants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entry_plants
    * const entry_plants = await prisma.entry_plants.findMany()
    * ```
    */
  get entry_plants(): Prisma.entry_plantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.locationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photos`: Exposes CRUD operations for the **photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photos.findMany()
    * ```
    */
  get photos(): Prisma.photosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plant_families`: Exposes CRUD operations for the **plant_families** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plant_families
    * const plant_families = await prisma.plant_families.findMany()
    * ```
    */
  get plant_families(): Prisma.plant_familiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plants`: Exposes CRUD operations for the **plants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plants
    * const plants = await prisma.plants.findMany()
    * ```
    */
  get plants(): Prisma.plantsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    entries: 'entries',
    entry_plants: 'entry_plants',
    locations: 'locations',
    photos: 'photos',
    plant_families: 'plant_families',
    plants: 'plants'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entries" | "entry_plants" | "locations" | "photos" | "plant_families" | "plants"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      entries: {
        payload: Prisma.$entriesPayload<ExtArgs>
        fields: Prisma.entriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          findFirst: {
            args: Prisma.entriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          findMany: {
            args: Prisma.entriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>[]
          }
          create: {
            args: Prisma.entriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          createMany: {
            args: Prisma.entriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          update: {
            args: Prisma.entriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          deleteMany: {
            args: Prisma.entriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entriesPayload>
          }
          aggregate: {
            args: Prisma.EntriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntries>
          }
          groupBy: {
            args: Prisma.entriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.entriesCountArgs<ExtArgs>
            result: $Utils.Optional<EntriesCountAggregateOutputType> | number
          }
        }
      }
      entry_plants: {
        payload: Prisma.$entry_plantsPayload<ExtArgs>
        fields: Prisma.entry_plantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entry_plantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entry_plantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          findFirst: {
            args: Prisma.entry_plantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entry_plantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          findMany: {
            args: Prisma.entry_plantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>[]
          }
          create: {
            args: Prisma.entry_plantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          createMany: {
            args: Prisma.entry_plantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entry_plantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          update: {
            args: Prisma.entry_plantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          deleteMany: {
            args: Prisma.entry_plantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entry_plantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entry_plantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entry_plantsPayload>
          }
          aggregate: {
            args: Prisma.Entry_plantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry_plants>
          }
          groupBy: {
            args: Prisma.entry_plantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Entry_plantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.entry_plantsCountArgs<ExtArgs>
            result: $Utils.Optional<Entry_plantsCountAggregateOutputType> | number
          }
        }
      }
      locations: {
        payload: Prisma.$locationsPayload<ExtArgs>
        fields: Prisma.locationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findFirst: {
            args: Prisma.locationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findMany: {
            args: Prisma.locationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          create: {
            args: Prisma.locationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          createMany: {
            args: Prisma.locationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.locationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          update: {
            args: Prisma.locationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          deleteMany: {
            args: Prisma.locationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.locationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.locationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      photos: {
        payload: Prisma.$photosPayload<ExtArgs>
        fields: Prisma.photosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.photosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.photosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findFirst: {
            args: Prisma.photosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.photosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findMany: {
            args: Prisma.photosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>[]
          }
          create: {
            args: Prisma.photosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          createMany: {
            args: Prisma.photosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.photosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          update: {
            args: Prisma.photosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          deleteMany: {
            args: Prisma.photosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.photosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.photosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          aggregate: {
            args: Prisma.PhotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotos>
          }
          groupBy: {
            args: Prisma.photosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.photosCountArgs<ExtArgs>
            result: $Utils.Optional<PhotosCountAggregateOutputType> | number
          }
        }
      }
      plant_families: {
        payload: Prisma.$plant_familiesPayload<ExtArgs>
        fields: Prisma.plant_familiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plant_familiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plant_familiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          findFirst: {
            args: Prisma.plant_familiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plant_familiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          findMany: {
            args: Prisma.plant_familiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>[]
          }
          create: {
            args: Prisma.plant_familiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          createMany: {
            args: Prisma.plant_familiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.plant_familiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          update: {
            args: Prisma.plant_familiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          deleteMany: {
            args: Prisma.plant_familiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plant_familiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.plant_familiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plant_familiesPayload>
          }
          aggregate: {
            args: Prisma.Plant_familiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlant_families>
          }
          groupBy: {
            args: Prisma.plant_familiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plant_familiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.plant_familiesCountArgs<ExtArgs>
            result: $Utils.Optional<Plant_familiesCountAggregateOutputType> | number
          }
        }
      }
      plants: {
        payload: Prisma.$plantsPayload<ExtArgs>
        fields: Prisma.plantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          findFirst: {
            args: Prisma.plantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          findMany: {
            args: Prisma.plantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>[]
          }
          create: {
            args: Prisma.plantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          createMany: {
            args: Prisma.plantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.plantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          update: {
            args: Prisma.plantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          deleteMany: {
            args: Prisma.plantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.plantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plantsPayload>
          }
          aggregate: {
            args: Prisma.PlantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlants>
          }
          groupBy: {
            args: Prisma.plantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.plantsCountArgs<ExtArgs>
            result: $Utils.Optional<PlantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    entries?: entriesOmit
    entry_plants?: entry_plantsOmit
    locations?: locationsOmit
    photos?: photosOmit
    plant_families?: plant_familiesOmit
    plants?: plantsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EntriesCountOutputType
   */

  export type EntriesCountOutputType = {
    entry_plants: number
    photos: number
  }

  export type EntriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry_plants?: boolean | EntriesCountOutputTypeCountEntry_plantsArgs
    photos?: boolean | EntriesCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * EntriesCountOutputType without action
   */
  export type EntriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntriesCountOutputType
     */
    select?: EntriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntriesCountOutputType without action
   */
  export type EntriesCountOutputTypeCountEntry_plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entry_plantsWhereInput
  }

  /**
   * EntriesCountOutputType without action
   */
  export type EntriesCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photosWhereInput
  }


  /**
   * Count Type LocationsCountOutputType
   */

  export type LocationsCountOutputType = {
    entries: number
  }

  export type LocationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LocationsCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * LocationsCountOutputType without action
   */
  export type LocationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationsCountOutputType
     */
    select?: LocationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationsCountOutputType without action
   */
  export type LocationsCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entriesWhereInput
  }


  /**
   * Count Type Plant_familiesCountOutputType
   */

  export type Plant_familiesCountOutputType = {
    plants: number
  }

  export type Plant_familiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | Plant_familiesCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes
  /**
   * Plant_familiesCountOutputType without action
   */
  export type Plant_familiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant_familiesCountOutputType
     */
    select?: Plant_familiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Plant_familiesCountOutputType without action
   */
  export type Plant_familiesCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plantsWhereInput
  }


  /**
   * Count Type PlantsCountOutputType
   */

  export type PlantsCountOutputType = {
    entry_plants: number
  }

  export type PlantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry_plants?: boolean | PlantsCountOutputTypeCountEntry_plantsArgs
  }

  // Custom InputTypes
  /**
   * PlantsCountOutputType without action
   */
  export type PlantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantsCountOutputType
     */
    select?: PlantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantsCountOutputType without action
   */
  export type PlantsCountOutputTypeCountEntry_plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entry_plantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model entries
   */

  export type AggregateEntries = {
    _count: EntriesCountAggregateOutputType | null
    _avg: EntriesAvgAggregateOutputType | null
    _sum: EntriesSumAggregateOutputType | null
    _min: EntriesMinAggregateOutputType | null
    _max: EntriesMaxAggregateOutputType | null
  }

  export type EntriesAvgAggregateOutputType = {
    id: number | null
    location_id: number | null
  }

  export type EntriesSumAggregateOutputType = {
    id: number | null
    location_id: number | null
  }

  export type EntriesMinAggregateOutputType = {
    id: number | null
    entry_date: Date | null
    location_id: number | null
    entry: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntriesMaxAggregateOutputType = {
    id: number | null
    entry_date: Date | null
    location_id: number | null
    entry: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntriesCountAggregateOutputType = {
    id: number
    entry_date: number
    location_id: number
    entry: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EntriesAvgAggregateInputType = {
    id?: true
    location_id?: true
  }

  export type EntriesSumAggregateInputType = {
    id?: true
    location_id?: true
  }

  export type EntriesMinAggregateInputType = {
    id?: true
    entry_date?: true
    location_id?: true
    entry?: true
    created_at?: true
    updated_at?: true
  }

  export type EntriesMaxAggregateInputType = {
    id?: true
    entry_date?: true
    location_id?: true
    entry?: true
    created_at?: true
    updated_at?: true
  }

  export type EntriesCountAggregateInputType = {
    id?: true
    entry_date?: true
    location_id?: true
    entry?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EntriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entries to aggregate.
     */
    where?: entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entriesOrderByWithRelationInput | entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entries
    **/
    _count?: true | EntriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntriesMaxAggregateInputType
  }

  export type GetEntriesAggregateType<T extends EntriesAggregateArgs> = {
        [P in keyof T & keyof AggregateEntries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntries[P]>
      : GetScalarType<T[P], AggregateEntries[P]>
  }




  export type entriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entriesWhereInput
    orderBy?: entriesOrderByWithAggregationInput | entriesOrderByWithAggregationInput[]
    by: EntriesScalarFieldEnum[] | EntriesScalarFieldEnum
    having?: entriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntriesCountAggregateInputType | true
    _avg?: EntriesAvgAggregateInputType
    _sum?: EntriesSumAggregateInputType
    _min?: EntriesMinAggregateInputType
    _max?: EntriesMaxAggregateInputType
  }

  export type EntriesGroupByOutputType = {
    id: number
    entry_date: Date
    location_id: number | null
    entry: string
    created_at: Date
    updated_at: Date
    _count: EntriesCountAggregateOutputType | null
    _avg: EntriesAvgAggregateOutputType | null
    _sum: EntriesSumAggregateOutputType | null
    _min: EntriesMinAggregateOutputType | null
    _max: EntriesMaxAggregateOutputType | null
  }

  type GetEntriesGroupByPayload<T extends entriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntriesGroupByOutputType[P]>
            : GetScalarType<T[P], EntriesGroupByOutputType[P]>
        }
      >
    >


  export type entriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry_date?: boolean
    location_id?: boolean
    entry?: boolean
    created_at?: boolean
    updated_at?: boolean
    locations?: boolean | entries$locationsArgs<ExtArgs>
    entry_plants?: boolean | entries$entry_plantsArgs<ExtArgs>
    photos?: boolean | entries$photosArgs<ExtArgs>
    _count?: boolean | EntriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entries"]>



  export type entriesSelectScalar = {
    id?: boolean
    entry_date?: boolean
    location_id?: boolean
    entry?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type entriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entry_date" | "location_id" | "entry" | "created_at" | "updated_at", ExtArgs["result"]["entries"]>
  export type entriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | entries$locationsArgs<ExtArgs>
    entry_plants?: boolean | entries$entry_plantsArgs<ExtArgs>
    photos?: boolean | entries$photosArgs<ExtArgs>
    _count?: boolean | EntriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $entriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entries"
    objects: {
      locations: Prisma.$locationsPayload<ExtArgs> | null
      entry_plants: Prisma.$entry_plantsPayload<ExtArgs>[]
      photos: Prisma.$photosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entry_date: Date
      location_id: number | null
      entry: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["entries"]>
    composites: {}
  }

  type entriesGetPayload<S extends boolean | null | undefined | entriesDefaultArgs> = $Result.GetResult<Prisma.$entriesPayload, S>

  type entriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntriesCountAggregateInputType | true
    }

  export interface entriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entries'], meta: { name: 'entries' } }
    /**
     * Find zero or one Entries that matches the filter.
     * @param {entriesFindUniqueArgs} args - Arguments to find a Entries
     * @example
     * // Get one Entries
     * const entries = await prisma.entries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entriesFindUniqueArgs>(args: SelectSubset<T, entriesFindUniqueArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entriesFindUniqueOrThrowArgs} args - Arguments to find a Entries
     * @example
     * // Get one Entries
     * const entries = await prisma.entries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entriesFindUniqueOrThrowArgs>(args: SelectSubset<T, entriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesFindFirstArgs} args - Arguments to find a Entries
     * @example
     * // Get one Entries
     * const entries = await prisma.entries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entriesFindFirstArgs>(args?: SelectSubset<T, entriesFindFirstArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesFindFirstOrThrowArgs} args - Arguments to find a Entries
     * @example
     * // Get one Entries
     * const entries = await prisma.entries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entriesFindFirstOrThrowArgs>(args?: SelectSubset<T, entriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entries.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entriesWithIdOnly = await prisma.entries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entriesFindManyArgs>(args?: SelectSubset<T, entriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entries.
     * @param {entriesCreateArgs} args - Arguments to create a Entries.
     * @example
     * // Create one Entries
     * const Entries = await prisma.entries.create({
     *   data: {
     *     // ... data to create a Entries
     *   }
     * })
     * 
     */
    create<T extends entriesCreateArgs>(args: SelectSubset<T, entriesCreateArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {entriesCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entries = await prisma.entries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entriesCreateManyArgs>(args?: SelectSubset<T, entriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entries.
     * @param {entriesDeleteArgs} args - Arguments to delete one Entries.
     * @example
     * // Delete one Entries
     * const Entries = await prisma.entries.delete({
     *   where: {
     *     // ... filter to delete one Entries
     *   }
     * })
     * 
     */
    delete<T extends entriesDeleteArgs>(args: SelectSubset<T, entriesDeleteArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entries.
     * @param {entriesUpdateArgs} args - Arguments to update one Entries.
     * @example
     * // Update one Entries
     * const entries = await prisma.entries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entriesUpdateArgs>(args: SelectSubset<T, entriesUpdateArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {entriesDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entriesDeleteManyArgs>(args?: SelectSubset<T, entriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entries = await prisma.entries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entriesUpdateManyArgs>(args: SelectSubset<T, entriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entries.
     * @param {entriesUpsertArgs} args - Arguments to update or create a Entries.
     * @example
     * // Update or create a Entries
     * const entries = await prisma.entries.upsert({
     *   create: {
     *     // ... data to create a Entries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entries we want to update
     *   }
     * })
     */
    upsert<T extends entriesUpsertArgs>(args: SelectSubset<T, entriesUpsertArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entries.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends entriesCountArgs>(
      args?: Subset<T, entriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntriesAggregateArgs>(args: Subset<T, EntriesAggregateArgs>): Prisma.PrismaPromise<GetEntriesAggregateType<T>>

    /**
     * Group by Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entriesGroupByArgs['orderBy'] }
        : { orderBy?: entriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entries model
   */
  readonly fields: entriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends entries$locationsArgs<ExtArgs> = {}>(args?: Subset<T, entries$locationsArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entry_plants<T extends entries$entry_plantsArgs<ExtArgs> = {}>(args?: Subset<T, entries$entry_plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends entries$photosArgs<ExtArgs> = {}>(args?: Subset<T, entries$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entries model
   */
  interface entriesFieldRefs {
    readonly id: FieldRef<"entries", 'Int'>
    readonly entry_date: FieldRef<"entries", 'DateTime'>
    readonly location_id: FieldRef<"entries", 'Int'>
    readonly entry: FieldRef<"entries", 'String'>
    readonly created_at: FieldRef<"entries", 'DateTime'>
    readonly updated_at: FieldRef<"entries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entries findUnique
   */
  export type entriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where: entriesWhereUniqueInput
  }

  /**
   * entries findUniqueOrThrow
   */
  export type entriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where: entriesWhereUniqueInput
  }

  /**
   * entries findFirst
   */
  export type entriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where?: entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entriesOrderByWithRelationInput | entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entries.
     */
    cursor?: entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entries.
     */
    distinct?: EntriesScalarFieldEnum | EntriesScalarFieldEnum[]
  }

  /**
   * entries findFirstOrThrow
   */
  export type entriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where?: entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entriesOrderByWithRelationInput | entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entries.
     */
    cursor?: entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entries.
     */
    distinct?: EntriesScalarFieldEnum | EntriesScalarFieldEnum[]
  }

  /**
   * entries findMany
   */
  export type entriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where?: entriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entriesOrderByWithRelationInput | entriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entries.
     */
    cursor?: entriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    distinct?: EntriesScalarFieldEnum | EntriesScalarFieldEnum[]
  }

  /**
   * entries create
   */
  export type entriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * The data needed to create a entries.
     */
    data: XOR<entriesCreateInput, entriesUncheckedCreateInput>
  }

  /**
   * entries createMany
   */
  export type entriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entries.
     */
    data: entriesCreateManyInput | entriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entries update
   */
  export type entriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * The data needed to update a entries.
     */
    data: XOR<entriesUpdateInput, entriesUncheckedUpdateInput>
    /**
     * Choose, which entries to update.
     */
    where: entriesWhereUniqueInput
  }

  /**
   * entries updateMany
   */
  export type entriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entries.
     */
    data: XOR<entriesUpdateManyMutationInput, entriesUncheckedUpdateManyInput>
    /**
     * Filter which entries to update
     */
    where?: entriesWhereInput
    /**
     * Limit how many entries to update.
     */
    limit?: number
  }

  /**
   * entries upsert
   */
  export type entriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * The filter to search for the entries to update in case it exists.
     */
    where: entriesWhereUniqueInput
    /**
     * In case the entries found by the `where` argument doesn't exist, create a new entries with this data.
     */
    create: XOR<entriesCreateInput, entriesUncheckedCreateInput>
    /**
     * In case the entries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entriesUpdateInput, entriesUncheckedUpdateInput>
  }

  /**
   * entries delete
   */
  export type entriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    /**
     * Filter which entries to delete.
     */
    where: entriesWhereUniqueInput
  }

  /**
   * entries deleteMany
   */
  export type entriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entries to delete
     */
    where?: entriesWhereInput
    /**
     * Limit how many entries to delete.
     */
    limit?: number
  }

  /**
   * entries.locations
   */
  export type entries$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    where?: locationsWhereInput
  }

  /**
   * entries.entry_plants
   */
  export type entries$entry_plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    where?: entry_plantsWhereInput
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    cursor?: entry_plantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entry_plantsScalarFieldEnum | Entry_plantsScalarFieldEnum[]
  }

  /**
   * entries.photos
   */
  export type entries$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    where?: photosWhereInput
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    cursor?: photosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * entries without action
   */
  export type entriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
  }


  /**
   * Model entry_plants
   */

  export type AggregateEntry_plants = {
    _count: Entry_plantsCountAggregateOutputType | null
    _avg: Entry_plantsAvgAggregateOutputType | null
    _sum: Entry_plantsSumAggregateOutputType | null
    _min: Entry_plantsMinAggregateOutputType | null
    _max: Entry_plantsMaxAggregateOutputType | null
  }

  export type Entry_plantsAvgAggregateOutputType = {
    entry_id: number | null
    plant_id: number | null
  }

  export type Entry_plantsSumAggregateOutputType = {
    entry_id: number | null
    plant_id: number | null
  }

  export type Entry_plantsMinAggregateOutputType = {
    entry_id: number | null
    plant_id: number | null
  }

  export type Entry_plantsMaxAggregateOutputType = {
    entry_id: number | null
    plant_id: number | null
  }

  export type Entry_plantsCountAggregateOutputType = {
    entry_id: number
    plant_id: number
    _all: number
  }


  export type Entry_plantsAvgAggregateInputType = {
    entry_id?: true
    plant_id?: true
  }

  export type Entry_plantsSumAggregateInputType = {
    entry_id?: true
    plant_id?: true
  }

  export type Entry_plantsMinAggregateInputType = {
    entry_id?: true
    plant_id?: true
  }

  export type Entry_plantsMaxAggregateInputType = {
    entry_id?: true
    plant_id?: true
  }

  export type Entry_plantsCountAggregateInputType = {
    entry_id?: true
    plant_id?: true
    _all?: true
  }

  export type Entry_plantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entry_plants to aggregate.
     */
    where?: entry_plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entry_plants to fetch.
     */
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entry_plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entry_plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entry_plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entry_plants
    **/
    _count?: true | Entry_plantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Entry_plantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Entry_plantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Entry_plantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Entry_plantsMaxAggregateInputType
  }

  export type GetEntry_plantsAggregateType<T extends Entry_plantsAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry_plants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry_plants[P]>
      : GetScalarType<T[P], AggregateEntry_plants[P]>
  }




  export type entry_plantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entry_plantsWhereInput
    orderBy?: entry_plantsOrderByWithAggregationInput | entry_plantsOrderByWithAggregationInput[]
    by: Entry_plantsScalarFieldEnum[] | Entry_plantsScalarFieldEnum
    having?: entry_plantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Entry_plantsCountAggregateInputType | true
    _avg?: Entry_plantsAvgAggregateInputType
    _sum?: Entry_plantsSumAggregateInputType
    _min?: Entry_plantsMinAggregateInputType
    _max?: Entry_plantsMaxAggregateInputType
  }

  export type Entry_plantsGroupByOutputType = {
    entry_id: number
    plant_id: number
    _count: Entry_plantsCountAggregateOutputType | null
    _avg: Entry_plantsAvgAggregateOutputType | null
    _sum: Entry_plantsSumAggregateOutputType | null
    _min: Entry_plantsMinAggregateOutputType | null
    _max: Entry_plantsMaxAggregateOutputType | null
  }

  type GetEntry_plantsGroupByPayload<T extends entry_plantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Entry_plantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Entry_plantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Entry_plantsGroupByOutputType[P]>
            : GetScalarType<T[P], Entry_plantsGroupByOutputType[P]>
        }
      >
    >


  export type entry_plantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entry_id?: boolean
    plant_id?: boolean
    entries?: boolean | entriesDefaultArgs<ExtArgs>
    plants?: boolean | plantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry_plants"]>



  export type entry_plantsSelectScalar = {
    entry_id?: boolean
    plant_id?: boolean
  }

  export type entry_plantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entry_id" | "plant_id", ExtArgs["result"]["entry_plants"]>
  export type entry_plantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | entriesDefaultArgs<ExtArgs>
    plants?: boolean | plantsDefaultArgs<ExtArgs>
  }

  export type $entry_plantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entry_plants"
    objects: {
      entries: Prisma.$entriesPayload<ExtArgs>
      plants: Prisma.$plantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entry_id: number
      plant_id: number
    }, ExtArgs["result"]["entry_plants"]>
    composites: {}
  }

  type entry_plantsGetPayload<S extends boolean | null | undefined | entry_plantsDefaultArgs> = $Result.GetResult<Prisma.$entry_plantsPayload, S>

  type entry_plantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entry_plantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Entry_plantsCountAggregateInputType | true
    }

  export interface entry_plantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entry_plants'], meta: { name: 'entry_plants' } }
    /**
     * Find zero or one Entry_plants that matches the filter.
     * @param {entry_plantsFindUniqueArgs} args - Arguments to find a Entry_plants
     * @example
     * // Get one Entry_plants
     * const entry_plants = await prisma.entry_plants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entry_plantsFindUniqueArgs>(args: SelectSubset<T, entry_plantsFindUniqueArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry_plants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entry_plantsFindUniqueOrThrowArgs} args - Arguments to find a Entry_plants
     * @example
     * // Get one Entry_plants
     * const entry_plants = await prisma.entry_plants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entry_plantsFindUniqueOrThrowArgs>(args: SelectSubset<T, entry_plantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry_plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsFindFirstArgs} args - Arguments to find a Entry_plants
     * @example
     * // Get one Entry_plants
     * const entry_plants = await prisma.entry_plants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entry_plantsFindFirstArgs>(args?: SelectSubset<T, entry_plantsFindFirstArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry_plants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsFindFirstOrThrowArgs} args - Arguments to find a Entry_plants
     * @example
     * // Get one Entry_plants
     * const entry_plants = await prisma.entry_plants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entry_plantsFindFirstOrThrowArgs>(args?: SelectSubset<T, entry_plantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entry_plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entry_plants
     * const entry_plants = await prisma.entry_plants.findMany()
     * 
     * // Get first 10 Entry_plants
     * const entry_plants = await prisma.entry_plants.findMany({ take: 10 })
     * 
     * // Only select the `entry_id`
     * const entry_plantsWithEntry_idOnly = await prisma.entry_plants.findMany({ select: { entry_id: true } })
     * 
     */
    findMany<T extends entry_plantsFindManyArgs>(args?: SelectSubset<T, entry_plantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry_plants.
     * @param {entry_plantsCreateArgs} args - Arguments to create a Entry_plants.
     * @example
     * // Create one Entry_plants
     * const Entry_plants = await prisma.entry_plants.create({
     *   data: {
     *     // ... data to create a Entry_plants
     *   }
     * })
     * 
     */
    create<T extends entry_plantsCreateArgs>(args: SelectSubset<T, entry_plantsCreateArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entry_plants.
     * @param {entry_plantsCreateManyArgs} args - Arguments to create many Entry_plants.
     * @example
     * // Create many Entry_plants
     * const entry_plants = await prisma.entry_plants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entry_plantsCreateManyArgs>(args?: SelectSubset<T, entry_plantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entry_plants.
     * @param {entry_plantsDeleteArgs} args - Arguments to delete one Entry_plants.
     * @example
     * // Delete one Entry_plants
     * const Entry_plants = await prisma.entry_plants.delete({
     *   where: {
     *     // ... filter to delete one Entry_plants
     *   }
     * })
     * 
     */
    delete<T extends entry_plantsDeleteArgs>(args: SelectSubset<T, entry_plantsDeleteArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry_plants.
     * @param {entry_plantsUpdateArgs} args - Arguments to update one Entry_plants.
     * @example
     * // Update one Entry_plants
     * const entry_plants = await prisma.entry_plants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entry_plantsUpdateArgs>(args: SelectSubset<T, entry_plantsUpdateArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entry_plants.
     * @param {entry_plantsDeleteManyArgs} args - Arguments to filter Entry_plants to delete.
     * @example
     * // Delete a few Entry_plants
     * const { count } = await prisma.entry_plants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entry_plantsDeleteManyArgs>(args?: SelectSubset<T, entry_plantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entry_plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entry_plants
     * const entry_plants = await prisma.entry_plants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entry_plantsUpdateManyArgs>(args: SelectSubset<T, entry_plantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entry_plants.
     * @param {entry_plantsUpsertArgs} args - Arguments to update or create a Entry_plants.
     * @example
     * // Update or create a Entry_plants
     * const entry_plants = await prisma.entry_plants.upsert({
     *   create: {
     *     // ... data to create a Entry_plants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry_plants we want to update
     *   }
     * })
     */
    upsert<T extends entry_plantsUpsertArgs>(args: SelectSubset<T, entry_plantsUpsertArgs<ExtArgs>>): Prisma__entry_plantsClient<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entry_plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsCountArgs} args - Arguments to filter Entry_plants to count.
     * @example
     * // Count the number of Entry_plants
     * const count = await prisma.entry_plants.count({
     *   where: {
     *     // ... the filter for the Entry_plants we want to count
     *   }
     * })
    **/
    count<T extends entry_plantsCountArgs>(
      args?: Subset<T, entry_plantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Entry_plantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry_plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Entry_plantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Entry_plantsAggregateArgs>(args: Subset<T, Entry_plantsAggregateArgs>): Prisma.PrismaPromise<GetEntry_plantsAggregateType<T>>

    /**
     * Group by Entry_plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entry_plantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entry_plantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entry_plantsGroupByArgs['orderBy'] }
        : { orderBy?: entry_plantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entry_plantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntry_plantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entry_plants model
   */
  readonly fields: entry_plantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entry_plants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entry_plantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends entriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entriesDefaultArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plants<T extends plantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, plantsDefaultArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entry_plants model
   */
  interface entry_plantsFieldRefs {
    readonly entry_id: FieldRef<"entry_plants", 'Int'>
    readonly plant_id: FieldRef<"entry_plants", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * entry_plants findUnique
   */
  export type entry_plantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter, which entry_plants to fetch.
     */
    where: entry_plantsWhereUniqueInput
  }

  /**
   * entry_plants findUniqueOrThrow
   */
  export type entry_plantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter, which entry_plants to fetch.
     */
    where: entry_plantsWhereUniqueInput
  }

  /**
   * entry_plants findFirst
   */
  export type entry_plantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter, which entry_plants to fetch.
     */
    where?: entry_plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entry_plants to fetch.
     */
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entry_plants.
     */
    cursor?: entry_plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entry_plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entry_plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entry_plants.
     */
    distinct?: Entry_plantsScalarFieldEnum | Entry_plantsScalarFieldEnum[]
  }

  /**
   * entry_plants findFirstOrThrow
   */
  export type entry_plantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter, which entry_plants to fetch.
     */
    where?: entry_plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entry_plants to fetch.
     */
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entry_plants.
     */
    cursor?: entry_plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entry_plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entry_plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entry_plants.
     */
    distinct?: Entry_plantsScalarFieldEnum | Entry_plantsScalarFieldEnum[]
  }

  /**
   * entry_plants findMany
   */
  export type entry_plantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter, which entry_plants to fetch.
     */
    where?: entry_plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entry_plants to fetch.
     */
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entry_plants.
     */
    cursor?: entry_plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entry_plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entry_plants.
     */
    skip?: number
    distinct?: Entry_plantsScalarFieldEnum | Entry_plantsScalarFieldEnum[]
  }

  /**
   * entry_plants create
   */
  export type entry_plantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * The data needed to create a entry_plants.
     */
    data: XOR<entry_plantsCreateInput, entry_plantsUncheckedCreateInput>
  }

  /**
   * entry_plants createMany
   */
  export type entry_plantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entry_plants.
     */
    data: entry_plantsCreateManyInput | entry_plantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entry_plants update
   */
  export type entry_plantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * The data needed to update a entry_plants.
     */
    data: XOR<entry_plantsUpdateInput, entry_plantsUncheckedUpdateInput>
    /**
     * Choose, which entry_plants to update.
     */
    where: entry_plantsWhereUniqueInput
  }

  /**
   * entry_plants updateMany
   */
  export type entry_plantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entry_plants.
     */
    data: XOR<entry_plantsUpdateManyMutationInput, entry_plantsUncheckedUpdateManyInput>
    /**
     * Filter which entry_plants to update
     */
    where?: entry_plantsWhereInput
    /**
     * Limit how many entry_plants to update.
     */
    limit?: number
  }

  /**
   * entry_plants upsert
   */
  export type entry_plantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * The filter to search for the entry_plants to update in case it exists.
     */
    where: entry_plantsWhereUniqueInput
    /**
     * In case the entry_plants found by the `where` argument doesn't exist, create a new entry_plants with this data.
     */
    create: XOR<entry_plantsCreateInput, entry_plantsUncheckedCreateInput>
    /**
     * In case the entry_plants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entry_plantsUpdateInput, entry_plantsUncheckedUpdateInput>
  }

  /**
   * entry_plants delete
   */
  export type entry_plantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    /**
     * Filter which entry_plants to delete.
     */
    where: entry_plantsWhereUniqueInput
  }

  /**
   * entry_plants deleteMany
   */
  export type entry_plantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entry_plants to delete
     */
    where?: entry_plantsWhereInput
    /**
     * Limit how many entry_plants to delete.
     */
    limit?: number
  }

  /**
   * entry_plants without action
   */
  export type entry_plantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
  }


  /**
   * Model locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationsSumAggregateOutputType = {
    id: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    id?: true
  }

  export type LocationsSumAggregateInputType = {
    id?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to aggregate.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type locationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationsWhereInput
    orderBy?: locationsOrderByWithAggregationInput | locationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: locationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends locationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type locationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    entries?: boolean | locations$entriesArgs<ExtArgs>
    _count?: boolean | LocationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>



  export type locationsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type locationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["locations"]>
  export type locationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | locations$entriesArgs<ExtArgs>
    _count?: boolean | LocationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $locationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "locations"
    objects: {
      entries: Prisma.$entriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type locationsGetPayload<S extends boolean | null | undefined | locationsDefaultArgs> = $Result.GetResult<Prisma.$locationsPayload, S>

  type locationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<locationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface locationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['locations'], meta: { name: 'locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {locationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationsFindUniqueArgs>(args: SelectSubset<T, locationsFindUniqueArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {locationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationsFindUniqueOrThrowArgs>(args: SelectSubset<T, locationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationsFindFirstArgs>(args?: SelectSubset<T, locationsFindFirstArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationsFindFirstOrThrowArgs>(args?: SelectSubset<T, locationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationsFindManyArgs>(args?: SelectSubset<T, locationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {locationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends locationsCreateArgs>(args: SelectSubset<T, locationsCreateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {locationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationsCreateManyArgs>(args?: SelectSubset<T, locationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Locations.
     * @param {locationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends locationsDeleteArgs>(args: SelectSubset<T, locationsDeleteArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {locationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationsUpdateArgs>(args: SelectSubset<T, locationsUpdateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {locationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationsDeleteManyArgs>(args?: SelectSubset<T, locationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationsUpdateManyArgs>(args: SelectSubset<T, locationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Locations.
     * @param {locationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends locationsUpsertArgs>(args: SelectSubset<T, locationsUpsertArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationsCountArgs>(
      args?: Subset<T, locationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends locationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationsGroupByArgs['orderBy'] }
        : { orderBy?: locationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, locationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the locations model
   */
  readonly fields: locationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends locations$entriesArgs<ExtArgs> = {}>(args?: Subset<T, locations$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the locations model
   */
  interface locationsFieldRefs {
    readonly id: FieldRef<"locations", 'Int'>
    readonly name: FieldRef<"locations", 'String'>
    readonly description: FieldRef<"locations", 'String'>
    readonly created_at: FieldRef<"locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * locations findUnique
   */
  export type locationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findUniqueOrThrow
   */
  export type locationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findFirst
   */
  export type locationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findFirstOrThrow
   */
  export type locationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findMany
   */
  export type locationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations create
   */
  export type locationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to create a locations.
     */
    data: XOR<locationsCreateInput, locationsUncheckedCreateInput>
  }

  /**
   * locations createMany
   */
  export type locationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationsCreateManyInput | locationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * locations update
   */
  export type locationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to update a locations.
     */
    data: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
    /**
     * Choose, which locations to update.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations updateMany
   */
  export type locationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
  }

  /**
   * locations upsert
   */
  export type locationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The filter to search for the locations to update in case it exists.
     */
    where: locationsWhereUniqueInput
    /**
     * In case the locations found by the `where` argument doesn't exist, create a new locations with this data.
     */
    create: XOR<locationsCreateInput, locationsUncheckedCreateInput>
    /**
     * In case the locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
  }

  /**
   * locations delete
   */
  export type locationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter which locations to delete.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations deleteMany
   */
  export type locationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to delete.
     */
    limit?: number
  }

  /**
   * locations.entries
   */
  export type locations$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entries
     */
    select?: entriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entries
     */
    omit?: entriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entriesInclude<ExtArgs> | null
    where?: entriesWhereInput
    orderBy?: entriesOrderByWithRelationInput | entriesOrderByWithRelationInput[]
    cursor?: entriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntriesScalarFieldEnum | EntriesScalarFieldEnum[]
  }

  /**
   * locations without action
   */
  export type locationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
  }


  /**
   * Model photos
   */

  export type AggregatePhotos = {
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  export type PhotosAvgAggregateOutputType = {
    id: number | null
    entry_id: number | null
    sort_order: number | null
  }

  export type PhotosSumAggregateOutputType = {
    id: number | null
    entry_id: number | null
    sort_order: number | null
  }

  export type PhotosMinAggregateOutputType = {
    id: number | null
    entry_id: number | null
    url: string | null
    caption: string | null
    sort_order: number | null
    uploaded_at: Date | null
  }

  export type PhotosMaxAggregateOutputType = {
    id: number | null
    entry_id: number | null
    url: string | null
    caption: string | null
    sort_order: number | null
    uploaded_at: Date | null
  }

  export type PhotosCountAggregateOutputType = {
    id: number
    entry_id: number
    url: number
    caption: number
    sort_order: number
    uploaded_at: number
    _all: number
  }


  export type PhotosAvgAggregateInputType = {
    id?: true
    entry_id?: true
    sort_order?: true
  }

  export type PhotosSumAggregateInputType = {
    id?: true
    entry_id?: true
    sort_order?: true
  }

  export type PhotosMinAggregateInputType = {
    id?: true
    entry_id?: true
    url?: true
    caption?: true
    sort_order?: true
    uploaded_at?: true
  }

  export type PhotosMaxAggregateInputType = {
    id?: true
    entry_id?: true
    url?: true
    caption?: true
    sort_order?: true
    uploaded_at?: true
  }

  export type PhotosCountAggregateInputType = {
    id?: true
    entry_id?: true
    url?: true
    caption?: true
    sort_order?: true
    uploaded_at?: true
    _all?: true
  }

  export type PhotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to aggregate.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned photos
    **/
    _count?: true | PhotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosMaxAggregateInputType
  }

  export type GetPhotosAggregateType<T extends PhotosAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotos[P]>
      : GetScalarType<T[P], AggregatePhotos[P]>
  }




  export type photosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photosWhereInput
    orderBy?: photosOrderByWithAggregationInput | photosOrderByWithAggregationInput[]
    by: PhotosScalarFieldEnum[] | PhotosScalarFieldEnum
    having?: photosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosCountAggregateInputType | true
    _avg?: PhotosAvgAggregateInputType
    _sum?: PhotosSumAggregateInputType
    _min?: PhotosMinAggregateInputType
    _max?: PhotosMaxAggregateInputType
  }

  export type PhotosGroupByOutputType = {
    id: number
    entry_id: number
    url: string
    caption: string | null
    sort_order: number
    uploaded_at: Date
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  type GetPhotosGroupByPayload<T extends photosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosGroupByOutputType[P]>
        }
      >
    >


  export type photosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entry_id?: boolean
    url?: boolean
    caption?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
    entries?: boolean | entriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>



  export type photosSelectScalar = {
    id?: boolean
    entry_id?: boolean
    url?: boolean
    caption?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
  }

  export type photosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entry_id" | "url" | "caption" | "sort_order" | "uploaded_at", ExtArgs["result"]["photos"]>
  export type photosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | entriesDefaultArgs<ExtArgs>
  }

  export type $photosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "photos"
    objects: {
      entries: Prisma.$entriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entry_id: number
      url: string
      caption: string | null
      sort_order: number
      uploaded_at: Date
    }, ExtArgs["result"]["photos"]>
    composites: {}
  }

  type photosGetPayload<S extends boolean | null | undefined | photosDefaultArgs> = $Result.GetResult<Prisma.$photosPayload, S>

  type photosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<photosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotosCountAggregateInputType | true
    }

  export interface photosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['photos'], meta: { name: 'photos' } }
    /**
     * Find zero or one Photos that matches the filter.
     * @param {photosFindUniqueArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends photosFindUniqueArgs>(args: SelectSubset<T, photosFindUniqueArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {photosFindUniqueOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends photosFindUniqueOrThrowArgs>(args: SelectSubset<T, photosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends photosFindFirstArgs>(args?: SelectSubset<T, photosFindFirstArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends photosFindFirstOrThrowArgs>(args?: SelectSubset<T, photosFindFirstOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photos.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photosWithIdOnly = await prisma.photos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends photosFindManyArgs>(args?: SelectSubset<T, photosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photos.
     * @param {photosCreateArgs} args - Arguments to create a Photos.
     * @example
     * // Create one Photos
     * const Photos = await prisma.photos.create({
     *   data: {
     *     // ... data to create a Photos
     *   }
     * })
     * 
     */
    create<T extends photosCreateArgs>(args: SelectSubset<T, photosCreateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {photosCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends photosCreateManyArgs>(args?: SelectSubset<T, photosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photos.
     * @param {photosDeleteArgs} args - Arguments to delete one Photos.
     * @example
     * // Delete one Photos
     * const Photos = await prisma.photos.delete({
     *   where: {
     *     // ... filter to delete one Photos
     *   }
     * })
     * 
     */
    delete<T extends photosDeleteArgs>(args: SelectSubset<T, photosDeleteArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photos.
     * @param {photosUpdateArgs} args - Arguments to update one Photos.
     * @example
     * // Update one Photos
     * const photos = await prisma.photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends photosUpdateArgs>(args: SelectSubset<T, photosUpdateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {photosDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends photosDeleteManyArgs>(args?: SelectSubset<T, photosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends photosUpdateManyArgs>(args: SelectSubset<T, photosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photos.
     * @param {photosUpsertArgs} args - Arguments to update or create a Photos.
     * @example
     * // Update or create a Photos
     * const photos = await prisma.photos.upsert({
     *   create: {
     *     // ... data to create a Photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photos we want to update
     *   }
     * })
     */
    upsert<T extends photosUpsertArgs>(args: SelectSubset<T, photosUpsertArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photos.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends photosCountArgs>(
      args?: Subset<T, photosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotosAggregateArgs>(args: Subset<T, PhotosAggregateArgs>): Prisma.PrismaPromise<GetPhotosAggregateType<T>>

    /**
     * Group by Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends photosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: photosGroupByArgs['orderBy'] }
        : { orderBy?: photosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, photosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the photos model
   */
  readonly fields: photosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__photosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends entriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entriesDefaultArgs<ExtArgs>>): Prisma__entriesClient<$Result.GetResult<Prisma.$entriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the photos model
   */
  interface photosFieldRefs {
    readonly id: FieldRef<"photos", 'Int'>
    readonly entry_id: FieldRef<"photos", 'Int'>
    readonly url: FieldRef<"photos", 'String'>
    readonly caption: FieldRef<"photos", 'String'>
    readonly sort_order: FieldRef<"photos", 'Int'>
    readonly uploaded_at: FieldRef<"photos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * photos findUnique
   */
  export type photosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findUniqueOrThrow
   */
  export type photosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findFirst
   */
  export type photosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findFirstOrThrow
   */
  export type photosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findMany
   */
  export type photosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos create
   */
  export type photosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to create a photos.
     */
    data: XOR<photosCreateInput, photosUncheckedCreateInput>
  }

  /**
   * photos createMany
   */
  export type photosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many photos.
     */
    data: photosCreateManyInput | photosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * photos update
   */
  export type photosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to update a photos.
     */
    data: XOR<photosUpdateInput, photosUncheckedUpdateInput>
    /**
     * Choose, which photos to update.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos updateMany
   */
  export type photosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update photos.
     */
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
  }

  /**
   * photos upsert
   */
  export type photosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The filter to search for the photos to update in case it exists.
     */
    where: photosWhereUniqueInput
    /**
     * In case the photos found by the `where` argument doesn't exist, create a new photos with this data.
     */
    create: XOR<photosCreateInput, photosUncheckedCreateInput>
    /**
     * In case the photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<photosUpdateInput, photosUncheckedUpdateInput>
  }

  /**
   * photos delete
   */
  export type photosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter which photos to delete.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos deleteMany
   */
  export type photosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to delete
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to delete.
     */
    limit?: number
  }

  /**
   * photos without action
   */
  export type photosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
  }


  /**
   * Model plant_families
   */

  export type AggregatePlant_families = {
    _count: Plant_familiesCountAggregateOutputType | null
    _avg: Plant_familiesAvgAggregateOutputType | null
    _sum: Plant_familiesSumAggregateOutputType | null
    _min: Plant_familiesMinAggregateOutputType | null
    _max: Plant_familiesMaxAggregateOutputType | null
  }

  export type Plant_familiesAvgAggregateOutputType = {
    id: number | null
    sort_order: number | null
  }

  export type Plant_familiesSumAggregateOutputType = {
    id: number | null
    sort_order: number | null
  }

  export type Plant_familiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    color_token: string | null
    sort_order: number | null
  }

  export type Plant_familiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color_token: string | null
    sort_order: number | null
  }

  export type Plant_familiesCountAggregateOutputType = {
    id: number
    name: number
    color_token: number
    sort_order: number
    _all: number
  }


  export type Plant_familiesAvgAggregateInputType = {
    id?: true
    sort_order?: true
  }

  export type Plant_familiesSumAggregateInputType = {
    id?: true
    sort_order?: true
  }

  export type Plant_familiesMinAggregateInputType = {
    id?: true
    name?: true
    color_token?: true
    sort_order?: true
  }

  export type Plant_familiesMaxAggregateInputType = {
    id?: true
    name?: true
    color_token?: true
    sort_order?: true
  }

  export type Plant_familiesCountAggregateInputType = {
    id?: true
    name?: true
    color_token?: true
    sort_order?: true
    _all?: true
  }

  export type Plant_familiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plant_families to aggregate.
     */
    where?: plant_familiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plant_families to fetch.
     */
    orderBy?: plant_familiesOrderByWithRelationInput | plant_familiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plant_familiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plant_families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plant_families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plant_families
    **/
    _count?: true | Plant_familiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plant_familiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plant_familiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plant_familiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plant_familiesMaxAggregateInputType
  }

  export type GetPlant_familiesAggregateType<T extends Plant_familiesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlant_families]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant_families[P]>
      : GetScalarType<T[P], AggregatePlant_families[P]>
  }




  export type plant_familiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plant_familiesWhereInput
    orderBy?: plant_familiesOrderByWithAggregationInput | plant_familiesOrderByWithAggregationInput[]
    by: Plant_familiesScalarFieldEnum[] | Plant_familiesScalarFieldEnum
    having?: plant_familiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plant_familiesCountAggregateInputType | true
    _avg?: Plant_familiesAvgAggregateInputType
    _sum?: Plant_familiesSumAggregateInputType
    _min?: Plant_familiesMinAggregateInputType
    _max?: Plant_familiesMaxAggregateInputType
  }

  export type Plant_familiesGroupByOutputType = {
    id: number
    name: string
    color_token: string | null
    sort_order: number
    _count: Plant_familiesCountAggregateOutputType | null
    _avg: Plant_familiesAvgAggregateOutputType | null
    _sum: Plant_familiesSumAggregateOutputType | null
    _min: Plant_familiesMinAggregateOutputType | null
    _max: Plant_familiesMaxAggregateOutputType | null
  }

  type GetPlant_familiesGroupByPayload<T extends plant_familiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plant_familiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plant_familiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plant_familiesGroupByOutputType[P]>
            : GetScalarType<T[P], Plant_familiesGroupByOutputType[P]>
        }
      >
    >


  export type plant_familiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color_token?: boolean
    sort_order?: boolean
    plants?: boolean | plant_families$plantsArgs<ExtArgs>
    _count?: boolean | Plant_familiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plant_families"]>



  export type plant_familiesSelectScalar = {
    id?: boolean
    name?: boolean
    color_token?: boolean
    sort_order?: boolean
  }

  export type plant_familiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color_token" | "sort_order", ExtArgs["result"]["plant_families"]>
  export type plant_familiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | plant_families$plantsArgs<ExtArgs>
    _count?: boolean | Plant_familiesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $plant_familiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plant_families"
    objects: {
      plants: Prisma.$plantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color_token: string | null
      sort_order: number
    }, ExtArgs["result"]["plant_families"]>
    composites: {}
  }

  type plant_familiesGetPayload<S extends boolean | null | undefined | plant_familiesDefaultArgs> = $Result.GetResult<Prisma.$plant_familiesPayload, S>

  type plant_familiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plant_familiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plant_familiesCountAggregateInputType | true
    }

  export interface plant_familiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plant_families'], meta: { name: 'plant_families' } }
    /**
     * Find zero or one Plant_families that matches the filter.
     * @param {plant_familiesFindUniqueArgs} args - Arguments to find a Plant_families
     * @example
     * // Get one Plant_families
     * const plant_families = await prisma.plant_families.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plant_familiesFindUniqueArgs>(args: SelectSubset<T, plant_familiesFindUniqueArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plant_families that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plant_familiesFindUniqueOrThrowArgs} args - Arguments to find a Plant_families
     * @example
     * // Get one Plant_families
     * const plant_families = await prisma.plant_families.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plant_familiesFindUniqueOrThrowArgs>(args: SelectSubset<T, plant_familiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant_families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesFindFirstArgs} args - Arguments to find a Plant_families
     * @example
     * // Get one Plant_families
     * const plant_families = await prisma.plant_families.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plant_familiesFindFirstArgs>(args?: SelectSubset<T, plant_familiesFindFirstArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant_families that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesFindFirstOrThrowArgs} args - Arguments to find a Plant_families
     * @example
     * // Get one Plant_families
     * const plant_families = await prisma.plant_families.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plant_familiesFindFirstOrThrowArgs>(args?: SelectSubset<T, plant_familiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plant_families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plant_families
     * const plant_families = await prisma.plant_families.findMany()
     * 
     * // Get first 10 Plant_families
     * const plant_families = await prisma.plant_families.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plant_familiesWithIdOnly = await prisma.plant_families.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plant_familiesFindManyArgs>(args?: SelectSubset<T, plant_familiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plant_families.
     * @param {plant_familiesCreateArgs} args - Arguments to create a Plant_families.
     * @example
     * // Create one Plant_families
     * const Plant_families = await prisma.plant_families.create({
     *   data: {
     *     // ... data to create a Plant_families
     *   }
     * })
     * 
     */
    create<T extends plant_familiesCreateArgs>(args: SelectSubset<T, plant_familiesCreateArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plant_families.
     * @param {plant_familiesCreateManyArgs} args - Arguments to create many Plant_families.
     * @example
     * // Create many Plant_families
     * const plant_families = await prisma.plant_families.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plant_familiesCreateManyArgs>(args?: SelectSubset<T, plant_familiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plant_families.
     * @param {plant_familiesDeleteArgs} args - Arguments to delete one Plant_families.
     * @example
     * // Delete one Plant_families
     * const Plant_families = await prisma.plant_families.delete({
     *   where: {
     *     // ... filter to delete one Plant_families
     *   }
     * })
     * 
     */
    delete<T extends plant_familiesDeleteArgs>(args: SelectSubset<T, plant_familiesDeleteArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plant_families.
     * @param {plant_familiesUpdateArgs} args - Arguments to update one Plant_families.
     * @example
     * // Update one Plant_families
     * const plant_families = await prisma.plant_families.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plant_familiesUpdateArgs>(args: SelectSubset<T, plant_familiesUpdateArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plant_families.
     * @param {plant_familiesDeleteManyArgs} args - Arguments to filter Plant_families to delete.
     * @example
     * // Delete a few Plant_families
     * const { count } = await prisma.plant_families.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plant_familiesDeleteManyArgs>(args?: SelectSubset<T, plant_familiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plant_families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plant_families
     * const plant_families = await prisma.plant_families.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plant_familiesUpdateManyArgs>(args: SelectSubset<T, plant_familiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plant_families.
     * @param {plant_familiesUpsertArgs} args - Arguments to update or create a Plant_families.
     * @example
     * // Update or create a Plant_families
     * const plant_families = await prisma.plant_families.upsert({
     *   create: {
     *     // ... data to create a Plant_families
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant_families we want to update
     *   }
     * })
     */
    upsert<T extends plant_familiesUpsertArgs>(args: SelectSubset<T, plant_familiesUpsertArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plant_families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesCountArgs} args - Arguments to filter Plant_families to count.
     * @example
     * // Count the number of Plant_families
     * const count = await prisma.plant_families.count({
     *   where: {
     *     // ... the filter for the Plant_families we want to count
     *   }
     * })
    **/
    count<T extends plant_familiesCountArgs>(
      args?: Subset<T, plant_familiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plant_familiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plant_families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plant_familiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Plant_familiesAggregateArgs>(args: Subset<T, Plant_familiesAggregateArgs>): Prisma.PrismaPromise<GetPlant_familiesAggregateType<T>>

    /**
     * Group by Plant_families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plant_familiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plant_familiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plant_familiesGroupByArgs['orderBy'] }
        : { orderBy?: plant_familiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plant_familiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlant_familiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plant_families model
   */
  readonly fields: plant_familiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plant_families.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plant_familiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plants<T extends plant_families$plantsArgs<ExtArgs> = {}>(args?: Subset<T, plant_families$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plant_families model
   */
  interface plant_familiesFieldRefs {
    readonly id: FieldRef<"plant_families", 'Int'>
    readonly name: FieldRef<"plant_families", 'String'>
    readonly color_token: FieldRef<"plant_families", 'String'>
    readonly sort_order: FieldRef<"plant_families", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * plant_families findUnique
   */
  export type plant_familiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter, which plant_families to fetch.
     */
    where: plant_familiesWhereUniqueInput
  }

  /**
   * plant_families findUniqueOrThrow
   */
  export type plant_familiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter, which plant_families to fetch.
     */
    where: plant_familiesWhereUniqueInput
  }

  /**
   * plant_families findFirst
   */
  export type plant_familiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter, which plant_families to fetch.
     */
    where?: plant_familiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plant_families to fetch.
     */
    orderBy?: plant_familiesOrderByWithRelationInput | plant_familiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plant_families.
     */
    cursor?: plant_familiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plant_families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plant_families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plant_families.
     */
    distinct?: Plant_familiesScalarFieldEnum | Plant_familiesScalarFieldEnum[]
  }

  /**
   * plant_families findFirstOrThrow
   */
  export type plant_familiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter, which plant_families to fetch.
     */
    where?: plant_familiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plant_families to fetch.
     */
    orderBy?: plant_familiesOrderByWithRelationInput | plant_familiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plant_families.
     */
    cursor?: plant_familiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plant_families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plant_families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plant_families.
     */
    distinct?: Plant_familiesScalarFieldEnum | Plant_familiesScalarFieldEnum[]
  }

  /**
   * plant_families findMany
   */
  export type plant_familiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter, which plant_families to fetch.
     */
    where?: plant_familiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plant_families to fetch.
     */
    orderBy?: plant_familiesOrderByWithRelationInput | plant_familiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plant_families.
     */
    cursor?: plant_familiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plant_families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plant_families.
     */
    skip?: number
    distinct?: Plant_familiesScalarFieldEnum | Plant_familiesScalarFieldEnum[]
  }

  /**
   * plant_families create
   */
  export type plant_familiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * The data needed to create a plant_families.
     */
    data: XOR<plant_familiesCreateInput, plant_familiesUncheckedCreateInput>
  }

  /**
   * plant_families createMany
   */
  export type plant_familiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plant_families.
     */
    data: plant_familiesCreateManyInput | plant_familiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plant_families update
   */
  export type plant_familiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * The data needed to update a plant_families.
     */
    data: XOR<plant_familiesUpdateInput, plant_familiesUncheckedUpdateInput>
    /**
     * Choose, which plant_families to update.
     */
    where: plant_familiesWhereUniqueInput
  }

  /**
   * plant_families updateMany
   */
  export type plant_familiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plant_families.
     */
    data: XOR<plant_familiesUpdateManyMutationInput, plant_familiesUncheckedUpdateManyInput>
    /**
     * Filter which plant_families to update
     */
    where?: plant_familiesWhereInput
    /**
     * Limit how many plant_families to update.
     */
    limit?: number
  }

  /**
   * plant_families upsert
   */
  export type plant_familiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * The filter to search for the plant_families to update in case it exists.
     */
    where: plant_familiesWhereUniqueInput
    /**
     * In case the plant_families found by the `where` argument doesn't exist, create a new plant_families with this data.
     */
    create: XOR<plant_familiesCreateInput, plant_familiesUncheckedCreateInput>
    /**
     * In case the plant_families was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plant_familiesUpdateInput, plant_familiesUncheckedUpdateInput>
  }

  /**
   * plant_families delete
   */
  export type plant_familiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    /**
     * Filter which plant_families to delete.
     */
    where: plant_familiesWhereUniqueInput
  }

  /**
   * plant_families deleteMany
   */
  export type plant_familiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plant_families to delete
     */
    where?: plant_familiesWhereInput
    /**
     * Limit how many plant_families to delete.
     */
    limit?: number
  }

  /**
   * plant_families.plants
   */
  export type plant_families$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    where?: plantsWhereInput
    orderBy?: plantsOrderByWithRelationInput | plantsOrderByWithRelationInput[]
    cursor?: plantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantsScalarFieldEnum | PlantsScalarFieldEnum[]
  }

  /**
   * plant_families without action
   */
  export type plant_familiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
  }


  /**
   * Model plants
   */

  export type AggregatePlants = {
    _count: PlantsCountAggregateOutputType | null
    _avg: PlantsAvgAggregateOutputType | null
    _sum: PlantsSumAggregateOutputType | null
    _min: PlantsMinAggregateOutputType | null
    _max: PlantsMaxAggregateOutputType | null
  }

  export type PlantsAvgAggregateOutputType = {
    id: number | null
    family_id: number | null
  }

  export type PlantsSumAggregateOutputType = {
    id: number | null
    family_id: number | null
  }

  export type PlantsMinAggregateOutputType = {
    id: number | null
    name: string | null
    nickname: string | null
    family_id: number | null
    created_at: Date | null
  }

  export type PlantsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nickname: string | null
    family_id: number | null
    created_at: Date | null
  }

  export type PlantsCountAggregateOutputType = {
    id: number
    name: number
    nickname: number
    family_id: number
    created_at: number
    _all: number
  }


  export type PlantsAvgAggregateInputType = {
    id?: true
    family_id?: true
  }

  export type PlantsSumAggregateInputType = {
    id?: true
    family_id?: true
  }

  export type PlantsMinAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    family_id?: true
    created_at?: true
  }

  export type PlantsMaxAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    family_id?: true
    created_at?: true
  }

  export type PlantsCountAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    family_id?: true
    created_at?: true
    _all?: true
  }

  export type PlantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plants to aggregate.
     */
    where?: plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plants to fetch.
     */
    orderBy?: plantsOrderByWithRelationInput | plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plants
    **/
    _count?: true | PlantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantsMaxAggregateInputType
  }

  export type GetPlantsAggregateType<T extends PlantsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlants[P]>
      : GetScalarType<T[P], AggregatePlants[P]>
  }




  export type plantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plantsWhereInput
    orderBy?: plantsOrderByWithAggregationInput | plantsOrderByWithAggregationInput[]
    by: PlantsScalarFieldEnum[] | PlantsScalarFieldEnum
    having?: plantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantsCountAggregateInputType | true
    _avg?: PlantsAvgAggregateInputType
    _sum?: PlantsSumAggregateInputType
    _min?: PlantsMinAggregateInputType
    _max?: PlantsMaxAggregateInputType
  }

  export type PlantsGroupByOutputType = {
    id: number
    name: string
    nickname: string | null
    family_id: number | null
    created_at: Date
    _count: PlantsCountAggregateOutputType | null
    _avg: PlantsAvgAggregateOutputType | null
    _sum: PlantsSumAggregateOutputType | null
    _min: PlantsMinAggregateOutputType | null
    _max: PlantsMaxAggregateOutputType | null
  }

  type GetPlantsGroupByPayload<T extends plantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantsGroupByOutputType[P]>
            : GetScalarType<T[P], PlantsGroupByOutputType[P]>
        }
      >
    >


  export type plantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    family_id?: boolean
    created_at?: boolean
    entry_plants?: boolean | plants$entry_plantsArgs<ExtArgs>
    plant_families?: boolean | plants$plant_familiesArgs<ExtArgs>
    _count?: boolean | PlantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plants"]>



  export type plantsSelectScalar = {
    id?: boolean
    name?: boolean
    nickname?: boolean
    family_id?: boolean
    created_at?: boolean
  }

  export type plantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nickname" | "family_id" | "created_at", ExtArgs["result"]["plants"]>
  export type plantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry_plants?: boolean | plants$entry_plantsArgs<ExtArgs>
    plant_families?: boolean | plants$plant_familiesArgs<ExtArgs>
    _count?: boolean | PlantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $plantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plants"
    objects: {
      entry_plants: Prisma.$entry_plantsPayload<ExtArgs>[]
      plant_families: Prisma.$plant_familiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nickname: string | null
      family_id: number | null
      created_at: Date
    }, ExtArgs["result"]["plants"]>
    composites: {}
  }

  type plantsGetPayload<S extends boolean | null | undefined | plantsDefaultArgs> = $Result.GetResult<Prisma.$plantsPayload, S>

  type plantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantsCountAggregateInputType | true
    }

  export interface plantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plants'], meta: { name: 'plants' } }
    /**
     * Find zero or one Plants that matches the filter.
     * @param {plantsFindUniqueArgs} args - Arguments to find a Plants
     * @example
     * // Get one Plants
     * const plants = await prisma.plants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plantsFindUniqueArgs>(args: SelectSubset<T, plantsFindUniqueArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plantsFindUniqueOrThrowArgs} args - Arguments to find a Plants
     * @example
     * // Get one Plants
     * const plants = await prisma.plants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plantsFindUniqueOrThrowArgs>(args: SelectSubset<T, plantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsFindFirstArgs} args - Arguments to find a Plants
     * @example
     * // Get one Plants
     * const plants = await prisma.plants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plantsFindFirstArgs>(args?: SelectSubset<T, plantsFindFirstArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsFindFirstOrThrowArgs} args - Arguments to find a Plants
     * @example
     * // Get one Plants
     * const plants = await prisma.plants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plantsFindFirstOrThrowArgs>(args?: SelectSubset<T, plantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plants.findMany()
     * 
     * // Get first 10 Plants
     * const plants = await prisma.plants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantsWithIdOnly = await prisma.plants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plantsFindManyArgs>(args?: SelectSubset<T, plantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plants.
     * @param {plantsCreateArgs} args - Arguments to create a Plants.
     * @example
     * // Create one Plants
     * const Plants = await prisma.plants.create({
     *   data: {
     *     // ... data to create a Plants
     *   }
     * })
     * 
     */
    create<T extends plantsCreateArgs>(args: SelectSubset<T, plantsCreateArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plants.
     * @param {plantsCreateManyArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plants = await prisma.plants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plantsCreateManyArgs>(args?: SelectSubset<T, plantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plants.
     * @param {plantsDeleteArgs} args - Arguments to delete one Plants.
     * @example
     * // Delete one Plants
     * const Plants = await prisma.plants.delete({
     *   where: {
     *     // ... filter to delete one Plants
     *   }
     * })
     * 
     */
    delete<T extends plantsDeleteArgs>(args: SelectSubset<T, plantsDeleteArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plants.
     * @param {plantsUpdateArgs} args - Arguments to update one Plants.
     * @example
     * // Update one Plants
     * const plants = await prisma.plants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plantsUpdateArgs>(args: SelectSubset<T, plantsUpdateArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plants.
     * @param {plantsDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plantsDeleteManyArgs>(args?: SelectSubset<T, plantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plants = await prisma.plants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plantsUpdateManyArgs>(args: SelectSubset<T, plantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plants.
     * @param {plantsUpsertArgs} args - Arguments to update or create a Plants.
     * @example
     * // Update or create a Plants
     * const plants = await prisma.plants.upsert({
     *   create: {
     *     // ... data to create a Plants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plants we want to update
     *   }
     * })
     */
    upsert<T extends plantsUpsertArgs>(args: SelectSubset<T, plantsUpsertArgs<ExtArgs>>): Prisma__plantsClient<$Result.GetResult<Prisma.$plantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plants.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
    **/
    count<T extends plantsCountArgs>(
      args?: Subset<T, plantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantsAggregateArgs>(args: Subset<T, PlantsAggregateArgs>): Prisma.PrismaPromise<GetPlantsAggregateType<T>>

    /**
     * Group by Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plantsGroupByArgs['orderBy'] }
        : { orderBy?: plantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plants model
   */
  readonly fields: plantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry_plants<T extends plants$entry_plantsArgs<ExtArgs> = {}>(args?: Subset<T, plants$entry_plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entry_plantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plant_families<T extends plants$plant_familiesArgs<ExtArgs> = {}>(args?: Subset<T, plants$plant_familiesArgs<ExtArgs>>): Prisma__plant_familiesClient<$Result.GetResult<Prisma.$plant_familiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plants model
   */
  interface plantsFieldRefs {
    readonly id: FieldRef<"plants", 'Int'>
    readonly name: FieldRef<"plants", 'String'>
    readonly nickname: FieldRef<"plants", 'String'>
    readonly family_id: FieldRef<"plants", 'Int'>
    readonly created_at: FieldRef<"plants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plants findUnique
   */
  export type plantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter, which plants to fetch.
     */
    where: plantsWhereUniqueInput
  }

  /**
   * plants findUniqueOrThrow
   */
  export type plantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter, which plants to fetch.
     */
    where: plantsWhereUniqueInput
  }

  /**
   * plants findFirst
   */
  export type plantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter, which plants to fetch.
     */
    where?: plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plants to fetch.
     */
    orderBy?: plantsOrderByWithRelationInput | plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plants.
     */
    cursor?: plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plants.
     */
    distinct?: PlantsScalarFieldEnum | PlantsScalarFieldEnum[]
  }

  /**
   * plants findFirstOrThrow
   */
  export type plantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter, which plants to fetch.
     */
    where?: plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plants to fetch.
     */
    orderBy?: plantsOrderByWithRelationInput | plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plants.
     */
    cursor?: plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plants.
     */
    distinct?: PlantsScalarFieldEnum | PlantsScalarFieldEnum[]
  }

  /**
   * plants findMany
   */
  export type plantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter, which plants to fetch.
     */
    where?: plantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plants to fetch.
     */
    orderBy?: plantsOrderByWithRelationInput | plantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plants.
     */
    cursor?: plantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plants.
     */
    skip?: number
    distinct?: PlantsScalarFieldEnum | PlantsScalarFieldEnum[]
  }

  /**
   * plants create
   */
  export type plantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * The data needed to create a plants.
     */
    data: XOR<plantsCreateInput, plantsUncheckedCreateInput>
  }

  /**
   * plants createMany
   */
  export type plantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plants.
     */
    data: plantsCreateManyInput | plantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plants update
   */
  export type plantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * The data needed to update a plants.
     */
    data: XOR<plantsUpdateInput, plantsUncheckedUpdateInput>
    /**
     * Choose, which plants to update.
     */
    where: plantsWhereUniqueInput
  }

  /**
   * plants updateMany
   */
  export type plantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plants.
     */
    data: XOR<plantsUpdateManyMutationInput, plantsUncheckedUpdateManyInput>
    /**
     * Filter which plants to update
     */
    where?: plantsWhereInput
    /**
     * Limit how many plants to update.
     */
    limit?: number
  }

  /**
   * plants upsert
   */
  export type plantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * The filter to search for the plants to update in case it exists.
     */
    where: plantsWhereUniqueInput
    /**
     * In case the plants found by the `where` argument doesn't exist, create a new plants with this data.
     */
    create: XOR<plantsCreateInput, plantsUncheckedCreateInput>
    /**
     * In case the plants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plantsUpdateInput, plantsUncheckedUpdateInput>
  }

  /**
   * plants delete
   */
  export type plantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
    /**
     * Filter which plants to delete.
     */
    where: plantsWhereUniqueInput
  }

  /**
   * plants deleteMany
   */
  export type plantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plants to delete
     */
    where?: plantsWhereInput
    /**
     * Limit how many plants to delete.
     */
    limit?: number
  }

  /**
   * plants.entry_plants
   */
  export type plants$entry_plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry_plants
     */
    select?: entry_plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry_plants
     */
    omit?: entry_plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entry_plantsInclude<ExtArgs> | null
    where?: entry_plantsWhereInput
    orderBy?: entry_plantsOrderByWithRelationInput | entry_plantsOrderByWithRelationInput[]
    cursor?: entry_plantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entry_plantsScalarFieldEnum | Entry_plantsScalarFieldEnum[]
  }

  /**
   * plants.plant_families
   */
  export type plants$plant_familiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plant_families
     */
    select?: plant_familiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plant_families
     */
    omit?: plant_familiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plant_familiesInclude<ExtArgs> | null
    where?: plant_familiesWhereInput
  }

  /**
   * plants without action
   */
  export type plantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plants
     */
    select?: plantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plants
     */
    omit?: plantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plantsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntriesScalarFieldEnum: {
    id: 'id',
    entry_date: 'entry_date',
    location_id: 'location_id',
    entry: 'entry',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EntriesScalarFieldEnum = (typeof EntriesScalarFieldEnum)[keyof typeof EntriesScalarFieldEnum]


  export const Entry_plantsScalarFieldEnum: {
    entry_id: 'entry_id',
    plant_id: 'plant_id'
  };

  export type Entry_plantsScalarFieldEnum = (typeof Entry_plantsScalarFieldEnum)[keyof typeof Entry_plantsScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const PhotosScalarFieldEnum: {
    id: 'id',
    entry_id: 'entry_id',
    url: 'url',
    caption: 'caption',
    sort_order: 'sort_order',
    uploaded_at: 'uploaded_at'
  };

  export type PhotosScalarFieldEnum = (typeof PhotosScalarFieldEnum)[keyof typeof PhotosScalarFieldEnum]


  export const Plant_familiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color_token: 'color_token',
    sort_order: 'sort_order'
  };

  export type Plant_familiesScalarFieldEnum = (typeof Plant_familiesScalarFieldEnum)[keyof typeof Plant_familiesScalarFieldEnum]


  export const PlantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickname: 'nickname',
    family_id: 'family_id',
    created_at: 'created_at'
  };

  export type PlantsScalarFieldEnum = (typeof PlantsScalarFieldEnum)[keyof typeof PlantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const entriesOrderByRelevanceFieldEnum: {
    entry: 'entry'
  };

  export type entriesOrderByRelevanceFieldEnum = (typeof entriesOrderByRelevanceFieldEnum)[keyof typeof entriesOrderByRelevanceFieldEnum]


  export const locationsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type locationsOrderByRelevanceFieldEnum = (typeof locationsOrderByRelevanceFieldEnum)[keyof typeof locationsOrderByRelevanceFieldEnum]


  export const photosOrderByRelevanceFieldEnum: {
    url: 'url',
    caption: 'caption'
  };

  export type photosOrderByRelevanceFieldEnum = (typeof photosOrderByRelevanceFieldEnum)[keyof typeof photosOrderByRelevanceFieldEnum]


  export const plant_familiesOrderByRelevanceFieldEnum: {
    name: 'name',
    color_token: 'color_token'
  };

  export type plant_familiesOrderByRelevanceFieldEnum = (typeof plant_familiesOrderByRelevanceFieldEnum)[keyof typeof plant_familiesOrderByRelevanceFieldEnum]


  export const plantsOrderByRelevanceFieldEnum: {
    name: 'name',
    nickname: 'nickname'
  };

  export type plantsOrderByRelevanceFieldEnum = (typeof plantsOrderByRelevanceFieldEnum)[keyof typeof plantsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type entriesWhereInput = {
    AND?: entriesWhereInput | entriesWhereInput[]
    OR?: entriesWhereInput[]
    NOT?: entriesWhereInput | entriesWhereInput[]
    id?: IntFilter<"entries"> | number
    entry_date?: DateTimeFilter<"entries"> | Date | string
    location_id?: IntNullableFilter<"entries"> | number | null
    entry?: StringFilter<"entries"> | string
    created_at?: DateTimeFilter<"entries"> | Date | string
    updated_at?: DateTimeFilter<"entries"> | Date | string
    locations?: XOR<LocationsNullableScalarRelationFilter, locationsWhereInput> | null
    entry_plants?: Entry_plantsListRelationFilter
    photos?: PhotosListRelationFilter
  }

  export type entriesOrderByWithRelationInput = {
    id?: SortOrder
    entry_date?: SortOrder
    location_id?: SortOrderInput | SortOrder
    entry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    locations?: locationsOrderByWithRelationInput
    entry_plants?: entry_plantsOrderByRelationAggregateInput
    photos?: photosOrderByRelationAggregateInput
    _relevance?: entriesOrderByRelevanceInput
  }

  export type entriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: entriesWhereInput | entriesWhereInput[]
    OR?: entriesWhereInput[]
    NOT?: entriesWhereInput | entriesWhereInput[]
    entry_date?: DateTimeFilter<"entries"> | Date | string
    location_id?: IntNullableFilter<"entries"> | number | null
    entry?: StringFilter<"entries"> | string
    created_at?: DateTimeFilter<"entries"> | Date | string
    updated_at?: DateTimeFilter<"entries"> | Date | string
    locations?: XOR<LocationsNullableScalarRelationFilter, locationsWhereInput> | null
    entry_plants?: Entry_plantsListRelationFilter
    photos?: PhotosListRelationFilter
  }, "id">

  export type entriesOrderByWithAggregationInput = {
    id?: SortOrder
    entry_date?: SortOrder
    location_id?: SortOrderInput | SortOrder
    entry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: entriesCountOrderByAggregateInput
    _avg?: entriesAvgOrderByAggregateInput
    _max?: entriesMaxOrderByAggregateInput
    _min?: entriesMinOrderByAggregateInput
    _sum?: entriesSumOrderByAggregateInput
  }

  export type entriesScalarWhereWithAggregatesInput = {
    AND?: entriesScalarWhereWithAggregatesInput | entriesScalarWhereWithAggregatesInput[]
    OR?: entriesScalarWhereWithAggregatesInput[]
    NOT?: entriesScalarWhereWithAggregatesInput | entriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entries"> | number
    entry_date?: DateTimeWithAggregatesFilter<"entries"> | Date | string
    location_id?: IntNullableWithAggregatesFilter<"entries"> | number | null
    entry?: StringWithAggregatesFilter<"entries"> | string
    created_at?: DateTimeWithAggregatesFilter<"entries"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"entries"> | Date | string
  }

  export type entry_plantsWhereInput = {
    AND?: entry_plantsWhereInput | entry_plantsWhereInput[]
    OR?: entry_plantsWhereInput[]
    NOT?: entry_plantsWhereInput | entry_plantsWhereInput[]
    entry_id?: IntFilter<"entry_plants"> | number
    plant_id?: IntFilter<"entry_plants"> | number
    entries?: XOR<EntriesScalarRelationFilter, entriesWhereInput>
    plants?: XOR<PlantsScalarRelationFilter, plantsWhereInput>
  }

  export type entry_plantsOrderByWithRelationInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
    entries?: entriesOrderByWithRelationInput
    plants?: plantsOrderByWithRelationInput
  }

  export type entry_plantsWhereUniqueInput = Prisma.AtLeast<{
    entry_id_plant_id?: entry_plantsEntry_idPlant_idCompoundUniqueInput
    AND?: entry_plantsWhereInput | entry_plantsWhereInput[]
    OR?: entry_plantsWhereInput[]
    NOT?: entry_plantsWhereInput | entry_plantsWhereInput[]
    entry_id?: IntFilter<"entry_plants"> | number
    plant_id?: IntFilter<"entry_plants"> | number
    entries?: XOR<EntriesScalarRelationFilter, entriesWhereInput>
    plants?: XOR<PlantsScalarRelationFilter, plantsWhereInput>
  }, "entry_id_plant_id">

  export type entry_plantsOrderByWithAggregationInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
    _count?: entry_plantsCountOrderByAggregateInput
    _avg?: entry_plantsAvgOrderByAggregateInput
    _max?: entry_plantsMaxOrderByAggregateInput
    _min?: entry_plantsMinOrderByAggregateInput
    _sum?: entry_plantsSumOrderByAggregateInput
  }

  export type entry_plantsScalarWhereWithAggregatesInput = {
    AND?: entry_plantsScalarWhereWithAggregatesInput | entry_plantsScalarWhereWithAggregatesInput[]
    OR?: entry_plantsScalarWhereWithAggregatesInput[]
    NOT?: entry_plantsScalarWhereWithAggregatesInput | entry_plantsScalarWhereWithAggregatesInput[]
    entry_id?: IntWithAggregatesFilter<"entry_plants"> | number
    plant_id?: IntWithAggregatesFilter<"entry_plants"> | number
  }

  export type locationsWhereInput = {
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    id?: IntFilter<"locations"> | number
    name?: StringFilter<"locations"> | string
    description?: StringNullableFilter<"locations"> | string | null
    created_at?: DateTimeFilter<"locations"> | Date | string
    entries?: EntriesListRelationFilter
  }

  export type locationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    entries?: entriesOrderByRelationAggregateInput
    _relevance?: locationsOrderByRelevanceInput
  }

  export type locationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    description?: StringNullableFilter<"locations"> | string | null
    created_at?: DateTimeFilter<"locations"> | Date | string
    entries?: EntriesListRelationFilter
  }, "id" | "name">

  export type locationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: locationsCountOrderByAggregateInput
    _avg?: locationsAvgOrderByAggregateInput
    _max?: locationsMaxOrderByAggregateInput
    _min?: locationsMinOrderByAggregateInput
    _sum?: locationsSumOrderByAggregateInput
  }

  export type locationsScalarWhereWithAggregatesInput = {
    AND?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    OR?: locationsScalarWhereWithAggregatesInput[]
    NOT?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"locations"> | number
    name?: StringWithAggregatesFilter<"locations"> | string
    description?: StringNullableWithAggregatesFilter<"locations"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"locations"> | Date | string
  }

  export type photosWhereInput = {
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    id?: IntFilter<"photos"> | number
    entry_id?: IntFilter<"photos"> | number
    url?: StringFilter<"photos"> | string
    caption?: StringNullableFilter<"photos"> | string | null
    sort_order?: IntFilter<"photos"> | number
    uploaded_at?: DateTimeFilter<"photos"> | Date | string
    entries?: XOR<EntriesScalarRelationFilter, entriesWhereInput>
  }

  export type photosOrderByWithRelationInput = {
    id?: SortOrder
    entry_id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
    entries?: entriesOrderByWithRelationInput
    _relevance?: photosOrderByRelevanceInput
  }

  export type photosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    entry_id?: IntFilter<"photos"> | number
    url?: StringFilter<"photos"> | string
    caption?: StringNullableFilter<"photos"> | string | null
    sort_order?: IntFilter<"photos"> | number
    uploaded_at?: DateTimeFilter<"photos"> | Date | string
    entries?: XOR<EntriesScalarRelationFilter, entriesWhereInput>
  }, "id">

  export type photosOrderByWithAggregationInput = {
    id?: SortOrder
    entry_id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
    _count?: photosCountOrderByAggregateInput
    _avg?: photosAvgOrderByAggregateInput
    _max?: photosMaxOrderByAggregateInput
    _min?: photosMinOrderByAggregateInput
    _sum?: photosSumOrderByAggregateInput
  }

  export type photosScalarWhereWithAggregatesInput = {
    AND?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    OR?: photosScalarWhereWithAggregatesInput[]
    NOT?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"photos"> | number
    entry_id?: IntWithAggregatesFilter<"photos"> | number
    url?: StringWithAggregatesFilter<"photos"> | string
    caption?: StringNullableWithAggregatesFilter<"photos"> | string | null
    sort_order?: IntWithAggregatesFilter<"photos"> | number
    uploaded_at?: DateTimeWithAggregatesFilter<"photos"> | Date | string
  }

  export type plant_familiesWhereInput = {
    AND?: plant_familiesWhereInput | plant_familiesWhereInput[]
    OR?: plant_familiesWhereInput[]
    NOT?: plant_familiesWhereInput | plant_familiesWhereInput[]
    id?: IntFilter<"plant_families"> | number
    name?: StringFilter<"plant_families"> | string
    color_token?: StringNullableFilter<"plant_families"> | string | null
    sort_order?: IntFilter<"plant_families"> | number
    plants?: PlantsListRelationFilter
  }

  export type plant_familiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color_token?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    plants?: plantsOrderByRelationAggregateInput
    _relevance?: plant_familiesOrderByRelevanceInput
  }

  export type plant_familiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: plant_familiesWhereInput | plant_familiesWhereInput[]
    OR?: plant_familiesWhereInput[]
    NOT?: plant_familiesWhereInput | plant_familiesWhereInput[]
    color_token?: StringNullableFilter<"plant_families"> | string | null
    sort_order?: IntFilter<"plant_families"> | number
    plants?: PlantsListRelationFilter
  }, "id" | "name">

  export type plant_familiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color_token?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    _count?: plant_familiesCountOrderByAggregateInput
    _avg?: plant_familiesAvgOrderByAggregateInput
    _max?: plant_familiesMaxOrderByAggregateInput
    _min?: plant_familiesMinOrderByAggregateInput
    _sum?: plant_familiesSumOrderByAggregateInput
  }

  export type plant_familiesScalarWhereWithAggregatesInput = {
    AND?: plant_familiesScalarWhereWithAggregatesInput | plant_familiesScalarWhereWithAggregatesInput[]
    OR?: plant_familiesScalarWhereWithAggregatesInput[]
    NOT?: plant_familiesScalarWhereWithAggregatesInput | plant_familiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plant_families"> | number
    name?: StringWithAggregatesFilter<"plant_families"> | string
    color_token?: StringNullableWithAggregatesFilter<"plant_families"> | string | null
    sort_order?: IntWithAggregatesFilter<"plant_families"> | number
  }

  export type plantsWhereInput = {
    AND?: plantsWhereInput | plantsWhereInput[]
    OR?: plantsWhereInput[]
    NOT?: plantsWhereInput | plantsWhereInput[]
    id?: IntFilter<"plants"> | number
    name?: StringFilter<"plants"> | string
    nickname?: StringNullableFilter<"plants"> | string | null
    family_id?: IntNullableFilter<"plants"> | number | null
    created_at?: DateTimeFilter<"plants"> | Date | string
    entry_plants?: Entry_plantsListRelationFilter
    plant_families?: XOR<Plant_familiesNullableScalarRelationFilter, plant_familiesWhereInput> | null
  }

  export type plantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    family_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    entry_plants?: entry_plantsOrderByRelationAggregateInput
    plant_families?: plant_familiesOrderByWithRelationInput
    _relevance?: plantsOrderByRelevanceInput
  }

  export type plantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: plantsWhereInput | plantsWhereInput[]
    OR?: plantsWhereInput[]
    NOT?: plantsWhereInput | plantsWhereInput[]
    nickname?: StringNullableFilter<"plants"> | string | null
    family_id?: IntNullableFilter<"plants"> | number | null
    created_at?: DateTimeFilter<"plants"> | Date | string
    entry_plants?: Entry_plantsListRelationFilter
    plant_families?: XOR<Plant_familiesNullableScalarRelationFilter, plant_familiesWhereInput> | null
  }, "id" | "name">

  export type plantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    family_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: plantsCountOrderByAggregateInput
    _avg?: plantsAvgOrderByAggregateInput
    _max?: plantsMaxOrderByAggregateInput
    _min?: plantsMinOrderByAggregateInput
    _sum?: plantsSumOrderByAggregateInput
  }

  export type plantsScalarWhereWithAggregatesInput = {
    AND?: plantsScalarWhereWithAggregatesInput | plantsScalarWhereWithAggregatesInput[]
    OR?: plantsScalarWhereWithAggregatesInput[]
    NOT?: plantsScalarWhereWithAggregatesInput | plantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plants"> | number
    name?: StringWithAggregatesFilter<"plants"> | string
    nickname?: StringNullableWithAggregatesFilter<"plants"> | string | null
    family_id?: IntNullableWithAggregatesFilter<"plants"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"plants"> | Date | string
  }

  export type entriesCreateInput = {
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    locations?: locationsCreateNestedOneWithoutEntriesInput
    entry_plants?: entry_plantsCreateNestedManyWithoutEntriesInput
    photos?: photosCreateNestedManyWithoutEntriesInput
  }

  export type entriesUncheckedCreateInput = {
    id?: number
    entry_date: Date | string
    location_id?: number | null
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    entry_plants?: entry_plantsUncheckedCreateNestedManyWithoutEntriesInput
    photos?: photosUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type entriesUpdateInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateOneWithoutEntriesNestedInput
    entry_plants?: entry_plantsUpdateManyWithoutEntriesNestedInput
    photos?: photosUpdateManyWithoutEntriesNestedInput
  }

  export type entriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUncheckedUpdateManyWithoutEntriesNestedInput
    photos?: photosUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type entriesCreateManyInput = {
    id?: number
    entry_date: Date | string
    location_id?: number | null
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type entriesUpdateManyMutationInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entry_plantsCreateInput = {
    entries: entriesCreateNestedOneWithoutEntry_plantsInput
    plants: plantsCreateNestedOneWithoutEntry_plantsInput
  }

  export type entry_plantsUncheckedCreateInput = {
    entry_id: number
    plant_id: number
  }

  export type entry_plantsUpdateInput = {
    entries?: entriesUpdateOneRequiredWithoutEntry_plantsNestedInput
    plants?: plantsUpdateOneRequiredWithoutEntry_plantsNestedInput
  }

  export type entry_plantsUncheckedUpdateInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    plant_id?: IntFieldUpdateOperationsInput | number
  }

  export type entry_plantsCreateManyInput = {
    entry_id: number
    plant_id: number
  }

  export type entry_plantsUpdateManyMutationInput = {

  }

  export type entry_plantsUncheckedUpdateManyInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    plant_id?: IntFieldUpdateOperationsInput | number
  }

  export type locationsCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    entries?: entriesCreateNestedManyWithoutLocationsInput
  }

  export type locationsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    entries?: entriesUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type locationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: entriesUpdateManyWithoutLocationsNestedInput
  }

  export type locationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: entriesUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type locationsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type locationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type photosCreateInput = {
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
    entries: entriesCreateNestedOneWithoutPhotosInput
  }

  export type photosUncheckedCreateInput = {
    id?: number
    entry_id: number
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type photosUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: entriesUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type photosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type photosCreateManyInput = {
    id?: number
    entry_id: number
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type photosUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type photosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plant_familiesCreateInput = {
    name: string
    color_token?: string | null
    sort_order?: number
    plants?: plantsCreateNestedManyWithoutPlant_familiesInput
  }

  export type plant_familiesUncheckedCreateInput = {
    id?: number
    name: string
    color_token?: string | null
    sort_order?: number
    plants?: plantsUncheckedCreateNestedManyWithoutPlant_familiesInput
  }

  export type plant_familiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    plants?: plantsUpdateManyWithoutPlant_familiesNestedInput
  }

  export type plant_familiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    plants?: plantsUncheckedUpdateManyWithoutPlant_familiesNestedInput
  }

  export type plant_familiesCreateManyInput = {
    id?: number
    name: string
    color_token?: string | null
    sort_order?: number
  }

  export type plant_familiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type plant_familiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type plantsCreateInput = {
    name: string
    nickname?: string | null
    created_at?: Date | string
    entry_plants?: entry_plantsCreateNestedManyWithoutPlantsInput
    plant_families?: plant_familiesCreateNestedOneWithoutPlantsInput
  }

  export type plantsUncheckedCreateInput = {
    id?: number
    name: string
    nickname?: string | null
    family_id?: number | null
    created_at?: Date | string
    entry_plants?: entry_plantsUncheckedCreateNestedManyWithoutPlantsInput
  }

  export type plantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUpdateManyWithoutPlantsNestedInput
    plant_families?: plant_familiesUpdateOneWithoutPlantsNestedInput
  }

  export type plantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    family_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUncheckedUpdateManyWithoutPlantsNestedInput
  }

  export type plantsCreateManyInput = {
    id?: number
    name: string
    nickname?: string | null
    family_id?: number | null
    created_at?: Date | string
  }

  export type plantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    family_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LocationsNullableScalarRelationFilter = {
    is?: locationsWhereInput | null
    isNot?: locationsWhereInput | null
  }

  export type Entry_plantsListRelationFilter = {
    every?: entry_plantsWhereInput
    some?: entry_plantsWhereInput
    none?: entry_plantsWhereInput
  }

  export type PhotosListRelationFilter = {
    every?: photosWhereInput
    some?: photosWhereInput
    none?: photosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type entry_plantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type photosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entriesOrderByRelevanceInput = {
    fields: entriesOrderByRelevanceFieldEnum | entriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entriesCountOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    location_id?: SortOrder
    entry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entriesAvgOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
  }

  export type entriesMaxOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    location_id?: SortOrder
    entry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entriesMinOrderByAggregateInput = {
    id?: SortOrder
    entry_date?: SortOrder
    location_id?: SortOrder
    entry?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entriesSumOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EntriesScalarRelationFilter = {
    is?: entriesWhereInput
    isNot?: entriesWhereInput
  }

  export type PlantsScalarRelationFilter = {
    is?: plantsWhereInput
    isNot?: plantsWhereInput
  }

  export type entry_plantsEntry_idPlant_idCompoundUniqueInput = {
    entry_id: number
    plant_id: number
  }

  export type entry_plantsCountOrderByAggregateInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
  }

  export type entry_plantsAvgOrderByAggregateInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
  }

  export type entry_plantsMaxOrderByAggregateInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
  }

  export type entry_plantsMinOrderByAggregateInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
  }

  export type entry_plantsSumOrderByAggregateInput = {
    entry_id?: SortOrder
    plant_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EntriesListRelationFilter = {
    every?: entriesWhereInput
    some?: entriesWhereInput
    none?: entriesWhereInput
  }

  export type entriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationsOrderByRelevanceInput = {
    fields: locationsOrderByRelevanceFieldEnum | locationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type locationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type locationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type locationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type locationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type locationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type photosOrderByRelevanceInput = {
    fields: photosOrderByRelevanceFieldEnum | photosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type photosCountOrderByAggregateInput = {
    id?: SortOrder
    entry_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type photosAvgOrderByAggregateInput = {
    id?: SortOrder
    entry_id?: SortOrder
    sort_order?: SortOrder
  }

  export type photosMaxOrderByAggregateInput = {
    id?: SortOrder
    entry_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type photosMinOrderByAggregateInput = {
    id?: SortOrder
    entry_id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type photosSumOrderByAggregateInput = {
    id?: SortOrder
    entry_id?: SortOrder
    sort_order?: SortOrder
  }

  export type PlantsListRelationFilter = {
    every?: plantsWhereInput
    some?: plantsWhereInput
    none?: plantsWhereInput
  }

  export type plantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type plant_familiesOrderByRelevanceInput = {
    fields: plant_familiesOrderByRelevanceFieldEnum | plant_familiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type plant_familiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color_token?: SortOrder
    sort_order?: SortOrder
  }

  export type plant_familiesAvgOrderByAggregateInput = {
    id?: SortOrder
    sort_order?: SortOrder
  }

  export type plant_familiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color_token?: SortOrder
    sort_order?: SortOrder
  }

  export type plant_familiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color_token?: SortOrder
    sort_order?: SortOrder
  }

  export type plant_familiesSumOrderByAggregateInput = {
    id?: SortOrder
    sort_order?: SortOrder
  }

  export type Plant_familiesNullableScalarRelationFilter = {
    is?: plant_familiesWhereInput | null
    isNot?: plant_familiesWhereInput | null
  }

  export type plantsOrderByRelevanceInput = {
    fields: plantsOrderByRelevanceFieldEnum | plantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type plantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    family_id?: SortOrder
    created_at?: SortOrder
  }

  export type plantsAvgOrderByAggregateInput = {
    id?: SortOrder
    family_id?: SortOrder
  }

  export type plantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    family_id?: SortOrder
    created_at?: SortOrder
  }

  export type plantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    family_id?: SortOrder
    created_at?: SortOrder
  }

  export type plantsSumOrderByAggregateInput = {
    id?: SortOrder
    family_id?: SortOrder
  }

  export type locationsCreateNestedOneWithoutEntriesInput = {
    create?: XOR<locationsCreateWithoutEntriesInput, locationsUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: locationsCreateOrConnectWithoutEntriesInput
    connect?: locationsWhereUniqueInput
  }

  export type entry_plantsCreateNestedManyWithoutEntriesInput = {
    create?: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput> | entry_plantsCreateWithoutEntriesInput[] | entry_plantsUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutEntriesInput | entry_plantsCreateOrConnectWithoutEntriesInput[]
    createMany?: entry_plantsCreateManyEntriesInputEnvelope
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
  }

  export type photosCreateNestedManyWithoutEntriesInput = {
    create?: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput> | photosCreateWithoutEntriesInput[] | photosUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: photosCreateOrConnectWithoutEntriesInput | photosCreateOrConnectWithoutEntriesInput[]
    createMany?: photosCreateManyEntriesInputEnvelope
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
  }

  export type entry_plantsUncheckedCreateNestedManyWithoutEntriesInput = {
    create?: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput> | entry_plantsCreateWithoutEntriesInput[] | entry_plantsUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutEntriesInput | entry_plantsCreateOrConnectWithoutEntriesInput[]
    createMany?: entry_plantsCreateManyEntriesInputEnvelope
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
  }

  export type photosUncheckedCreateNestedManyWithoutEntriesInput = {
    create?: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput> | photosCreateWithoutEntriesInput[] | photosUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: photosCreateOrConnectWithoutEntriesInput | photosCreateOrConnectWithoutEntriesInput[]
    createMany?: photosCreateManyEntriesInputEnvelope
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type locationsUpdateOneWithoutEntriesNestedInput = {
    create?: XOR<locationsCreateWithoutEntriesInput, locationsUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: locationsCreateOrConnectWithoutEntriesInput
    upsert?: locationsUpsertWithoutEntriesInput
    disconnect?: locationsWhereInput | boolean
    delete?: locationsWhereInput | boolean
    connect?: locationsWhereUniqueInput
    update?: XOR<XOR<locationsUpdateToOneWithWhereWithoutEntriesInput, locationsUpdateWithoutEntriesInput>, locationsUncheckedUpdateWithoutEntriesInput>
  }

  export type entry_plantsUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput> | entry_plantsCreateWithoutEntriesInput[] | entry_plantsUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutEntriesInput | entry_plantsCreateOrConnectWithoutEntriesInput[]
    upsert?: entry_plantsUpsertWithWhereUniqueWithoutEntriesInput | entry_plantsUpsertWithWhereUniqueWithoutEntriesInput[]
    createMany?: entry_plantsCreateManyEntriesInputEnvelope
    set?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    disconnect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    delete?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    update?: entry_plantsUpdateWithWhereUniqueWithoutEntriesInput | entry_plantsUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: entry_plantsUpdateManyWithWhereWithoutEntriesInput | entry_plantsUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
  }

  export type photosUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput> | photosCreateWithoutEntriesInput[] | photosUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: photosCreateOrConnectWithoutEntriesInput | photosCreateOrConnectWithoutEntriesInput[]
    upsert?: photosUpsertWithWhereUniqueWithoutEntriesInput | photosUpsertWithWhereUniqueWithoutEntriesInput[]
    createMany?: photosCreateManyEntriesInputEnvelope
    set?: photosWhereUniqueInput | photosWhereUniqueInput[]
    disconnect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    delete?: photosWhereUniqueInput | photosWhereUniqueInput[]
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    update?: photosUpdateWithWhereUniqueWithoutEntriesInput | photosUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: photosUpdateManyWithWhereWithoutEntriesInput | photosUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: photosScalarWhereInput | photosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type entry_plantsUncheckedUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput> | entry_plantsCreateWithoutEntriesInput[] | entry_plantsUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutEntriesInput | entry_plantsCreateOrConnectWithoutEntriesInput[]
    upsert?: entry_plantsUpsertWithWhereUniqueWithoutEntriesInput | entry_plantsUpsertWithWhereUniqueWithoutEntriesInput[]
    createMany?: entry_plantsCreateManyEntriesInputEnvelope
    set?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    disconnect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    delete?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    update?: entry_plantsUpdateWithWhereUniqueWithoutEntriesInput | entry_plantsUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: entry_plantsUpdateManyWithWhereWithoutEntriesInput | entry_plantsUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
  }

  export type photosUncheckedUpdateManyWithoutEntriesNestedInput = {
    create?: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput> | photosCreateWithoutEntriesInput[] | photosUncheckedCreateWithoutEntriesInput[]
    connectOrCreate?: photosCreateOrConnectWithoutEntriesInput | photosCreateOrConnectWithoutEntriesInput[]
    upsert?: photosUpsertWithWhereUniqueWithoutEntriesInput | photosUpsertWithWhereUniqueWithoutEntriesInput[]
    createMany?: photosCreateManyEntriesInputEnvelope
    set?: photosWhereUniqueInput | photosWhereUniqueInput[]
    disconnect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    delete?: photosWhereUniqueInput | photosWhereUniqueInput[]
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    update?: photosUpdateWithWhereUniqueWithoutEntriesInput | photosUpdateWithWhereUniqueWithoutEntriesInput[]
    updateMany?: photosUpdateManyWithWhereWithoutEntriesInput | photosUpdateManyWithWhereWithoutEntriesInput[]
    deleteMany?: photosScalarWhereInput | photosScalarWhereInput[]
  }

  export type entriesCreateNestedOneWithoutEntry_plantsInput = {
    create?: XOR<entriesCreateWithoutEntry_plantsInput, entriesUncheckedCreateWithoutEntry_plantsInput>
    connectOrCreate?: entriesCreateOrConnectWithoutEntry_plantsInput
    connect?: entriesWhereUniqueInput
  }

  export type plantsCreateNestedOneWithoutEntry_plantsInput = {
    create?: XOR<plantsCreateWithoutEntry_plantsInput, plantsUncheckedCreateWithoutEntry_plantsInput>
    connectOrCreate?: plantsCreateOrConnectWithoutEntry_plantsInput
    connect?: plantsWhereUniqueInput
  }

  export type entriesUpdateOneRequiredWithoutEntry_plantsNestedInput = {
    create?: XOR<entriesCreateWithoutEntry_plantsInput, entriesUncheckedCreateWithoutEntry_plantsInput>
    connectOrCreate?: entriesCreateOrConnectWithoutEntry_plantsInput
    upsert?: entriesUpsertWithoutEntry_plantsInput
    connect?: entriesWhereUniqueInput
    update?: XOR<XOR<entriesUpdateToOneWithWhereWithoutEntry_plantsInput, entriesUpdateWithoutEntry_plantsInput>, entriesUncheckedUpdateWithoutEntry_plantsInput>
  }

  export type plantsUpdateOneRequiredWithoutEntry_plantsNestedInput = {
    create?: XOR<plantsCreateWithoutEntry_plantsInput, plantsUncheckedCreateWithoutEntry_plantsInput>
    connectOrCreate?: plantsCreateOrConnectWithoutEntry_plantsInput
    upsert?: plantsUpsertWithoutEntry_plantsInput
    connect?: plantsWhereUniqueInput
    update?: XOR<XOR<plantsUpdateToOneWithWhereWithoutEntry_plantsInput, plantsUpdateWithoutEntry_plantsInput>, plantsUncheckedUpdateWithoutEntry_plantsInput>
  }

  export type entriesCreateNestedManyWithoutLocationsInput = {
    create?: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput> | entriesCreateWithoutLocationsInput[] | entriesUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: entriesCreateOrConnectWithoutLocationsInput | entriesCreateOrConnectWithoutLocationsInput[]
    createMany?: entriesCreateManyLocationsInputEnvelope
    connect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
  }

  export type entriesUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput> | entriesCreateWithoutLocationsInput[] | entriesUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: entriesCreateOrConnectWithoutLocationsInput | entriesCreateOrConnectWithoutLocationsInput[]
    createMany?: entriesCreateManyLocationsInputEnvelope
    connect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type entriesUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput> | entriesCreateWithoutLocationsInput[] | entriesUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: entriesCreateOrConnectWithoutLocationsInput | entriesCreateOrConnectWithoutLocationsInput[]
    upsert?: entriesUpsertWithWhereUniqueWithoutLocationsInput | entriesUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: entriesCreateManyLocationsInputEnvelope
    set?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    disconnect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    delete?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    connect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    update?: entriesUpdateWithWhereUniqueWithoutLocationsInput | entriesUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: entriesUpdateManyWithWhereWithoutLocationsInput | entriesUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: entriesScalarWhereInput | entriesScalarWhereInput[]
  }

  export type entriesUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput> | entriesCreateWithoutLocationsInput[] | entriesUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: entriesCreateOrConnectWithoutLocationsInput | entriesCreateOrConnectWithoutLocationsInput[]
    upsert?: entriesUpsertWithWhereUniqueWithoutLocationsInput | entriesUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: entriesCreateManyLocationsInputEnvelope
    set?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    disconnect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    delete?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    connect?: entriesWhereUniqueInput | entriesWhereUniqueInput[]
    update?: entriesUpdateWithWhereUniqueWithoutLocationsInput | entriesUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: entriesUpdateManyWithWhereWithoutLocationsInput | entriesUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: entriesScalarWhereInput | entriesScalarWhereInput[]
  }

  export type entriesCreateNestedOneWithoutPhotosInput = {
    create?: XOR<entriesCreateWithoutPhotosInput, entriesUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: entriesCreateOrConnectWithoutPhotosInput
    connect?: entriesWhereUniqueInput
  }

  export type entriesUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<entriesCreateWithoutPhotosInput, entriesUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: entriesCreateOrConnectWithoutPhotosInput
    upsert?: entriesUpsertWithoutPhotosInput
    connect?: entriesWhereUniqueInput
    update?: XOR<XOR<entriesUpdateToOneWithWhereWithoutPhotosInput, entriesUpdateWithoutPhotosInput>, entriesUncheckedUpdateWithoutPhotosInput>
  }

  export type plantsCreateNestedManyWithoutPlant_familiesInput = {
    create?: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput> | plantsCreateWithoutPlant_familiesInput[] | plantsUncheckedCreateWithoutPlant_familiesInput[]
    connectOrCreate?: plantsCreateOrConnectWithoutPlant_familiesInput | plantsCreateOrConnectWithoutPlant_familiesInput[]
    createMany?: plantsCreateManyPlant_familiesInputEnvelope
    connect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
  }

  export type plantsUncheckedCreateNestedManyWithoutPlant_familiesInput = {
    create?: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput> | plantsCreateWithoutPlant_familiesInput[] | plantsUncheckedCreateWithoutPlant_familiesInput[]
    connectOrCreate?: plantsCreateOrConnectWithoutPlant_familiesInput | plantsCreateOrConnectWithoutPlant_familiesInput[]
    createMany?: plantsCreateManyPlant_familiesInputEnvelope
    connect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
  }

  export type plantsUpdateManyWithoutPlant_familiesNestedInput = {
    create?: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput> | plantsCreateWithoutPlant_familiesInput[] | plantsUncheckedCreateWithoutPlant_familiesInput[]
    connectOrCreate?: plantsCreateOrConnectWithoutPlant_familiesInput | plantsCreateOrConnectWithoutPlant_familiesInput[]
    upsert?: plantsUpsertWithWhereUniqueWithoutPlant_familiesInput | plantsUpsertWithWhereUniqueWithoutPlant_familiesInput[]
    createMany?: plantsCreateManyPlant_familiesInputEnvelope
    set?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    disconnect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    delete?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    connect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    update?: plantsUpdateWithWhereUniqueWithoutPlant_familiesInput | plantsUpdateWithWhereUniqueWithoutPlant_familiesInput[]
    updateMany?: plantsUpdateManyWithWhereWithoutPlant_familiesInput | plantsUpdateManyWithWhereWithoutPlant_familiesInput[]
    deleteMany?: plantsScalarWhereInput | plantsScalarWhereInput[]
  }

  export type plantsUncheckedUpdateManyWithoutPlant_familiesNestedInput = {
    create?: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput> | plantsCreateWithoutPlant_familiesInput[] | plantsUncheckedCreateWithoutPlant_familiesInput[]
    connectOrCreate?: plantsCreateOrConnectWithoutPlant_familiesInput | plantsCreateOrConnectWithoutPlant_familiesInput[]
    upsert?: plantsUpsertWithWhereUniqueWithoutPlant_familiesInput | plantsUpsertWithWhereUniqueWithoutPlant_familiesInput[]
    createMany?: plantsCreateManyPlant_familiesInputEnvelope
    set?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    disconnect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    delete?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    connect?: plantsWhereUniqueInput | plantsWhereUniqueInput[]
    update?: plantsUpdateWithWhereUniqueWithoutPlant_familiesInput | plantsUpdateWithWhereUniqueWithoutPlant_familiesInput[]
    updateMany?: plantsUpdateManyWithWhereWithoutPlant_familiesInput | plantsUpdateManyWithWhereWithoutPlant_familiesInput[]
    deleteMany?: plantsScalarWhereInput | plantsScalarWhereInput[]
  }

  export type entry_plantsCreateNestedManyWithoutPlantsInput = {
    create?: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput> | entry_plantsCreateWithoutPlantsInput[] | entry_plantsUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutPlantsInput | entry_plantsCreateOrConnectWithoutPlantsInput[]
    createMany?: entry_plantsCreateManyPlantsInputEnvelope
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
  }

  export type plant_familiesCreateNestedOneWithoutPlantsInput = {
    create?: XOR<plant_familiesCreateWithoutPlantsInput, plant_familiesUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: plant_familiesCreateOrConnectWithoutPlantsInput
    connect?: plant_familiesWhereUniqueInput
  }

  export type entry_plantsUncheckedCreateNestedManyWithoutPlantsInput = {
    create?: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput> | entry_plantsCreateWithoutPlantsInput[] | entry_plantsUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutPlantsInput | entry_plantsCreateOrConnectWithoutPlantsInput[]
    createMany?: entry_plantsCreateManyPlantsInputEnvelope
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
  }

  export type entry_plantsUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput> | entry_plantsCreateWithoutPlantsInput[] | entry_plantsUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutPlantsInput | entry_plantsCreateOrConnectWithoutPlantsInput[]
    upsert?: entry_plantsUpsertWithWhereUniqueWithoutPlantsInput | entry_plantsUpsertWithWhereUniqueWithoutPlantsInput[]
    createMany?: entry_plantsCreateManyPlantsInputEnvelope
    set?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    disconnect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    delete?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    update?: entry_plantsUpdateWithWhereUniqueWithoutPlantsInput | entry_plantsUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: entry_plantsUpdateManyWithWhereWithoutPlantsInput | entry_plantsUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
  }

  export type plant_familiesUpdateOneWithoutPlantsNestedInput = {
    create?: XOR<plant_familiesCreateWithoutPlantsInput, plant_familiesUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: plant_familiesCreateOrConnectWithoutPlantsInput
    upsert?: plant_familiesUpsertWithoutPlantsInput
    disconnect?: plant_familiesWhereInput | boolean
    delete?: plant_familiesWhereInput | boolean
    connect?: plant_familiesWhereUniqueInput
    update?: XOR<XOR<plant_familiesUpdateToOneWithWhereWithoutPlantsInput, plant_familiesUpdateWithoutPlantsInput>, plant_familiesUncheckedUpdateWithoutPlantsInput>
  }

  export type entry_plantsUncheckedUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput> | entry_plantsCreateWithoutPlantsInput[] | entry_plantsUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: entry_plantsCreateOrConnectWithoutPlantsInput | entry_plantsCreateOrConnectWithoutPlantsInput[]
    upsert?: entry_plantsUpsertWithWhereUniqueWithoutPlantsInput | entry_plantsUpsertWithWhereUniqueWithoutPlantsInput[]
    createMany?: entry_plantsCreateManyPlantsInputEnvelope
    set?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    disconnect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    delete?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    connect?: entry_plantsWhereUniqueInput | entry_plantsWhereUniqueInput[]
    update?: entry_plantsUpdateWithWhereUniqueWithoutPlantsInput | entry_plantsUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: entry_plantsUpdateManyWithWhereWithoutPlantsInput | entry_plantsUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type locationsCreateWithoutEntriesInput = {
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type locationsUncheckedCreateWithoutEntriesInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type locationsCreateOrConnectWithoutEntriesInput = {
    where: locationsWhereUniqueInput
    create: XOR<locationsCreateWithoutEntriesInput, locationsUncheckedCreateWithoutEntriesInput>
  }

  export type entry_plantsCreateWithoutEntriesInput = {
    plants: plantsCreateNestedOneWithoutEntry_plantsInput
  }

  export type entry_plantsUncheckedCreateWithoutEntriesInput = {
    plant_id: number
  }

  export type entry_plantsCreateOrConnectWithoutEntriesInput = {
    where: entry_plantsWhereUniqueInput
    create: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput>
  }

  export type entry_plantsCreateManyEntriesInputEnvelope = {
    data: entry_plantsCreateManyEntriesInput | entry_plantsCreateManyEntriesInput[]
    skipDuplicates?: boolean
  }

  export type photosCreateWithoutEntriesInput = {
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type photosUncheckedCreateWithoutEntriesInput = {
    id?: number
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type photosCreateOrConnectWithoutEntriesInput = {
    where: photosWhereUniqueInput
    create: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput>
  }

  export type photosCreateManyEntriesInputEnvelope = {
    data: photosCreateManyEntriesInput | photosCreateManyEntriesInput[]
    skipDuplicates?: boolean
  }

  export type locationsUpsertWithoutEntriesInput = {
    update: XOR<locationsUpdateWithoutEntriesInput, locationsUncheckedUpdateWithoutEntriesInput>
    create: XOR<locationsCreateWithoutEntriesInput, locationsUncheckedCreateWithoutEntriesInput>
    where?: locationsWhereInput
  }

  export type locationsUpdateToOneWithWhereWithoutEntriesInput = {
    where?: locationsWhereInput
    data: XOR<locationsUpdateWithoutEntriesInput, locationsUncheckedUpdateWithoutEntriesInput>
  }

  export type locationsUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entry_plantsUpsertWithWhereUniqueWithoutEntriesInput = {
    where: entry_plantsWhereUniqueInput
    update: XOR<entry_plantsUpdateWithoutEntriesInput, entry_plantsUncheckedUpdateWithoutEntriesInput>
    create: XOR<entry_plantsCreateWithoutEntriesInput, entry_plantsUncheckedCreateWithoutEntriesInput>
  }

  export type entry_plantsUpdateWithWhereUniqueWithoutEntriesInput = {
    where: entry_plantsWhereUniqueInput
    data: XOR<entry_plantsUpdateWithoutEntriesInput, entry_plantsUncheckedUpdateWithoutEntriesInput>
  }

  export type entry_plantsUpdateManyWithWhereWithoutEntriesInput = {
    where: entry_plantsScalarWhereInput
    data: XOR<entry_plantsUpdateManyMutationInput, entry_plantsUncheckedUpdateManyWithoutEntriesInput>
  }

  export type entry_plantsScalarWhereInput = {
    AND?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
    OR?: entry_plantsScalarWhereInput[]
    NOT?: entry_plantsScalarWhereInput | entry_plantsScalarWhereInput[]
    entry_id?: IntFilter<"entry_plants"> | number
    plant_id?: IntFilter<"entry_plants"> | number
  }

  export type photosUpsertWithWhereUniqueWithoutEntriesInput = {
    where: photosWhereUniqueInput
    update: XOR<photosUpdateWithoutEntriesInput, photosUncheckedUpdateWithoutEntriesInput>
    create: XOR<photosCreateWithoutEntriesInput, photosUncheckedCreateWithoutEntriesInput>
  }

  export type photosUpdateWithWhereUniqueWithoutEntriesInput = {
    where: photosWhereUniqueInput
    data: XOR<photosUpdateWithoutEntriesInput, photosUncheckedUpdateWithoutEntriesInput>
  }

  export type photosUpdateManyWithWhereWithoutEntriesInput = {
    where: photosScalarWhereInput
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyWithoutEntriesInput>
  }

  export type photosScalarWhereInput = {
    AND?: photosScalarWhereInput | photosScalarWhereInput[]
    OR?: photosScalarWhereInput[]
    NOT?: photosScalarWhereInput | photosScalarWhereInput[]
    id?: IntFilter<"photos"> | number
    entry_id?: IntFilter<"photos"> | number
    url?: StringFilter<"photos"> | string
    caption?: StringNullableFilter<"photos"> | string | null
    sort_order?: IntFilter<"photos"> | number
    uploaded_at?: DateTimeFilter<"photos"> | Date | string
  }

  export type entriesCreateWithoutEntry_plantsInput = {
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    locations?: locationsCreateNestedOneWithoutEntriesInput
    photos?: photosCreateNestedManyWithoutEntriesInput
  }

  export type entriesUncheckedCreateWithoutEntry_plantsInput = {
    id?: number
    entry_date: Date | string
    location_id?: number | null
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    photos?: photosUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type entriesCreateOrConnectWithoutEntry_plantsInput = {
    where: entriesWhereUniqueInput
    create: XOR<entriesCreateWithoutEntry_plantsInput, entriesUncheckedCreateWithoutEntry_plantsInput>
  }

  export type plantsCreateWithoutEntry_plantsInput = {
    name: string
    nickname?: string | null
    created_at?: Date | string
    plant_families?: plant_familiesCreateNestedOneWithoutPlantsInput
  }

  export type plantsUncheckedCreateWithoutEntry_plantsInput = {
    id?: number
    name: string
    nickname?: string | null
    family_id?: number | null
    created_at?: Date | string
  }

  export type plantsCreateOrConnectWithoutEntry_plantsInput = {
    where: plantsWhereUniqueInput
    create: XOR<plantsCreateWithoutEntry_plantsInput, plantsUncheckedCreateWithoutEntry_plantsInput>
  }

  export type entriesUpsertWithoutEntry_plantsInput = {
    update: XOR<entriesUpdateWithoutEntry_plantsInput, entriesUncheckedUpdateWithoutEntry_plantsInput>
    create: XOR<entriesCreateWithoutEntry_plantsInput, entriesUncheckedCreateWithoutEntry_plantsInput>
    where?: entriesWhereInput
  }

  export type entriesUpdateToOneWithWhereWithoutEntry_plantsInput = {
    where?: entriesWhereInput
    data: XOR<entriesUpdateWithoutEntry_plantsInput, entriesUncheckedUpdateWithoutEntry_plantsInput>
  }

  export type entriesUpdateWithoutEntry_plantsInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateOneWithoutEntriesNestedInput
    photos?: photosUpdateManyWithoutEntriesNestedInput
  }

  export type entriesUncheckedUpdateWithoutEntry_plantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: photosUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type plantsUpsertWithoutEntry_plantsInput = {
    update: XOR<plantsUpdateWithoutEntry_plantsInput, plantsUncheckedUpdateWithoutEntry_plantsInput>
    create: XOR<plantsCreateWithoutEntry_plantsInput, plantsUncheckedCreateWithoutEntry_plantsInput>
    where?: plantsWhereInput
  }

  export type plantsUpdateToOneWithWhereWithoutEntry_plantsInput = {
    where?: plantsWhereInput
    data: XOR<plantsUpdateWithoutEntry_plantsInput, plantsUncheckedUpdateWithoutEntry_plantsInput>
  }

  export type plantsUpdateWithoutEntry_plantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plant_families?: plant_familiesUpdateOneWithoutPlantsNestedInput
  }

  export type plantsUncheckedUpdateWithoutEntry_plantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    family_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entriesCreateWithoutLocationsInput = {
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    entry_plants?: entry_plantsCreateNestedManyWithoutEntriesInput
    photos?: photosCreateNestedManyWithoutEntriesInput
  }

  export type entriesUncheckedCreateWithoutLocationsInput = {
    id?: number
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    entry_plants?: entry_plantsUncheckedCreateNestedManyWithoutEntriesInput
    photos?: photosUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type entriesCreateOrConnectWithoutLocationsInput = {
    where: entriesWhereUniqueInput
    create: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput>
  }

  export type entriesCreateManyLocationsInputEnvelope = {
    data: entriesCreateManyLocationsInput | entriesCreateManyLocationsInput[]
    skipDuplicates?: boolean
  }

  export type entriesUpsertWithWhereUniqueWithoutLocationsInput = {
    where: entriesWhereUniqueInput
    update: XOR<entriesUpdateWithoutLocationsInput, entriesUncheckedUpdateWithoutLocationsInput>
    create: XOR<entriesCreateWithoutLocationsInput, entriesUncheckedCreateWithoutLocationsInput>
  }

  export type entriesUpdateWithWhereUniqueWithoutLocationsInput = {
    where: entriesWhereUniqueInput
    data: XOR<entriesUpdateWithoutLocationsInput, entriesUncheckedUpdateWithoutLocationsInput>
  }

  export type entriesUpdateManyWithWhereWithoutLocationsInput = {
    where: entriesScalarWhereInput
    data: XOR<entriesUpdateManyMutationInput, entriesUncheckedUpdateManyWithoutLocationsInput>
  }

  export type entriesScalarWhereInput = {
    AND?: entriesScalarWhereInput | entriesScalarWhereInput[]
    OR?: entriesScalarWhereInput[]
    NOT?: entriesScalarWhereInput | entriesScalarWhereInput[]
    id?: IntFilter<"entries"> | number
    entry_date?: DateTimeFilter<"entries"> | Date | string
    location_id?: IntNullableFilter<"entries"> | number | null
    entry?: StringFilter<"entries"> | string
    created_at?: DateTimeFilter<"entries"> | Date | string
    updated_at?: DateTimeFilter<"entries"> | Date | string
  }

  export type entriesCreateWithoutPhotosInput = {
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    locations?: locationsCreateNestedOneWithoutEntriesInput
    entry_plants?: entry_plantsCreateNestedManyWithoutEntriesInput
  }

  export type entriesUncheckedCreateWithoutPhotosInput = {
    id?: number
    entry_date: Date | string
    location_id?: number | null
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
    entry_plants?: entry_plantsUncheckedCreateNestedManyWithoutEntriesInput
  }

  export type entriesCreateOrConnectWithoutPhotosInput = {
    where: entriesWhereUniqueInput
    create: XOR<entriesCreateWithoutPhotosInput, entriesUncheckedCreateWithoutPhotosInput>
  }

  export type entriesUpsertWithoutPhotosInput = {
    update: XOR<entriesUpdateWithoutPhotosInput, entriesUncheckedUpdateWithoutPhotosInput>
    create: XOR<entriesCreateWithoutPhotosInput, entriesUncheckedCreateWithoutPhotosInput>
    where?: entriesWhereInput
  }

  export type entriesUpdateToOneWithWhereWithoutPhotosInput = {
    where?: entriesWhereInput
    data: XOR<entriesUpdateWithoutPhotosInput, entriesUncheckedUpdateWithoutPhotosInput>
  }

  export type entriesUpdateWithoutPhotosInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateOneWithoutEntriesNestedInput
    entry_plants?: entry_plantsUpdateManyWithoutEntriesNestedInput
  }

  export type entriesUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type plantsCreateWithoutPlant_familiesInput = {
    name: string
    nickname?: string | null
    created_at?: Date | string
    entry_plants?: entry_plantsCreateNestedManyWithoutPlantsInput
  }

  export type plantsUncheckedCreateWithoutPlant_familiesInput = {
    id?: number
    name: string
    nickname?: string | null
    created_at?: Date | string
    entry_plants?: entry_plantsUncheckedCreateNestedManyWithoutPlantsInput
  }

  export type plantsCreateOrConnectWithoutPlant_familiesInput = {
    where: plantsWhereUniqueInput
    create: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput>
  }

  export type plantsCreateManyPlant_familiesInputEnvelope = {
    data: plantsCreateManyPlant_familiesInput | plantsCreateManyPlant_familiesInput[]
    skipDuplicates?: boolean
  }

  export type plantsUpsertWithWhereUniqueWithoutPlant_familiesInput = {
    where: plantsWhereUniqueInput
    update: XOR<plantsUpdateWithoutPlant_familiesInput, plantsUncheckedUpdateWithoutPlant_familiesInput>
    create: XOR<plantsCreateWithoutPlant_familiesInput, plantsUncheckedCreateWithoutPlant_familiesInput>
  }

  export type plantsUpdateWithWhereUniqueWithoutPlant_familiesInput = {
    where: plantsWhereUniqueInput
    data: XOR<plantsUpdateWithoutPlant_familiesInput, plantsUncheckedUpdateWithoutPlant_familiesInput>
  }

  export type plantsUpdateManyWithWhereWithoutPlant_familiesInput = {
    where: plantsScalarWhereInput
    data: XOR<plantsUpdateManyMutationInput, plantsUncheckedUpdateManyWithoutPlant_familiesInput>
  }

  export type plantsScalarWhereInput = {
    AND?: plantsScalarWhereInput | plantsScalarWhereInput[]
    OR?: plantsScalarWhereInput[]
    NOT?: plantsScalarWhereInput | plantsScalarWhereInput[]
    id?: IntFilter<"plants"> | number
    name?: StringFilter<"plants"> | string
    nickname?: StringNullableFilter<"plants"> | string | null
    family_id?: IntNullableFilter<"plants"> | number | null
    created_at?: DateTimeFilter<"plants"> | Date | string
  }

  export type entry_plantsCreateWithoutPlantsInput = {
    entries: entriesCreateNestedOneWithoutEntry_plantsInput
  }

  export type entry_plantsUncheckedCreateWithoutPlantsInput = {
    entry_id: number
  }

  export type entry_plantsCreateOrConnectWithoutPlantsInput = {
    where: entry_plantsWhereUniqueInput
    create: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput>
  }

  export type entry_plantsCreateManyPlantsInputEnvelope = {
    data: entry_plantsCreateManyPlantsInput | entry_plantsCreateManyPlantsInput[]
    skipDuplicates?: boolean
  }

  export type plant_familiesCreateWithoutPlantsInput = {
    name: string
    color_token?: string | null
    sort_order?: number
  }

  export type plant_familiesUncheckedCreateWithoutPlantsInput = {
    id?: number
    name: string
    color_token?: string | null
    sort_order?: number
  }

  export type plant_familiesCreateOrConnectWithoutPlantsInput = {
    where: plant_familiesWhereUniqueInput
    create: XOR<plant_familiesCreateWithoutPlantsInput, plant_familiesUncheckedCreateWithoutPlantsInput>
  }

  export type entry_plantsUpsertWithWhereUniqueWithoutPlantsInput = {
    where: entry_plantsWhereUniqueInput
    update: XOR<entry_plantsUpdateWithoutPlantsInput, entry_plantsUncheckedUpdateWithoutPlantsInput>
    create: XOR<entry_plantsCreateWithoutPlantsInput, entry_plantsUncheckedCreateWithoutPlantsInput>
  }

  export type entry_plantsUpdateWithWhereUniqueWithoutPlantsInput = {
    where: entry_plantsWhereUniqueInput
    data: XOR<entry_plantsUpdateWithoutPlantsInput, entry_plantsUncheckedUpdateWithoutPlantsInput>
  }

  export type entry_plantsUpdateManyWithWhereWithoutPlantsInput = {
    where: entry_plantsScalarWhereInput
    data: XOR<entry_plantsUpdateManyMutationInput, entry_plantsUncheckedUpdateManyWithoutPlantsInput>
  }

  export type plant_familiesUpsertWithoutPlantsInput = {
    update: XOR<plant_familiesUpdateWithoutPlantsInput, plant_familiesUncheckedUpdateWithoutPlantsInput>
    create: XOR<plant_familiesCreateWithoutPlantsInput, plant_familiesUncheckedCreateWithoutPlantsInput>
    where?: plant_familiesWhereInput
  }

  export type plant_familiesUpdateToOneWithWhereWithoutPlantsInput = {
    where?: plant_familiesWhereInput
    data: XOR<plant_familiesUpdateWithoutPlantsInput, plant_familiesUncheckedUpdateWithoutPlantsInput>
  }

  export type plant_familiesUpdateWithoutPlantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type plant_familiesUncheckedUpdateWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color_token?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type entry_plantsCreateManyEntriesInput = {
    plant_id: number
  }

  export type photosCreateManyEntriesInput = {
    id?: number
    url: string
    caption?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type entry_plantsUpdateWithoutEntriesInput = {
    plants?: plantsUpdateOneRequiredWithoutEntry_plantsNestedInput
  }

  export type entry_plantsUncheckedUpdateWithoutEntriesInput = {
    plant_id?: IntFieldUpdateOperationsInput | number
  }

  export type entry_plantsUncheckedUpdateManyWithoutEntriesInput = {
    plant_id?: IntFieldUpdateOperationsInput | number
  }

  export type photosUpdateWithoutEntriesInput = {
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type photosUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type photosUncheckedUpdateManyWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entriesCreateManyLocationsInput = {
    id?: number
    entry_date: Date | string
    entry: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type entriesUpdateWithoutLocationsInput = {
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUpdateManyWithoutEntriesNestedInput
    photos?: photosUpdateManyWithoutEntriesNestedInput
  }

  export type entriesUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUncheckedUpdateManyWithoutEntriesNestedInput
    photos?: photosUncheckedUpdateManyWithoutEntriesNestedInput
  }

  export type entriesUncheckedUpdateManyWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plantsCreateManyPlant_familiesInput = {
    id?: number
    name: string
    nickname?: string | null
    created_at?: Date | string
  }

  export type plantsUpdateWithoutPlant_familiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUpdateManyWithoutPlantsNestedInput
  }

  export type plantsUncheckedUpdateWithoutPlant_familiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entry_plants?: entry_plantsUncheckedUpdateManyWithoutPlantsNestedInput
  }

  export type plantsUncheckedUpdateManyWithoutPlant_familiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entry_plantsCreateManyPlantsInput = {
    entry_id: number
  }

  export type entry_plantsUpdateWithoutPlantsInput = {
    entries?: entriesUpdateOneRequiredWithoutEntry_plantsNestedInput
  }

  export type entry_plantsUncheckedUpdateWithoutPlantsInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
  }

  export type entry_plantsUncheckedUpdateManyWithoutPlantsInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}