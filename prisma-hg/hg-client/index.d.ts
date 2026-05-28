
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
 * Model dogs
 * 
 */
export type dogs = $Result.DefaultSelection<Prisma.$dogsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model rfid
 * 
 */
export type rfid = $Result.DefaultSelection<Prisma.$rfidPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dogs
 * const dogs = await prisma.dogs.findMany()
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
   * // Fetch zero or more Dogs
   * const dogs = await prisma.dogs.findMany()
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
   * `prisma.dogs`: Exposes CRUD operations for the **dogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dogs
    * const dogs = await prisma.dogs.findMany()
    * ```
    */
  get dogs(): Prisma.dogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rfid`: Exposes CRUD operations for the **rfid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rfids
    * const rfids = await prisma.rfid.findMany()
    * ```
    */
  get rfid(): Prisma.rfidDelegate<ExtArgs, ClientOptions>;
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
    dogs: 'dogs',
    users: 'users',
    inventory: 'inventory',
    rfid: 'rfid'
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
      modelProps: "dogs" | "users" | "inventory" | "rfid"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dogs: {
        payload: Prisma.$dogsPayload<ExtArgs>
        fields: Prisma.dogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          findFirst: {
            args: Prisma.dogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          findMany: {
            args: Prisma.dogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>[]
          }
          create: {
            args: Prisma.dogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          createMany: {
            args: Prisma.dogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          update: {
            args: Prisma.dogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          deleteMany: {
            args: Prisma.dogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dogsPayload>
          }
          aggregate: {
            args: Prisma.DogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDogs>
          }
          groupBy: {
            args: Prisma.dogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.dogsCountArgs<ExtArgs>
            result: $Utils.Optional<DogsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      rfid: {
        payload: Prisma.$rfidPayload<ExtArgs>
        fields: Prisma.rfidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rfidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rfidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          findFirst: {
            args: Prisma.rfidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rfidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          findMany: {
            args: Prisma.rfidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>[]
          }
          create: {
            args: Prisma.rfidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          createMany: {
            args: Prisma.rfidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rfidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          update: {
            args: Prisma.rfidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          deleteMany: {
            args: Prisma.rfidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rfidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rfidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rfidPayload>
          }
          aggregate: {
            args: Prisma.RfidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRfid>
          }
          groupBy: {
            args: Prisma.rfidGroupByArgs<ExtArgs>
            result: $Utils.Optional<RfidGroupByOutputType>[]
          }
          count: {
            args: Prisma.rfidCountArgs<ExtArgs>
            result: $Utils.Optional<RfidCountAggregateOutputType> | number
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
    dogs?: dogsOmit
    users?: usersOmit
    inventory?: inventoryOmit
    rfid?: rfidOmit
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
   * Models
   */

  /**
   * Model dogs
   */

  export type AggregateDogs = {
    _count: DogsCountAggregateOutputType | null
    _avg: DogsAvgAggregateOutputType | null
    _sum: DogsSumAggregateOutputType | null
    _min: DogsMinAggregateOutputType | null
    _max: DogsMaxAggregateOutputType | null
  }

  export type DogsAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    active: number | null
  }

  export type DogsSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    active: number | null
  }

  export type DogsMinAggregateOutputType = {
    id: number | null
    src: string | null
    type: string | null
    alt: string | null
    width: number | null
    height: number | null
    title: string | null
    description: string | null
    data_tags: string | null
    date: string | null
    category: string | null
    active: number | null
    poster: string | null
  }

  export type DogsMaxAggregateOutputType = {
    id: number | null
    src: string | null
    type: string | null
    alt: string | null
    width: number | null
    height: number | null
    title: string | null
    description: string | null
    data_tags: string | null
    date: string | null
    category: string | null
    active: number | null
    poster: string | null
  }

  export type DogsCountAggregateOutputType = {
    id: number
    src: number
    type: number
    alt: number
    width: number
    height: number
    title: number
    description: number
    data_tags: number
    date: number
    category: number
    active: number
    poster: number
    _all: number
  }


  export type DogsAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    active?: true
  }

  export type DogsSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    active?: true
  }

  export type DogsMinAggregateInputType = {
    id?: true
    src?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    title?: true
    description?: true
    data_tags?: true
    date?: true
    category?: true
    active?: true
    poster?: true
  }

  export type DogsMaxAggregateInputType = {
    id?: true
    src?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    title?: true
    description?: true
    data_tags?: true
    date?: true
    category?: true
    active?: true
    poster?: true
  }

  export type DogsCountAggregateInputType = {
    id?: true
    src?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    title?: true
    description?: true
    data_tags?: true
    date?: true
    category?: true
    active?: true
    poster?: true
    _all?: true
  }

  export type DogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dogs to aggregate.
     */
    where?: dogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dogs to fetch.
     */
    orderBy?: dogsOrderByWithRelationInput | dogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dogs
    **/
    _count?: true | DogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DogsMaxAggregateInputType
  }

  export type GetDogsAggregateType<T extends DogsAggregateArgs> = {
        [P in keyof T & keyof AggregateDogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDogs[P]>
      : GetScalarType<T[P], AggregateDogs[P]>
  }




  export type dogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dogsWhereInput
    orderBy?: dogsOrderByWithAggregationInput | dogsOrderByWithAggregationInput[]
    by: DogsScalarFieldEnum[] | DogsScalarFieldEnum
    having?: dogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DogsCountAggregateInputType | true
    _avg?: DogsAvgAggregateInputType
    _sum?: DogsSumAggregateInputType
    _min?: DogsMinAggregateInputType
    _max?: DogsMaxAggregateInputType
  }

  export type DogsGroupByOutputType = {
    id: number
    src: string | null
    type: string | null
    alt: string | null
    width: number | null
    height: number | null
    title: string | null
    description: string | null
    data_tags: string | null
    date: string | null
    category: string | null
    active: number | null
    poster: string | null
    _count: DogsCountAggregateOutputType | null
    _avg: DogsAvgAggregateOutputType | null
    _sum: DogsSumAggregateOutputType | null
    _min: DogsMinAggregateOutputType | null
    _max: DogsMaxAggregateOutputType | null
  }

  type GetDogsGroupByPayload<T extends dogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DogsGroupByOutputType[P]>
            : GetScalarType<T[P], DogsGroupByOutputType[P]>
        }
      >
    >


  export type dogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    type?: boolean
    alt?: boolean
    width?: boolean
    height?: boolean
    title?: boolean
    description?: boolean
    data_tags?: boolean
    date?: boolean
    category?: boolean
    active?: boolean
    poster?: boolean
  }, ExtArgs["result"]["dogs"]>



  export type dogsSelectScalar = {
    id?: boolean
    src?: boolean
    type?: boolean
    alt?: boolean
    width?: boolean
    height?: boolean
    title?: boolean
    description?: boolean
    data_tags?: boolean
    date?: boolean
    category?: boolean
    active?: boolean
    poster?: boolean
  }

  export type dogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "type" | "alt" | "width" | "height" | "title" | "description" | "data_tags" | "date" | "category" | "active" | "poster", ExtArgs["result"]["dogs"]>

  export type $dogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string | null
      type: string | null
      alt: string | null
      width: number | null
      height: number | null
      title: string | null
      description: string | null
      data_tags: string | null
      date: string | null
      category: string | null
      active: number | null
      poster: string | null
    }, ExtArgs["result"]["dogs"]>
    composites: {}
  }

  type dogsGetPayload<S extends boolean | null | undefined | dogsDefaultArgs> = $Result.GetResult<Prisma.$dogsPayload, S>

  type dogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DogsCountAggregateInputType | true
    }

  export interface dogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dogs'], meta: { name: 'dogs' } }
    /**
     * Find zero or one Dogs that matches the filter.
     * @param {dogsFindUniqueArgs} args - Arguments to find a Dogs
     * @example
     * // Get one Dogs
     * const dogs = await prisma.dogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dogsFindUniqueArgs>(args: SelectSubset<T, dogsFindUniqueArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dogsFindUniqueOrThrowArgs} args - Arguments to find a Dogs
     * @example
     * // Get one Dogs
     * const dogs = await prisma.dogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dogsFindUniqueOrThrowArgs>(args: SelectSubset<T, dogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsFindFirstArgs} args - Arguments to find a Dogs
     * @example
     * // Get one Dogs
     * const dogs = await prisma.dogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dogsFindFirstArgs>(args?: SelectSubset<T, dogsFindFirstArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsFindFirstOrThrowArgs} args - Arguments to find a Dogs
     * @example
     * // Get one Dogs
     * const dogs = await prisma.dogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dogsFindFirstOrThrowArgs>(args?: SelectSubset<T, dogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dogs
     * const dogs = await prisma.dogs.findMany()
     * 
     * // Get first 10 Dogs
     * const dogs = await prisma.dogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dogsWithIdOnly = await prisma.dogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dogsFindManyArgs>(args?: SelectSubset<T, dogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dogs.
     * @param {dogsCreateArgs} args - Arguments to create a Dogs.
     * @example
     * // Create one Dogs
     * const Dogs = await prisma.dogs.create({
     *   data: {
     *     // ... data to create a Dogs
     *   }
     * })
     * 
     */
    create<T extends dogsCreateArgs>(args: SelectSubset<T, dogsCreateArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dogs.
     * @param {dogsCreateManyArgs} args - Arguments to create many Dogs.
     * @example
     * // Create many Dogs
     * const dogs = await prisma.dogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dogsCreateManyArgs>(args?: SelectSubset<T, dogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dogs.
     * @param {dogsDeleteArgs} args - Arguments to delete one Dogs.
     * @example
     * // Delete one Dogs
     * const Dogs = await prisma.dogs.delete({
     *   where: {
     *     // ... filter to delete one Dogs
     *   }
     * })
     * 
     */
    delete<T extends dogsDeleteArgs>(args: SelectSubset<T, dogsDeleteArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dogs.
     * @param {dogsUpdateArgs} args - Arguments to update one Dogs.
     * @example
     * // Update one Dogs
     * const dogs = await prisma.dogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dogsUpdateArgs>(args: SelectSubset<T, dogsUpdateArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dogs.
     * @param {dogsDeleteManyArgs} args - Arguments to filter Dogs to delete.
     * @example
     * // Delete a few Dogs
     * const { count } = await prisma.dogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dogsDeleteManyArgs>(args?: SelectSubset<T, dogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dogs
     * const dogs = await prisma.dogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dogsUpdateManyArgs>(args: SelectSubset<T, dogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dogs.
     * @param {dogsUpsertArgs} args - Arguments to update or create a Dogs.
     * @example
     * // Update or create a Dogs
     * const dogs = await prisma.dogs.upsert({
     *   create: {
     *     // ... data to create a Dogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dogs we want to update
     *   }
     * })
     */
    upsert<T extends dogsUpsertArgs>(args: SelectSubset<T, dogsUpsertArgs<ExtArgs>>): Prisma__dogsClient<$Result.GetResult<Prisma.$dogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsCountArgs} args - Arguments to filter Dogs to count.
     * @example
     * // Count the number of Dogs
     * const count = await prisma.dogs.count({
     *   where: {
     *     // ... the filter for the Dogs we want to count
     *   }
     * })
    **/
    count<T extends dogsCountArgs>(
      args?: Subset<T, dogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DogsAggregateArgs>(args: Subset<T, DogsAggregateArgs>): Prisma.PrismaPromise<GetDogsAggregateType<T>>

    /**
     * Group by Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dogsGroupByArgs} args - Group by arguments.
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
      T extends dogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dogsGroupByArgs['orderBy'] }
        : { orderBy?: dogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dogs model
   */
  readonly fields: dogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the dogs model
   */
  interface dogsFieldRefs {
    readonly id: FieldRef<"dogs", 'Int'>
    readonly src: FieldRef<"dogs", 'String'>
    readonly type: FieldRef<"dogs", 'String'>
    readonly alt: FieldRef<"dogs", 'String'>
    readonly width: FieldRef<"dogs", 'Int'>
    readonly height: FieldRef<"dogs", 'Int'>
    readonly title: FieldRef<"dogs", 'String'>
    readonly description: FieldRef<"dogs", 'String'>
    readonly data_tags: FieldRef<"dogs", 'String'>
    readonly date: FieldRef<"dogs", 'String'>
    readonly category: FieldRef<"dogs", 'String'>
    readonly active: FieldRef<"dogs", 'Int'>
    readonly poster: FieldRef<"dogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dogs findUnique
   */
  export type dogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter, which dogs to fetch.
     */
    where: dogsWhereUniqueInput
  }

  /**
   * dogs findUniqueOrThrow
   */
  export type dogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter, which dogs to fetch.
     */
    where: dogsWhereUniqueInput
  }

  /**
   * dogs findFirst
   */
  export type dogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter, which dogs to fetch.
     */
    where?: dogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dogs to fetch.
     */
    orderBy?: dogsOrderByWithRelationInput | dogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dogs.
     */
    cursor?: dogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dogs.
     */
    distinct?: DogsScalarFieldEnum | DogsScalarFieldEnum[]
  }

  /**
   * dogs findFirstOrThrow
   */
  export type dogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter, which dogs to fetch.
     */
    where?: dogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dogs to fetch.
     */
    orderBy?: dogsOrderByWithRelationInput | dogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dogs.
     */
    cursor?: dogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dogs.
     */
    distinct?: DogsScalarFieldEnum | DogsScalarFieldEnum[]
  }

  /**
   * dogs findMany
   */
  export type dogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter, which dogs to fetch.
     */
    where?: dogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dogs to fetch.
     */
    orderBy?: dogsOrderByWithRelationInput | dogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dogs.
     */
    cursor?: dogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dogs.
     */
    skip?: number
    distinct?: DogsScalarFieldEnum | DogsScalarFieldEnum[]
  }

  /**
   * dogs create
   */
  export type dogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * The data needed to create a dogs.
     */
    data?: XOR<dogsCreateInput, dogsUncheckedCreateInput>
  }

  /**
   * dogs createMany
   */
  export type dogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dogs.
     */
    data: dogsCreateManyInput | dogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dogs update
   */
  export type dogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * The data needed to update a dogs.
     */
    data: XOR<dogsUpdateInput, dogsUncheckedUpdateInput>
    /**
     * Choose, which dogs to update.
     */
    where: dogsWhereUniqueInput
  }

  /**
   * dogs updateMany
   */
  export type dogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dogs.
     */
    data: XOR<dogsUpdateManyMutationInput, dogsUncheckedUpdateManyInput>
    /**
     * Filter which dogs to update
     */
    where?: dogsWhereInput
    /**
     * Limit how many dogs to update.
     */
    limit?: number
  }

  /**
   * dogs upsert
   */
  export type dogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * The filter to search for the dogs to update in case it exists.
     */
    where: dogsWhereUniqueInput
    /**
     * In case the dogs found by the `where` argument doesn't exist, create a new dogs with this data.
     */
    create: XOR<dogsCreateInput, dogsUncheckedCreateInput>
    /**
     * In case the dogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dogsUpdateInput, dogsUncheckedUpdateInput>
  }

  /**
   * dogs delete
   */
  export type dogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
    /**
     * Filter which dogs to delete.
     */
    where: dogsWhereUniqueInput
  }

  /**
   * dogs deleteMany
   */
  export type dogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dogs to delete
     */
    where?: dogsWhereInput
    /**
     * Limit how many dogs to delete.
     */
    limit?: number
  }

  /**
   * dogs without action
   */
  export type dogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dogs
     */
    select?: dogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dogs
     */
    omit?: dogsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    type: string | null
    fname: string | null
    lname: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    type: string | null
    fname: string | null
    lname: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    type: number
    fname: number
    lname: number
    email: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    fname?: true
    lname?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    fname?: true
    lname?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    fname?: true
    lname?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    type: string | null
    fname: string | null
    lname: string | null
    email: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
    fname?: boolean
    lname?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
    fname?: boolean
    lname?: boolean
    email?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "type" | "fname" | "lname" | "email", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      type: string | null
      fname: string | null
      lname: string | null
      email: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly type: FieldRef<"users", 'String'>
    readonly fname: FieldRef<"users", 'String'>
    readonly lname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    item_id: number | null
    rfid: number | null
  }

  export type InventorySumAggregateOutputType = {
    item_id: number | null
    rfid: number | null
  }

  export type InventoryMinAggregateOutputType = {
    item_id: number | null
    item: string | null
    description: string | null
    rfid: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    item_id: number | null
    item: string | null
    description: string | null
    rfid: number | null
  }

  export type InventoryCountAggregateOutputType = {
    item_id: number
    item: number
    description: number
    rfid: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    item_id?: true
    rfid?: true
  }

  export type InventorySumAggregateInputType = {
    item_id?: true
    rfid?: true
  }

  export type InventoryMinAggregateInputType = {
    item_id?: true
    item?: true
    description?: true
    rfid?: true
  }

  export type InventoryMaxAggregateInputType = {
    item_id?: true
    item?: true
    description?: true
    rfid?: true
  }

  export type InventoryCountAggregateInputType = {
    item_id?: true
    item?: true
    description?: true
    rfid?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    item_id: number
    item: string | null
    description: string | null
    rfid: number | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    item?: boolean
    description?: boolean
    rfid?: boolean
  }, ExtArgs["result"]["inventory"]>



  export type inventorySelectScalar = {
    item_id?: boolean
    item?: boolean
    description?: boolean
    rfid?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "item" | "description" | "rfid", ExtArgs["result"]["inventory"]>

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      item: string | null
      description: string | null
      rfid: number | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const inventoryWithItem_idOnly = await prisma.inventory.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly item_id: FieldRef<"inventory", 'Int'>
    readonly item: FieldRef<"inventory", 'String'>
    readonly description: FieldRef<"inventory", 'String'>
    readonly rfid: FieldRef<"inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data?: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
  }


  /**
   * Model rfid
   */

  export type AggregateRfid = {
    _count: RfidCountAggregateOutputType | null
    _avg: RfidAvgAggregateOutputType | null
    _sum: RfidSumAggregateOutputType | null
    _min: RfidMinAggregateOutputType | null
    _max: RfidMaxAggregateOutputType | null
  }

  export type RfidAvgAggregateOutputType = {
    rfid: number | null
  }

  export type RfidSumAggregateOutputType = {
    rfid: number | null
  }

  export type RfidMinAggregateOutputType = {
    rfid: number | null
    room: string | null
    container: string | null
  }

  export type RfidMaxAggregateOutputType = {
    rfid: number | null
    room: string | null
    container: string | null
  }

  export type RfidCountAggregateOutputType = {
    rfid: number
    room: number
    container: number
    _all: number
  }


  export type RfidAvgAggregateInputType = {
    rfid?: true
  }

  export type RfidSumAggregateInputType = {
    rfid?: true
  }

  export type RfidMinAggregateInputType = {
    rfid?: true
    room?: true
    container?: true
  }

  export type RfidMaxAggregateInputType = {
    rfid?: true
    room?: true
    container?: true
  }

  export type RfidCountAggregateInputType = {
    rfid?: true
    room?: true
    container?: true
    _all?: true
  }

  export type RfidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rfid to aggregate.
     */
    where?: rfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfids to fetch.
     */
    orderBy?: rfidOrderByWithRelationInput | rfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rfids
    **/
    _count?: true | RfidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RfidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RfidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RfidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RfidMaxAggregateInputType
  }

  export type GetRfidAggregateType<T extends RfidAggregateArgs> = {
        [P in keyof T & keyof AggregateRfid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRfid[P]>
      : GetScalarType<T[P], AggregateRfid[P]>
  }




  export type rfidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rfidWhereInput
    orderBy?: rfidOrderByWithAggregationInput | rfidOrderByWithAggregationInput[]
    by: RfidScalarFieldEnum[] | RfidScalarFieldEnum
    having?: rfidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RfidCountAggregateInputType | true
    _avg?: RfidAvgAggregateInputType
    _sum?: RfidSumAggregateInputType
    _min?: RfidMinAggregateInputType
    _max?: RfidMaxAggregateInputType
  }

  export type RfidGroupByOutputType = {
    rfid: number
    room: string | null
    container: string | null
    _count: RfidCountAggregateOutputType | null
    _avg: RfidAvgAggregateOutputType | null
    _sum: RfidSumAggregateOutputType | null
    _min: RfidMinAggregateOutputType | null
    _max: RfidMaxAggregateOutputType | null
  }

  type GetRfidGroupByPayload<T extends rfidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RfidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RfidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RfidGroupByOutputType[P]>
            : GetScalarType<T[P], RfidGroupByOutputType[P]>
        }
      >
    >


  export type rfidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rfid?: boolean
    room?: boolean
    container?: boolean
  }, ExtArgs["result"]["rfid"]>



  export type rfidSelectScalar = {
    rfid?: boolean
    room?: boolean
    container?: boolean
  }

  export type rfidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rfid" | "room" | "container", ExtArgs["result"]["rfid"]>

  export type $rfidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rfid"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      rfid: number
      room: string | null
      container: string | null
    }, ExtArgs["result"]["rfid"]>
    composites: {}
  }

  type rfidGetPayload<S extends boolean | null | undefined | rfidDefaultArgs> = $Result.GetResult<Prisma.$rfidPayload, S>

  type rfidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rfidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RfidCountAggregateInputType | true
    }

  export interface rfidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rfid'], meta: { name: 'rfid' } }
    /**
     * Find zero or one Rfid that matches the filter.
     * @param {rfidFindUniqueArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rfidFindUniqueArgs>(args: SelectSubset<T, rfidFindUniqueArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rfid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rfidFindUniqueOrThrowArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rfidFindUniqueOrThrowArgs>(args: SelectSubset<T, rfidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidFindFirstArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rfidFindFirstArgs>(args?: SelectSubset<T, rfidFindFirstArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rfid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidFindFirstOrThrowArgs} args - Arguments to find a Rfid
     * @example
     * // Get one Rfid
     * const rfid = await prisma.rfid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rfidFindFirstOrThrowArgs>(args?: SelectSubset<T, rfidFindFirstOrThrowArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rfids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rfids
     * const rfids = await prisma.rfid.findMany()
     * 
     * // Get first 10 Rfids
     * const rfids = await prisma.rfid.findMany({ take: 10 })
     * 
     * // Only select the `rfid`
     * const rfidWithRfidOnly = await prisma.rfid.findMany({ select: { rfid: true } })
     * 
     */
    findMany<T extends rfidFindManyArgs>(args?: SelectSubset<T, rfidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rfid.
     * @param {rfidCreateArgs} args - Arguments to create a Rfid.
     * @example
     * // Create one Rfid
     * const Rfid = await prisma.rfid.create({
     *   data: {
     *     // ... data to create a Rfid
     *   }
     * })
     * 
     */
    create<T extends rfidCreateArgs>(args: SelectSubset<T, rfidCreateArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rfids.
     * @param {rfidCreateManyArgs} args - Arguments to create many Rfids.
     * @example
     * // Create many Rfids
     * const rfid = await prisma.rfid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rfidCreateManyArgs>(args?: SelectSubset<T, rfidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rfid.
     * @param {rfidDeleteArgs} args - Arguments to delete one Rfid.
     * @example
     * // Delete one Rfid
     * const Rfid = await prisma.rfid.delete({
     *   where: {
     *     // ... filter to delete one Rfid
     *   }
     * })
     * 
     */
    delete<T extends rfidDeleteArgs>(args: SelectSubset<T, rfidDeleteArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rfid.
     * @param {rfidUpdateArgs} args - Arguments to update one Rfid.
     * @example
     * // Update one Rfid
     * const rfid = await prisma.rfid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rfidUpdateArgs>(args: SelectSubset<T, rfidUpdateArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rfids.
     * @param {rfidDeleteManyArgs} args - Arguments to filter Rfids to delete.
     * @example
     * // Delete a few Rfids
     * const { count } = await prisma.rfid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rfidDeleteManyArgs>(args?: SelectSubset<T, rfidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rfids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rfids
     * const rfid = await prisma.rfid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rfidUpdateManyArgs>(args: SelectSubset<T, rfidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rfid.
     * @param {rfidUpsertArgs} args - Arguments to update or create a Rfid.
     * @example
     * // Update or create a Rfid
     * const rfid = await prisma.rfid.upsert({
     *   create: {
     *     // ... data to create a Rfid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rfid we want to update
     *   }
     * })
     */
    upsert<T extends rfidUpsertArgs>(args: SelectSubset<T, rfidUpsertArgs<ExtArgs>>): Prisma__rfidClient<$Result.GetResult<Prisma.$rfidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rfids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidCountArgs} args - Arguments to filter Rfids to count.
     * @example
     * // Count the number of Rfids
     * const count = await prisma.rfid.count({
     *   where: {
     *     // ... the filter for the Rfids we want to count
     *   }
     * })
    **/
    count<T extends rfidCountArgs>(
      args?: Subset<T, rfidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RfidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rfid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RfidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RfidAggregateArgs>(args: Subset<T, RfidAggregateArgs>): Prisma.PrismaPromise<GetRfidAggregateType<T>>

    /**
     * Group by Rfid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rfidGroupByArgs} args - Group by arguments.
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
      T extends rfidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rfidGroupByArgs['orderBy'] }
        : { orderBy?: rfidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rfidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rfid model
   */
  readonly fields: rfidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rfid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rfidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the rfid model
   */
  interface rfidFieldRefs {
    readonly rfid: FieldRef<"rfid", 'Int'>
    readonly room: FieldRef<"rfid", 'String'>
    readonly container: FieldRef<"rfid", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rfid findUnique
   */
  export type rfidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter, which rfid to fetch.
     */
    where: rfidWhereUniqueInput
  }

  /**
   * rfid findUniqueOrThrow
   */
  export type rfidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter, which rfid to fetch.
     */
    where: rfidWhereUniqueInput
  }

  /**
   * rfid findFirst
   */
  export type rfidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter, which rfid to fetch.
     */
    where?: rfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfids to fetch.
     */
    orderBy?: rfidOrderByWithRelationInput | rfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfids.
     */
    cursor?: rfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfids.
     */
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * rfid findFirstOrThrow
   */
  export type rfidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter, which rfid to fetch.
     */
    where?: rfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfids to fetch.
     */
    orderBy?: rfidOrderByWithRelationInput | rfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rfids.
     */
    cursor?: rfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rfids.
     */
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * rfid findMany
   */
  export type rfidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter, which rfids to fetch.
     */
    where?: rfidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rfids to fetch.
     */
    orderBy?: rfidOrderByWithRelationInput | rfidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rfids.
     */
    cursor?: rfidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rfids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rfids.
     */
    skip?: number
    distinct?: RfidScalarFieldEnum | RfidScalarFieldEnum[]
  }

  /**
   * rfid create
   */
  export type rfidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * The data needed to create a rfid.
     */
    data: XOR<rfidCreateInput, rfidUncheckedCreateInput>
  }

  /**
   * rfid createMany
   */
  export type rfidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rfids.
     */
    data: rfidCreateManyInput | rfidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rfid update
   */
  export type rfidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * The data needed to update a rfid.
     */
    data: XOR<rfidUpdateInput, rfidUncheckedUpdateInput>
    /**
     * Choose, which rfid to update.
     */
    where: rfidWhereUniqueInput
  }

  /**
   * rfid updateMany
   */
  export type rfidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rfids.
     */
    data: XOR<rfidUpdateManyMutationInput, rfidUncheckedUpdateManyInput>
    /**
     * Filter which rfids to update
     */
    where?: rfidWhereInput
    /**
     * Limit how many rfids to update.
     */
    limit?: number
  }

  /**
   * rfid upsert
   */
  export type rfidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * The filter to search for the rfid to update in case it exists.
     */
    where: rfidWhereUniqueInput
    /**
     * In case the rfid found by the `where` argument doesn't exist, create a new rfid with this data.
     */
    create: XOR<rfidCreateInput, rfidUncheckedCreateInput>
    /**
     * In case the rfid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rfidUpdateInput, rfidUncheckedUpdateInput>
  }

  /**
   * rfid delete
   */
  export type rfidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
    /**
     * Filter which rfid to delete.
     */
    where: rfidWhereUniqueInput
  }

  /**
   * rfid deleteMany
   */
  export type rfidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rfids to delete
     */
    where?: rfidWhereInput
    /**
     * Limit how many rfids to delete.
     */
    limit?: number
  }

  /**
   * rfid without action
   */
  export type rfidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rfid
     */
    select?: rfidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rfid
     */
    omit?: rfidOmit<ExtArgs> | null
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


  export const DogsScalarFieldEnum: {
    id: 'id',
    src: 'src',
    type: 'type',
    alt: 'alt',
    width: 'width',
    height: 'height',
    title: 'title',
    description: 'description',
    data_tags: 'data_tags',
    date: 'date',
    category: 'category',
    active: 'active',
    poster: 'poster'
  };

  export type DogsScalarFieldEnum = (typeof DogsScalarFieldEnum)[keyof typeof DogsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    type: 'type',
    fname: 'fname',
    lname: 'lname',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    item_id: 'item_id',
    item: 'item',
    description: 'description',
    rfid: 'rfid'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const RfidScalarFieldEnum: {
    rfid: 'rfid',
    room: 'room',
    container: 'container'
  };

  export type RfidScalarFieldEnum = (typeof RfidScalarFieldEnum)[keyof typeof RfidScalarFieldEnum]


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


  export const dogsOrderByRelevanceFieldEnum: {
    src: 'src',
    type: 'type',
    alt: 'alt',
    title: 'title',
    description: 'description',
    data_tags: 'data_tags',
    date: 'date',
    category: 'category',
    poster: 'poster'
  };

  export type dogsOrderByRelevanceFieldEnum = (typeof dogsOrderByRelevanceFieldEnum)[keyof typeof dogsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    type: 'type',
    fname: 'fname',
    lname: 'lname',
    email: 'email'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const inventoryOrderByRelevanceFieldEnum: {
    item: 'item',
    description: 'description'
  };

  export type inventoryOrderByRelevanceFieldEnum = (typeof inventoryOrderByRelevanceFieldEnum)[keyof typeof inventoryOrderByRelevanceFieldEnum]


  export const rfidOrderByRelevanceFieldEnum: {
    room: 'room',
    container: 'container'
  };

  export type rfidOrderByRelevanceFieldEnum = (typeof rfidOrderByRelevanceFieldEnum)[keyof typeof rfidOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type dogsWhereInput = {
    AND?: dogsWhereInput | dogsWhereInput[]
    OR?: dogsWhereInput[]
    NOT?: dogsWhereInput | dogsWhereInput[]
    id?: IntFilter<"dogs"> | number
    src?: StringNullableFilter<"dogs"> | string | null
    type?: StringNullableFilter<"dogs"> | string | null
    alt?: StringNullableFilter<"dogs"> | string | null
    width?: IntNullableFilter<"dogs"> | number | null
    height?: IntNullableFilter<"dogs"> | number | null
    title?: StringNullableFilter<"dogs"> | string | null
    description?: StringNullableFilter<"dogs"> | string | null
    data_tags?: StringNullableFilter<"dogs"> | string | null
    date?: StringNullableFilter<"dogs"> | string | null
    category?: StringNullableFilter<"dogs"> | string | null
    active?: IntNullableFilter<"dogs"> | number | null
    poster?: StringNullableFilter<"dogs"> | string | null
  }

  export type dogsOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    data_tags?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    _relevance?: dogsOrderByRelevanceInput
  }

  export type dogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dogsWhereInput | dogsWhereInput[]
    OR?: dogsWhereInput[]
    NOT?: dogsWhereInput | dogsWhereInput[]
    src?: StringNullableFilter<"dogs"> | string | null
    type?: StringNullableFilter<"dogs"> | string | null
    alt?: StringNullableFilter<"dogs"> | string | null
    width?: IntNullableFilter<"dogs"> | number | null
    height?: IntNullableFilter<"dogs"> | number | null
    title?: StringNullableFilter<"dogs"> | string | null
    description?: StringNullableFilter<"dogs"> | string | null
    data_tags?: StringNullableFilter<"dogs"> | string | null
    date?: StringNullableFilter<"dogs"> | string | null
    category?: StringNullableFilter<"dogs"> | string | null
    active?: IntNullableFilter<"dogs"> | number | null
    poster?: StringNullableFilter<"dogs"> | string | null
  }, "id" | "id">

  export type dogsOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    alt?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    data_tags?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    _count?: dogsCountOrderByAggregateInput
    _avg?: dogsAvgOrderByAggregateInput
    _max?: dogsMaxOrderByAggregateInput
    _min?: dogsMinOrderByAggregateInput
    _sum?: dogsSumOrderByAggregateInput
  }

  export type dogsScalarWhereWithAggregatesInput = {
    AND?: dogsScalarWhereWithAggregatesInput | dogsScalarWhereWithAggregatesInput[]
    OR?: dogsScalarWhereWithAggregatesInput[]
    NOT?: dogsScalarWhereWithAggregatesInput | dogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dogs"> | number
    src?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    type?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    alt?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    width?: IntNullableWithAggregatesFilter<"dogs"> | number | null
    height?: IntNullableWithAggregatesFilter<"dogs"> | number | null
    title?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    description?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    data_tags?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    date?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    category?: StringNullableWithAggregatesFilter<"dogs"> | string | null
    active?: IntNullableWithAggregatesFilter<"dogs"> | number | null
    poster?: StringNullableWithAggregatesFilter<"dogs"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    type?: StringNullableFilter<"users"> | string | null
    fname?: StringNullableFilter<"users"> | string | null
    lname?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    fname?: SortOrderInput | SortOrder
    lname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    type?: StringNullableFilter<"users"> | string | null
    fname?: StringNullableFilter<"users"> | string | null
    lname?: StringNullableFilter<"users"> | string | null
  }, "id" | "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    fname?: SortOrderInput | SortOrder
    lname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    type?: StringNullableWithAggregatesFilter<"users"> | string | null
    fname?: StringNullableWithAggregatesFilter<"users"> | string | null
    lname?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    item_id?: IntFilter<"inventory"> | number
    item?: StringNullableFilter<"inventory"> | string | null
    description?: StringNullableFilter<"inventory"> | string | null
    rfid?: IntNullableFilter<"inventory"> | number | null
  }

  export type inventoryOrderByWithRelationInput = {
    item_id?: SortOrder
    item?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    rfid?: SortOrderInput | SortOrder
    _relevance?: inventoryOrderByRelevanceInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    item?: StringNullableFilter<"inventory"> | string | null
    description?: StringNullableFilter<"inventory"> | string | null
    rfid?: IntNullableFilter<"inventory"> | number | null
  }, "item_id" | "item_id">

  export type inventoryOrderByWithAggregationInput = {
    item_id?: SortOrder
    item?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    rfid?: SortOrderInput | SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"inventory"> | number
    item?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    description?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    rfid?: IntNullableWithAggregatesFilter<"inventory"> | number | null
  }

  export type rfidWhereInput = {
    AND?: rfidWhereInput | rfidWhereInput[]
    OR?: rfidWhereInput[]
    NOT?: rfidWhereInput | rfidWhereInput[]
    rfid?: IntFilter<"rfid"> | number
    room?: StringNullableFilter<"rfid"> | string | null
    container?: StringNullableFilter<"rfid"> | string | null
  }

  export type rfidOrderByWithRelationInput = {
    rfid?: SortOrder
    room?: SortOrderInput | SortOrder
    container?: SortOrderInput | SortOrder
    _relevance?: rfidOrderByRelevanceInput
  }

  export type rfidWhereUniqueInput = Prisma.AtLeast<{
    rfid?: number
    AND?: rfidWhereInput | rfidWhereInput[]
    OR?: rfidWhereInput[]
    NOT?: rfidWhereInput | rfidWhereInput[]
    room?: StringNullableFilter<"rfid"> | string | null
    container?: StringNullableFilter<"rfid"> | string | null
  }, "rfid" | "rfid">

  export type rfidOrderByWithAggregationInput = {
    rfid?: SortOrder
    room?: SortOrderInput | SortOrder
    container?: SortOrderInput | SortOrder
    _count?: rfidCountOrderByAggregateInput
    _avg?: rfidAvgOrderByAggregateInput
    _max?: rfidMaxOrderByAggregateInput
    _min?: rfidMinOrderByAggregateInput
    _sum?: rfidSumOrderByAggregateInput
  }

  export type rfidScalarWhereWithAggregatesInput = {
    AND?: rfidScalarWhereWithAggregatesInput | rfidScalarWhereWithAggregatesInput[]
    OR?: rfidScalarWhereWithAggregatesInput[]
    NOT?: rfidScalarWhereWithAggregatesInput | rfidScalarWhereWithAggregatesInput[]
    rfid?: IntWithAggregatesFilter<"rfid"> | number
    room?: StringNullableWithAggregatesFilter<"rfid"> | string | null
    container?: StringNullableWithAggregatesFilter<"rfid"> | string | null
  }

  export type dogsCreateInput = {
    src?: string | null
    type?: string | null
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    description?: string | null
    data_tags?: string | null
    date?: string | null
    category?: string | null
    active?: number | null
    poster?: string | null
  }

  export type dogsUncheckedCreateInput = {
    id?: number
    src?: string | null
    type?: string | null
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    description?: string | null
    data_tags?: string | null
    date?: string | null
    category?: string | null
    active?: number | null
    poster?: string | null
  }

  export type dogsUpdateInput = {
    src?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_tags?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_tags?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dogsCreateManyInput = {
    id?: number
    src?: string | null
    type?: string | null
    alt?: string | null
    width?: number | null
    height?: number | null
    title?: string | null
    description?: string | null
    data_tags?: string | null
    date?: string | null
    category?: string | null
    active?: number | null
    poster?: string | null
  }

  export type dogsUpdateManyMutationInput = {
    src?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_tags?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_tags?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableIntFieldUpdateOperationsInput | number | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    username?: string | null
    password?: string | null
    type?: string | null
    fname?: string | null
    lname?: string | null
    email?: string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    type?: string | null
    fname?: string | null
    lname?: string | null
    email?: string | null
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    type?: string | null
    fname?: string | null
    lname?: string | null
    email?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventoryCreateInput = {
    item?: string | null
    description?: string | null
    rfid?: number | null
  }

  export type inventoryUncheckedCreateInput = {
    item_id?: number
    item?: string | null
    description?: string | null
    rfid?: number | null
  }

  export type inventoryUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type inventoryUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type inventoryCreateManyInput = {
    item_id?: number
    item?: string | null
    description?: string | null
    rfid?: number | null
  }

  export type inventoryUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type inventoryUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rfid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rfidCreateInput = {
    rfid: number
    room?: string | null
    container?: string | null
  }

  export type rfidUncheckedCreateInput = {
    rfid: number
    room?: string | null
    container?: string | null
  }

  export type rfidUpdateInput = {
    rfid?: IntFieldUpdateOperationsInput | number
    room?: NullableStringFieldUpdateOperationsInput | string | null
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rfidUncheckedUpdateInput = {
    rfid?: IntFieldUpdateOperationsInput | number
    room?: NullableStringFieldUpdateOperationsInput | string | null
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rfidCreateManyInput = {
    rfid: number
    room?: string | null
    container?: string | null
  }

  export type rfidUpdateManyMutationInput = {
    rfid?: IntFieldUpdateOperationsInput | number
    room?: NullableStringFieldUpdateOperationsInput | string | null
    container?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rfidUncheckedUpdateManyInput = {
    rfid?: IntFieldUpdateOperationsInput | number
    room?: NullableStringFieldUpdateOperationsInput | string | null
    container?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type dogsOrderByRelevanceInput = {
    fields: dogsOrderByRelevanceFieldEnum | dogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dogsCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data_tags?: SortOrder
    date?: SortOrder
    category?: SortOrder
    active?: SortOrder
    poster?: SortOrder
  }

  export type dogsAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    active?: SortOrder
  }

  export type dogsMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data_tags?: SortOrder
    date?: SortOrder
    category?: SortOrder
    active?: SortOrder
    poster?: SortOrder
  }

  export type dogsMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    title?: SortOrder
    description?: SortOrder
    data_tags?: SortOrder
    date?: SortOrder
    category?: SortOrder
    active?: SortOrder
    poster?: SortOrder
  }

  export type dogsSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    active?: SortOrder
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

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inventoryOrderByRelevanceInput = {
    fields: inventoryOrderByRelevanceFieldEnum | inventoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inventoryCountOrderByAggregateInput = {
    item_id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    rfid?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    item_id?: SortOrder
    rfid?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    item_id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    rfid?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    item_id?: SortOrder
    item?: SortOrder
    description?: SortOrder
    rfid?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    item_id?: SortOrder
    rfid?: SortOrder
  }

  export type rfidOrderByRelevanceInput = {
    fields: rfidOrderByRelevanceFieldEnum | rfidOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rfidCountOrderByAggregateInput = {
    rfid?: SortOrder
    room?: SortOrder
    container?: SortOrder
  }

  export type rfidAvgOrderByAggregateInput = {
    rfid?: SortOrder
  }

  export type rfidMaxOrderByAggregateInput = {
    rfid?: SortOrder
    room?: SortOrder
    container?: SortOrder
  }

  export type rfidMinOrderByAggregateInput = {
    rfid?: SortOrder
    room?: SortOrder
    container?: SortOrder
  }

  export type rfidSumOrderByAggregateInput = {
    rfid?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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