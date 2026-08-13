
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
 * Model bbq_claim
 * 
 */
export type bbq_claim = $Result.DefaultSelection<Prisma.$bbq_claimPayload>
/**
 * Model bbq_guest
 * 
 */
export type bbq_guest = $Result.DefaultSelection<Prisma.$bbq_guestPayload>
/**
 * Model bbq_recipe
 * 
 */
export type bbq_recipe = $Result.DefaultSelection<Prisma.$bbq_recipePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const bbq_recipe_category: {
  appetizer: 'appetizer',
  meat_dish: 'meat_dish',
  meat_side: 'meat_side',
  starchy_side: 'starchy_side',
  veggie_side: 'veggie_side',
  salad: 'salad',
  dessert: 'dessert',
  pantry: 'pantry'
};

export type bbq_recipe_category = (typeof bbq_recipe_category)[keyof typeof bbq_recipe_category]


export const bbq_recipe_effort: {
  easy: 'easy',
  medium: 'medium',
  project: 'project'
};

export type bbq_recipe_effort = (typeof bbq_recipe_effort)[keyof typeof bbq_recipe_effort]


export const bbq_recipe_source: {
  family: 'family',
  heb: 'heb'
};

export type bbq_recipe_source = (typeof bbq_recipe_source)[keyof typeof bbq_recipe_source]

}

export type bbq_recipe_category = $Enums.bbq_recipe_category

export const bbq_recipe_category: typeof $Enums.bbq_recipe_category

export type bbq_recipe_effort = $Enums.bbq_recipe_effort

export const bbq_recipe_effort: typeof $Enums.bbq_recipe_effort

export type bbq_recipe_source = $Enums.bbq_recipe_source

export const bbq_recipe_source: typeof $Enums.bbq_recipe_source

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
   * `prisma.bbq_claim`: Exposes CRUD operations for the **bbq_claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bbq_claims
    * const bbq_claims = await prisma.bbq_claim.findMany()
    * ```
    */
  get bbq_claim(): Prisma.bbq_claimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bbq_guest`: Exposes CRUD operations for the **bbq_guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bbq_guests
    * const bbq_guests = await prisma.bbq_guest.findMany()
    * ```
    */
  get bbq_guest(): Prisma.bbq_guestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bbq_recipe`: Exposes CRUD operations for the **bbq_recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bbq_recipes
    * const bbq_recipes = await prisma.bbq_recipe.findMany()
    * ```
    */
  get bbq_recipe(): Prisma.bbq_recipeDelegate<ExtArgs, ClientOptions>;
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
    bbq_claim: 'bbq_claim',
    bbq_guest: 'bbq_guest',
    bbq_recipe: 'bbq_recipe'
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
      modelProps: "dogs" | "users" | "bbq_claim" | "bbq_guest" | "bbq_recipe"
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
      bbq_claim: {
        payload: Prisma.$bbq_claimPayload<ExtArgs>
        fields: Prisma.bbq_claimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bbq_claimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bbq_claimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          findFirst: {
            args: Prisma.bbq_claimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bbq_claimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          findMany: {
            args: Prisma.bbq_claimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>[]
          }
          create: {
            args: Prisma.bbq_claimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          createMany: {
            args: Prisma.bbq_claimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bbq_claimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          update: {
            args: Prisma.bbq_claimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          deleteMany: {
            args: Prisma.bbq_claimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bbq_claimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bbq_claimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_claimPayload>
          }
          aggregate: {
            args: Prisma.Bbq_claimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBbq_claim>
          }
          groupBy: {
            args: Prisma.bbq_claimGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bbq_claimGroupByOutputType>[]
          }
          count: {
            args: Prisma.bbq_claimCountArgs<ExtArgs>
            result: $Utils.Optional<Bbq_claimCountAggregateOutputType> | number
          }
        }
      }
      bbq_guest: {
        payload: Prisma.$bbq_guestPayload<ExtArgs>
        fields: Prisma.bbq_guestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bbq_guestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bbq_guestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          findFirst: {
            args: Prisma.bbq_guestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bbq_guestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          findMany: {
            args: Prisma.bbq_guestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>[]
          }
          create: {
            args: Prisma.bbq_guestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          createMany: {
            args: Prisma.bbq_guestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bbq_guestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          update: {
            args: Prisma.bbq_guestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          deleteMany: {
            args: Prisma.bbq_guestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bbq_guestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bbq_guestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_guestPayload>
          }
          aggregate: {
            args: Prisma.Bbq_guestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBbq_guest>
          }
          groupBy: {
            args: Prisma.bbq_guestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bbq_guestGroupByOutputType>[]
          }
          count: {
            args: Prisma.bbq_guestCountArgs<ExtArgs>
            result: $Utils.Optional<Bbq_guestCountAggregateOutputType> | number
          }
        }
      }
      bbq_recipe: {
        payload: Prisma.$bbq_recipePayload<ExtArgs>
        fields: Prisma.bbq_recipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bbq_recipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bbq_recipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          findFirst: {
            args: Prisma.bbq_recipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bbq_recipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          findMany: {
            args: Prisma.bbq_recipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>[]
          }
          create: {
            args: Prisma.bbq_recipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          createMany: {
            args: Prisma.bbq_recipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bbq_recipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          update: {
            args: Prisma.bbq_recipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          deleteMany: {
            args: Prisma.bbq_recipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bbq_recipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bbq_recipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bbq_recipePayload>
          }
          aggregate: {
            args: Prisma.Bbq_recipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBbq_recipe>
          }
          groupBy: {
            args: Prisma.bbq_recipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bbq_recipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.bbq_recipeCountArgs<ExtArgs>
            result: $Utils.Optional<Bbq_recipeCountAggregateOutputType> | number
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
    bbq_claim?: bbq_claimOmit
    bbq_guest?: bbq_guestOmit
    bbq_recipe?: bbq_recipeOmit
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
   * Count Type Bbq_guestCountOutputType
   */

  export type Bbq_guestCountOutputType = {
    bbq_claim: number
    bbq_recipe: number
  }

  export type Bbq_guestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bbq_claim?: boolean | Bbq_guestCountOutputTypeCountBbq_claimArgs
    bbq_recipe?: boolean | Bbq_guestCountOutputTypeCountBbq_recipeArgs
  }

  // Custom InputTypes
  /**
   * Bbq_guestCountOutputType without action
   */
  export type Bbq_guestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bbq_guestCountOutputType
     */
    select?: Bbq_guestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Bbq_guestCountOutputType without action
   */
  export type Bbq_guestCountOutputTypeCountBbq_claimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_claimWhereInput
  }

  /**
   * Bbq_guestCountOutputType without action
   */
  export type Bbq_guestCountOutputTypeCountBbq_recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_recipeWhereInput
  }


  /**
   * Count Type Bbq_recipeCountOutputType
   */

  export type Bbq_recipeCountOutputType = {
    bbq_claim: number
  }

  export type Bbq_recipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bbq_claim?: boolean | Bbq_recipeCountOutputTypeCountBbq_claimArgs
  }

  // Custom InputTypes
  /**
   * Bbq_recipeCountOutputType without action
   */
  export type Bbq_recipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bbq_recipeCountOutputType
     */
    select?: Bbq_recipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Bbq_recipeCountOutputType without action
   */
  export type Bbq_recipeCountOutputTypeCountBbq_claimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_claimWhereInput
  }


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
   * Model bbq_claim
   */

  export type AggregateBbq_claim = {
    _count: Bbq_claimCountAggregateOutputType | null
    _avg: Bbq_claimAvgAggregateOutputType | null
    _sum: Bbq_claimSumAggregateOutputType | null
    _min: Bbq_claimMinAggregateOutputType | null
    _max: Bbq_claimMaxAggregateOutputType | null
  }

  export type Bbq_claimAvgAggregateOutputType = {
    id: number | null
    recipe_id: number | null
    guest_id: number | null
  }

  export type Bbq_claimSumAggregateOutputType = {
    id: number | null
    recipe_id: number | null
    guest_id: number | null
  }

  export type Bbq_claimMinAggregateOutputType = {
    id: number | null
    recipe_id: number | null
    guest_id: number | null
    created_at: Date | null
  }

  export type Bbq_claimMaxAggregateOutputType = {
    id: number | null
    recipe_id: number | null
    guest_id: number | null
    created_at: Date | null
  }

  export type Bbq_claimCountAggregateOutputType = {
    id: number
    recipe_id: number
    guest_id: number
    created_at: number
    _all: number
  }


  export type Bbq_claimAvgAggregateInputType = {
    id?: true
    recipe_id?: true
    guest_id?: true
  }

  export type Bbq_claimSumAggregateInputType = {
    id?: true
    recipe_id?: true
    guest_id?: true
  }

  export type Bbq_claimMinAggregateInputType = {
    id?: true
    recipe_id?: true
    guest_id?: true
    created_at?: true
  }

  export type Bbq_claimMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    guest_id?: true
    created_at?: true
  }

  export type Bbq_claimCountAggregateInputType = {
    id?: true
    recipe_id?: true
    guest_id?: true
    created_at?: true
    _all?: true
  }

  export type Bbq_claimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_claim to aggregate.
     */
    where?: bbq_claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_claims to fetch.
     */
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bbq_claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bbq_claims
    **/
    _count?: true | Bbq_claimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bbq_claimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bbq_claimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bbq_claimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bbq_claimMaxAggregateInputType
  }

  export type GetBbq_claimAggregateType<T extends Bbq_claimAggregateArgs> = {
        [P in keyof T & keyof AggregateBbq_claim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBbq_claim[P]>
      : GetScalarType<T[P], AggregateBbq_claim[P]>
  }




  export type bbq_claimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_claimWhereInput
    orderBy?: bbq_claimOrderByWithAggregationInput | bbq_claimOrderByWithAggregationInput[]
    by: Bbq_claimScalarFieldEnum[] | Bbq_claimScalarFieldEnum
    having?: bbq_claimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bbq_claimCountAggregateInputType | true
    _avg?: Bbq_claimAvgAggregateInputType
    _sum?: Bbq_claimSumAggregateInputType
    _min?: Bbq_claimMinAggregateInputType
    _max?: Bbq_claimMaxAggregateInputType
  }

  export type Bbq_claimGroupByOutputType = {
    id: number
    recipe_id: number
    guest_id: number
    created_at: Date
    _count: Bbq_claimCountAggregateOutputType | null
    _avg: Bbq_claimAvgAggregateOutputType | null
    _sum: Bbq_claimSumAggregateOutputType | null
    _min: Bbq_claimMinAggregateOutputType | null
    _max: Bbq_claimMaxAggregateOutputType | null
  }

  type GetBbq_claimGroupByPayload<T extends bbq_claimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bbq_claimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bbq_claimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bbq_claimGroupByOutputType[P]>
            : GetScalarType<T[P], Bbq_claimGroupByOutputType[P]>
        }
      >
    >


  export type bbq_claimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipe_id?: boolean
    guest_id?: boolean
    created_at?: boolean
    bbq_guest?: boolean | bbq_guestDefaultArgs<ExtArgs>
    bbq_recipe?: boolean | bbq_recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bbq_claim"]>



  export type bbq_claimSelectScalar = {
    id?: boolean
    recipe_id?: boolean
    guest_id?: boolean
    created_at?: boolean
  }

  export type bbq_claimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipe_id" | "guest_id" | "created_at", ExtArgs["result"]["bbq_claim"]>
  export type bbq_claimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bbq_guest?: boolean | bbq_guestDefaultArgs<ExtArgs>
    bbq_recipe?: boolean | bbq_recipeDefaultArgs<ExtArgs>
  }

  export type $bbq_claimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bbq_claim"
    objects: {
      bbq_guest: Prisma.$bbq_guestPayload<ExtArgs>
      bbq_recipe: Prisma.$bbq_recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipe_id: number
      guest_id: number
      created_at: Date
    }, ExtArgs["result"]["bbq_claim"]>
    composites: {}
  }

  type bbq_claimGetPayload<S extends boolean | null | undefined | bbq_claimDefaultArgs> = $Result.GetResult<Prisma.$bbq_claimPayload, S>

  type bbq_claimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bbq_claimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bbq_claimCountAggregateInputType | true
    }

  export interface bbq_claimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bbq_claim'], meta: { name: 'bbq_claim' } }
    /**
     * Find zero or one Bbq_claim that matches the filter.
     * @param {bbq_claimFindUniqueArgs} args - Arguments to find a Bbq_claim
     * @example
     * // Get one Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bbq_claimFindUniqueArgs>(args: SelectSubset<T, bbq_claimFindUniqueArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bbq_claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bbq_claimFindUniqueOrThrowArgs} args - Arguments to find a Bbq_claim
     * @example
     * // Get one Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bbq_claimFindUniqueOrThrowArgs>(args: SelectSubset<T, bbq_claimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimFindFirstArgs} args - Arguments to find a Bbq_claim
     * @example
     * // Get one Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bbq_claimFindFirstArgs>(args?: SelectSubset<T, bbq_claimFindFirstArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimFindFirstOrThrowArgs} args - Arguments to find a Bbq_claim
     * @example
     * // Get one Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bbq_claimFindFirstOrThrowArgs>(args?: SelectSubset<T, bbq_claimFindFirstOrThrowArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bbq_claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bbq_claims
     * const bbq_claims = await prisma.bbq_claim.findMany()
     * 
     * // Get first 10 Bbq_claims
     * const bbq_claims = await prisma.bbq_claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bbq_claimWithIdOnly = await prisma.bbq_claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bbq_claimFindManyArgs>(args?: SelectSubset<T, bbq_claimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bbq_claim.
     * @param {bbq_claimCreateArgs} args - Arguments to create a Bbq_claim.
     * @example
     * // Create one Bbq_claim
     * const Bbq_claim = await prisma.bbq_claim.create({
     *   data: {
     *     // ... data to create a Bbq_claim
     *   }
     * })
     * 
     */
    create<T extends bbq_claimCreateArgs>(args: SelectSubset<T, bbq_claimCreateArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bbq_claims.
     * @param {bbq_claimCreateManyArgs} args - Arguments to create many Bbq_claims.
     * @example
     * // Create many Bbq_claims
     * const bbq_claim = await prisma.bbq_claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bbq_claimCreateManyArgs>(args?: SelectSubset<T, bbq_claimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bbq_claim.
     * @param {bbq_claimDeleteArgs} args - Arguments to delete one Bbq_claim.
     * @example
     * // Delete one Bbq_claim
     * const Bbq_claim = await prisma.bbq_claim.delete({
     *   where: {
     *     // ... filter to delete one Bbq_claim
     *   }
     * })
     * 
     */
    delete<T extends bbq_claimDeleteArgs>(args: SelectSubset<T, bbq_claimDeleteArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bbq_claim.
     * @param {bbq_claimUpdateArgs} args - Arguments to update one Bbq_claim.
     * @example
     * // Update one Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bbq_claimUpdateArgs>(args: SelectSubset<T, bbq_claimUpdateArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bbq_claims.
     * @param {bbq_claimDeleteManyArgs} args - Arguments to filter Bbq_claims to delete.
     * @example
     * // Delete a few Bbq_claims
     * const { count } = await prisma.bbq_claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bbq_claimDeleteManyArgs>(args?: SelectSubset<T, bbq_claimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bbq_claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bbq_claims
     * const bbq_claim = await prisma.bbq_claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bbq_claimUpdateManyArgs>(args: SelectSubset<T, bbq_claimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bbq_claim.
     * @param {bbq_claimUpsertArgs} args - Arguments to update or create a Bbq_claim.
     * @example
     * // Update or create a Bbq_claim
     * const bbq_claim = await prisma.bbq_claim.upsert({
     *   create: {
     *     // ... data to create a Bbq_claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bbq_claim we want to update
     *   }
     * })
     */
    upsert<T extends bbq_claimUpsertArgs>(args: SelectSubset<T, bbq_claimUpsertArgs<ExtArgs>>): Prisma__bbq_claimClient<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bbq_claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimCountArgs} args - Arguments to filter Bbq_claims to count.
     * @example
     * // Count the number of Bbq_claims
     * const count = await prisma.bbq_claim.count({
     *   where: {
     *     // ... the filter for the Bbq_claims we want to count
     *   }
     * })
    **/
    count<T extends bbq_claimCountArgs>(
      args?: Subset<T, bbq_claimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bbq_claimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bbq_claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bbq_claimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bbq_claimAggregateArgs>(args: Subset<T, Bbq_claimAggregateArgs>): Prisma.PrismaPromise<GetBbq_claimAggregateType<T>>

    /**
     * Group by Bbq_claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_claimGroupByArgs} args - Group by arguments.
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
      T extends bbq_claimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bbq_claimGroupByArgs['orderBy'] }
        : { orderBy?: bbq_claimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bbq_claimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBbq_claimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bbq_claim model
   */
  readonly fields: bbq_claimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bbq_claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bbq_claimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bbq_guest<T extends bbq_guestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bbq_guestDefaultArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bbq_recipe<T extends bbq_recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bbq_recipeDefaultArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bbq_claim model
   */
  interface bbq_claimFieldRefs {
    readonly id: FieldRef<"bbq_claim", 'Int'>
    readonly recipe_id: FieldRef<"bbq_claim", 'Int'>
    readonly guest_id: FieldRef<"bbq_claim", 'Int'>
    readonly created_at: FieldRef<"bbq_claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bbq_claim findUnique
   */
  export type bbq_claimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter, which bbq_claim to fetch.
     */
    where: bbq_claimWhereUniqueInput
  }

  /**
   * bbq_claim findUniqueOrThrow
   */
  export type bbq_claimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter, which bbq_claim to fetch.
     */
    where: bbq_claimWhereUniqueInput
  }

  /**
   * bbq_claim findFirst
   */
  export type bbq_claimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter, which bbq_claim to fetch.
     */
    where?: bbq_claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_claims to fetch.
     */
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_claims.
     */
    cursor?: bbq_claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_claims.
     */
    distinct?: Bbq_claimScalarFieldEnum | Bbq_claimScalarFieldEnum[]
  }

  /**
   * bbq_claim findFirstOrThrow
   */
  export type bbq_claimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter, which bbq_claim to fetch.
     */
    where?: bbq_claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_claims to fetch.
     */
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_claims.
     */
    cursor?: bbq_claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_claims.
     */
    distinct?: Bbq_claimScalarFieldEnum | Bbq_claimScalarFieldEnum[]
  }

  /**
   * bbq_claim findMany
   */
  export type bbq_claimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter, which bbq_claims to fetch.
     */
    where?: bbq_claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_claims to fetch.
     */
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bbq_claims.
     */
    cursor?: bbq_claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_claims.
     */
    skip?: number
    distinct?: Bbq_claimScalarFieldEnum | Bbq_claimScalarFieldEnum[]
  }

  /**
   * bbq_claim create
   */
  export type bbq_claimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * The data needed to create a bbq_claim.
     */
    data: XOR<bbq_claimCreateInput, bbq_claimUncheckedCreateInput>
  }

  /**
   * bbq_claim createMany
   */
  export type bbq_claimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bbq_claims.
     */
    data: bbq_claimCreateManyInput | bbq_claimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bbq_claim update
   */
  export type bbq_claimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * The data needed to update a bbq_claim.
     */
    data: XOR<bbq_claimUpdateInput, bbq_claimUncheckedUpdateInput>
    /**
     * Choose, which bbq_claim to update.
     */
    where: bbq_claimWhereUniqueInput
  }

  /**
   * bbq_claim updateMany
   */
  export type bbq_claimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bbq_claims.
     */
    data: XOR<bbq_claimUpdateManyMutationInput, bbq_claimUncheckedUpdateManyInput>
    /**
     * Filter which bbq_claims to update
     */
    where?: bbq_claimWhereInput
    /**
     * Limit how many bbq_claims to update.
     */
    limit?: number
  }

  /**
   * bbq_claim upsert
   */
  export type bbq_claimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * The filter to search for the bbq_claim to update in case it exists.
     */
    where: bbq_claimWhereUniqueInput
    /**
     * In case the bbq_claim found by the `where` argument doesn't exist, create a new bbq_claim with this data.
     */
    create: XOR<bbq_claimCreateInput, bbq_claimUncheckedCreateInput>
    /**
     * In case the bbq_claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bbq_claimUpdateInput, bbq_claimUncheckedUpdateInput>
  }

  /**
   * bbq_claim delete
   */
  export type bbq_claimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    /**
     * Filter which bbq_claim to delete.
     */
    where: bbq_claimWhereUniqueInput
  }

  /**
   * bbq_claim deleteMany
   */
  export type bbq_claimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_claims to delete
     */
    where?: bbq_claimWhereInput
    /**
     * Limit how many bbq_claims to delete.
     */
    limit?: number
  }

  /**
   * bbq_claim without action
   */
  export type bbq_claimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
  }


  /**
   * Model bbq_guest
   */

  export type AggregateBbq_guest = {
    _count: Bbq_guestCountAggregateOutputType | null
    _avg: Bbq_guestAvgAggregateOutputType | null
    _sum: Bbq_guestSumAggregateOutputType | null
    _min: Bbq_guestMinAggregateOutputType | null
    _max: Bbq_guestMaxAggregateOutputType | null
  }

  export type Bbq_guestAvgAggregateOutputType = {
    id: number | null
  }

  export type Bbq_guestSumAggregateOutputType = {
    id: number | null
  }

  export type Bbq_guestMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    token: string | null
    created_at: Date | null
  }

  export type Bbq_guestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    token: string | null
    created_at: Date | null
  }

  export type Bbq_guestCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    token: number
    created_at: number
    _all: number
  }


  export type Bbq_guestAvgAggregateInputType = {
    id?: true
  }

  export type Bbq_guestSumAggregateInputType = {
    id?: true
  }

  export type Bbq_guestMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    token?: true
    created_at?: true
  }

  export type Bbq_guestMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    token?: true
    created_at?: true
  }

  export type Bbq_guestCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    token?: true
    created_at?: true
    _all?: true
  }

  export type Bbq_guestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_guest to aggregate.
     */
    where?: bbq_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_guests to fetch.
     */
    orderBy?: bbq_guestOrderByWithRelationInput | bbq_guestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bbq_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bbq_guests
    **/
    _count?: true | Bbq_guestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bbq_guestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bbq_guestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bbq_guestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bbq_guestMaxAggregateInputType
  }

  export type GetBbq_guestAggregateType<T extends Bbq_guestAggregateArgs> = {
        [P in keyof T & keyof AggregateBbq_guest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBbq_guest[P]>
      : GetScalarType<T[P], AggregateBbq_guest[P]>
  }




  export type bbq_guestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_guestWhereInput
    orderBy?: bbq_guestOrderByWithAggregationInput | bbq_guestOrderByWithAggregationInput[]
    by: Bbq_guestScalarFieldEnum[] | Bbq_guestScalarFieldEnum
    having?: bbq_guestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bbq_guestCountAggregateInputType | true
    _avg?: Bbq_guestAvgAggregateInputType
    _sum?: Bbq_guestSumAggregateInputType
    _min?: Bbq_guestMinAggregateInputType
    _max?: Bbq_guestMaxAggregateInputType
  }

  export type Bbq_guestGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    token: string
    created_at: Date
    _count: Bbq_guestCountAggregateOutputType | null
    _avg: Bbq_guestAvgAggregateOutputType | null
    _sum: Bbq_guestSumAggregateOutputType | null
    _min: Bbq_guestMinAggregateOutputType | null
    _max: Bbq_guestMaxAggregateOutputType | null
  }

  type GetBbq_guestGroupByPayload<T extends bbq_guestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bbq_guestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bbq_guestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bbq_guestGroupByOutputType[P]>
            : GetScalarType<T[P], Bbq_guestGroupByOutputType[P]>
        }
      >
    >


  export type bbq_guestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    token?: boolean
    created_at?: boolean
    bbq_claim?: boolean | bbq_guest$bbq_claimArgs<ExtArgs>
    bbq_recipe?: boolean | bbq_guest$bbq_recipeArgs<ExtArgs>
    _count?: boolean | Bbq_guestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bbq_guest"]>



  export type bbq_guestSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    token?: boolean
    created_at?: boolean
  }

  export type bbq_guestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "token" | "created_at", ExtArgs["result"]["bbq_guest"]>
  export type bbq_guestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bbq_claim?: boolean | bbq_guest$bbq_claimArgs<ExtArgs>
    bbq_recipe?: boolean | bbq_guest$bbq_recipeArgs<ExtArgs>
    _count?: boolean | Bbq_guestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bbq_guestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bbq_guest"
    objects: {
      bbq_claim: Prisma.$bbq_claimPayload<ExtArgs>[]
      bbq_recipe: Prisma.$bbq_recipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      token: string
      created_at: Date
    }, ExtArgs["result"]["bbq_guest"]>
    composites: {}
  }

  type bbq_guestGetPayload<S extends boolean | null | undefined | bbq_guestDefaultArgs> = $Result.GetResult<Prisma.$bbq_guestPayload, S>

  type bbq_guestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bbq_guestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bbq_guestCountAggregateInputType | true
    }

  export interface bbq_guestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bbq_guest'], meta: { name: 'bbq_guest' } }
    /**
     * Find zero or one Bbq_guest that matches the filter.
     * @param {bbq_guestFindUniqueArgs} args - Arguments to find a Bbq_guest
     * @example
     * // Get one Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bbq_guestFindUniqueArgs>(args: SelectSubset<T, bbq_guestFindUniqueArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bbq_guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bbq_guestFindUniqueOrThrowArgs} args - Arguments to find a Bbq_guest
     * @example
     * // Get one Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bbq_guestFindUniqueOrThrowArgs>(args: SelectSubset<T, bbq_guestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestFindFirstArgs} args - Arguments to find a Bbq_guest
     * @example
     * // Get one Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bbq_guestFindFirstArgs>(args?: SelectSubset<T, bbq_guestFindFirstArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestFindFirstOrThrowArgs} args - Arguments to find a Bbq_guest
     * @example
     * // Get one Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bbq_guestFindFirstOrThrowArgs>(args?: SelectSubset<T, bbq_guestFindFirstOrThrowArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bbq_guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bbq_guests
     * const bbq_guests = await prisma.bbq_guest.findMany()
     * 
     * // Get first 10 Bbq_guests
     * const bbq_guests = await prisma.bbq_guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bbq_guestWithIdOnly = await prisma.bbq_guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bbq_guestFindManyArgs>(args?: SelectSubset<T, bbq_guestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bbq_guest.
     * @param {bbq_guestCreateArgs} args - Arguments to create a Bbq_guest.
     * @example
     * // Create one Bbq_guest
     * const Bbq_guest = await prisma.bbq_guest.create({
     *   data: {
     *     // ... data to create a Bbq_guest
     *   }
     * })
     * 
     */
    create<T extends bbq_guestCreateArgs>(args: SelectSubset<T, bbq_guestCreateArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bbq_guests.
     * @param {bbq_guestCreateManyArgs} args - Arguments to create many Bbq_guests.
     * @example
     * // Create many Bbq_guests
     * const bbq_guest = await prisma.bbq_guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bbq_guestCreateManyArgs>(args?: SelectSubset<T, bbq_guestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bbq_guest.
     * @param {bbq_guestDeleteArgs} args - Arguments to delete one Bbq_guest.
     * @example
     * // Delete one Bbq_guest
     * const Bbq_guest = await prisma.bbq_guest.delete({
     *   where: {
     *     // ... filter to delete one Bbq_guest
     *   }
     * })
     * 
     */
    delete<T extends bbq_guestDeleteArgs>(args: SelectSubset<T, bbq_guestDeleteArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bbq_guest.
     * @param {bbq_guestUpdateArgs} args - Arguments to update one Bbq_guest.
     * @example
     * // Update one Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bbq_guestUpdateArgs>(args: SelectSubset<T, bbq_guestUpdateArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bbq_guests.
     * @param {bbq_guestDeleteManyArgs} args - Arguments to filter Bbq_guests to delete.
     * @example
     * // Delete a few Bbq_guests
     * const { count } = await prisma.bbq_guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bbq_guestDeleteManyArgs>(args?: SelectSubset<T, bbq_guestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bbq_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bbq_guests
     * const bbq_guest = await prisma.bbq_guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bbq_guestUpdateManyArgs>(args: SelectSubset<T, bbq_guestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bbq_guest.
     * @param {bbq_guestUpsertArgs} args - Arguments to update or create a Bbq_guest.
     * @example
     * // Update or create a Bbq_guest
     * const bbq_guest = await prisma.bbq_guest.upsert({
     *   create: {
     *     // ... data to create a Bbq_guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bbq_guest we want to update
     *   }
     * })
     */
    upsert<T extends bbq_guestUpsertArgs>(args: SelectSubset<T, bbq_guestUpsertArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bbq_guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestCountArgs} args - Arguments to filter Bbq_guests to count.
     * @example
     * // Count the number of Bbq_guests
     * const count = await prisma.bbq_guest.count({
     *   where: {
     *     // ... the filter for the Bbq_guests we want to count
     *   }
     * })
    **/
    count<T extends bbq_guestCountArgs>(
      args?: Subset<T, bbq_guestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bbq_guestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bbq_guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bbq_guestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bbq_guestAggregateArgs>(args: Subset<T, Bbq_guestAggregateArgs>): Prisma.PrismaPromise<GetBbq_guestAggregateType<T>>

    /**
     * Group by Bbq_guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_guestGroupByArgs} args - Group by arguments.
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
      T extends bbq_guestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bbq_guestGroupByArgs['orderBy'] }
        : { orderBy?: bbq_guestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bbq_guestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBbq_guestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bbq_guest model
   */
  readonly fields: bbq_guestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bbq_guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bbq_guestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bbq_claim<T extends bbq_guest$bbq_claimArgs<ExtArgs> = {}>(args?: Subset<T, bbq_guest$bbq_claimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bbq_recipe<T extends bbq_guest$bbq_recipeArgs<ExtArgs> = {}>(args?: Subset<T, bbq_guest$bbq_recipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the bbq_guest model
   */
  interface bbq_guestFieldRefs {
    readonly id: FieldRef<"bbq_guest", 'Int'>
    readonly name: FieldRef<"bbq_guest", 'String'>
    readonly phone: FieldRef<"bbq_guest", 'String'>
    readonly token: FieldRef<"bbq_guest", 'String'>
    readonly created_at: FieldRef<"bbq_guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bbq_guest findUnique
   */
  export type bbq_guestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter, which bbq_guest to fetch.
     */
    where: bbq_guestWhereUniqueInput
  }

  /**
   * bbq_guest findUniqueOrThrow
   */
  export type bbq_guestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter, which bbq_guest to fetch.
     */
    where: bbq_guestWhereUniqueInput
  }

  /**
   * bbq_guest findFirst
   */
  export type bbq_guestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter, which bbq_guest to fetch.
     */
    where?: bbq_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_guests to fetch.
     */
    orderBy?: bbq_guestOrderByWithRelationInput | bbq_guestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_guests.
     */
    cursor?: bbq_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_guests.
     */
    distinct?: Bbq_guestScalarFieldEnum | Bbq_guestScalarFieldEnum[]
  }

  /**
   * bbq_guest findFirstOrThrow
   */
  export type bbq_guestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter, which bbq_guest to fetch.
     */
    where?: bbq_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_guests to fetch.
     */
    orderBy?: bbq_guestOrderByWithRelationInput | bbq_guestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_guests.
     */
    cursor?: bbq_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_guests.
     */
    distinct?: Bbq_guestScalarFieldEnum | Bbq_guestScalarFieldEnum[]
  }

  /**
   * bbq_guest findMany
   */
  export type bbq_guestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter, which bbq_guests to fetch.
     */
    where?: bbq_guestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_guests to fetch.
     */
    orderBy?: bbq_guestOrderByWithRelationInput | bbq_guestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bbq_guests.
     */
    cursor?: bbq_guestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_guests.
     */
    skip?: number
    distinct?: Bbq_guestScalarFieldEnum | Bbq_guestScalarFieldEnum[]
  }

  /**
   * bbq_guest create
   */
  export type bbq_guestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * The data needed to create a bbq_guest.
     */
    data: XOR<bbq_guestCreateInput, bbq_guestUncheckedCreateInput>
  }

  /**
   * bbq_guest createMany
   */
  export type bbq_guestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bbq_guests.
     */
    data: bbq_guestCreateManyInput | bbq_guestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bbq_guest update
   */
  export type bbq_guestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * The data needed to update a bbq_guest.
     */
    data: XOR<bbq_guestUpdateInput, bbq_guestUncheckedUpdateInput>
    /**
     * Choose, which bbq_guest to update.
     */
    where: bbq_guestWhereUniqueInput
  }

  /**
   * bbq_guest updateMany
   */
  export type bbq_guestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bbq_guests.
     */
    data: XOR<bbq_guestUpdateManyMutationInput, bbq_guestUncheckedUpdateManyInput>
    /**
     * Filter which bbq_guests to update
     */
    where?: bbq_guestWhereInput
    /**
     * Limit how many bbq_guests to update.
     */
    limit?: number
  }

  /**
   * bbq_guest upsert
   */
  export type bbq_guestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * The filter to search for the bbq_guest to update in case it exists.
     */
    where: bbq_guestWhereUniqueInput
    /**
     * In case the bbq_guest found by the `where` argument doesn't exist, create a new bbq_guest with this data.
     */
    create: XOR<bbq_guestCreateInput, bbq_guestUncheckedCreateInput>
    /**
     * In case the bbq_guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bbq_guestUpdateInput, bbq_guestUncheckedUpdateInput>
  }

  /**
   * bbq_guest delete
   */
  export type bbq_guestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    /**
     * Filter which bbq_guest to delete.
     */
    where: bbq_guestWhereUniqueInput
  }

  /**
   * bbq_guest deleteMany
   */
  export type bbq_guestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_guests to delete
     */
    where?: bbq_guestWhereInput
    /**
     * Limit how many bbq_guests to delete.
     */
    limit?: number
  }

  /**
   * bbq_guest.bbq_claim
   */
  export type bbq_guest$bbq_claimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    where?: bbq_claimWhereInput
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    cursor?: bbq_claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bbq_claimScalarFieldEnum | Bbq_claimScalarFieldEnum[]
  }

  /**
   * bbq_guest.bbq_recipe
   */
  export type bbq_guest$bbq_recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    where?: bbq_recipeWhereInput
    orderBy?: bbq_recipeOrderByWithRelationInput | bbq_recipeOrderByWithRelationInput[]
    cursor?: bbq_recipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bbq_recipeScalarFieldEnum | Bbq_recipeScalarFieldEnum[]
  }

  /**
   * bbq_guest without action
   */
  export type bbq_guestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
  }


  /**
   * Model bbq_recipe
   */

  export type AggregateBbq_recipe = {
    _count: Bbq_recipeCountAggregateOutputType | null
    _avg: Bbq_recipeAvgAggregateOutputType | null
    _sum: Bbq_recipeSumAggregateOutputType | null
    _min: Bbq_recipeMinAggregateOutputType | null
    _max: Bbq_recipeMaxAggregateOutputType | null
  }

  export type Bbq_recipeAvgAggregateOutputType = {
    id: number | null
    claim_cap: number | null
    reserved_for: number | null
    sort_order: number | null
  }

  export type Bbq_recipeSumAggregateOutputType = {
    id: number | null
    claim_cap: number | null
    reserved_for: number | null
    sort_order: number | null
  }

  export type Bbq_recipeMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    blurb: string | null
    host_note: string | null
    category: $Enums.bbq_recipe_category | null
    effort: $Enums.bbq_recipe_effort | null
    source: $Enums.bbq_recipe_source | null
    recipe_url: string | null
    body: string | null
    claim_cap: number | null
    pairs_with: string | null
    reserved_for: number | null
    sort_order: number | null
  }

  export type Bbq_recipeMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    blurb: string | null
    host_note: string | null
    category: $Enums.bbq_recipe_category | null
    effort: $Enums.bbq_recipe_effort | null
    source: $Enums.bbq_recipe_source | null
    recipe_url: string | null
    body: string | null
    claim_cap: number | null
    pairs_with: string | null
    reserved_for: number | null
    sort_order: number | null
  }

  export type Bbq_recipeCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    blurb: number
    host_note: number
    category: number
    effort: number
    source: number
    recipe_url: number
    body: number
    claim_cap: number
    pairs_with: number
    reserved_for: number
    sort_order: number
    _all: number
  }


  export type Bbq_recipeAvgAggregateInputType = {
    id?: true
    claim_cap?: true
    reserved_for?: true
    sort_order?: true
  }

  export type Bbq_recipeSumAggregateInputType = {
    id?: true
    claim_cap?: true
    reserved_for?: true
    sort_order?: true
  }

  export type Bbq_recipeMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    blurb?: true
    host_note?: true
    category?: true
    effort?: true
    source?: true
    recipe_url?: true
    body?: true
    claim_cap?: true
    pairs_with?: true
    reserved_for?: true
    sort_order?: true
  }

  export type Bbq_recipeMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    blurb?: true
    host_note?: true
    category?: true
    effort?: true
    source?: true
    recipe_url?: true
    body?: true
    claim_cap?: true
    pairs_with?: true
    reserved_for?: true
    sort_order?: true
  }

  export type Bbq_recipeCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    blurb?: true
    host_note?: true
    category?: true
    effort?: true
    source?: true
    recipe_url?: true
    body?: true
    claim_cap?: true
    pairs_with?: true
    reserved_for?: true
    sort_order?: true
    _all?: true
  }

  export type Bbq_recipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_recipe to aggregate.
     */
    where?: bbq_recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_recipes to fetch.
     */
    orderBy?: bbq_recipeOrderByWithRelationInput | bbq_recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bbq_recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bbq_recipes
    **/
    _count?: true | Bbq_recipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bbq_recipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bbq_recipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bbq_recipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bbq_recipeMaxAggregateInputType
  }

  export type GetBbq_recipeAggregateType<T extends Bbq_recipeAggregateArgs> = {
        [P in keyof T & keyof AggregateBbq_recipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBbq_recipe[P]>
      : GetScalarType<T[P], AggregateBbq_recipe[P]>
  }




  export type bbq_recipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bbq_recipeWhereInput
    orderBy?: bbq_recipeOrderByWithAggregationInput | bbq_recipeOrderByWithAggregationInput[]
    by: Bbq_recipeScalarFieldEnum[] | Bbq_recipeScalarFieldEnum
    having?: bbq_recipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bbq_recipeCountAggregateInputType | true
    _avg?: Bbq_recipeAvgAggregateInputType
    _sum?: Bbq_recipeSumAggregateInputType
    _min?: Bbq_recipeMinAggregateInputType
    _max?: Bbq_recipeMaxAggregateInputType
  }

  export type Bbq_recipeGroupByOutputType = {
    id: number
    slug: string
    title: string
    blurb: string | null
    host_note: string | null
    category: $Enums.bbq_recipe_category
    effort: $Enums.bbq_recipe_effort
    source: $Enums.bbq_recipe_source
    recipe_url: string | null
    body: string | null
    claim_cap: number | null
    pairs_with: string | null
    reserved_for: number | null
    sort_order: number
    _count: Bbq_recipeCountAggregateOutputType | null
    _avg: Bbq_recipeAvgAggregateOutputType | null
    _sum: Bbq_recipeSumAggregateOutputType | null
    _min: Bbq_recipeMinAggregateOutputType | null
    _max: Bbq_recipeMaxAggregateOutputType | null
  }

  type GetBbq_recipeGroupByPayload<T extends bbq_recipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bbq_recipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bbq_recipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bbq_recipeGroupByOutputType[P]>
            : GetScalarType<T[P], Bbq_recipeGroupByOutputType[P]>
        }
      >
    >


  export type bbq_recipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    blurb?: boolean
    host_note?: boolean
    category?: boolean
    effort?: boolean
    source?: boolean
    recipe_url?: boolean
    body?: boolean
    claim_cap?: boolean
    pairs_with?: boolean
    reserved_for?: boolean
    sort_order?: boolean
    bbq_claim?: boolean | bbq_recipe$bbq_claimArgs<ExtArgs>
    bbq_guest?: boolean | bbq_recipe$bbq_guestArgs<ExtArgs>
    _count?: boolean | Bbq_recipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bbq_recipe"]>



  export type bbq_recipeSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    blurb?: boolean
    host_note?: boolean
    category?: boolean
    effort?: boolean
    source?: boolean
    recipe_url?: boolean
    body?: boolean
    claim_cap?: boolean
    pairs_with?: boolean
    reserved_for?: boolean
    sort_order?: boolean
  }

  export type bbq_recipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "blurb" | "host_note" | "category" | "effort" | "source" | "recipe_url" | "body" | "claim_cap" | "pairs_with" | "reserved_for" | "sort_order", ExtArgs["result"]["bbq_recipe"]>
  export type bbq_recipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bbq_claim?: boolean | bbq_recipe$bbq_claimArgs<ExtArgs>
    bbq_guest?: boolean | bbq_recipe$bbq_guestArgs<ExtArgs>
    _count?: boolean | Bbq_recipeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bbq_recipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bbq_recipe"
    objects: {
      bbq_claim: Prisma.$bbq_claimPayload<ExtArgs>[]
      bbq_guest: Prisma.$bbq_guestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      blurb: string | null
      host_note: string | null
      category: $Enums.bbq_recipe_category
      effort: $Enums.bbq_recipe_effort
      source: $Enums.bbq_recipe_source
      recipe_url: string | null
      body: string | null
      claim_cap: number | null
      pairs_with: string | null
      reserved_for: number | null
      sort_order: number
    }, ExtArgs["result"]["bbq_recipe"]>
    composites: {}
  }

  type bbq_recipeGetPayload<S extends boolean | null | undefined | bbq_recipeDefaultArgs> = $Result.GetResult<Prisma.$bbq_recipePayload, S>

  type bbq_recipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bbq_recipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bbq_recipeCountAggregateInputType | true
    }

  export interface bbq_recipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bbq_recipe'], meta: { name: 'bbq_recipe' } }
    /**
     * Find zero or one Bbq_recipe that matches the filter.
     * @param {bbq_recipeFindUniqueArgs} args - Arguments to find a Bbq_recipe
     * @example
     * // Get one Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bbq_recipeFindUniqueArgs>(args: SelectSubset<T, bbq_recipeFindUniqueArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bbq_recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bbq_recipeFindUniqueOrThrowArgs} args - Arguments to find a Bbq_recipe
     * @example
     * // Get one Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bbq_recipeFindUniqueOrThrowArgs>(args: SelectSubset<T, bbq_recipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeFindFirstArgs} args - Arguments to find a Bbq_recipe
     * @example
     * // Get one Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bbq_recipeFindFirstArgs>(args?: SelectSubset<T, bbq_recipeFindFirstArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bbq_recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeFindFirstOrThrowArgs} args - Arguments to find a Bbq_recipe
     * @example
     * // Get one Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bbq_recipeFindFirstOrThrowArgs>(args?: SelectSubset<T, bbq_recipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bbq_recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bbq_recipes
     * const bbq_recipes = await prisma.bbq_recipe.findMany()
     * 
     * // Get first 10 Bbq_recipes
     * const bbq_recipes = await prisma.bbq_recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bbq_recipeWithIdOnly = await prisma.bbq_recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bbq_recipeFindManyArgs>(args?: SelectSubset<T, bbq_recipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bbq_recipe.
     * @param {bbq_recipeCreateArgs} args - Arguments to create a Bbq_recipe.
     * @example
     * // Create one Bbq_recipe
     * const Bbq_recipe = await prisma.bbq_recipe.create({
     *   data: {
     *     // ... data to create a Bbq_recipe
     *   }
     * })
     * 
     */
    create<T extends bbq_recipeCreateArgs>(args: SelectSubset<T, bbq_recipeCreateArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bbq_recipes.
     * @param {bbq_recipeCreateManyArgs} args - Arguments to create many Bbq_recipes.
     * @example
     * // Create many Bbq_recipes
     * const bbq_recipe = await prisma.bbq_recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bbq_recipeCreateManyArgs>(args?: SelectSubset<T, bbq_recipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bbq_recipe.
     * @param {bbq_recipeDeleteArgs} args - Arguments to delete one Bbq_recipe.
     * @example
     * // Delete one Bbq_recipe
     * const Bbq_recipe = await prisma.bbq_recipe.delete({
     *   where: {
     *     // ... filter to delete one Bbq_recipe
     *   }
     * })
     * 
     */
    delete<T extends bbq_recipeDeleteArgs>(args: SelectSubset<T, bbq_recipeDeleteArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bbq_recipe.
     * @param {bbq_recipeUpdateArgs} args - Arguments to update one Bbq_recipe.
     * @example
     * // Update one Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bbq_recipeUpdateArgs>(args: SelectSubset<T, bbq_recipeUpdateArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bbq_recipes.
     * @param {bbq_recipeDeleteManyArgs} args - Arguments to filter Bbq_recipes to delete.
     * @example
     * // Delete a few Bbq_recipes
     * const { count } = await prisma.bbq_recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bbq_recipeDeleteManyArgs>(args?: SelectSubset<T, bbq_recipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bbq_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bbq_recipes
     * const bbq_recipe = await prisma.bbq_recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bbq_recipeUpdateManyArgs>(args: SelectSubset<T, bbq_recipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bbq_recipe.
     * @param {bbq_recipeUpsertArgs} args - Arguments to update or create a Bbq_recipe.
     * @example
     * // Update or create a Bbq_recipe
     * const bbq_recipe = await prisma.bbq_recipe.upsert({
     *   create: {
     *     // ... data to create a Bbq_recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bbq_recipe we want to update
     *   }
     * })
     */
    upsert<T extends bbq_recipeUpsertArgs>(args: SelectSubset<T, bbq_recipeUpsertArgs<ExtArgs>>): Prisma__bbq_recipeClient<$Result.GetResult<Prisma.$bbq_recipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bbq_recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeCountArgs} args - Arguments to filter Bbq_recipes to count.
     * @example
     * // Count the number of Bbq_recipes
     * const count = await prisma.bbq_recipe.count({
     *   where: {
     *     // ... the filter for the Bbq_recipes we want to count
     *   }
     * })
    **/
    count<T extends bbq_recipeCountArgs>(
      args?: Subset<T, bbq_recipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bbq_recipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bbq_recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bbq_recipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bbq_recipeAggregateArgs>(args: Subset<T, Bbq_recipeAggregateArgs>): Prisma.PrismaPromise<GetBbq_recipeAggregateType<T>>

    /**
     * Group by Bbq_recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bbq_recipeGroupByArgs} args - Group by arguments.
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
      T extends bbq_recipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bbq_recipeGroupByArgs['orderBy'] }
        : { orderBy?: bbq_recipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bbq_recipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBbq_recipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bbq_recipe model
   */
  readonly fields: bbq_recipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bbq_recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bbq_recipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bbq_claim<T extends bbq_recipe$bbq_claimArgs<ExtArgs> = {}>(args?: Subset<T, bbq_recipe$bbq_claimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bbq_claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bbq_guest<T extends bbq_recipe$bbq_guestArgs<ExtArgs> = {}>(args?: Subset<T, bbq_recipe$bbq_guestArgs<ExtArgs>>): Prisma__bbq_guestClient<$Result.GetResult<Prisma.$bbq_guestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bbq_recipe model
   */
  interface bbq_recipeFieldRefs {
    readonly id: FieldRef<"bbq_recipe", 'Int'>
    readonly slug: FieldRef<"bbq_recipe", 'String'>
    readonly title: FieldRef<"bbq_recipe", 'String'>
    readonly blurb: FieldRef<"bbq_recipe", 'String'>
    readonly host_note: FieldRef<"bbq_recipe", 'String'>
    readonly category: FieldRef<"bbq_recipe", 'bbq_recipe_category'>
    readonly effort: FieldRef<"bbq_recipe", 'bbq_recipe_effort'>
    readonly source: FieldRef<"bbq_recipe", 'bbq_recipe_source'>
    readonly recipe_url: FieldRef<"bbq_recipe", 'String'>
    readonly body: FieldRef<"bbq_recipe", 'String'>
    readonly claim_cap: FieldRef<"bbq_recipe", 'Int'>
    readonly pairs_with: FieldRef<"bbq_recipe", 'String'>
    readonly reserved_for: FieldRef<"bbq_recipe", 'Int'>
    readonly sort_order: FieldRef<"bbq_recipe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bbq_recipe findUnique
   */
  export type bbq_recipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter, which bbq_recipe to fetch.
     */
    where: bbq_recipeWhereUniqueInput
  }

  /**
   * bbq_recipe findUniqueOrThrow
   */
  export type bbq_recipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter, which bbq_recipe to fetch.
     */
    where: bbq_recipeWhereUniqueInput
  }

  /**
   * bbq_recipe findFirst
   */
  export type bbq_recipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter, which bbq_recipe to fetch.
     */
    where?: bbq_recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_recipes to fetch.
     */
    orderBy?: bbq_recipeOrderByWithRelationInput | bbq_recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_recipes.
     */
    cursor?: bbq_recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_recipes.
     */
    distinct?: Bbq_recipeScalarFieldEnum | Bbq_recipeScalarFieldEnum[]
  }

  /**
   * bbq_recipe findFirstOrThrow
   */
  export type bbq_recipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter, which bbq_recipe to fetch.
     */
    where?: bbq_recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_recipes to fetch.
     */
    orderBy?: bbq_recipeOrderByWithRelationInput | bbq_recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bbq_recipes.
     */
    cursor?: bbq_recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bbq_recipes.
     */
    distinct?: Bbq_recipeScalarFieldEnum | Bbq_recipeScalarFieldEnum[]
  }

  /**
   * bbq_recipe findMany
   */
  export type bbq_recipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter, which bbq_recipes to fetch.
     */
    where?: bbq_recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bbq_recipes to fetch.
     */
    orderBy?: bbq_recipeOrderByWithRelationInput | bbq_recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bbq_recipes.
     */
    cursor?: bbq_recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bbq_recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bbq_recipes.
     */
    skip?: number
    distinct?: Bbq_recipeScalarFieldEnum | Bbq_recipeScalarFieldEnum[]
  }

  /**
   * bbq_recipe create
   */
  export type bbq_recipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * The data needed to create a bbq_recipe.
     */
    data: XOR<bbq_recipeCreateInput, bbq_recipeUncheckedCreateInput>
  }

  /**
   * bbq_recipe createMany
   */
  export type bbq_recipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bbq_recipes.
     */
    data: bbq_recipeCreateManyInput | bbq_recipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bbq_recipe update
   */
  export type bbq_recipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * The data needed to update a bbq_recipe.
     */
    data: XOR<bbq_recipeUpdateInput, bbq_recipeUncheckedUpdateInput>
    /**
     * Choose, which bbq_recipe to update.
     */
    where: bbq_recipeWhereUniqueInput
  }

  /**
   * bbq_recipe updateMany
   */
  export type bbq_recipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bbq_recipes.
     */
    data: XOR<bbq_recipeUpdateManyMutationInput, bbq_recipeUncheckedUpdateManyInput>
    /**
     * Filter which bbq_recipes to update
     */
    where?: bbq_recipeWhereInput
    /**
     * Limit how many bbq_recipes to update.
     */
    limit?: number
  }

  /**
   * bbq_recipe upsert
   */
  export type bbq_recipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * The filter to search for the bbq_recipe to update in case it exists.
     */
    where: bbq_recipeWhereUniqueInput
    /**
     * In case the bbq_recipe found by the `where` argument doesn't exist, create a new bbq_recipe with this data.
     */
    create: XOR<bbq_recipeCreateInput, bbq_recipeUncheckedCreateInput>
    /**
     * In case the bbq_recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bbq_recipeUpdateInput, bbq_recipeUncheckedUpdateInput>
  }

  /**
   * bbq_recipe delete
   */
  export type bbq_recipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
    /**
     * Filter which bbq_recipe to delete.
     */
    where: bbq_recipeWhereUniqueInput
  }

  /**
   * bbq_recipe deleteMany
   */
  export type bbq_recipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bbq_recipes to delete
     */
    where?: bbq_recipeWhereInput
    /**
     * Limit how many bbq_recipes to delete.
     */
    limit?: number
  }

  /**
   * bbq_recipe.bbq_claim
   */
  export type bbq_recipe$bbq_claimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_claim
     */
    select?: bbq_claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_claim
     */
    omit?: bbq_claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_claimInclude<ExtArgs> | null
    where?: bbq_claimWhereInput
    orderBy?: bbq_claimOrderByWithRelationInput | bbq_claimOrderByWithRelationInput[]
    cursor?: bbq_claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bbq_claimScalarFieldEnum | Bbq_claimScalarFieldEnum[]
  }

  /**
   * bbq_recipe.bbq_guest
   */
  export type bbq_recipe$bbq_guestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_guest
     */
    select?: bbq_guestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_guest
     */
    omit?: bbq_guestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_guestInclude<ExtArgs> | null
    where?: bbq_guestWhereInput
  }

  /**
   * bbq_recipe without action
   */
  export type bbq_recipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bbq_recipe
     */
    select?: bbq_recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bbq_recipe
     */
    omit?: bbq_recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bbq_recipeInclude<ExtArgs> | null
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


  export const Bbq_claimScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    guest_id: 'guest_id',
    created_at: 'created_at'
  };

  export type Bbq_claimScalarFieldEnum = (typeof Bbq_claimScalarFieldEnum)[keyof typeof Bbq_claimScalarFieldEnum]


  export const Bbq_guestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    token: 'token',
    created_at: 'created_at'
  };

  export type Bbq_guestScalarFieldEnum = (typeof Bbq_guestScalarFieldEnum)[keyof typeof Bbq_guestScalarFieldEnum]


  export const Bbq_recipeScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    blurb: 'blurb',
    host_note: 'host_note',
    category: 'category',
    effort: 'effort',
    source: 'source',
    recipe_url: 'recipe_url',
    body: 'body',
    claim_cap: 'claim_cap',
    pairs_with: 'pairs_with',
    reserved_for: 'reserved_for',
    sort_order: 'sort_order'
  };

  export type Bbq_recipeScalarFieldEnum = (typeof Bbq_recipeScalarFieldEnum)[keyof typeof Bbq_recipeScalarFieldEnum]


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


  export const bbq_guestOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    token: 'token'
  };

  export type bbq_guestOrderByRelevanceFieldEnum = (typeof bbq_guestOrderByRelevanceFieldEnum)[keyof typeof bbq_guestOrderByRelevanceFieldEnum]


  export const bbq_recipeOrderByRelevanceFieldEnum: {
    slug: 'slug',
    title: 'title',
    blurb: 'blurb',
    host_note: 'host_note',
    recipe_url: 'recipe_url',
    body: 'body',
    pairs_with: 'pairs_with'
  };

  export type bbq_recipeOrderByRelevanceFieldEnum = (typeof bbq_recipeOrderByRelevanceFieldEnum)[keyof typeof bbq_recipeOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'bbq_recipe_category'
   */
  export type Enumbbq_recipe_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bbq_recipe_category'>
    


  /**
   * Reference to a field of type 'bbq_recipe_effort'
   */
  export type Enumbbq_recipe_effortFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bbq_recipe_effort'>
    


  /**
   * Reference to a field of type 'bbq_recipe_source'
   */
  export type Enumbbq_recipe_sourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bbq_recipe_source'>
    


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
    src?: string
    AND?: dogsWhereInput | dogsWhereInput[]
    OR?: dogsWhereInput[]
    NOT?: dogsWhereInput | dogsWhereInput[]
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
  }, "id" | "id" | "src">

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

  export type bbq_claimWhereInput = {
    AND?: bbq_claimWhereInput | bbq_claimWhereInput[]
    OR?: bbq_claimWhereInput[]
    NOT?: bbq_claimWhereInput | bbq_claimWhereInput[]
    id?: IntFilter<"bbq_claim"> | number
    recipe_id?: IntFilter<"bbq_claim"> | number
    guest_id?: IntFilter<"bbq_claim"> | number
    created_at?: DateTimeFilter<"bbq_claim"> | Date | string
    bbq_guest?: XOR<Bbq_guestScalarRelationFilter, bbq_guestWhereInput>
    bbq_recipe?: XOR<Bbq_recipeScalarRelationFilter, bbq_recipeWhereInput>
  }

  export type bbq_claimOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
    created_at?: SortOrder
    bbq_guest?: bbq_guestOrderByWithRelationInput
    bbq_recipe?: bbq_recipeOrderByWithRelationInput
  }

  export type bbq_claimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    recipe_id_guest_id?: bbq_claimRecipe_idGuest_idCompoundUniqueInput
    AND?: bbq_claimWhereInput | bbq_claimWhereInput[]
    OR?: bbq_claimWhereInput[]
    NOT?: bbq_claimWhereInput | bbq_claimWhereInput[]
    recipe_id?: IntFilter<"bbq_claim"> | number
    guest_id?: IntFilter<"bbq_claim"> | number
    created_at?: DateTimeFilter<"bbq_claim"> | Date | string
    bbq_guest?: XOR<Bbq_guestScalarRelationFilter, bbq_guestWhereInput>
    bbq_recipe?: XOR<Bbq_recipeScalarRelationFilter, bbq_recipeWhereInput>
  }, "id" | "recipe_id_guest_id">

  export type bbq_claimOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
    created_at?: SortOrder
    _count?: bbq_claimCountOrderByAggregateInput
    _avg?: bbq_claimAvgOrderByAggregateInput
    _max?: bbq_claimMaxOrderByAggregateInput
    _min?: bbq_claimMinOrderByAggregateInput
    _sum?: bbq_claimSumOrderByAggregateInput
  }

  export type bbq_claimScalarWhereWithAggregatesInput = {
    AND?: bbq_claimScalarWhereWithAggregatesInput | bbq_claimScalarWhereWithAggregatesInput[]
    OR?: bbq_claimScalarWhereWithAggregatesInput[]
    NOT?: bbq_claimScalarWhereWithAggregatesInput | bbq_claimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bbq_claim"> | number
    recipe_id?: IntWithAggregatesFilter<"bbq_claim"> | number
    guest_id?: IntWithAggregatesFilter<"bbq_claim"> | number
    created_at?: DateTimeWithAggregatesFilter<"bbq_claim"> | Date | string
  }

  export type bbq_guestWhereInput = {
    AND?: bbq_guestWhereInput | bbq_guestWhereInput[]
    OR?: bbq_guestWhereInput[]
    NOT?: bbq_guestWhereInput | bbq_guestWhereInput[]
    id?: IntFilter<"bbq_guest"> | number
    name?: StringFilter<"bbq_guest"> | string
    phone?: StringNullableFilter<"bbq_guest"> | string | null
    token?: StringFilter<"bbq_guest"> | string
    created_at?: DateTimeFilter<"bbq_guest"> | Date | string
    bbq_claim?: Bbq_claimListRelationFilter
    bbq_recipe?: Bbq_recipeListRelationFilter
  }

  export type bbq_guestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    token?: SortOrder
    created_at?: SortOrder
    bbq_claim?: bbq_claimOrderByRelationAggregateInput
    bbq_recipe?: bbq_recipeOrderByRelationAggregateInput
    _relevance?: bbq_guestOrderByRelevanceInput
  }

  export type bbq_guestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: bbq_guestWhereInput | bbq_guestWhereInput[]
    OR?: bbq_guestWhereInput[]
    NOT?: bbq_guestWhereInput | bbq_guestWhereInput[]
    name?: StringFilter<"bbq_guest"> | string
    phone?: StringNullableFilter<"bbq_guest"> | string | null
    created_at?: DateTimeFilter<"bbq_guest"> | Date | string
    bbq_claim?: Bbq_claimListRelationFilter
    bbq_recipe?: Bbq_recipeListRelationFilter
  }, "id" | "token">

  export type bbq_guestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    token?: SortOrder
    created_at?: SortOrder
    _count?: bbq_guestCountOrderByAggregateInput
    _avg?: bbq_guestAvgOrderByAggregateInput
    _max?: bbq_guestMaxOrderByAggregateInput
    _min?: bbq_guestMinOrderByAggregateInput
    _sum?: bbq_guestSumOrderByAggregateInput
  }

  export type bbq_guestScalarWhereWithAggregatesInput = {
    AND?: bbq_guestScalarWhereWithAggregatesInput | bbq_guestScalarWhereWithAggregatesInput[]
    OR?: bbq_guestScalarWhereWithAggregatesInput[]
    NOT?: bbq_guestScalarWhereWithAggregatesInput | bbq_guestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bbq_guest"> | number
    name?: StringWithAggregatesFilter<"bbq_guest"> | string
    phone?: StringNullableWithAggregatesFilter<"bbq_guest"> | string | null
    token?: StringWithAggregatesFilter<"bbq_guest"> | string
    created_at?: DateTimeWithAggregatesFilter<"bbq_guest"> | Date | string
  }

  export type bbq_recipeWhereInput = {
    AND?: bbq_recipeWhereInput | bbq_recipeWhereInput[]
    OR?: bbq_recipeWhereInput[]
    NOT?: bbq_recipeWhereInput | bbq_recipeWhereInput[]
    id?: IntFilter<"bbq_recipe"> | number
    slug?: StringFilter<"bbq_recipe"> | string
    title?: StringFilter<"bbq_recipe"> | string
    blurb?: StringNullableFilter<"bbq_recipe"> | string | null
    host_note?: StringNullableFilter<"bbq_recipe"> | string | null
    category?: Enumbbq_recipe_categoryFilter<"bbq_recipe"> | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFilter<"bbq_recipe"> | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFilter<"bbq_recipe"> | $Enums.bbq_recipe_source
    recipe_url?: StringNullableFilter<"bbq_recipe"> | string | null
    body?: StringNullableFilter<"bbq_recipe"> | string | null
    claim_cap?: IntNullableFilter<"bbq_recipe"> | number | null
    pairs_with?: StringNullableFilter<"bbq_recipe"> | string | null
    reserved_for?: IntNullableFilter<"bbq_recipe"> | number | null
    sort_order?: IntFilter<"bbq_recipe"> | number
    bbq_claim?: Bbq_claimListRelationFilter
    bbq_guest?: XOR<Bbq_guestNullableScalarRelationFilter, bbq_guestWhereInput> | null
  }

  export type bbq_recipeOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    blurb?: SortOrderInput | SortOrder
    host_note?: SortOrderInput | SortOrder
    category?: SortOrder
    effort?: SortOrder
    source?: SortOrder
    recipe_url?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    claim_cap?: SortOrderInput | SortOrder
    pairs_with?: SortOrderInput | SortOrder
    reserved_for?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    bbq_claim?: bbq_claimOrderByRelationAggregateInput
    bbq_guest?: bbq_guestOrderByWithRelationInput
    _relevance?: bbq_recipeOrderByRelevanceInput
  }

  export type bbq_recipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: bbq_recipeWhereInput | bbq_recipeWhereInput[]
    OR?: bbq_recipeWhereInput[]
    NOT?: bbq_recipeWhereInput | bbq_recipeWhereInput[]
    title?: StringFilter<"bbq_recipe"> | string
    blurb?: StringNullableFilter<"bbq_recipe"> | string | null
    host_note?: StringNullableFilter<"bbq_recipe"> | string | null
    category?: Enumbbq_recipe_categoryFilter<"bbq_recipe"> | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFilter<"bbq_recipe"> | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFilter<"bbq_recipe"> | $Enums.bbq_recipe_source
    recipe_url?: StringNullableFilter<"bbq_recipe"> | string | null
    body?: StringNullableFilter<"bbq_recipe"> | string | null
    claim_cap?: IntNullableFilter<"bbq_recipe"> | number | null
    pairs_with?: StringNullableFilter<"bbq_recipe"> | string | null
    reserved_for?: IntNullableFilter<"bbq_recipe"> | number | null
    sort_order?: IntFilter<"bbq_recipe"> | number
    bbq_claim?: Bbq_claimListRelationFilter
    bbq_guest?: XOR<Bbq_guestNullableScalarRelationFilter, bbq_guestWhereInput> | null
  }, "id" | "slug">

  export type bbq_recipeOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    blurb?: SortOrderInput | SortOrder
    host_note?: SortOrderInput | SortOrder
    category?: SortOrder
    effort?: SortOrder
    source?: SortOrder
    recipe_url?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    claim_cap?: SortOrderInput | SortOrder
    pairs_with?: SortOrderInput | SortOrder
    reserved_for?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    _count?: bbq_recipeCountOrderByAggregateInput
    _avg?: bbq_recipeAvgOrderByAggregateInput
    _max?: bbq_recipeMaxOrderByAggregateInput
    _min?: bbq_recipeMinOrderByAggregateInput
    _sum?: bbq_recipeSumOrderByAggregateInput
  }

  export type bbq_recipeScalarWhereWithAggregatesInput = {
    AND?: bbq_recipeScalarWhereWithAggregatesInput | bbq_recipeScalarWhereWithAggregatesInput[]
    OR?: bbq_recipeScalarWhereWithAggregatesInput[]
    NOT?: bbq_recipeScalarWhereWithAggregatesInput | bbq_recipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bbq_recipe"> | number
    slug?: StringWithAggregatesFilter<"bbq_recipe"> | string
    title?: StringWithAggregatesFilter<"bbq_recipe"> | string
    blurb?: StringNullableWithAggregatesFilter<"bbq_recipe"> | string | null
    host_note?: StringNullableWithAggregatesFilter<"bbq_recipe"> | string | null
    category?: Enumbbq_recipe_categoryWithAggregatesFilter<"bbq_recipe"> | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortWithAggregatesFilter<"bbq_recipe"> | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceWithAggregatesFilter<"bbq_recipe"> | $Enums.bbq_recipe_source
    recipe_url?: StringNullableWithAggregatesFilter<"bbq_recipe"> | string | null
    body?: StringNullableWithAggregatesFilter<"bbq_recipe"> | string | null
    claim_cap?: IntNullableWithAggregatesFilter<"bbq_recipe"> | number | null
    pairs_with?: StringNullableWithAggregatesFilter<"bbq_recipe"> | string | null
    reserved_for?: IntNullableWithAggregatesFilter<"bbq_recipe"> | number | null
    sort_order?: IntWithAggregatesFilter<"bbq_recipe"> | number
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

  export type bbq_claimCreateInput = {
    created_at?: Date | string
    bbq_guest: bbq_guestCreateNestedOneWithoutBbq_claimInput
    bbq_recipe: bbq_recipeCreateNestedOneWithoutBbq_claimInput
  }

  export type bbq_claimUncheckedCreateInput = {
    id?: number
    recipe_id: number
    guest_id: number
    created_at?: Date | string
  }

  export type bbq_claimUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_guest?: bbq_guestUpdateOneRequiredWithoutBbq_claimNestedInput
    bbq_recipe?: bbq_recipeUpdateOneRequiredWithoutBbq_claimNestedInput
  }

  export type bbq_claimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    guest_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_claimCreateManyInput = {
    id?: number
    recipe_id: number
    guest_id: number
    created_at?: Date | string
  }

  export type bbq_claimUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_claimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    guest_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_guestCreateInput = {
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_claim?: bbq_claimCreateNestedManyWithoutBbq_guestInput
    bbq_recipe?: bbq_recipeCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_claim?: bbq_claimUncheckedCreateNestedManyWithoutBbq_guestInput
    bbq_recipe?: bbq_recipeUncheckedCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_claim?: bbq_claimUpdateManyWithoutBbq_guestNestedInput
    bbq_recipe?: bbq_recipeUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_guestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_claim?: bbq_claimUncheckedUpdateManyWithoutBbq_guestNestedInput
    bbq_recipe?: bbq_recipeUncheckedUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_guestCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
  }

  export type bbq_guestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_guestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_recipeCreateInput = {
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    sort_order?: number
    bbq_claim?: bbq_claimCreateNestedManyWithoutBbq_recipeInput
    bbq_guest?: bbq_guestCreateNestedOneWithoutBbq_recipeInput
  }

  export type bbq_recipeUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    reserved_for?: number | null
    sort_order?: number
    bbq_claim?: bbq_claimUncheckedCreateNestedManyWithoutBbq_recipeInput
  }

  export type bbq_recipeUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    bbq_claim?: bbq_claimUpdateManyWithoutBbq_recipeNestedInput
    bbq_guest?: bbq_guestUpdateOneWithoutBbq_recipeNestedInput
  }

  export type bbq_recipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    reserved_for?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: IntFieldUpdateOperationsInput | number
    bbq_claim?: bbq_claimUncheckedUpdateManyWithoutBbq_recipeNestedInput
  }

  export type bbq_recipeCreateManyInput = {
    id?: number
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    reserved_for?: number | null
    sort_order?: number
  }

  export type bbq_recipeUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type bbq_recipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    reserved_for?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: IntFieldUpdateOperationsInput | number
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

  export type Bbq_guestScalarRelationFilter = {
    is?: bbq_guestWhereInput
    isNot?: bbq_guestWhereInput
  }

  export type Bbq_recipeScalarRelationFilter = {
    is?: bbq_recipeWhereInput
    isNot?: bbq_recipeWhereInput
  }

  export type bbq_claimRecipe_idGuest_idCompoundUniqueInput = {
    recipe_id: number
    guest_id: number
  }

  export type bbq_claimCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_claimAvgOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
  }

  export type bbq_claimMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_claimMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_claimSumOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    guest_id?: SortOrder
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

  export type Bbq_claimListRelationFilter = {
    every?: bbq_claimWhereInput
    some?: bbq_claimWhereInput
    none?: bbq_claimWhereInput
  }

  export type Bbq_recipeListRelationFilter = {
    every?: bbq_recipeWhereInput
    some?: bbq_recipeWhereInput
    none?: bbq_recipeWhereInput
  }

  export type bbq_claimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bbq_recipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bbq_guestOrderByRelevanceInput = {
    fields: bbq_guestOrderByRelevanceFieldEnum | bbq_guestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bbq_guestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_guestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bbq_guestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_guestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type bbq_guestSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Enumbbq_recipe_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_category | Enumbbq_recipe_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_category[]
    notIn?: $Enums.bbq_recipe_category[]
    not?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel> | $Enums.bbq_recipe_category
  }

  export type Enumbbq_recipe_effortFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_effort | Enumbbq_recipe_effortFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_effort[]
    notIn?: $Enums.bbq_recipe_effort[]
    not?: NestedEnumbbq_recipe_effortFilter<$PrismaModel> | $Enums.bbq_recipe_effort
  }

  export type Enumbbq_recipe_sourceFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_source | Enumbbq_recipe_sourceFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_source[]
    notIn?: $Enums.bbq_recipe_source[]
    not?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel> | $Enums.bbq_recipe_source
  }

  export type Bbq_guestNullableScalarRelationFilter = {
    is?: bbq_guestWhereInput | null
    isNot?: bbq_guestWhereInput | null
  }

  export type bbq_recipeOrderByRelevanceInput = {
    fields: bbq_recipeOrderByRelevanceFieldEnum | bbq_recipeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bbq_recipeCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    blurb?: SortOrder
    host_note?: SortOrder
    category?: SortOrder
    effort?: SortOrder
    source?: SortOrder
    recipe_url?: SortOrder
    body?: SortOrder
    claim_cap?: SortOrder
    pairs_with?: SortOrder
    reserved_for?: SortOrder
    sort_order?: SortOrder
  }

  export type bbq_recipeAvgOrderByAggregateInput = {
    id?: SortOrder
    claim_cap?: SortOrder
    reserved_for?: SortOrder
    sort_order?: SortOrder
  }

  export type bbq_recipeMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    blurb?: SortOrder
    host_note?: SortOrder
    category?: SortOrder
    effort?: SortOrder
    source?: SortOrder
    recipe_url?: SortOrder
    body?: SortOrder
    claim_cap?: SortOrder
    pairs_with?: SortOrder
    reserved_for?: SortOrder
    sort_order?: SortOrder
  }

  export type bbq_recipeMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    blurb?: SortOrder
    host_note?: SortOrder
    category?: SortOrder
    effort?: SortOrder
    source?: SortOrder
    recipe_url?: SortOrder
    body?: SortOrder
    claim_cap?: SortOrder
    pairs_with?: SortOrder
    reserved_for?: SortOrder
    sort_order?: SortOrder
  }

  export type bbq_recipeSumOrderByAggregateInput = {
    id?: SortOrder
    claim_cap?: SortOrder
    reserved_for?: SortOrder
    sort_order?: SortOrder
  }

  export type Enumbbq_recipe_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_category | Enumbbq_recipe_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_category[]
    notIn?: $Enums.bbq_recipe_category[]
    not?: NestedEnumbbq_recipe_categoryWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel>
  }

  export type Enumbbq_recipe_effortWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_effort | Enumbbq_recipe_effortFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_effort[]
    notIn?: $Enums.bbq_recipe_effort[]
    not?: NestedEnumbbq_recipe_effortWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_effort
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_effortFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_effortFilter<$PrismaModel>
  }

  export type Enumbbq_recipe_sourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_source | Enumbbq_recipe_sourceFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_source[]
    notIn?: $Enums.bbq_recipe_source[]
    not?: NestedEnumbbq_recipe_sourceWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_source
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel>
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

  export type bbq_guestCreateNestedOneWithoutBbq_claimInput = {
    create?: XOR<bbq_guestCreateWithoutBbq_claimInput, bbq_guestUncheckedCreateWithoutBbq_claimInput>
    connectOrCreate?: bbq_guestCreateOrConnectWithoutBbq_claimInput
    connect?: bbq_guestWhereUniqueInput
  }

  export type bbq_recipeCreateNestedOneWithoutBbq_claimInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_claimInput, bbq_recipeUncheckedCreateWithoutBbq_claimInput>
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_claimInput
    connect?: bbq_recipeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type bbq_guestUpdateOneRequiredWithoutBbq_claimNestedInput = {
    create?: XOR<bbq_guestCreateWithoutBbq_claimInput, bbq_guestUncheckedCreateWithoutBbq_claimInput>
    connectOrCreate?: bbq_guestCreateOrConnectWithoutBbq_claimInput
    upsert?: bbq_guestUpsertWithoutBbq_claimInput
    connect?: bbq_guestWhereUniqueInput
    update?: XOR<XOR<bbq_guestUpdateToOneWithWhereWithoutBbq_claimInput, bbq_guestUpdateWithoutBbq_claimInput>, bbq_guestUncheckedUpdateWithoutBbq_claimInput>
  }

  export type bbq_recipeUpdateOneRequiredWithoutBbq_claimNestedInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_claimInput, bbq_recipeUncheckedCreateWithoutBbq_claimInput>
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_claimInput
    upsert?: bbq_recipeUpsertWithoutBbq_claimInput
    connect?: bbq_recipeWhereUniqueInput
    update?: XOR<XOR<bbq_recipeUpdateToOneWithWhereWithoutBbq_claimInput, bbq_recipeUpdateWithoutBbq_claimInput>, bbq_recipeUncheckedUpdateWithoutBbq_claimInput>
  }

  export type bbq_claimCreateNestedManyWithoutBbq_guestInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput> | bbq_claimCreateWithoutBbq_guestInput[] | bbq_claimUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_guestInput | bbq_claimCreateOrConnectWithoutBbq_guestInput[]
    createMany?: bbq_claimCreateManyBbq_guestInputEnvelope
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
  }

  export type bbq_recipeCreateNestedManyWithoutBbq_guestInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput> | bbq_recipeCreateWithoutBbq_guestInput[] | bbq_recipeUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_guestInput | bbq_recipeCreateOrConnectWithoutBbq_guestInput[]
    createMany?: bbq_recipeCreateManyBbq_guestInputEnvelope
    connect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
  }

  export type bbq_claimUncheckedCreateNestedManyWithoutBbq_guestInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput> | bbq_claimCreateWithoutBbq_guestInput[] | bbq_claimUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_guestInput | bbq_claimCreateOrConnectWithoutBbq_guestInput[]
    createMany?: bbq_claimCreateManyBbq_guestInputEnvelope
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
  }

  export type bbq_recipeUncheckedCreateNestedManyWithoutBbq_guestInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput> | bbq_recipeCreateWithoutBbq_guestInput[] | bbq_recipeUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_guestInput | bbq_recipeCreateOrConnectWithoutBbq_guestInput[]
    createMany?: bbq_recipeCreateManyBbq_guestInputEnvelope
    connect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type bbq_claimUpdateManyWithoutBbq_guestNestedInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput> | bbq_claimCreateWithoutBbq_guestInput[] | bbq_claimUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_guestInput | bbq_claimCreateOrConnectWithoutBbq_guestInput[]
    upsert?: bbq_claimUpsertWithWhereUniqueWithoutBbq_guestInput | bbq_claimUpsertWithWhereUniqueWithoutBbq_guestInput[]
    createMany?: bbq_claimCreateManyBbq_guestInputEnvelope
    set?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    disconnect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    delete?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    update?: bbq_claimUpdateWithWhereUniqueWithoutBbq_guestInput | bbq_claimUpdateWithWhereUniqueWithoutBbq_guestInput[]
    updateMany?: bbq_claimUpdateManyWithWhereWithoutBbq_guestInput | bbq_claimUpdateManyWithWhereWithoutBbq_guestInput[]
    deleteMany?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
  }

  export type bbq_recipeUpdateManyWithoutBbq_guestNestedInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput> | bbq_recipeCreateWithoutBbq_guestInput[] | bbq_recipeUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_guestInput | bbq_recipeCreateOrConnectWithoutBbq_guestInput[]
    upsert?: bbq_recipeUpsertWithWhereUniqueWithoutBbq_guestInput | bbq_recipeUpsertWithWhereUniqueWithoutBbq_guestInput[]
    createMany?: bbq_recipeCreateManyBbq_guestInputEnvelope
    set?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    disconnect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    delete?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    connect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    update?: bbq_recipeUpdateWithWhereUniqueWithoutBbq_guestInput | bbq_recipeUpdateWithWhereUniqueWithoutBbq_guestInput[]
    updateMany?: bbq_recipeUpdateManyWithWhereWithoutBbq_guestInput | bbq_recipeUpdateManyWithWhereWithoutBbq_guestInput[]
    deleteMany?: bbq_recipeScalarWhereInput | bbq_recipeScalarWhereInput[]
  }

  export type bbq_claimUncheckedUpdateManyWithoutBbq_guestNestedInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput> | bbq_claimCreateWithoutBbq_guestInput[] | bbq_claimUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_guestInput | bbq_claimCreateOrConnectWithoutBbq_guestInput[]
    upsert?: bbq_claimUpsertWithWhereUniqueWithoutBbq_guestInput | bbq_claimUpsertWithWhereUniqueWithoutBbq_guestInput[]
    createMany?: bbq_claimCreateManyBbq_guestInputEnvelope
    set?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    disconnect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    delete?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    update?: bbq_claimUpdateWithWhereUniqueWithoutBbq_guestInput | bbq_claimUpdateWithWhereUniqueWithoutBbq_guestInput[]
    updateMany?: bbq_claimUpdateManyWithWhereWithoutBbq_guestInput | bbq_claimUpdateManyWithWhereWithoutBbq_guestInput[]
    deleteMany?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
  }

  export type bbq_recipeUncheckedUpdateManyWithoutBbq_guestNestedInput = {
    create?: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput> | bbq_recipeCreateWithoutBbq_guestInput[] | bbq_recipeUncheckedCreateWithoutBbq_guestInput[]
    connectOrCreate?: bbq_recipeCreateOrConnectWithoutBbq_guestInput | bbq_recipeCreateOrConnectWithoutBbq_guestInput[]
    upsert?: bbq_recipeUpsertWithWhereUniqueWithoutBbq_guestInput | bbq_recipeUpsertWithWhereUniqueWithoutBbq_guestInput[]
    createMany?: bbq_recipeCreateManyBbq_guestInputEnvelope
    set?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    disconnect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    delete?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    connect?: bbq_recipeWhereUniqueInput | bbq_recipeWhereUniqueInput[]
    update?: bbq_recipeUpdateWithWhereUniqueWithoutBbq_guestInput | bbq_recipeUpdateWithWhereUniqueWithoutBbq_guestInput[]
    updateMany?: bbq_recipeUpdateManyWithWhereWithoutBbq_guestInput | bbq_recipeUpdateManyWithWhereWithoutBbq_guestInput[]
    deleteMany?: bbq_recipeScalarWhereInput | bbq_recipeScalarWhereInput[]
  }

  export type bbq_claimCreateNestedManyWithoutBbq_recipeInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput> | bbq_claimCreateWithoutBbq_recipeInput[] | bbq_claimUncheckedCreateWithoutBbq_recipeInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_recipeInput | bbq_claimCreateOrConnectWithoutBbq_recipeInput[]
    createMany?: bbq_claimCreateManyBbq_recipeInputEnvelope
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
  }

  export type bbq_guestCreateNestedOneWithoutBbq_recipeInput = {
    create?: XOR<bbq_guestCreateWithoutBbq_recipeInput, bbq_guestUncheckedCreateWithoutBbq_recipeInput>
    connectOrCreate?: bbq_guestCreateOrConnectWithoutBbq_recipeInput
    connect?: bbq_guestWhereUniqueInput
  }

  export type bbq_claimUncheckedCreateNestedManyWithoutBbq_recipeInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput> | bbq_claimCreateWithoutBbq_recipeInput[] | bbq_claimUncheckedCreateWithoutBbq_recipeInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_recipeInput | bbq_claimCreateOrConnectWithoutBbq_recipeInput[]
    createMany?: bbq_claimCreateManyBbq_recipeInputEnvelope
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
  }

  export type Enumbbq_recipe_categoryFieldUpdateOperationsInput = {
    set?: $Enums.bbq_recipe_category
  }

  export type Enumbbq_recipe_effortFieldUpdateOperationsInput = {
    set?: $Enums.bbq_recipe_effort
  }

  export type Enumbbq_recipe_sourceFieldUpdateOperationsInput = {
    set?: $Enums.bbq_recipe_source
  }

  export type bbq_claimUpdateManyWithoutBbq_recipeNestedInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput> | bbq_claimCreateWithoutBbq_recipeInput[] | bbq_claimUncheckedCreateWithoutBbq_recipeInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_recipeInput | bbq_claimCreateOrConnectWithoutBbq_recipeInput[]
    upsert?: bbq_claimUpsertWithWhereUniqueWithoutBbq_recipeInput | bbq_claimUpsertWithWhereUniqueWithoutBbq_recipeInput[]
    createMany?: bbq_claimCreateManyBbq_recipeInputEnvelope
    set?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    disconnect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    delete?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    update?: bbq_claimUpdateWithWhereUniqueWithoutBbq_recipeInput | bbq_claimUpdateWithWhereUniqueWithoutBbq_recipeInput[]
    updateMany?: bbq_claimUpdateManyWithWhereWithoutBbq_recipeInput | bbq_claimUpdateManyWithWhereWithoutBbq_recipeInput[]
    deleteMany?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
  }

  export type bbq_guestUpdateOneWithoutBbq_recipeNestedInput = {
    create?: XOR<bbq_guestCreateWithoutBbq_recipeInput, bbq_guestUncheckedCreateWithoutBbq_recipeInput>
    connectOrCreate?: bbq_guestCreateOrConnectWithoutBbq_recipeInput
    upsert?: bbq_guestUpsertWithoutBbq_recipeInput
    disconnect?: bbq_guestWhereInput | boolean
    delete?: bbq_guestWhereInput | boolean
    connect?: bbq_guestWhereUniqueInput
    update?: XOR<XOR<bbq_guestUpdateToOneWithWhereWithoutBbq_recipeInput, bbq_guestUpdateWithoutBbq_recipeInput>, bbq_guestUncheckedUpdateWithoutBbq_recipeInput>
  }

  export type bbq_claimUncheckedUpdateManyWithoutBbq_recipeNestedInput = {
    create?: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput> | bbq_claimCreateWithoutBbq_recipeInput[] | bbq_claimUncheckedCreateWithoutBbq_recipeInput[]
    connectOrCreate?: bbq_claimCreateOrConnectWithoutBbq_recipeInput | bbq_claimCreateOrConnectWithoutBbq_recipeInput[]
    upsert?: bbq_claimUpsertWithWhereUniqueWithoutBbq_recipeInput | bbq_claimUpsertWithWhereUniqueWithoutBbq_recipeInput[]
    createMany?: bbq_claimCreateManyBbq_recipeInputEnvelope
    set?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    disconnect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    delete?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    connect?: bbq_claimWhereUniqueInput | bbq_claimWhereUniqueInput[]
    update?: bbq_claimUpdateWithWhereUniqueWithoutBbq_recipeInput | bbq_claimUpdateWithWhereUniqueWithoutBbq_recipeInput[]
    updateMany?: bbq_claimUpdateManyWithWhereWithoutBbq_recipeInput | bbq_claimUpdateManyWithWhereWithoutBbq_recipeInput[]
    deleteMany?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
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

  export type NestedEnumbbq_recipe_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_category | Enumbbq_recipe_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_category[]
    notIn?: $Enums.bbq_recipe_category[]
    not?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel> | $Enums.bbq_recipe_category
  }

  export type NestedEnumbbq_recipe_effortFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_effort | Enumbbq_recipe_effortFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_effort[]
    notIn?: $Enums.bbq_recipe_effort[]
    not?: NestedEnumbbq_recipe_effortFilter<$PrismaModel> | $Enums.bbq_recipe_effort
  }

  export type NestedEnumbbq_recipe_sourceFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_source | Enumbbq_recipe_sourceFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_source[]
    notIn?: $Enums.bbq_recipe_source[]
    not?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel> | $Enums.bbq_recipe_source
  }

  export type NestedEnumbbq_recipe_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_category | Enumbbq_recipe_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_category[]
    notIn?: $Enums.bbq_recipe_category[]
    not?: NestedEnumbbq_recipe_categoryWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_categoryFilter<$PrismaModel>
  }

  export type NestedEnumbbq_recipe_effortWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_effort | Enumbbq_recipe_effortFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_effort[]
    notIn?: $Enums.bbq_recipe_effort[]
    not?: NestedEnumbbq_recipe_effortWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_effort
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_effortFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_effortFilter<$PrismaModel>
  }

  export type NestedEnumbbq_recipe_sourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bbq_recipe_source | Enumbbq_recipe_sourceFieldRefInput<$PrismaModel>
    in?: $Enums.bbq_recipe_source[]
    notIn?: $Enums.bbq_recipe_source[]
    not?: NestedEnumbbq_recipe_sourceWithAggregatesFilter<$PrismaModel> | $Enums.bbq_recipe_source
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel>
    _max?: NestedEnumbbq_recipe_sourceFilter<$PrismaModel>
  }

  export type bbq_guestCreateWithoutBbq_claimInput = {
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_recipe?: bbq_recipeCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestUncheckedCreateWithoutBbq_claimInput = {
    id?: number
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_recipe?: bbq_recipeUncheckedCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestCreateOrConnectWithoutBbq_claimInput = {
    where: bbq_guestWhereUniqueInput
    create: XOR<bbq_guestCreateWithoutBbq_claimInput, bbq_guestUncheckedCreateWithoutBbq_claimInput>
  }

  export type bbq_recipeCreateWithoutBbq_claimInput = {
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    sort_order?: number
    bbq_guest?: bbq_guestCreateNestedOneWithoutBbq_recipeInput
  }

  export type bbq_recipeUncheckedCreateWithoutBbq_claimInput = {
    id?: number
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    reserved_for?: number | null
    sort_order?: number
  }

  export type bbq_recipeCreateOrConnectWithoutBbq_claimInput = {
    where: bbq_recipeWhereUniqueInput
    create: XOR<bbq_recipeCreateWithoutBbq_claimInput, bbq_recipeUncheckedCreateWithoutBbq_claimInput>
  }

  export type bbq_guestUpsertWithoutBbq_claimInput = {
    update: XOR<bbq_guestUpdateWithoutBbq_claimInput, bbq_guestUncheckedUpdateWithoutBbq_claimInput>
    create: XOR<bbq_guestCreateWithoutBbq_claimInput, bbq_guestUncheckedCreateWithoutBbq_claimInput>
    where?: bbq_guestWhereInput
  }

  export type bbq_guestUpdateToOneWithWhereWithoutBbq_claimInput = {
    where?: bbq_guestWhereInput
    data: XOR<bbq_guestUpdateWithoutBbq_claimInput, bbq_guestUncheckedUpdateWithoutBbq_claimInput>
  }

  export type bbq_guestUpdateWithoutBbq_claimInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_recipe?: bbq_recipeUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_guestUncheckedUpdateWithoutBbq_claimInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_recipe?: bbq_recipeUncheckedUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_recipeUpsertWithoutBbq_claimInput = {
    update: XOR<bbq_recipeUpdateWithoutBbq_claimInput, bbq_recipeUncheckedUpdateWithoutBbq_claimInput>
    create: XOR<bbq_recipeCreateWithoutBbq_claimInput, bbq_recipeUncheckedCreateWithoutBbq_claimInput>
    where?: bbq_recipeWhereInput
  }

  export type bbq_recipeUpdateToOneWithWhereWithoutBbq_claimInput = {
    where?: bbq_recipeWhereInput
    data: XOR<bbq_recipeUpdateWithoutBbq_claimInput, bbq_recipeUncheckedUpdateWithoutBbq_claimInput>
  }

  export type bbq_recipeUpdateWithoutBbq_claimInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    bbq_guest?: bbq_guestUpdateOneWithoutBbq_recipeNestedInput
  }

  export type bbq_recipeUncheckedUpdateWithoutBbq_claimInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    reserved_for?: NullableIntFieldUpdateOperationsInput | number | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type bbq_claimCreateWithoutBbq_guestInput = {
    created_at?: Date | string
    bbq_recipe: bbq_recipeCreateNestedOneWithoutBbq_claimInput
  }

  export type bbq_claimUncheckedCreateWithoutBbq_guestInput = {
    id?: number
    recipe_id: number
    created_at?: Date | string
  }

  export type bbq_claimCreateOrConnectWithoutBbq_guestInput = {
    where: bbq_claimWhereUniqueInput
    create: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput>
  }

  export type bbq_claimCreateManyBbq_guestInputEnvelope = {
    data: bbq_claimCreateManyBbq_guestInput | bbq_claimCreateManyBbq_guestInput[]
    skipDuplicates?: boolean
  }

  export type bbq_recipeCreateWithoutBbq_guestInput = {
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    sort_order?: number
    bbq_claim?: bbq_claimCreateNestedManyWithoutBbq_recipeInput
  }

  export type bbq_recipeUncheckedCreateWithoutBbq_guestInput = {
    id?: number
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    sort_order?: number
    bbq_claim?: bbq_claimUncheckedCreateNestedManyWithoutBbq_recipeInput
  }

  export type bbq_recipeCreateOrConnectWithoutBbq_guestInput = {
    where: bbq_recipeWhereUniqueInput
    create: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput>
  }

  export type bbq_recipeCreateManyBbq_guestInputEnvelope = {
    data: bbq_recipeCreateManyBbq_guestInput | bbq_recipeCreateManyBbq_guestInput[]
    skipDuplicates?: boolean
  }

  export type bbq_claimUpsertWithWhereUniqueWithoutBbq_guestInput = {
    where: bbq_claimWhereUniqueInput
    update: XOR<bbq_claimUpdateWithoutBbq_guestInput, bbq_claimUncheckedUpdateWithoutBbq_guestInput>
    create: XOR<bbq_claimCreateWithoutBbq_guestInput, bbq_claimUncheckedCreateWithoutBbq_guestInput>
  }

  export type bbq_claimUpdateWithWhereUniqueWithoutBbq_guestInput = {
    where: bbq_claimWhereUniqueInput
    data: XOR<bbq_claimUpdateWithoutBbq_guestInput, bbq_claimUncheckedUpdateWithoutBbq_guestInput>
  }

  export type bbq_claimUpdateManyWithWhereWithoutBbq_guestInput = {
    where: bbq_claimScalarWhereInput
    data: XOR<bbq_claimUpdateManyMutationInput, bbq_claimUncheckedUpdateManyWithoutBbq_guestInput>
  }

  export type bbq_claimScalarWhereInput = {
    AND?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
    OR?: bbq_claimScalarWhereInput[]
    NOT?: bbq_claimScalarWhereInput | bbq_claimScalarWhereInput[]
    id?: IntFilter<"bbq_claim"> | number
    recipe_id?: IntFilter<"bbq_claim"> | number
    guest_id?: IntFilter<"bbq_claim"> | number
    created_at?: DateTimeFilter<"bbq_claim"> | Date | string
  }

  export type bbq_recipeUpsertWithWhereUniqueWithoutBbq_guestInput = {
    where: bbq_recipeWhereUniqueInput
    update: XOR<bbq_recipeUpdateWithoutBbq_guestInput, bbq_recipeUncheckedUpdateWithoutBbq_guestInput>
    create: XOR<bbq_recipeCreateWithoutBbq_guestInput, bbq_recipeUncheckedCreateWithoutBbq_guestInput>
  }

  export type bbq_recipeUpdateWithWhereUniqueWithoutBbq_guestInput = {
    where: bbq_recipeWhereUniqueInput
    data: XOR<bbq_recipeUpdateWithoutBbq_guestInput, bbq_recipeUncheckedUpdateWithoutBbq_guestInput>
  }

  export type bbq_recipeUpdateManyWithWhereWithoutBbq_guestInput = {
    where: bbq_recipeScalarWhereInput
    data: XOR<bbq_recipeUpdateManyMutationInput, bbq_recipeUncheckedUpdateManyWithoutBbq_guestInput>
  }

  export type bbq_recipeScalarWhereInput = {
    AND?: bbq_recipeScalarWhereInput | bbq_recipeScalarWhereInput[]
    OR?: bbq_recipeScalarWhereInput[]
    NOT?: bbq_recipeScalarWhereInput | bbq_recipeScalarWhereInput[]
    id?: IntFilter<"bbq_recipe"> | number
    slug?: StringFilter<"bbq_recipe"> | string
    title?: StringFilter<"bbq_recipe"> | string
    blurb?: StringNullableFilter<"bbq_recipe"> | string | null
    host_note?: StringNullableFilter<"bbq_recipe"> | string | null
    category?: Enumbbq_recipe_categoryFilter<"bbq_recipe"> | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFilter<"bbq_recipe"> | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFilter<"bbq_recipe"> | $Enums.bbq_recipe_source
    recipe_url?: StringNullableFilter<"bbq_recipe"> | string | null
    body?: StringNullableFilter<"bbq_recipe"> | string | null
    claim_cap?: IntNullableFilter<"bbq_recipe"> | number | null
    pairs_with?: StringNullableFilter<"bbq_recipe"> | string | null
    reserved_for?: IntNullableFilter<"bbq_recipe"> | number | null
    sort_order?: IntFilter<"bbq_recipe"> | number
  }

  export type bbq_claimCreateWithoutBbq_recipeInput = {
    created_at?: Date | string
    bbq_guest: bbq_guestCreateNestedOneWithoutBbq_claimInput
  }

  export type bbq_claimUncheckedCreateWithoutBbq_recipeInput = {
    id?: number
    guest_id: number
    created_at?: Date | string
  }

  export type bbq_claimCreateOrConnectWithoutBbq_recipeInput = {
    where: bbq_claimWhereUniqueInput
    create: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput>
  }

  export type bbq_claimCreateManyBbq_recipeInputEnvelope = {
    data: bbq_claimCreateManyBbq_recipeInput | bbq_claimCreateManyBbq_recipeInput[]
    skipDuplicates?: boolean
  }

  export type bbq_guestCreateWithoutBbq_recipeInput = {
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_claim?: bbq_claimCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestUncheckedCreateWithoutBbq_recipeInput = {
    id?: number
    name: string
    phone?: string | null
    token: string
    created_at?: Date | string
    bbq_claim?: bbq_claimUncheckedCreateNestedManyWithoutBbq_guestInput
  }

  export type bbq_guestCreateOrConnectWithoutBbq_recipeInput = {
    where: bbq_guestWhereUniqueInput
    create: XOR<bbq_guestCreateWithoutBbq_recipeInput, bbq_guestUncheckedCreateWithoutBbq_recipeInput>
  }

  export type bbq_claimUpsertWithWhereUniqueWithoutBbq_recipeInput = {
    where: bbq_claimWhereUniqueInput
    update: XOR<bbq_claimUpdateWithoutBbq_recipeInput, bbq_claimUncheckedUpdateWithoutBbq_recipeInput>
    create: XOR<bbq_claimCreateWithoutBbq_recipeInput, bbq_claimUncheckedCreateWithoutBbq_recipeInput>
  }

  export type bbq_claimUpdateWithWhereUniqueWithoutBbq_recipeInput = {
    where: bbq_claimWhereUniqueInput
    data: XOR<bbq_claimUpdateWithoutBbq_recipeInput, bbq_claimUncheckedUpdateWithoutBbq_recipeInput>
  }

  export type bbq_claimUpdateManyWithWhereWithoutBbq_recipeInput = {
    where: bbq_claimScalarWhereInput
    data: XOR<bbq_claimUpdateManyMutationInput, bbq_claimUncheckedUpdateManyWithoutBbq_recipeInput>
  }

  export type bbq_guestUpsertWithoutBbq_recipeInput = {
    update: XOR<bbq_guestUpdateWithoutBbq_recipeInput, bbq_guestUncheckedUpdateWithoutBbq_recipeInput>
    create: XOR<bbq_guestCreateWithoutBbq_recipeInput, bbq_guestUncheckedCreateWithoutBbq_recipeInput>
    where?: bbq_guestWhereInput
  }

  export type bbq_guestUpdateToOneWithWhereWithoutBbq_recipeInput = {
    where?: bbq_guestWhereInput
    data: XOR<bbq_guestUpdateWithoutBbq_recipeInput, bbq_guestUncheckedUpdateWithoutBbq_recipeInput>
  }

  export type bbq_guestUpdateWithoutBbq_recipeInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_claim?: bbq_claimUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_guestUncheckedUpdateWithoutBbq_recipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_claim?: bbq_claimUncheckedUpdateManyWithoutBbq_guestNestedInput
  }

  export type bbq_claimCreateManyBbq_guestInput = {
    id?: number
    recipe_id: number
    created_at?: Date | string
  }

  export type bbq_recipeCreateManyBbq_guestInput = {
    id?: number
    slug: string
    title: string
    blurb?: string | null
    host_note?: string | null
    category: $Enums.bbq_recipe_category
    effort?: $Enums.bbq_recipe_effort
    source?: $Enums.bbq_recipe_source
    recipe_url?: string | null
    body?: string | null
    claim_cap?: number | null
    pairs_with?: string | null
    sort_order?: number
  }

  export type bbq_claimUpdateWithoutBbq_guestInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_recipe?: bbq_recipeUpdateOneRequiredWithoutBbq_claimNestedInput
  }

  export type bbq_claimUncheckedUpdateWithoutBbq_guestInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_claimUncheckedUpdateManyWithoutBbq_guestInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_recipeUpdateWithoutBbq_guestInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    bbq_claim?: bbq_claimUpdateManyWithoutBbq_recipeNestedInput
  }

  export type bbq_recipeUncheckedUpdateWithoutBbq_guestInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    bbq_claim?: bbq_claimUncheckedUpdateManyWithoutBbq_recipeNestedInput
  }

  export type bbq_recipeUncheckedUpdateManyWithoutBbq_guestInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    blurb?: NullableStringFieldUpdateOperationsInput | string | null
    host_note?: NullableStringFieldUpdateOperationsInput | string | null
    category?: Enumbbq_recipe_categoryFieldUpdateOperationsInput | $Enums.bbq_recipe_category
    effort?: Enumbbq_recipe_effortFieldUpdateOperationsInput | $Enums.bbq_recipe_effort
    source?: Enumbbq_recipe_sourceFieldUpdateOperationsInput | $Enums.bbq_recipe_source
    recipe_url?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    claim_cap?: NullableIntFieldUpdateOperationsInput | number | null
    pairs_with?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type bbq_claimCreateManyBbq_recipeInput = {
    id?: number
    guest_id: number
    created_at?: Date | string
  }

  export type bbq_claimUpdateWithoutBbq_recipeInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bbq_guest?: bbq_guestUpdateOneRequiredWithoutBbq_claimNestedInput
  }

  export type bbq_claimUncheckedUpdateWithoutBbq_recipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    guest_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bbq_claimUncheckedUpdateManyWithoutBbq_recipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    guest_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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