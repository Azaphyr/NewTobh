
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
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventTranslation
 * 
 */
export type EventTranslation = $Result.DefaultSelection<Prisma.$EventTranslationPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogPostTranslation
 * 
 */
export type BlogPostTranslation = $Result.DefaultSelection<Prisma.$BlogPostTranslationPayload>
/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model MembershipApplication
 * 
 */
export type MembershipApplication = $Result.DefaultSelection<Prisma.$MembershipApplicationPayload>
/**
 * Model EventRegistration
 * 
 */
export type EventRegistration = $Result.DefaultSelection<Prisma.$EventRegistrationPayload>
/**
 * Model WebsiteSetting
 * 
 */
export type WebsiteSetting = $Result.DefaultSelection<Prisma.$WebsiteSettingPayload>
/**
 * Model BlogStats
 * 
 */
export type BlogStats = $Result.DefaultSelection<Prisma.$BlogStatsPayload>
/**
 * Model EventStats
 * 
 */
export type EventStats = $Result.DefaultSelection<Prisma.$EventStatsPayload>
/**
 * Model MemberStats
 * 
 */
export type MemberStats = $Result.DefaultSelection<Prisma.$MemberStatsPayload>
/**
 * Model MessageStats
 * 
 */
export type MessageStats = $Result.DefaultSelection<Prisma.$MessageStatsPayload>
/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTranslation`: Exposes CRUD operations for the **EventTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTranslations
    * const eventTranslations = await prisma.eventTranslation.findMany()
    * ```
    */
  get eventTranslation(): Prisma.EventTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostTranslation`: Exposes CRUD operations for the **BlogPostTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostTranslations
    * const blogPostTranslations = await prisma.blogPostTranslation.findMany()
    * ```
    */
  get blogPostTranslation(): Prisma.BlogPostTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipApplication`: Exposes CRUD operations for the **MembershipApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipApplications
    * const membershipApplications = await prisma.membershipApplication.findMany()
    * ```
    */
  get membershipApplication(): Prisma.MembershipApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRegistration`: Exposes CRUD operations for the **EventRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRegistrations
    * const eventRegistrations = await prisma.eventRegistration.findMany()
    * ```
    */
  get eventRegistration(): Prisma.EventRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteSetting`: Exposes CRUD operations for the **WebsiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteSettings
    * const websiteSettings = await prisma.websiteSetting.findMany()
    * ```
    */
  get websiteSetting(): Prisma.WebsiteSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogStats`: Exposes CRUD operations for the **BlogStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogStats
    * const blogStats = await prisma.blogStats.findMany()
    * ```
    */
  get blogStats(): Prisma.BlogStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventStats`: Exposes CRUD operations for the **EventStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventStats
    * const eventStats = await prisma.eventStats.findMany()
    * ```
    */
  get eventStats(): Prisma.EventStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberStats`: Exposes CRUD operations for the **MemberStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberStats
    * const memberStats = await prisma.memberStats.findMany()
    * ```
    */
  get memberStats(): Prisma.MemberStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageStats`: Exposes CRUD operations for the **MessageStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageStats
    * const messageStats = await prisma.messageStats.findMany()
    * ```
    */
  get messageStats(): Prisma.MessageStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    AdminUser: 'AdminUser',
    Language: 'Language',
    Event: 'Event',
    EventTranslation: 'EventTranslation',
    BlogPost: 'BlogPost',
    BlogPostTranslation: 'BlogPostTranslation',
    ContactSubmission: 'ContactSubmission',
    MembershipApplication: 'MembershipApplication',
    EventRegistration: 'EventRegistration',
    WebsiteSetting: 'WebsiteSetting',
    BlogStats: 'BlogStats',
    EventStats: 'EventStats',
    MemberStats: 'MemberStats',
    MessageStats: 'MessageStats',
    UserStats: 'UserStats'
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
      modelProps: "adminUser" | "language" | "event" | "eventTranslation" | "blogPost" | "blogPostTranslation" | "contactSubmission" | "membershipApplication" | "eventRegistration" | "websiteSetting" | "blogStats" | "eventStats" | "memberStats" | "messageStats" | "userStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventTranslation: {
        payload: Prisma.$EventTranslationPayload<ExtArgs>
        fields: Prisma.EventTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          findFirst: {
            args: Prisma.EventTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          findMany: {
            args: Prisma.EventTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>[]
          }
          create: {
            args: Prisma.EventTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          createMany: {
            args: Prisma.EventTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>[]
          }
          delete: {
            args: Prisma.EventTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          update: {
            args: Prisma.EventTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          deleteMany: {
            args: Prisma.EventTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>[]
          }
          upsert: {
            args: Prisma.EventTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTranslationPayload>
          }
          aggregate: {
            args: Prisma.EventTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTranslation>
          }
          groupBy: {
            args: Prisma.EventTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<EventTranslationCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogPostTranslation: {
        payload: Prisma.$BlogPostTranslationPayload<ExtArgs>
        fields: Prisma.BlogPostTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          findFirst: {
            args: Prisma.BlogPostTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          findMany: {
            args: Prisma.BlogPostTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          create: {
            args: Prisma.BlogPostTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          createMany: {
            args: Prisma.BlogPostTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          delete: {
            args: Prisma.BlogPostTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          update: {
            args: Prisma.BlogPostTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTranslationPayload>
          }
          aggregate: {
            args: Prisma.BlogPostTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostTranslation>
          }
          groupBy: {
            args: Prisma.BlogPostTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTranslationCountAggregateOutputType> | number
          }
        }
      }
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      MembershipApplication: {
        payload: Prisma.$MembershipApplicationPayload<ExtArgs>
        fields: Prisma.MembershipApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          findFirst: {
            args: Prisma.MembershipApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          findMany: {
            args: Prisma.MembershipApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>[]
          }
          create: {
            args: Prisma.MembershipApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          createMany: {
            args: Prisma.MembershipApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>[]
          }
          delete: {
            args: Prisma.MembershipApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          update: {
            args: Prisma.MembershipApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          deleteMany: {
            args: Prisma.MembershipApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>[]
          }
          upsert: {
            args: Prisma.MembershipApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipApplicationPayload>
          }
          aggregate: {
            args: Prisma.MembershipApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipApplication>
          }
          groupBy: {
            args: Prisma.MembershipApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipApplicationCountAggregateOutputType> | number
          }
        }
      }
      EventRegistration: {
        payload: Prisma.$EventRegistrationPayload<ExtArgs>
        fields: Prisma.EventRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findFirst: {
            args: Prisma.EventRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findMany: {
            args: Prisma.EventRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          create: {
            args: Prisma.EventRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          createMany: {
            args: Prisma.EventRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          delete: {
            args: Prisma.EventRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          update: {
            args: Prisma.EventRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.EventRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.EventRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          aggregate: {
            args: Prisma.EventRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRegistration>
          }
          groupBy: {
            args: Prisma.EventRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationCountAggregateOutputType> | number
          }
        }
      }
      WebsiteSetting: {
        payload: Prisma.$WebsiteSettingPayload<ExtArgs>
        fields: Prisma.WebsiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          findFirst: {
            args: Prisma.WebsiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          findMany: {
            args: Prisma.WebsiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>[]
          }
          create: {
            args: Prisma.WebsiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          createMany: {
            args: Prisma.WebsiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>[]
          }
          delete: {
            args: Prisma.WebsiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          update: {
            args: Prisma.WebsiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.WebsiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>[]
          }
          upsert: {
            args: Prisma.WebsiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteSettingPayload>
          }
          aggregate: {
            args: Prisma.WebsiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteSetting>
          }
          groupBy: {
            args: Prisma.WebsiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteSettingCountAggregateOutputType> | number
          }
        }
      }
      BlogStats: {
        payload: Prisma.$BlogStatsPayload<ExtArgs>
        fields: Prisma.BlogStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          findFirst: {
            args: Prisma.BlogStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          findMany: {
            args: Prisma.BlogStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>[]
          }
          create: {
            args: Prisma.BlogStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          createMany: {
            args: Prisma.BlogStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>[]
          }
          delete: {
            args: Prisma.BlogStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          update: {
            args: Prisma.BlogStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          deleteMany: {
            args: Prisma.BlogStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>[]
          }
          upsert: {
            args: Prisma.BlogStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogStatsPayload>
          }
          aggregate: {
            args: Prisma.BlogStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogStats>
          }
          groupBy: {
            args: Prisma.BlogStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogStatsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogStatsCountAggregateOutputType> | number
          }
        }
      }
      EventStats: {
        payload: Prisma.$EventStatsPayload<ExtArgs>
        fields: Prisma.EventStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          findFirst: {
            args: Prisma.EventStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          findMany: {
            args: Prisma.EventStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>[]
          }
          create: {
            args: Prisma.EventStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          createMany: {
            args: Prisma.EventStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>[]
          }
          delete: {
            args: Prisma.EventStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          update: {
            args: Prisma.EventStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          deleteMany: {
            args: Prisma.EventStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>[]
          }
          upsert: {
            args: Prisma.EventStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatsPayload>
          }
          aggregate: {
            args: Prisma.EventStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventStats>
          }
          groupBy: {
            args: Prisma.EventStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventStatsCountArgs<ExtArgs>
            result: $Utils.Optional<EventStatsCountAggregateOutputType> | number
          }
        }
      }
      MemberStats: {
        payload: Prisma.$MemberStatsPayload<ExtArgs>
        fields: Prisma.MemberStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          findFirst: {
            args: Prisma.MemberStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          findMany: {
            args: Prisma.MemberStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>[]
          }
          create: {
            args: Prisma.MemberStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          createMany: {
            args: Prisma.MemberStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>[]
          }
          delete: {
            args: Prisma.MemberStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          update: {
            args: Prisma.MemberStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          deleteMany: {
            args: Prisma.MemberStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>[]
          }
          upsert: {
            args: Prisma.MemberStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberStatsPayload>
          }
          aggregate: {
            args: Prisma.MemberStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberStats>
          }
          groupBy: {
            args: Prisma.MemberStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberStatsCountArgs<ExtArgs>
            result: $Utils.Optional<MemberStatsCountAggregateOutputType> | number
          }
        }
      }
      MessageStats: {
        payload: Prisma.$MessageStatsPayload<ExtArgs>
        fields: Prisma.MessageStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          findFirst: {
            args: Prisma.MessageStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          findMany: {
            args: Prisma.MessageStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>[]
          }
          create: {
            args: Prisma.MessageStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          createMany: {
            args: Prisma.MessageStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>[]
          }
          delete: {
            args: Prisma.MessageStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          update: {
            args: Prisma.MessageStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          deleteMany: {
            args: Prisma.MessageStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>[]
          }
          upsert: {
            args: Prisma.MessageStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatsPayload>
          }
          aggregate: {
            args: Prisma.MessageStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageStats>
          }
          groupBy: {
            args: Prisma.MessageStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageStatsCountArgs<ExtArgs>
            result: $Utils.Optional<MessageStatsCountAggregateOutputType> | number
          }
        }
      }
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    adminUser?: AdminUserOmit
    language?: LanguageOmit
    event?: EventOmit
    eventTranslation?: EventTranslationOmit
    blogPost?: BlogPostOmit
    blogPostTranslation?: BlogPostTranslationOmit
    contactSubmission?: ContactSubmissionOmit
    membershipApplication?: MembershipApplicationOmit
    eventRegistration?: EventRegistrationOmit
    websiteSetting?: WebsiteSettingOmit
    blogStats?: BlogStatsOmit
    eventStats?: EventStatsOmit
    memberStats?: MemberStatsOmit
    messageStats?: MessageStatsOmit
    userStats?: UserStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    blogPosts: number
    events: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPosts?: boolean | AdminUserCountOutputTypeCountBlogPostsArgs
    events?: boolean | AdminUserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    blogPostTranslations: number
    eventTranslations: number
    websiteSettings: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostTranslations?: boolean | LanguageCountOutputTypeCountBlogPostTranslationsArgs
    eventTranslations?: boolean | LanguageCountOutputTypeCountEventTranslationsArgs
    websiteSettings?: boolean | LanguageCountOutputTypeCountWebsiteSettingsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountBlogPostTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTranslationWhereInput
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountEventTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTranslationWhereInput
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountWebsiteSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteSettingWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    registrations: number
    translations: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    translations?: boolean | EventCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTranslationWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    translations: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | BlogPostCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTranslationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPosts?: boolean | AdminUser$blogPostsArgs<ExtArgs>
    events?: boolean | AdminUser$eventsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>
  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPosts?: boolean | AdminUser$blogPostsArgs<ExtArgs>
    events?: boolean | AdminUser$eventsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      blogPosts: Prisma.$BlogPostPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPosts<T extends AdminUser$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends AdminUser$eventsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser.blogPosts
   */
  export type AdminUser$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * AdminUser.events
   */
  export type AdminUser$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    code: string | null
    name: string | null
    isDefault: boolean | null
  }

  export type LanguageMaxAggregateOutputType = {
    code: string | null
    name: string | null
    isDefault: boolean | null
  }

  export type LanguageCountAggregateOutputType = {
    code: number
    name: number
    isDefault: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    code?: true
    name?: true
    isDefault?: true
  }

  export type LanguageMaxAggregateInputType = {
    code?: true
    name?: true
    isDefault?: true
  }

  export type LanguageCountAggregateInputType = {
    code?: true
    name?: true
    isDefault?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    code: string
    name: string
    isDefault: boolean
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isDefault?: boolean
    blogPostTranslations?: boolean | Language$blogPostTranslationsArgs<ExtArgs>
    eventTranslations?: boolean | Language$eventTranslationsArgs<ExtArgs>
    websiteSettings?: boolean | Language$websiteSettingsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    code?: boolean
    name?: boolean
    isDefault?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "isDefault", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostTranslations?: boolean | Language$blogPostTranslationsArgs<ExtArgs>
    eventTranslations?: boolean | Language$eventTranslationsArgs<ExtArgs>
    websiteSettings?: boolean | Language$websiteSettingsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      blogPostTranslations: Prisma.$BlogPostTranslationPayload<ExtArgs>[]
      eventTranslations: Prisma.$EventTranslationPayload<ExtArgs>[]
      websiteSettings: Prisma.$WebsiteSettingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      isDefault: boolean
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const languageWithCodeOnly = await prisma.language.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPostTranslations<T extends Language$blogPostTranslationsArgs<ExtArgs> = {}>(args?: Subset<T, Language$blogPostTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventTranslations<T extends Language$eventTranslationsArgs<ExtArgs> = {}>(args?: Subset<T, Language$eventTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    websiteSettings<T extends Language$websiteSettingsArgs<ExtArgs> = {}>(args?: Subset<T, Language$websiteSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly code: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly isDefault: FieldRef<"Language", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.blogPostTranslations
   */
  export type Language$blogPostTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    where?: BlogPostTranslationWhereInput
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    cursor?: BlogPostTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * Language.eventTranslations
   */
  export type Language$eventTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    where?: EventTranslationWhereInput
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    cursor?: EventTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTranslationScalarFieldEnum | EventTranslationScalarFieldEnum[]
  }

  /**
   * Language.websiteSettings
   */
  export type Language$websiteSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    where?: WebsiteSettingWhereInput
    orderBy?: WebsiteSettingOrderByWithRelationInput | WebsiteSettingOrderByWithRelationInput[]
    cursor?: WebsiteSettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteSettingScalarFieldEnum | WebsiteSettingScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    capacity: number | null
    spotsLeft: number | null
    price: Decimal | null
    priceMembers: Decimal | null
    pricePremium: Decimal | null
  }

  export type EventSumAggregateOutputType = {
    capacity: number | null
    spotsLeft: number | null
    price: Decimal | null
    priceMembers: Decimal | null
    pricePremium: Decimal | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    slug: string | null
    imageUrl: string | null
    eventDate: Date | null
    eventEndDate: Date | null
    location: string | null
    address: string | null
    capacity: number | null
    spotsLeft: number | null
    price: Decimal | null
    priceMembers: Decimal | null
    pricePremium: Decimal | null
    eventType: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    imageUrl: string | null
    eventDate: Date | null
    eventEndDate: Date | null
    location: string | null
    address: string | null
    capacity: number | null
    spotsLeft: number | null
    price: Decimal | null
    priceMembers: Decimal | null
    pricePremium: Decimal | null
    eventType: string | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    slug: number
    imageUrl: number
    eventDate: number
    eventEndDate: number
    location: number
    address: number
    capacity: number
    spotsLeft: number
    price: number
    priceMembers: number
    pricePremium: number
    eventType: number
    isArchived: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    capacity?: true
    spotsLeft?: true
    price?: true
    priceMembers?: true
    pricePremium?: true
  }

  export type EventSumAggregateInputType = {
    capacity?: true
    spotsLeft?: true
    price?: true
    priceMembers?: true
    pricePremium?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    eventDate?: true
    eventEndDate?: true
    location?: true
    address?: true
    capacity?: true
    spotsLeft?: true
    price?: true
    priceMembers?: true
    pricePremium?: true
    eventType?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    eventDate?: true
    eventEndDate?: true
    location?: true
    address?: true
    capacity?: true
    spotsLeft?: true
    price?: true
    priceMembers?: true
    pricePremium?: true
    eventType?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    eventDate?: true
    eventEndDate?: true
    location?: true
    address?: true
    capacity?: true
    spotsLeft?: true
    price?: true
    priceMembers?: true
    pricePremium?: true
    eventType?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    slug: string
    imageUrl: string | null
    eventDate: Date
    eventEndDate: Date | null
    location: string | null
    address: string | null
    capacity: number | null
    spotsLeft: number | null
    price: Decimal | null
    priceMembers: Decimal | null
    pricePremium: Decimal | null
    eventType: string
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    createdById: string | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    spotsLeft?: boolean
    price?: boolean
    priceMembers?: boolean
    pricePremium?: boolean
    eventType?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    translations?: boolean | Event$translationsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    spotsLeft?: boolean
    price?: boolean
    priceMembers?: boolean
    pricePremium?: boolean
    eventType?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    spotsLeft?: boolean
    price?: boolean
    priceMembers?: boolean
    pricePremium?: boolean
    eventType?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    spotsLeft?: boolean
    price?: boolean
    priceMembers?: boolean
    pricePremium?: boolean
    eventType?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "imageUrl" | "eventDate" | "eventEndDate" | "location" | "address" | "capacity" | "spotsLeft" | "price" | "priceMembers" | "pricePremium" | "eventType" | "isArchived" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    translations?: boolean | Event$translationsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      createdBy: Prisma.$AdminUserPayload<ExtArgs> | null
      registrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      translations: Prisma.$EventTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      imageUrl: string | null
      eventDate: Date
      eventEndDate: Date | null
      location: string | null
      address: string | null
      capacity: number | null
      spotsLeft: number | null
      price: Prisma.Decimal | null
      priceMembers: Prisma.Decimal | null
      pricePremium: Prisma.Decimal | null
      eventType: string
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
      createdById: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Event$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Event$createdByArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    translations<T extends Event$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly eventEndDate: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly capacity: FieldRef<"Event", 'Int'>
    readonly spotsLeft: FieldRef<"Event", 'Int'>
    readonly price: FieldRef<"Event", 'Decimal'>
    readonly priceMembers: FieldRef<"Event", 'Decimal'>
    readonly pricePremium: FieldRef<"Event", 'Decimal'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly isArchived: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly createdById: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.createdBy
   */
  export type Event$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * Event.translations
   */
  export type Event$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    where?: EventTranslationWhereInput
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    cursor?: EventTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTranslationScalarFieldEnum | EventTranslationScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventTranslation
   */

  export type AggregateEventTranslation = {
    _count: EventTranslationCountAggregateOutputType | null
    _min: EventTranslationMinAggregateOutputType | null
    _max: EventTranslationMaxAggregateOutputType | null
  }

  export type EventTranslationMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    languageCode: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    requirements: string | null
    additionalInfo: string | null
    instructorName: string | null
    instructorBio: string | null
  }

  export type EventTranslationMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    languageCode: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    requirements: string | null
    additionalInfo: string | null
    instructorName: string | null
    instructorBio: string | null
  }

  export type EventTranslationCountAggregateOutputType = {
    id: number
    eventId: number
    languageCode: number
    title: number
    description: number
    longDescription: number
    requirements: number
    additionalInfo: number
    instructorName: number
    instructorBio: number
    _all: number
  }


  export type EventTranslationMinAggregateInputType = {
    id?: true
    eventId?: true
    languageCode?: true
    title?: true
    description?: true
    longDescription?: true
    requirements?: true
    additionalInfo?: true
    instructorName?: true
    instructorBio?: true
  }

  export type EventTranslationMaxAggregateInputType = {
    id?: true
    eventId?: true
    languageCode?: true
    title?: true
    description?: true
    longDescription?: true
    requirements?: true
    additionalInfo?: true
    instructorName?: true
    instructorBio?: true
  }

  export type EventTranslationCountAggregateInputType = {
    id?: true
    eventId?: true
    languageCode?: true
    title?: true
    description?: true
    longDescription?: true
    requirements?: true
    additionalInfo?: true
    instructorName?: true
    instructorBio?: true
    _all?: true
  }

  export type EventTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTranslation to aggregate.
     */
    where?: EventTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTranslations to fetch.
     */
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTranslations
    **/
    _count?: true | EventTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTranslationMaxAggregateInputType
  }

  export type GetEventTranslationAggregateType<T extends EventTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTranslation[P]>
      : GetScalarType<T[P], AggregateEventTranslation[P]>
  }




  export type EventTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTranslationWhereInput
    orderBy?: EventTranslationOrderByWithAggregationInput | EventTranslationOrderByWithAggregationInput[]
    by: EventTranslationScalarFieldEnum[] | EventTranslationScalarFieldEnum
    having?: EventTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTranslationCountAggregateInputType | true
    _min?: EventTranslationMinAggregateInputType
    _max?: EventTranslationMaxAggregateInputType
  }

  export type EventTranslationGroupByOutputType = {
    id: string
    eventId: string
    languageCode: string
    title: string
    description: string
    longDescription: string | null
    requirements: string | null
    additionalInfo: string | null
    instructorName: string | null
    instructorBio: string | null
    _count: EventTranslationCountAggregateOutputType | null
    _min: EventTranslationMinAggregateOutputType | null
    _max: EventTranslationMaxAggregateOutputType | null
  }

  type GetEventTranslationGroupByPayload<T extends EventTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], EventTranslationGroupByOutputType[P]>
        }
      >
    >


  export type EventTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    requirements?: boolean
    additionalInfo?: boolean
    instructorName?: boolean
    instructorBio?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTranslation"]>

  export type EventTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    requirements?: boolean
    additionalInfo?: boolean
    instructorName?: boolean
    instructorBio?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTranslation"]>

  export type EventTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    requirements?: boolean
    additionalInfo?: boolean
    instructorName?: boolean
    instructorBio?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTranslation"]>

  export type EventTranslationSelectScalar = {
    id?: boolean
    eventId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    requirements?: boolean
    additionalInfo?: boolean
    instructorName?: boolean
    instructorBio?: boolean
  }

  export type EventTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "languageCode" | "title" | "description" | "longDescription" | "requirements" | "additionalInfo" | "instructorName" | "instructorBio", ExtArgs["result"]["eventTranslation"]>
  export type EventTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type EventTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type EventTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $EventTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTranslation"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      languageCode: string
      title: string
      description: string
      longDescription: string | null
      requirements: string | null
      additionalInfo: string | null
      instructorName: string | null
      instructorBio: string | null
    }, ExtArgs["result"]["eventTranslation"]>
    composites: {}
  }

  type EventTranslationGetPayload<S extends boolean | null | undefined | EventTranslationDefaultArgs> = $Result.GetResult<Prisma.$EventTranslationPayload, S>

  type EventTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTranslationCountAggregateInputType | true
    }

  export interface EventTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTranslation'], meta: { name: 'EventTranslation' } }
    /**
     * Find zero or one EventTranslation that matches the filter.
     * @param {EventTranslationFindUniqueArgs} args - Arguments to find a EventTranslation
     * @example
     * // Get one EventTranslation
     * const eventTranslation = await prisma.eventTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTranslationFindUniqueArgs>(args: SelectSubset<T, EventTranslationFindUniqueArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTranslationFindUniqueOrThrowArgs} args - Arguments to find a EventTranslation
     * @example
     * // Get one EventTranslation
     * const eventTranslation = await prisma.eventTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationFindFirstArgs} args - Arguments to find a EventTranslation
     * @example
     * // Get one EventTranslation
     * const eventTranslation = await prisma.eventTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTranslationFindFirstArgs>(args?: SelectSubset<T, EventTranslationFindFirstArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationFindFirstOrThrowArgs} args - Arguments to find a EventTranslation
     * @example
     * // Get one EventTranslation
     * const eventTranslation = await prisma.eventTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTranslations
     * const eventTranslations = await prisma.eventTranslation.findMany()
     * 
     * // Get first 10 EventTranslations
     * const eventTranslations = await prisma.eventTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTranslationWithIdOnly = await prisma.eventTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTranslationFindManyArgs>(args?: SelectSubset<T, EventTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTranslation.
     * @param {EventTranslationCreateArgs} args - Arguments to create a EventTranslation.
     * @example
     * // Create one EventTranslation
     * const EventTranslation = await prisma.eventTranslation.create({
     *   data: {
     *     // ... data to create a EventTranslation
     *   }
     * })
     * 
     */
    create<T extends EventTranslationCreateArgs>(args: SelectSubset<T, EventTranslationCreateArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTranslations.
     * @param {EventTranslationCreateManyArgs} args - Arguments to create many EventTranslations.
     * @example
     * // Create many EventTranslations
     * const eventTranslation = await prisma.eventTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTranslationCreateManyArgs>(args?: SelectSubset<T, EventTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTranslations and returns the data saved in the database.
     * @param {EventTranslationCreateManyAndReturnArgs} args - Arguments to create many EventTranslations.
     * @example
     * // Create many EventTranslations
     * const eventTranslation = await prisma.eventTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTranslations and only return the `id`
     * const eventTranslationWithIdOnly = await prisma.eventTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTranslation.
     * @param {EventTranslationDeleteArgs} args - Arguments to delete one EventTranslation.
     * @example
     * // Delete one EventTranslation
     * const EventTranslation = await prisma.eventTranslation.delete({
     *   where: {
     *     // ... filter to delete one EventTranslation
     *   }
     * })
     * 
     */
    delete<T extends EventTranslationDeleteArgs>(args: SelectSubset<T, EventTranslationDeleteArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTranslation.
     * @param {EventTranslationUpdateArgs} args - Arguments to update one EventTranslation.
     * @example
     * // Update one EventTranslation
     * const eventTranslation = await prisma.eventTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTranslationUpdateArgs>(args: SelectSubset<T, EventTranslationUpdateArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTranslations.
     * @param {EventTranslationDeleteManyArgs} args - Arguments to filter EventTranslations to delete.
     * @example
     * // Delete a few EventTranslations
     * const { count } = await prisma.eventTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTranslationDeleteManyArgs>(args?: SelectSubset<T, EventTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTranslations
     * const eventTranslation = await prisma.eventTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTranslationUpdateManyArgs>(args: SelectSubset<T, EventTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTranslations and returns the data updated in the database.
     * @param {EventTranslationUpdateManyAndReturnArgs} args - Arguments to update many EventTranslations.
     * @example
     * // Update many EventTranslations
     * const eventTranslation = await prisma.eventTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTranslations and only return the `id`
     * const eventTranslationWithIdOnly = await prisma.eventTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTranslation.
     * @param {EventTranslationUpsertArgs} args - Arguments to update or create a EventTranslation.
     * @example
     * // Update or create a EventTranslation
     * const eventTranslation = await prisma.eventTranslation.upsert({
     *   create: {
     *     // ... data to create a EventTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTranslation we want to update
     *   }
     * })
     */
    upsert<T extends EventTranslationUpsertArgs>(args: SelectSubset<T, EventTranslationUpsertArgs<ExtArgs>>): Prisma__EventTranslationClient<$Result.GetResult<Prisma.$EventTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationCountArgs} args - Arguments to filter EventTranslations to count.
     * @example
     * // Count the number of EventTranslations
     * const count = await prisma.eventTranslation.count({
     *   where: {
     *     // ... the filter for the EventTranslations we want to count
     *   }
     * })
    **/
    count<T extends EventTranslationCountArgs>(
      args?: Subset<T, EventTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTranslationAggregateArgs>(args: Subset<T, EventTranslationAggregateArgs>): Prisma.PrismaPromise<GetEventTranslationAggregateType<T>>

    /**
     * Group by EventTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTranslationGroupByArgs} args - Group by arguments.
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
      T extends EventTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTranslationGroupByArgs['orderBy'] }
        : { orderBy?: EventTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTranslation model
   */
  readonly fields: EventTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventTranslation model
   */
  interface EventTranslationFieldRefs {
    readonly id: FieldRef<"EventTranslation", 'String'>
    readonly eventId: FieldRef<"EventTranslation", 'String'>
    readonly languageCode: FieldRef<"EventTranslation", 'String'>
    readonly title: FieldRef<"EventTranslation", 'String'>
    readonly description: FieldRef<"EventTranslation", 'String'>
    readonly longDescription: FieldRef<"EventTranslation", 'String'>
    readonly requirements: FieldRef<"EventTranslation", 'String'>
    readonly additionalInfo: FieldRef<"EventTranslation", 'String'>
    readonly instructorName: FieldRef<"EventTranslation", 'String'>
    readonly instructorBio: FieldRef<"EventTranslation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventTranslation findUnique
   */
  export type EventTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter, which EventTranslation to fetch.
     */
    where: EventTranslationWhereUniqueInput
  }

  /**
   * EventTranslation findUniqueOrThrow
   */
  export type EventTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter, which EventTranslation to fetch.
     */
    where: EventTranslationWhereUniqueInput
  }

  /**
   * EventTranslation findFirst
   */
  export type EventTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter, which EventTranslation to fetch.
     */
    where?: EventTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTranslations to fetch.
     */
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTranslations.
     */
    cursor?: EventTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTranslations.
     */
    distinct?: EventTranslationScalarFieldEnum | EventTranslationScalarFieldEnum[]
  }

  /**
   * EventTranslation findFirstOrThrow
   */
  export type EventTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter, which EventTranslation to fetch.
     */
    where?: EventTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTranslations to fetch.
     */
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTranslations.
     */
    cursor?: EventTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTranslations.
     */
    distinct?: EventTranslationScalarFieldEnum | EventTranslationScalarFieldEnum[]
  }

  /**
   * EventTranslation findMany
   */
  export type EventTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter, which EventTranslations to fetch.
     */
    where?: EventTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTranslations to fetch.
     */
    orderBy?: EventTranslationOrderByWithRelationInput | EventTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTranslations.
     */
    cursor?: EventTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTranslations.
     */
    skip?: number
    distinct?: EventTranslationScalarFieldEnum | EventTranslationScalarFieldEnum[]
  }

  /**
   * EventTranslation create
   */
  export type EventTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTranslation.
     */
    data: XOR<EventTranslationCreateInput, EventTranslationUncheckedCreateInput>
  }

  /**
   * EventTranslation createMany
   */
  export type EventTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTranslations.
     */
    data: EventTranslationCreateManyInput | EventTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTranslation createManyAndReturn
   */
  export type EventTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many EventTranslations.
     */
    data: EventTranslationCreateManyInput | EventTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTranslation update
   */
  export type EventTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTranslation.
     */
    data: XOR<EventTranslationUpdateInput, EventTranslationUncheckedUpdateInput>
    /**
     * Choose, which EventTranslation to update.
     */
    where: EventTranslationWhereUniqueInput
  }

  /**
   * EventTranslation updateMany
   */
  export type EventTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTranslations.
     */
    data: XOR<EventTranslationUpdateManyMutationInput, EventTranslationUncheckedUpdateManyInput>
    /**
     * Filter which EventTranslations to update
     */
    where?: EventTranslationWhereInput
    /**
     * Limit how many EventTranslations to update.
     */
    limit?: number
  }

  /**
   * EventTranslation updateManyAndReturn
   */
  export type EventTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * The data used to update EventTranslations.
     */
    data: XOR<EventTranslationUpdateManyMutationInput, EventTranslationUncheckedUpdateManyInput>
    /**
     * Filter which EventTranslations to update
     */
    where?: EventTranslationWhereInput
    /**
     * Limit how many EventTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTranslation upsert
   */
  export type EventTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTranslation to update in case it exists.
     */
    where: EventTranslationWhereUniqueInput
    /**
     * In case the EventTranslation found by the `where` argument doesn't exist, create a new EventTranslation with this data.
     */
    create: XOR<EventTranslationCreateInput, EventTranslationUncheckedCreateInput>
    /**
     * In case the EventTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTranslationUpdateInput, EventTranslationUncheckedUpdateInput>
  }

  /**
   * EventTranslation delete
   */
  export type EventTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
    /**
     * Filter which EventTranslation to delete.
     */
    where: EventTranslationWhereUniqueInput
  }

  /**
   * EventTranslation deleteMany
   */
  export type EventTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTranslations to delete
     */
    where?: EventTranslationWhereInput
    /**
     * Limit how many EventTranslations to delete.
     */
    limit?: number
  }

  /**
   * EventTranslation without action
   */
  export type EventTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTranslation
     */
    select?: EventTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTranslation
     */
    omit?: EventTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTranslationInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    readTime: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    readTime: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    imageUrl: string | null
    publishedAt: Date | null
    isPublished: boolean | null
    readTime: number | null
    category: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isFeatured: boolean | null
    isArchived: boolean | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    imageUrl: string | null
    publishedAt: Date | null
    isPublished: boolean | null
    readTime: number | null
    category: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isFeatured: boolean | null
    isArchived: boolean | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    imageUrl: number
    publishedAt: number
    isPublished: number
    readTime: number
    category: number
    tags: number
    authorId: number
    createdAt: number
    updatedAt: number
    isFeatured: number
    isArchived: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    readTime?: true
  }

  export type BlogPostSumAggregateInputType = {
    readTime?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    publishedAt?: true
    isPublished?: true
    readTime?: true
    category?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    isFeatured?: true
    isArchived?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    publishedAt?: true
    isPublished?: true
    readTime?: true
    category?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    isFeatured?: true
    isArchived?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    imageUrl?: true
    publishedAt?: true
    isPublished?: true
    readTime?: true
    category?: true
    tags?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    isFeatured?: true
    isArchived?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    imageUrl: string | null
    publishedAt: Date | null
    isPublished: boolean
    readTime: number | null
    category: string
    tags: string[]
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    isFeatured: boolean
    isArchived: boolean
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readTime?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
    translations?: boolean | BlogPost$translationsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readTime?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readTime?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    imageUrl?: boolean
    publishedAt?: boolean
    isPublished?: boolean
    readTime?: boolean
    category?: boolean
    tags?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isFeatured?: boolean
    isArchived?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "imageUrl" | "publishedAt" | "isPublished" | "readTime" | "category" | "tags" | "authorId" | "createdAt" | "updatedAt" | "isFeatured" | "isArchived", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
    translations?: boolean | BlogPost$translationsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BlogPost$authorArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      author: Prisma.$AdminUserPayload<ExtArgs> | null
      translations: Prisma.$BlogPostTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      imageUrl: string | null
      publishedAt: Date | null
      isPublished: boolean
      readTime: number | null
      category: string
      tags: string[]
      authorId: string | null
      createdAt: Date
      updatedAt: Date
      isFeatured: boolean
      isArchived: boolean
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends BlogPost$authorArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$authorArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    translations<T extends BlogPost$translationsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly imageUrl: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly isPublished: FieldRef<"BlogPost", 'Boolean'>
    readonly readTime: FieldRef<"BlogPost", 'Int'>
    readonly category: FieldRef<"BlogPost", 'String'>
    readonly tags: FieldRef<"BlogPost", 'String[]'>
    readonly authorId: FieldRef<"BlogPost", 'String'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly isFeatured: FieldRef<"BlogPost", 'Boolean'>
    readonly isArchived: FieldRef<"BlogPost", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.author
   */
  export type BlogPost$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * BlogPost.translations
   */
  export type BlogPost$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    where?: BlogPostTranslationWhereInput
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    cursor?: BlogPostTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostTranslation
   */

  export type AggregateBlogPostTranslation = {
    _count: BlogPostTranslationCountAggregateOutputType | null
    _min: BlogPostTranslationMinAggregateOutputType | null
    _max: BlogPostTranslationMaxAggregateOutputType | null
  }

  export type BlogPostTranslationMinAggregateOutputType = {
    id: string | null
    blogPostId: string | null
    languageCode: string | null
    title: string | null
    description: string | null
    content: string | null
    metaDescription: string | null
    metaKeywords: string | null
  }

  export type BlogPostTranslationMaxAggregateOutputType = {
    id: string | null
    blogPostId: string | null
    languageCode: string | null
    title: string | null
    description: string | null
    content: string | null
    metaDescription: string | null
    metaKeywords: string | null
  }

  export type BlogPostTranslationCountAggregateOutputType = {
    id: number
    blogPostId: number
    languageCode: number
    title: number
    description: number
    content: number
    metaDescription: number
    metaKeywords: number
    _all: number
  }


  export type BlogPostTranslationMinAggregateInputType = {
    id?: true
    blogPostId?: true
    languageCode?: true
    title?: true
    description?: true
    content?: true
    metaDescription?: true
    metaKeywords?: true
  }

  export type BlogPostTranslationMaxAggregateInputType = {
    id?: true
    blogPostId?: true
    languageCode?: true
    title?: true
    description?: true
    content?: true
    metaDescription?: true
    metaKeywords?: true
  }

  export type BlogPostTranslationCountAggregateInputType = {
    id?: true
    blogPostId?: true
    languageCode?: true
    title?: true
    description?: true
    content?: true
    metaDescription?: true
    metaKeywords?: true
    _all?: true
  }

  export type BlogPostTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTranslation to aggregate.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostTranslations
    **/
    _count?: true | BlogPostTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostTranslationMaxAggregateInputType
  }

  export type GetBlogPostTranslationAggregateType<T extends BlogPostTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostTranslation[P]>
      : GetScalarType<T[P], AggregateBlogPostTranslation[P]>
  }




  export type BlogPostTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTranslationWhereInput
    orderBy?: BlogPostTranslationOrderByWithAggregationInput | BlogPostTranslationOrderByWithAggregationInput[]
    by: BlogPostTranslationScalarFieldEnum[] | BlogPostTranslationScalarFieldEnum
    having?: BlogPostTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostTranslationCountAggregateInputType | true
    _min?: BlogPostTranslationMinAggregateInputType
    _max?: BlogPostTranslationMaxAggregateInputType
  }

  export type BlogPostTranslationGroupByOutputType = {
    id: string
    blogPostId: string
    languageCode: string
    title: string
    description: string
    content: string
    metaDescription: string | null
    metaKeywords: string | null
    _count: BlogPostTranslationCountAggregateOutputType | null
    _min: BlogPostTranslationMinAggregateOutputType | null
    _max: BlogPostTranslationMaxAggregateOutputType | null
  }

  type GetBlogPostTranslationGroupByPayload<T extends BlogPostTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostTranslationGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogPostId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogPostId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogPostId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTranslation"]>

  export type BlogPostTranslationSelectScalar = {
    id?: boolean
    blogPostId?: boolean
    languageCode?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
  }

  export type BlogPostTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogPostId" | "languageCode" | "title" | "description" | "content" | "metaDescription" | "metaKeywords", ExtArgs["result"]["blogPostTranslation"]>
  export type BlogPostTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type BlogPostTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type BlogPostTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $BlogPostTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostTranslation"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogPostId: string
      languageCode: string
      title: string
      description: string
      content: string
      metaDescription: string | null
      metaKeywords: string | null
    }, ExtArgs["result"]["blogPostTranslation"]>
    composites: {}
  }

  type BlogPostTranslationGetPayload<S extends boolean | null | undefined | BlogPostTranslationDefaultArgs> = $Result.GetResult<Prisma.$BlogPostTranslationPayload, S>

  type BlogPostTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostTranslationCountAggregateInputType | true
    }

  export interface BlogPostTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostTranslation'], meta: { name: 'BlogPostTranslation' } }
    /**
     * Find zero or one BlogPostTranslation that matches the filter.
     * @param {BlogPostTranslationFindUniqueArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostTranslationFindUniqueArgs>(args: SelectSubset<T, BlogPostTranslationFindUniqueArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostTranslationFindUniqueOrThrowArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindFirstArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostTranslationFindFirstArgs>(args?: SelectSubset<T, BlogPostTranslationFindFirstArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindFirstOrThrowArgs} args - Arguments to find a BlogPostTranslation
     * @example
     * // Get one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostTranslations
     * const blogPostTranslations = await prisma.blogPostTranslation.findMany()
     * 
     * // Get first 10 BlogPostTranslations
     * const blogPostTranslations = await prisma.blogPostTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostTranslationFindManyArgs>(args?: SelectSubset<T, BlogPostTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostTranslation.
     * @param {BlogPostTranslationCreateArgs} args - Arguments to create a BlogPostTranslation.
     * @example
     * // Create one BlogPostTranslation
     * const BlogPostTranslation = await prisma.blogPostTranslation.create({
     *   data: {
     *     // ... data to create a BlogPostTranslation
     *   }
     * })
     * 
     */
    create<T extends BlogPostTranslationCreateArgs>(args: SelectSubset<T, BlogPostTranslationCreateArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostTranslations.
     * @param {BlogPostTranslationCreateManyArgs} args - Arguments to create many BlogPostTranslations.
     * @example
     * // Create many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostTranslationCreateManyArgs>(args?: SelectSubset<T, BlogPostTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostTranslations and returns the data saved in the database.
     * @param {BlogPostTranslationCreateManyAndReturnArgs} args - Arguments to create many BlogPostTranslations.
     * @example
     * // Create many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostTranslations and only return the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostTranslation.
     * @param {BlogPostTranslationDeleteArgs} args - Arguments to delete one BlogPostTranslation.
     * @example
     * // Delete one BlogPostTranslation
     * const BlogPostTranslation = await prisma.blogPostTranslation.delete({
     *   where: {
     *     // ... filter to delete one BlogPostTranslation
     *   }
     * })
     * 
     */
    delete<T extends BlogPostTranslationDeleteArgs>(args: SelectSubset<T, BlogPostTranslationDeleteArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostTranslation.
     * @param {BlogPostTranslationUpdateArgs} args - Arguments to update one BlogPostTranslation.
     * @example
     * // Update one BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostTranslationUpdateArgs>(args: SelectSubset<T, BlogPostTranslationUpdateArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostTranslations.
     * @param {BlogPostTranslationDeleteManyArgs} args - Arguments to filter BlogPostTranslations to delete.
     * @example
     * // Delete a few BlogPostTranslations
     * const { count } = await prisma.blogPostTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostTranslationDeleteManyArgs>(args?: SelectSubset<T, BlogPostTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostTranslationUpdateManyArgs>(args: SelectSubset<T, BlogPostTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTranslations and returns the data updated in the database.
     * @param {BlogPostTranslationUpdateManyAndReturnArgs} args - Arguments to update many BlogPostTranslations.
     * @example
     * // Update many BlogPostTranslations
     * const blogPostTranslation = await prisma.blogPostTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostTranslations and only return the `id`
     * const blogPostTranslationWithIdOnly = await prisma.blogPostTranslation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostTranslation.
     * @param {BlogPostTranslationUpsertArgs} args - Arguments to update or create a BlogPostTranslation.
     * @example
     * // Update or create a BlogPostTranslation
     * const blogPostTranslation = await prisma.blogPostTranslation.upsert({
     *   create: {
     *     // ... data to create a BlogPostTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostTranslation we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostTranslationUpsertArgs>(args: SelectSubset<T, BlogPostTranslationUpsertArgs<ExtArgs>>): Prisma__BlogPostTranslationClient<$Result.GetResult<Prisma.$BlogPostTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationCountArgs} args - Arguments to filter BlogPostTranslations to count.
     * @example
     * // Count the number of BlogPostTranslations
     * const count = await prisma.blogPostTranslation.count({
     *   where: {
     *     // ... the filter for the BlogPostTranslations we want to count
     *   }
     * })
    **/
    count<T extends BlogPostTranslationCountArgs>(
      args?: Subset<T, BlogPostTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostTranslationAggregateArgs>(args: Subset<T, BlogPostTranslationAggregateArgs>): Prisma.PrismaPromise<GetBlogPostTranslationAggregateType<T>>

    /**
     * Group by BlogPostTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTranslationGroupByArgs} args - Group by arguments.
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
      T extends BlogPostTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostTranslationGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostTranslation model
   */
  readonly fields: BlogPostTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogPostTranslation model
   */
  interface BlogPostTranslationFieldRefs {
    readonly id: FieldRef<"BlogPostTranslation", 'String'>
    readonly blogPostId: FieldRef<"BlogPostTranslation", 'String'>
    readonly languageCode: FieldRef<"BlogPostTranslation", 'String'>
    readonly title: FieldRef<"BlogPostTranslation", 'String'>
    readonly description: FieldRef<"BlogPostTranslation", 'String'>
    readonly content: FieldRef<"BlogPostTranslation", 'String'>
    readonly metaDescription: FieldRef<"BlogPostTranslation", 'String'>
    readonly metaKeywords: FieldRef<"BlogPostTranslation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostTranslation findUnique
   */
  export type BlogPostTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation findUniqueOrThrow
   */
  export type BlogPostTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation findFirst
   */
  export type BlogPostTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTranslations.
     */
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation findFirstOrThrow
   */
  export type BlogPostTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslation to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTranslations.
     */
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation findMany
   */
  export type BlogPostTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTranslations to fetch.
     */
    where?: BlogPostTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTranslations to fetch.
     */
    orderBy?: BlogPostTranslationOrderByWithRelationInput | BlogPostTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostTranslations.
     */
    cursor?: BlogPostTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTranslations.
     */
    skip?: number
    distinct?: BlogPostTranslationScalarFieldEnum | BlogPostTranslationScalarFieldEnum[]
  }

  /**
   * BlogPostTranslation create
   */
  export type BlogPostTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostTranslation.
     */
    data: XOR<BlogPostTranslationCreateInput, BlogPostTranslationUncheckedCreateInput>
  }

  /**
   * BlogPostTranslation createMany
   */
  export type BlogPostTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostTranslations.
     */
    data: BlogPostTranslationCreateManyInput | BlogPostTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostTranslation createManyAndReturn
   */
  export type BlogPostTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostTranslations.
     */
    data: BlogPostTranslationCreateManyInput | BlogPostTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTranslation update
   */
  export type BlogPostTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostTranslation.
     */
    data: XOR<BlogPostTranslationUpdateInput, BlogPostTranslationUncheckedUpdateInput>
    /**
     * Choose, which BlogPostTranslation to update.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation updateMany
   */
  export type BlogPostTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostTranslations.
     */
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTranslations to update
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to update.
     */
    limit?: number
  }

  /**
   * BlogPostTranslation updateManyAndReturn
   */
  export type BlogPostTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostTranslations.
     */
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTranslations to update
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTranslation upsert
   */
  export type BlogPostTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostTranslation to update in case it exists.
     */
    where: BlogPostTranslationWhereUniqueInput
    /**
     * In case the BlogPostTranslation found by the `where` argument doesn't exist, create a new BlogPostTranslation with this data.
     */
    create: XOR<BlogPostTranslationCreateInput, BlogPostTranslationUncheckedCreateInput>
    /**
     * In case the BlogPostTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostTranslationUpdateInput, BlogPostTranslationUncheckedUpdateInput>
  }

  /**
   * BlogPostTranslation delete
   */
  export type BlogPostTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
    /**
     * Filter which BlogPostTranslation to delete.
     */
    where: BlogPostTranslationWhereUniqueInput
  }

  /**
   * BlogPostTranslation deleteMany
   */
  export type BlogPostTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTranslations to delete
     */
    where?: BlogPostTranslationWhereInput
    /**
     * Limit how many BlogPostTranslations to delete.
     */
    limit?: number
  }

  /**
   * BlogPostTranslation without action
   */
  export type BlogPostTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTranslation
     */
    select?: BlogPostTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTranslation
     */
    omit?: BlogPostTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTranslationInclude<ExtArgs> | null
  }


  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "isRead" | "createdAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'String'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly subject: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly isRead: FieldRef<"ContactSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model MembershipApplication
   */

  export type AggregateMembershipApplication = {
    _count: MembershipApplicationCountAggregateOutputType | null
    _min: MembershipApplicationMinAggregateOutputType | null
    _max: MembershipApplicationMaxAggregateOutputType | null
  }

  export type MembershipApplicationMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    membershipType: string | null
    experienceLevel: string | null
    comments: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipApplicationMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    membershipType: string | null
    experienceLevel: string | null
    comments: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MembershipApplicationCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    membershipType: number
    experienceLevel: number
    interests: number
    comments: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MembershipApplicationMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    membershipType?: true
    experienceLevel?: true
    comments?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipApplicationMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    membershipType?: true
    experienceLevel?: true
    comments?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MembershipApplicationCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    membershipType?: true
    experienceLevel?: true
    interests?: true
    comments?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MembershipApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipApplication to aggregate.
     */
    where?: MembershipApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipApplications to fetch.
     */
    orderBy?: MembershipApplicationOrderByWithRelationInput | MembershipApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipApplications
    **/
    _count?: true | MembershipApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipApplicationMaxAggregateInputType
  }

  export type GetMembershipApplicationAggregateType<T extends MembershipApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipApplication[P]>
      : GetScalarType<T[P], AggregateMembershipApplication[P]>
  }




  export type MembershipApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipApplicationWhereInput
    orderBy?: MembershipApplicationOrderByWithAggregationInput | MembershipApplicationOrderByWithAggregationInput[]
    by: MembershipApplicationScalarFieldEnum[] | MembershipApplicationScalarFieldEnum
    having?: MembershipApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipApplicationCountAggregateInputType | true
    _min?: MembershipApplicationMinAggregateInputType
    _max?: MembershipApplicationMaxAggregateInputType
  }

  export type MembershipApplicationGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    membershipType: string
    experienceLevel: string | null
    interests: string[]
    comments: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MembershipApplicationCountAggregateOutputType | null
    _min: MembershipApplicationMinAggregateOutputType | null
    _max: MembershipApplicationMaxAggregateOutputType | null
  }

  type GetMembershipApplicationGroupByPayload<T extends MembershipApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipApplicationGroupByOutputType[P]>
        }
      >
    >


  export type MembershipApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    membershipType?: boolean
    experienceLevel?: boolean
    interests?: boolean
    comments?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["membershipApplication"]>

  export type MembershipApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    membershipType?: boolean
    experienceLevel?: boolean
    interests?: boolean
    comments?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["membershipApplication"]>

  export type MembershipApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    membershipType?: boolean
    experienceLevel?: boolean
    interests?: boolean
    comments?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["membershipApplication"]>

  export type MembershipApplicationSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    membershipType?: boolean
    experienceLevel?: boolean
    interests?: boolean
    comments?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MembershipApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "membershipType" | "experienceLevel" | "interests" | "comments" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["membershipApplication"]>

  export type $MembershipApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      membershipType: string
      experienceLevel: string | null
      interests: string[]
      comments: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["membershipApplication"]>
    composites: {}
  }

  type MembershipApplicationGetPayload<S extends boolean | null | undefined | MembershipApplicationDefaultArgs> = $Result.GetResult<Prisma.$MembershipApplicationPayload, S>

  type MembershipApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipApplicationCountAggregateInputType | true
    }

  export interface MembershipApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipApplication'], meta: { name: 'MembershipApplication' } }
    /**
     * Find zero or one MembershipApplication that matches the filter.
     * @param {MembershipApplicationFindUniqueArgs} args - Arguments to find a MembershipApplication
     * @example
     * // Get one MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipApplicationFindUniqueArgs>(args: SelectSubset<T, MembershipApplicationFindUniqueArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipApplicationFindUniqueOrThrowArgs} args - Arguments to find a MembershipApplication
     * @example
     * // Get one MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationFindFirstArgs} args - Arguments to find a MembershipApplication
     * @example
     * // Get one MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipApplicationFindFirstArgs>(args?: SelectSubset<T, MembershipApplicationFindFirstArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationFindFirstOrThrowArgs} args - Arguments to find a MembershipApplication
     * @example
     * // Get one MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipApplications
     * const membershipApplications = await prisma.membershipApplication.findMany()
     * 
     * // Get first 10 MembershipApplications
     * const membershipApplications = await prisma.membershipApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipApplicationWithIdOnly = await prisma.membershipApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipApplicationFindManyArgs>(args?: SelectSubset<T, MembershipApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipApplication.
     * @param {MembershipApplicationCreateArgs} args - Arguments to create a MembershipApplication.
     * @example
     * // Create one MembershipApplication
     * const MembershipApplication = await prisma.membershipApplication.create({
     *   data: {
     *     // ... data to create a MembershipApplication
     *   }
     * })
     * 
     */
    create<T extends MembershipApplicationCreateArgs>(args: SelectSubset<T, MembershipApplicationCreateArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipApplications.
     * @param {MembershipApplicationCreateManyArgs} args - Arguments to create many MembershipApplications.
     * @example
     * // Create many MembershipApplications
     * const membershipApplication = await prisma.membershipApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipApplicationCreateManyArgs>(args?: SelectSubset<T, MembershipApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipApplications and returns the data saved in the database.
     * @param {MembershipApplicationCreateManyAndReturnArgs} args - Arguments to create many MembershipApplications.
     * @example
     * // Create many MembershipApplications
     * const membershipApplication = await prisma.membershipApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipApplications and only return the `id`
     * const membershipApplicationWithIdOnly = await prisma.membershipApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipApplication.
     * @param {MembershipApplicationDeleteArgs} args - Arguments to delete one MembershipApplication.
     * @example
     * // Delete one MembershipApplication
     * const MembershipApplication = await prisma.membershipApplication.delete({
     *   where: {
     *     // ... filter to delete one MembershipApplication
     *   }
     * })
     * 
     */
    delete<T extends MembershipApplicationDeleteArgs>(args: SelectSubset<T, MembershipApplicationDeleteArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipApplication.
     * @param {MembershipApplicationUpdateArgs} args - Arguments to update one MembershipApplication.
     * @example
     * // Update one MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipApplicationUpdateArgs>(args: SelectSubset<T, MembershipApplicationUpdateArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipApplications.
     * @param {MembershipApplicationDeleteManyArgs} args - Arguments to filter MembershipApplications to delete.
     * @example
     * // Delete a few MembershipApplications
     * const { count } = await prisma.membershipApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipApplicationDeleteManyArgs>(args?: SelectSubset<T, MembershipApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipApplications
     * const membershipApplication = await prisma.membershipApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipApplicationUpdateManyArgs>(args: SelectSubset<T, MembershipApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipApplications and returns the data updated in the database.
     * @param {MembershipApplicationUpdateManyAndReturnArgs} args - Arguments to update many MembershipApplications.
     * @example
     * // Update many MembershipApplications
     * const membershipApplication = await prisma.membershipApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipApplications and only return the `id`
     * const membershipApplicationWithIdOnly = await prisma.membershipApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipApplication.
     * @param {MembershipApplicationUpsertArgs} args - Arguments to update or create a MembershipApplication.
     * @example
     * // Update or create a MembershipApplication
     * const membershipApplication = await prisma.membershipApplication.upsert({
     *   create: {
     *     // ... data to create a MembershipApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipApplication we want to update
     *   }
     * })
     */
    upsert<T extends MembershipApplicationUpsertArgs>(args: SelectSubset<T, MembershipApplicationUpsertArgs<ExtArgs>>): Prisma__MembershipApplicationClient<$Result.GetResult<Prisma.$MembershipApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationCountArgs} args - Arguments to filter MembershipApplications to count.
     * @example
     * // Count the number of MembershipApplications
     * const count = await prisma.membershipApplication.count({
     *   where: {
     *     // ... the filter for the MembershipApplications we want to count
     *   }
     * })
    **/
    count<T extends MembershipApplicationCountArgs>(
      args?: Subset<T, MembershipApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipApplicationAggregateArgs>(args: Subset<T, MembershipApplicationAggregateArgs>): Prisma.PrismaPromise<GetMembershipApplicationAggregateType<T>>

    /**
     * Group by MembershipApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipApplicationGroupByArgs} args - Group by arguments.
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
      T extends MembershipApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipApplicationGroupByArgs['orderBy'] }
        : { orderBy?: MembershipApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipApplication model
   */
  readonly fields: MembershipApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MembershipApplication model
   */
  interface MembershipApplicationFieldRefs {
    readonly id: FieldRef<"MembershipApplication", 'String'>
    readonly firstName: FieldRef<"MembershipApplication", 'String'>
    readonly lastName: FieldRef<"MembershipApplication", 'String'>
    readonly email: FieldRef<"MembershipApplication", 'String'>
    readonly phone: FieldRef<"MembershipApplication", 'String'>
    readonly membershipType: FieldRef<"MembershipApplication", 'String'>
    readonly experienceLevel: FieldRef<"MembershipApplication", 'String'>
    readonly interests: FieldRef<"MembershipApplication", 'String[]'>
    readonly comments: FieldRef<"MembershipApplication", 'String'>
    readonly status: FieldRef<"MembershipApplication", 'String'>
    readonly createdAt: FieldRef<"MembershipApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"MembershipApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipApplication findUnique
   */
  export type MembershipApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter, which MembershipApplication to fetch.
     */
    where: MembershipApplicationWhereUniqueInput
  }

  /**
   * MembershipApplication findUniqueOrThrow
   */
  export type MembershipApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter, which MembershipApplication to fetch.
     */
    where: MembershipApplicationWhereUniqueInput
  }

  /**
   * MembershipApplication findFirst
   */
  export type MembershipApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter, which MembershipApplication to fetch.
     */
    where?: MembershipApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipApplications to fetch.
     */
    orderBy?: MembershipApplicationOrderByWithRelationInput | MembershipApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipApplications.
     */
    cursor?: MembershipApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipApplications.
     */
    distinct?: MembershipApplicationScalarFieldEnum | MembershipApplicationScalarFieldEnum[]
  }

  /**
   * MembershipApplication findFirstOrThrow
   */
  export type MembershipApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter, which MembershipApplication to fetch.
     */
    where?: MembershipApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipApplications to fetch.
     */
    orderBy?: MembershipApplicationOrderByWithRelationInput | MembershipApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipApplications.
     */
    cursor?: MembershipApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipApplications.
     */
    distinct?: MembershipApplicationScalarFieldEnum | MembershipApplicationScalarFieldEnum[]
  }

  /**
   * MembershipApplication findMany
   */
  export type MembershipApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter, which MembershipApplications to fetch.
     */
    where?: MembershipApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipApplications to fetch.
     */
    orderBy?: MembershipApplicationOrderByWithRelationInput | MembershipApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipApplications.
     */
    cursor?: MembershipApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipApplications.
     */
    skip?: number
    distinct?: MembershipApplicationScalarFieldEnum | MembershipApplicationScalarFieldEnum[]
  }

  /**
   * MembershipApplication create
   */
  export type MembershipApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a MembershipApplication.
     */
    data: XOR<MembershipApplicationCreateInput, MembershipApplicationUncheckedCreateInput>
  }

  /**
   * MembershipApplication createMany
   */
  export type MembershipApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipApplications.
     */
    data: MembershipApplicationCreateManyInput | MembershipApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipApplication createManyAndReturn
   */
  export type MembershipApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipApplications.
     */
    data: MembershipApplicationCreateManyInput | MembershipApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipApplication update
   */
  export type MembershipApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a MembershipApplication.
     */
    data: XOR<MembershipApplicationUpdateInput, MembershipApplicationUncheckedUpdateInput>
    /**
     * Choose, which MembershipApplication to update.
     */
    where: MembershipApplicationWhereUniqueInput
  }

  /**
   * MembershipApplication updateMany
   */
  export type MembershipApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipApplications.
     */
    data: XOR<MembershipApplicationUpdateManyMutationInput, MembershipApplicationUncheckedUpdateManyInput>
    /**
     * Filter which MembershipApplications to update
     */
    where?: MembershipApplicationWhereInput
    /**
     * Limit how many MembershipApplications to update.
     */
    limit?: number
  }

  /**
   * MembershipApplication updateManyAndReturn
   */
  export type MembershipApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * The data used to update MembershipApplications.
     */
    data: XOR<MembershipApplicationUpdateManyMutationInput, MembershipApplicationUncheckedUpdateManyInput>
    /**
     * Filter which MembershipApplications to update
     */
    where?: MembershipApplicationWhereInput
    /**
     * Limit how many MembershipApplications to update.
     */
    limit?: number
  }

  /**
   * MembershipApplication upsert
   */
  export type MembershipApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the MembershipApplication to update in case it exists.
     */
    where: MembershipApplicationWhereUniqueInput
    /**
     * In case the MembershipApplication found by the `where` argument doesn't exist, create a new MembershipApplication with this data.
     */
    create: XOR<MembershipApplicationCreateInput, MembershipApplicationUncheckedCreateInput>
    /**
     * In case the MembershipApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipApplicationUpdateInput, MembershipApplicationUncheckedUpdateInput>
  }

  /**
   * MembershipApplication delete
   */
  export type MembershipApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
    /**
     * Filter which MembershipApplication to delete.
     */
    where: MembershipApplicationWhereUniqueInput
  }

  /**
   * MembershipApplication deleteMany
   */
  export type MembershipApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipApplications to delete
     */
    where?: MembershipApplicationWhereInput
    /**
     * Limit how many MembershipApplications to delete.
     */
    limit?: number
  }

  /**
   * MembershipApplication without action
   */
  export type MembershipApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipApplication
     */
    select?: MembershipApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipApplication
     */
    omit?: MembershipApplicationOmit<ExtArgs> | null
  }


  /**
   * Model EventRegistration
   */

  export type AggregateEventRegistration = {
    _count: EventRegistrationCountAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  export type EventRegistrationMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isMember: boolean | null
    status: string | null
    createdAt: Date | null
  }

  export type EventRegistrationMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isMember: boolean | null
    status: string | null
    createdAt: Date | null
  }

  export type EventRegistrationCountAggregateOutputType = {
    id: number
    eventId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    isMember: number
    status: number
    createdAt: number
    _all: number
  }


  export type EventRegistrationMinAggregateInputType = {
    id?: true
    eventId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isMember?: true
    status?: true
    createdAt?: true
  }

  export type EventRegistrationMaxAggregateInputType = {
    id?: true
    eventId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isMember?: true
    status?: true
    createdAt?: true
  }

  export type EventRegistrationCountAggregateInputType = {
    id?: true
    eventId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isMember?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EventRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistration to aggregate.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRegistrations
    **/
    _count?: true | EventRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type GetEventRegistrationAggregateType<T extends EventRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRegistration[P]>
      : GetScalarType<T[P], AggregateEventRegistration[P]>
  }




  export type EventRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithAggregationInput | EventRegistrationOrderByWithAggregationInput[]
    by: EventRegistrationScalarFieldEnum[] | EventRegistrationScalarFieldEnum
    having?: EventRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRegistrationCountAggregateInputType | true
    _min?: EventRegistrationMinAggregateInputType
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type EventRegistrationGroupByOutputType = {
    id: string
    eventId: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    isMember: boolean
    status: string
    createdAt: Date
    _count: EventRegistrationCountAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  type GetEventRegistrationGroupByPayload<T extends EventRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type EventRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isMember?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isMember?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isMember?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectScalar = {
    id?: boolean
    eventId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isMember?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EventRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "firstName" | "lastName" | "email" | "phone" | "isMember" | "status" | "createdAt", ExtArgs["result"]["eventRegistration"]>
  export type EventRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRegistration"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      isMember: boolean
      status: string
      createdAt: Date
    }, ExtArgs["result"]["eventRegistration"]>
    composites: {}
  }

  type EventRegistrationGetPayload<S extends boolean | null | undefined | EventRegistrationDefaultArgs> = $Result.GetResult<Prisma.$EventRegistrationPayload, S>

  type EventRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRegistrationCountAggregateInputType | true
    }

  export interface EventRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRegistration'], meta: { name: 'EventRegistration' } }
    /**
     * Find zero or one EventRegistration that matches the filter.
     * @param {EventRegistrationFindUniqueArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRegistrationFindUniqueArgs>(args: SelectSubset<T, EventRegistrationFindUniqueArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRegistrationFindUniqueOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRegistrationFindFirstArgs>(args?: SelectSubset<T, EventRegistrationFindFirstArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany()
     * 
     * // Get first 10 EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRegistrationFindManyArgs>(args?: SelectSubset<T, EventRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRegistration.
     * @param {EventRegistrationCreateArgs} args - Arguments to create a EventRegistration.
     * @example
     * // Create one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.create({
     *   data: {
     *     // ... data to create a EventRegistration
     *   }
     * })
     * 
     */
    create<T extends EventRegistrationCreateArgs>(args: SelectSubset<T, EventRegistrationCreateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRegistrations.
     * @param {EventRegistrationCreateManyArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRegistrationCreateManyArgs>(args?: SelectSubset<T, EventRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRegistrations and returns the data saved in the database.
     * @param {EventRegistrationCreateManyAndReturnArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRegistration.
     * @param {EventRegistrationDeleteArgs} args - Arguments to delete one EventRegistration.
     * @example
     * // Delete one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.delete({
     *   where: {
     *     // ... filter to delete one EventRegistration
     *   }
     * })
     * 
     */
    delete<T extends EventRegistrationDeleteArgs>(args: SelectSubset<T, EventRegistrationDeleteArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRegistration.
     * @param {EventRegistrationUpdateArgs} args - Arguments to update one EventRegistration.
     * @example
     * // Update one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRegistrationUpdateArgs>(args: SelectSubset<T, EventRegistrationUpdateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRegistrations.
     * @param {EventRegistrationDeleteManyArgs} args - Arguments to filter EventRegistrations to delete.
     * @example
     * // Delete a few EventRegistrations
     * const { count } = await prisma.eventRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRegistrationDeleteManyArgs>(args?: SelectSubset<T, EventRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRegistrationUpdateManyArgs>(args: SelectSubset<T, EventRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations and returns the data updated in the database.
     * @param {EventRegistrationUpdateManyAndReturnArgs} args - Arguments to update many EventRegistrations.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRegistration.
     * @param {EventRegistrationUpsertArgs} args - Arguments to update or create a EventRegistration.
     * @example
     * // Update or create a EventRegistration
     * const eventRegistration = await prisma.eventRegistration.upsert({
     *   create: {
     *     // ... data to create a EventRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRegistration we want to update
     *   }
     * })
     */
    upsert<T extends EventRegistrationUpsertArgs>(args: SelectSubset<T, EventRegistrationUpsertArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationCountArgs} args - Arguments to filter EventRegistrations to count.
     * @example
     * // Count the number of EventRegistrations
     * const count = await prisma.eventRegistration.count({
     *   where: {
     *     // ... the filter for the EventRegistrations we want to count
     *   }
     * })
    **/
    count<T extends EventRegistrationCountArgs>(
      args?: Subset<T, EventRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRegistrationAggregateArgs>(args: Subset<T, EventRegistrationAggregateArgs>): Prisma.PrismaPromise<GetEventRegistrationAggregateType<T>>

    /**
     * Group by EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationGroupByArgs} args - Group by arguments.
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
      T extends EventRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: EventRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRegistration model
   */
  readonly fields: EventRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventRegistration model
   */
  interface EventRegistrationFieldRefs {
    readonly id: FieldRef<"EventRegistration", 'String'>
    readonly eventId: FieldRef<"EventRegistration", 'String'>
    readonly firstName: FieldRef<"EventRegistration", 'String'>
    readonly lastName: FieldRef<"EventRegistration", 'String'>
    readonly email: FieldRef<"EventRegistration", 'String'>
    readonly phone: FieldRef<"EventRegistration", 'String'>
    readonly isMember: FieldRef<"EventRegistration", 'Boolean'>
    readonly status: FieldRef<"EventRegistration", 'String'>
    readonly createdAt: FieldRef<"EventRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventRegistration findUnique
   */
  export type EventRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findUniqueOrThrow
   */
  export type EventRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findFirst
   */
  export type EventRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findFirstOrThrow
   */
  export type EventRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findMany
   */
  export type EventRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistrations to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration create
   */
  export type EventRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRegistration.
     */
    data: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
  }

  /**
   * EventRegistration createMany
   */
  export type EventRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRegistration createManyAndReturn
   */
  export type EventRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration update
   */
  export type EventRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRegistration.
     */
    data: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
    /**
     * Choose, which EventRegistration to update.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration updateMany
   */
  export type EventRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
  }

  /**
   * EventRegistration updateManyAndReturn
   */
  export type EventRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration upsert
   */
  export type EventRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRegistration to update in case it exists.
     */
    where: EventRegistrationWhereUniqueInput
    /**
     * In case the EventRegistration found by the `where` argument doesn't exist, create a new EventRegistration with this data.
     */
    create: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
    /**
     * In case the EventRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
  }

  /**
   * EventRegistration delete
   */
  export type EventRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter which EventRegistration to delete.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration deleteMany
   */
  export type EventRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistrations to delete
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to delete.
     */
    limit?: number
  }

  /**
   * EventRegistration without action
   */
  export type EventRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model WebsiteSetting
   */

  export type AggregateWebsiteSetting = {
    _count: WebsiteSettingCountAggregateOutputType | null
    _min: WebsiteSettingMinAggregateOutputType | null
    _max: WebsiteSettingMaxAggregateOutputType | null
  }

  export type WebsiteSettingMinAggregateOutputType = {
    id: string | null
    settingKey: string | null
    settingValue: string | null
    languageCode: string | null
    updatedAt: Date | null
  }

  export type WebsiteSettingMaxAggregateOutputType = {
    id: string | null
    settingKey: string | null
    settingValue: string | null
    languageCode: string | null
    updatedAt: Date | null
  }

  export type WebsiteSettingCountAggregateOutputType = {
    id: number
    settingKey: number
    settingValue: number
    languageCode: number
    updatedAt: number
    _all: number
  }


  export type WebsiteSettingMinAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    languageCode?: true
    updatedAt?: true
  }

  export type WebsiteSettingMaxAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    languageCode?: true
    updatedAt?: true
  }

  export type WebsiteSettingCountAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    languageCode?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteSetting to aggregate.
     */
    where?: WebsiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteSettings to fetch.
     */
    orderBy?: WebsiteSettingOrderByWithRelationInput | WebsiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsiteSettings
    **/
    _count?: true | WebsiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteSettingMaxAggregateInputType
  }

  export type GetWebsiteSettingAggregateType<T extends WebsiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteSetting[P]>
      : GetScalarType<T[P], AggregateWebsiteSetting[P]>
  }




  export type WebsiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteSettingWhereInput
    orderBy?: WebsiteSettingOrderByWithAggregationInput | WebsiteSettingOrderByWithAggregationInput[]
    by: WebsiteSettingScalarFieldEnum[] | WebsiteSettingScalarFieldEnum
    having?: WebsiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteSettingCountAggregateInputType | true
    _min?: WebsiteSettingMinAggregateInputType
    _max?: WebsiteSettingMaxAggregateInputType
  }

  export type WebsiteSettingGroupByOutputType = {
    id: string
    settingKey: string
    settingValue: string | null
    languageCode: string | null
    updatedAt: Date
    _count: WebsiteSettingCountAggregateOutputType | null
    _min: WebsiteSettingMinAggregateOutputType | null
    _max: WebsiteSettingMaxAggregateOutputType | null
  }

  type GetWebsiteSettingGroupByPayload<T extends WebsiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    languageCode?: boolean
    updatedAt?: boolean
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }, ExtArgs["result"]["websiteSetting"]>

  export type WebsiteSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    languageCode?: boolean
    updatedAt?: boolean
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }, ExtArgs["result"]["websiteSetting"]>

  export type WebsiteSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    languageCode?: boolean
    updatedAt?: boolean
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }, ExtArgs["result"]["websiteSetting"]>

  export type WebsiteSettingSelectScalar = {
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    languageCode?: boolean
    updatedAt?: boolean
  }

  export type WebsiteSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "settingKey" | "settingValue" | "languageCode" | "updatedAt", ExtArgs["result"]["websiteSetting"]>
  export type WebsiteSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }
  export type WebsiteSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }
  export type WebsiteSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | WebsiteSetting$languageArgs<ExtArgs>
  }

  export type $WebsiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsiteSetting"
    objects: {
      language: Prisma.$LanguagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      settingKey: string
      settingValue: string | null
      languageCode: string | null
      updatedAt: Date
    }, ExtArgs["result"]["websiteSetting"]>
    composites: {}
  }

  type WebsiteSettingGetPayload<S extends boolean | null | undefined | WebsiteSettingDefaultArgs> = $Result.GetResult<Prisma.$WebsiteSettingPayload, S>

  type WebsiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteSettingCountAggregateInputType | true
    }

  export interface WebsiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsiteSetting'], meta: { name: 'WebsiteSetting' } }
    /**
     * Find zero or one WebsiteSetting that matches the filter.
     * @param {WebsiteSettingFindUniqueArgs} args - Arguments to find a WebsiteSetting
     * @example
     * // Get one WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteSettingFindUniqueArgs>(args: SelectSubset<T, WebsiteSettingFindUniqueArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteSettingFindUniqueOrThrowArgs} args - Arguments to find a WebsiteSetting
     * @example
     * // Get one WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingFindFirstArgs} args - Arguments to find a WebsiteSetting
     * @example
     * // Get one WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteSettingFindFirstArgs>(args?: SelectSubset<T, WebsiteSettingFindFirstArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingFindFirstOrThrowArgs} args - Arguments to find a WebsiteSetting
     * @example
     * // Get one WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteSettings
     * const websiteSettings = await prisma.websiteSetting.findMany()
     * 
     * // Get first 10 WebsiteSettings
     * const websiteSettings = await prisma.websiteSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteSettingWithIdOnly = await prisma.websiteSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteSettingFindManyArgs>(args?: SelectSubset<T, WebsiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteSetting.
     * @param {WebsiteSettingCreateArgs} args - Arguments to create a WebsiteSetting.
     * @example
     * // Create one WebsiteSetting
     * const WebsiteSetting = await prisma.websiteSetting.create({
     *   data: {
     *     // ... data to create a WebsiteSetting
     *   }
     * })
     * 
     */
    create<T extends WebsiteSettingCreateArgs>(args: SelectSubset<T, WebsiteSettingCreateArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteSettings.
     * @param {WebsiteSettingCreateManyArgs} args - Arguments to create many WebsiteSettings.
     * @example
     * // Create many WebsiteSettings
     * const websiteSetting = await prisma.websiteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteSettingCreateManyArgs>(args?: SelectSubset<T, WebsiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteSettings and returns the data saved in the database.
     * @param {WebsiteSettingCreateManyAndReturnArgs} args - Arguments to create many WebsiteSettings.
     * @example
     * // Create many WebsiteSettings
     * const websiteSetting = await prisma.websiteSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteSettings and only return the `id`
     * const websiteSettingWithIdOnly = await prisma.websiteSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteSetting.
     * @param {WebsiteSettingDeleteArgs} args - Arguments to delete one WebsiteSetting.
     * @example
     * // Delete one WebsiteSetting
     * const WebsiteSetting = await prisma.websiteSetting.delete({
     *   where: {
     *     // ... filter to delete one WebsiteSetting
     *   }
     * })
     * 
     */
    delete<T extends WebsiteSettingDeleteArgs>(args: SelectSubset<T, WebsiteSettingDeleteArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteSetting.
     * @param {WebsiteSettingUpdateArgs} args - Arguments to update one WebsiteSetting.
     * @example
     * // Update one WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteSettingUpdateArgs>(args: SelectSubset<T, WebsiteSettingUpdateArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteSettings.
     * @param {WebsiteSettingDeleteManyArgs} args - Arguments to filter WebsiteSettings to delete.
     * @example
     * // Delete a few WebsiteSettings
     * const { count } = await prisma.websiteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteSettingDeleteManyArgs>(args?: SelectSubset<T, WebsiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteSettings
     * const websiteSetting = await prisma.websiteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteSettingUpdateManyArgs>(args: SelectSubset<T, WebsiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteSettings and returns the data updated in the database.
     * @param {WebsiteSettingUpdateManyAndReturnArgs} args - Arguments to update many WebsiteSettings.
     * @example
     * // Update many WebsiteSettings
     * const websiteSetting = await prisma.websiteSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteSettings and only return the `id`
     * const websiteSettingWithIdOnly = await prisma.websiteSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteSetting.
     * @param {WebsiteSettingUpsertArgs} args - Arguments to update or create a WebsiteSetting.
     * @example
     * // Update or create a WebsiteSetting
     * const websiteSetting = await prisma.websiteSetting.upsert({
     *   create: {
     *     // ... data to create a WebsiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteSettingUpsertArgs>(args: SelectSubset<T, WebsiteSettingUpsertArgs<ExtArgs>>): Prisma__WebsiteSettingClient<$Result.GetResult<Prisma.$WebsiteSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingCountArgs} args - Arguments to filter WebsiteSettings to count.
     * @example
     * // Count the number of WebsiteSettings
     * const count = await prisma.websiteSetting.count({
     *   where: {
     *     // ... the filter for the WebsiteSettings we want to count
     *   }
     * })
    **/
    count<T extends WebsiteSettingCountArgs>(
      args?: Subset<T, WebsiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteSettingAggregateArgs>(args: Subset<T, WebsiteSettingAggregateArgs>): Prisma.PrismaPromise<GetWebsiteSettingAggregateType<T>>

    /**
     * Group by WebsiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteSettingGroupByArgs} args - Group by arguments.
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
      T extends WebsiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsiteSetting model
   */
  readonly fields: WebsiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    language<T extends WebsiteSetting$languageArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteSetting$languageArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebsiteSetting model
   */
  interface WebsiteSettingFieldRefs {
    readonly id: FieldRef<"WebsiteSetting", 'String'>
    readonly settingKey: FieldRef<"WebsiteSetting", 'String'>
    readonly settingValue: FieldRef<"WebsiteSetting", 'String'>
    readonly languageCode: FieldRef<"WebsiteSetting", 'String'>
    readonly updatedAt: FieldRef<"WebsiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebsiteSetting findUnique
   */
  export type WebsiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteSetting to fetch.
     */
    where: WebsiteSettingWhereUniqueInput
  }

  /**
   * WebsiteSetting findUniqueOrThrow
   */
  export type WebsiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteSetting to fetch.
     */
    where: WebsiteSettingWhereUniqueInput
  }

  /**
   * WebsiteSetting findFirst
   */
  export type WebsiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteSetting to fetch.
     */
    where?: WebsiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteSettings to fetch.
     */
    orderBy?: WebsiteSettingOrderByWithRelationInput | WebsiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteSettings.
     */
    cursor?: WebsiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteSettings.
     */
    distinct?: WebsiteSettingScalarFieldEnum | WebsiteSettingScalarFieldEnum[]
  }

  /**
   * WebsiteSetting findFirstOrThrow
   */
  export type WebsiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteSetting to fetch.
     */
    where?: WebsiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteSettings to fetch.
     */
    orderBy?: WebsiteSettingOrderByWithRelationInput | WebsiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteSettings.
     */
    cursor?: WebsiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteSettings.
     */
    distinct?: WebsiteSettingScalarFieldEnum | WebsiteSettingScalarFieldEnum[]
  }

  /**
   * WebsiteSetting findMany
   */
  export type WebsiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteSettings to fetch.
     */
    where?: WebsiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteSettings to fetch.
     */
    orderBy?: WebsiteSettingOrderByWithRelationInput | WebsiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsiteSettings.
     */
    cursor?: WebsiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteSettings.
     */
    skip?: number
    distinct?: WebsiteSettingScalarFieldEnum | WebsiteSettingScalarFieldEnum[]
  }

  /**
   * WebsiteSetting create
   */
  export type WebsiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a WebsiteSetting.
     */
    data: XOR<WebsiteSettingCreateInput, WebsiteSettingUncheckedCreateInput>
  }

  /**
   * WebsiteSetting createMany
   */
  export type WebsiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsiteSettings.
     */
    data: WebsiteSettingCreateManyInput | WebsiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteSetting createManyAndReturn
   */
  export type WebsiteSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * The data used to create many WebsiteSettings.
     */
    data: WebsiteSettingCreateManyInput | WebsiteSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteSetting update
   */
  export type WebsiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a WebsiteSetting.
     */
    data: XOR<WebsiteSettingUpdateInput, WebsiteSettingUncheckedUpdateInput>
    /**
     * Choose, which WebsiteSetting to update.
     */
    where: WebsiteSettingWhereUniqueInput
  }

  /**
   * WebsiteSetting updateMany
   */
  export type WebsiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsiteSettings.
     */
    data: XOR<WebsiteSettingUpdateManyMutationInput, WebsiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteSettings to update
     */
    where?: WebsiteSettingWhereInput
    /**
     * Limit how many WebsiteSettings to update.
     */
    limit?: number
  }

  /**
   * WebsiteSetting updateManyAndReturn
   */
  export type WebsiteSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * The data used to update WebsiteSettings.
     */
    data: XOR<WebsiteSettingUpdateManyMutationInput, WebsiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteSettings to update
     */
    where?: WebsiteSettingWhereInput
    /**
     * Limit how many WebsiteSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteSetting upsert
   */
  export type WebsiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the WebsiteSetting to update in case it exists.
     */
    where: WebsiteSettingWhereUniqueInput
    /**
     * In case the WebsiteSetting found by the `where` argument doesn't exist, create a new WebsiteSetting with this data.
     */
    create: XOR<WebsiteSettingCreateInput, WebsiteSettingUncheckedCreateInput>
    /**
     * In case the WebsiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteSettingUpdateInput, WebsiteSettingUncheckedUpdateInput>
  }

  /**
   * WebsiteSetting delete
   */
  export type WebsiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
    /**
     * Filter which WebsiteSetting to delete.
     */
    where: WebsiteSettingWhereUniqueInput
  }

  /**
   * WebsiteSetting deleteMany
   */
  export type WebsiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteSettings to delete
     */
    where?: WebsiteSettingWhereInput
    /**
     * Limit how many WebsiteSettings to delete.
     */
    limit?: number
  }

  /**
   * WebsiteSetting.language
   */
  export type WebsiteSetting$languageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
  }

  /**
   * WebsiteSetting without action
   */
  export type WebsiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteSetting
     */
    select?: WebsiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteSetting
     */
    omit?: WebsiteSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteSettingInclude<ExtArgs> | null
  }


  /**
   * Model BlogStats
   */

  export type AggregateBlogStats = {
    _count: BlogStatsCountAggregateOutputType | null
    _avg: BlogStatsAvgAggregateOutputType | null
    _sum: BlogStatsSumAggregateOutputType | null
    _min: BlogStatsMinAggregateOutputType | null
    _max: BlogStatsMaxAggregateOutputType | null
  }

  export type BlogStatsAvgAggregateOutputType = {
    totalPosts: number | null
    publishedPosts: number | null
    draftPosts: number | null
    archivedPosts: number | null
    recentPosts: number | null
    averageReadTime: number | null
    postTrend: number | null
    publishingRate: number | null
    completionRate: number | null
  }

  export type BlogStatsSumAggregateOutputType = {
    totalPosts: number | null
    publishedPosts: number | null
    draftPosts: number | null
    archivedPosts: number | null
    recentPosts: number | null
    averageReadTime: number | null
    postTrend: number | null
    publishingRate: number | null
    completionRate: number | null
  }

  export type BlogStatsMinAggregateOutputType = {
    id: string | null
    totalPosts: number | null
    publishedPosts: number | null
    draftPosts: number | null
    archivedPosts: number | null
    recentPosts: number | null
    averageReadTime: number | null
    postTrend: number | null
    publishingRate: number | null
    completionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogStatsMaxAggregateOutputType = {
    id: string | null
    totalPosts: number | null
    publishedPosts: number | null
    draftPosts: number | null
    archivedPosts: number | null
    recentPosts: number | null
    averageReadTime: number | null
    postTrend: number | null
    publishingRate: number | null
    completionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogStatsCountAggregateOutputType = {
    id: number
    totalPosts: number
    publishedPosts: number
    draftPosts: number
    archivedPosts: number
    recentPosts: number
    postsByCategory: number
    postsByMonth: number
    postsByAuthor: number
    averageReadTime: number
    postTrend: number
    publishingRate: number
    completionRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogStatsAvgAggregateInputType = {
    totalPosts?: true
    publishedPosts?: true
    draftPosts?: true
    archivedPosts?: true
    recentPosts?: true
    averageReadTime?: true
    postTrend?: true
    publishingRate?: true
    completionRate?: true
  }

  export type BlogStatsSumAggregateInputType = {
    totalPosts?: true
    publishedPosts?: true
    draftPosts?: true
    archivedPosts?: true
    recentPosts?: true
    averageReadTime?: true
    postTrend?: true
    publishingRate?: true
    completionRate?: true
  }

  export type BlogStatsMinAggregateInputType = {
    id?: true
    totalPosts?: true
    publishedPosts?: true
    draftPosts?: true
    archivedPosts?: true
    recentPosts?: true
    averageReadTime?: true
    postTrend?: true
    publishingRate?: true
    completionRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogStatsMaxAggregateInputType = {
    id?: true
    totalPosts?: true
    publishedPosts?: true
    draftPosts?: true
    archivedPosts?: true
    recentPosts?: true
    averageReadTime?: true
    postTrend?: true
    publishingRate?: true
    completionRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogStatsCountAggregateInputType = {
    id?: true
    totalPosts?: true
    publishedPosts?: true
    draftPosts?: true
    archivedPosts?: true
    recentPosts?: true
    postsByCategory?: true
    postsByMonth?: true
    postsByAuthor?: true
    averageReadTime?: true
    postTrend?: true
    publishingRate?: true
    completionRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogStats to aggregate.
     */
    where?: BlogStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogStats to fetch.
     */
    orderBy?: BlogStatsOrderByWithRelationInput | BlogStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogStats
    **/
    _count?: true | BlogStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogStatsMaxAggregateInputType
  }

  export type GetBlogStatsAggregateType<T extends BlogStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogStats[P]>
      : GetScalarType<T[P], AggregateBlogStats[P]>
  }




  export type BlogStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogStatsWhereInput
    orderBy?: BlogStatsOrderByWithAggregationInput | BlogStatsOrderByWithAggregationInput[]
    by: BlogStatsScalarFieldEnum[] | BlogStatsScalarFieldEnum
    having?: BlogStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogStatsCountAggregateInputType | true
    _avg?: BlogStatsAvgAggregateInputType
    _sum?: BlogStatsSumAggregateInputType
    _min?: BlogStatsMinAggregateInputType
    _max?: BlogStatsMaxAggregateInputType
  }

  export type BlogStatsGroupByOutputType = {
    id: string
    totalPosts: number
    publishedPosts: number
    draftPosts: number
    archivedPosts: number
    recentPosts: number
    postsByCategory: JsonValue
    postsByMonth: JsonValue
    postsByAuthor: JsonValue
    averageReadTime: number
    postTrend: number
    publishingRate: number
    completionRate: number
    createdAt: Date
    updatedAt: Date
    _count: BlogStatsCountAggregateOutputType | null
    _avg: BlogStatsAvgAggregateOutputType | null
    _sum: BlogStatsSumAggregateOutputType | null
    _min: BlogStatsMinAggregateOutputType | null
    _max: BlogStatsMaxAggregateOutputType | null
  }

  type GetBlogStatsGroupByPayload<T extends BlogStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogStatsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogStatsGroupByOutputType[P]>
        }
      >
    >


  export type BlogStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPosts?: boolean
    publishedPosts?: boolean
    draftPosts?: boolean
    archivedPosts?: boolean
    recentPosts?: boolean
    postsByCategory?: boolean
    postsByMonth?: boolean
    postsByAuthor?: boolean
    averageReadTime?: boolean
    postTrend?: boolean
    publishingRate?: boolean
    completionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogStats"]>

  export type BlogStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPosts?: boolean
    publishedPosts?: boolean
    draftPosts?: boolean
    archivedPosts?: boolean
    recentPosts?: boolean
    postsByCategory?: boolean
    postsByMonth?: boolean
    postsByAuthor?: boolean
    averageReadTime?: boolean
    postTrend?: boolean
    publishingRate?: boolean
    completionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogStats"]>

  export type BlogStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPosts?: boolean
    publishedPosts?: boolean
    draftPosts?: boolean
    archivedPosts?: boolean
    recentPosts?: boolean
    postsByCategory?: boolean
    postsByMonth?: boolean
    postsByAuthor?: boolean
    averageReadTime?: boolean
    postTrend?: boolean
    publishingRate?: boolean
    completionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogStats"]>

  export type BlogStatsSelectScalar = {
    id?: boolean
    totalPosts?: boolean
    publishedPosts?: boolean
    draftPosts?: boolean
    archivedPosts?: boolean
    recentPosts?: boolean
    postsByCategory?: boolean
    postsByMonth?: boolean
    postsByAuthor?: boolean
    averageReadTime?: boolean
    postTrend?: boolean
    publishingRate?: boolean
    completionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalPosts" | "publishedPosts" | "draftPosts" | "archivedPosts" | "recentPosts" | "postsByCategory" | "postsByMonth" | "postsByAuthor" | "averageReadTime" | "postTrend" | "publishingRate" | "completionRate" | "createdAt" | "updatedAt", ExtArgs["result"]["blogStats"]>

  export type $BlogStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalPosts: number
      publishedPosts: number
      draftPosts: number
      archivedPosts: number
      recentPosts: number
      postsByCategory: Prisma.JsonValue
      postsByMonth: Prisma.JsonValue
      postsByAuthor: Prisma.JsonValue
      averageReadTime: number
      postTrend: number
      publishingRate: number
      completionRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogStats"]>
    composites: {}
  }

  type BlogStatsGetPayload<S extends boolean | null | undefined | BlogStatsDefaultArgs> = $Result.GetResult<Prisma.$BlogStatsPayload, S>

  type BlogStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogStatsCountAggregateInputType | true
    }

  export interface BlogStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogStats'], meta: { name: 'BlogStats' } }
    /**
     * Find zero or one BlogStats that matches the filter.
     * @param {BlogStatsFindUniqueArgs} args - Arguments to find a BlogStats
     * @example
     * // Get one BlogStats
     * const blogStats = await prisma.blogStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogStatsFindUniqueArgs>(args: SelectSubset<T, BlogStatsFindUniqueArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogStatsFindUniqueOrThrowArgs} args - Arguments to find a BlogStats
     * @example
     * // Get one BlogStats
     * const blogStats = await prisma.blogStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsFindFirstArgs} args - Arguments to find a BlogStats
     * @example
     * // Get one BlogStats
     * const blogStats = await prisma.blogStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogStatsFindFirstArgs>(args?: SelectSubset<T, BlogStatsFindFirstArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsFindFirstOrThrowArgs} args - Arguments to find a BlogStats
     * @example
     * // Get one BlogStats
     * const blogStats = await prisma.blogStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogStats
     * const blogStats = await prisma.blogStats.findMany()
     * 
     * // Get first 10 BlogStats
     * const blogStats = await prisma.blogStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogStatsWithIdOnly = await prisma.blogStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogStatsFindManyArgs>(args?: SelectSubset<T, BlogStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogStats.
     * @param {BlogStatsCreateArgs} args - Arguments to create a BlogStats.
     * @example
     * // Create one BlogStats
     * const BlogStats = await prisma.blogStats.create({
     *   data: {
     *     // ... data to create a BlogStats
     *   }
     * })
     * 
     */
    create<T extends BlogStatsCreateArgs>(args: SelectSubset<T, BlogStatsCreateArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogStats.
     * @param {BlogStatsCreateManyArgs} args - Arguments to create many BlogStats.
     * @example
     * // Create many BlogStats
     * const blogStats = await prisma.blogStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogStatsCreateManyArgs>(args?: SelectSubset<T, BlogStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogStats and returns the data saved in the database.
     * @param {BlogStatsCreateManyAndReturnArgs} args - Arguments to create many BlogStats.
     * @example
     * // Create many BlogStats
     * const blogStats = await prisma.blogStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogStats and only return the `id`
     * const blogStatsWithIdOnly = await prisma.blogStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogStats.
     * @param {BlogStatsDeleteArgs} args - Arguments to delete one BlogStats.
     * @example
     * // Delete one BlogStats
     * const BlogStats = await prisma.blogStats.delete({
     *   where: {
     *     // ... filter to delete one BlogStats
     *   }
     * })
     * 
     */
    delete<T extends BlogStatsDeleteArgs>(args: SelectSubset<T, BlogStatsDeleteArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogStats.
     * @param {BlogStatsUpdateArgs} args - Arguments to update one BlogStats.
     * @example
     * // Update one BlogStats
     * const blogStats = await prisma.blogStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogStatsUpdateArgs>(args: SelectSubset<T, BlogStatsUpdateArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogStats.
     * @param {BlogStatsDeleteManyArgs} args - Arguments to filter BlogStats to delete.
     * @example
     * // Delete a few BlogStats
     * const { count } = await prisma.blogStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogStatsDeleteManyArgs>(args?: SelectSubset<T, BlogStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogStats
     * const blogStats = await prisma.blogStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogStatsUpdateManyArgs>(args: SelectSubset<T, BlogStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogStats and returns the data updated in the database.
     * @param {BlogStatsUpdateManyAndReturnArgs} args - Arguments to update many BlogStats.
     * @example
     * // Update many BlogStats
     * const blogStats = await prisma.blogStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogStats and only return the `id`
     * const blogStatsWithIdOnly = await prisma.blogStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogStats.
     * @param {BlogStatsUpsertArgs} args - Arguments to update or create a BlogStats.
     * @example
     * // Update or create a BlogStats
     * const blogStats = await prisma.blogStats.upsert({
     *   create: {
     *     // ... data to create a BlogStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogStats we want to update
     *   }
     * })
     */
    upsert<T extends BlogStatsUpsertArgs>(args: SelectSubset<T, BlogStatsUpsertArgs<ExtArgs>>): Prisma__BlogStatsClient<$Result.GetResult<Prisma.$BlogStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsCountArgs} args - Arguments to filter BlogStats to count.
     * @example
     * // Count the number of BlogStats
     * const count = await prisma.blogStats.count({
     *   where: {
     *     // ... the filter for the BlogStats we want to count
     *   }
     * })
    **/
    count<T extends BlogStatsCountArgs>(
      args?: Subset<T, BlogStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogStatsAggregateArgs>(args: Subset<T, BlogStatsAggregateArgs>): Prisma.PrismaPromise<GetBlogStatsAggregateType<T>>

    /**
     * Group by BlogStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogStatsGroupByArgs} args - Group by arguments.
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
      T extends BlogStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogStatsGroupByArgs['orderBy'] }
        : { orderBy?: BlogStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogStats model
   */
  readonly fields: BlogStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BlogStats model
   */
  interface BlogStatsFieldRefs {
    readonly id: FieldRef<"BlogStats", 'String'>
    readonly totalPosts: FieldRef<"BlogStats", 'Int'>
    readonly publishedPosts: FieldRef<"BlogStats", 'Int'>
    readonly draftPosts: FieldRef<"BlogStats", 'Int'>
    readonly archivedPosts: FieldRef<"BlogStats", 'Int'>
    readonly recentPosts: FieldRef<"BlogStats", 'Int'>
    readonly postsByCategory: FieldRef<"BlogStats", 'Json'>
    readonly postsByMonth: FieldRef<"BlogStats", 'Json'>
    readonly postsByAuthor: FieldRef<"BlogStats", 'Json'>
    readonly averageReadTime: FieldRef<"BlogStats", 'Int'>
    readonly postTrend: FieldRef<"BlogStats", 'Float'>
    readonly publishingRate: FieldRef<"BlogStats", 'Float'>
    readonly completionRate: FieldRef<"BlogStats", 'Float'>
    readonly createdAt: FieldRef<"BlogStats", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogStats findUnique
   */
  export type BlogStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter, which BlogStats to fetch.
     */
    where: BlogStatsWhereUniqueInput
  }

  /**
   * BlogStats findUniqueOrThrow
   */
  export type BlogStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter, which BlogStats to fetch.
     */
    where: BlogStatsWhereUniqueInput
  }

  /**
   * BlogStats findFirst
   */
  export type BlogStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter, which BlogStats to fetch.
     */
    where?: BlogStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogStats to fetch.
     */
    orderBy?: BlogStatsOrderByWithRelationInput | BlogStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogStats.
     */
    cursor?: BlogStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogStats.
     */
    distinct?: BlogStatsScalarFieldEnum | BlogStatsScalarFieldEnum[]
  }

  /**
   * BlogStats findFirstOrThrow
   */
  export type BlogStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter, which BlogStats to fetch.
     */
    where?: BlogStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogStats to fetch.
     */
    orderBy?: BlogStatsOrderByWithRelationInput | BlogStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogStats.
     */
    cursor?: BlogStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogStats.
     */
    distinct?: BlogStatsScalarFieldEnum | BlogStatsScalarFieldEnum[]
  }

  /**
   * BlogStats findMany
   */
  export type BlogStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter, which BlogStats to fetch.
     */
    where?: BlogStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogStats to fetch.
     */
    orderBy?: BlogStatsOrderByWithRelationInput | BlogStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogStats.
     */
    cursor?: BlogStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogStats.
     */
    skip?: number
    distinct?: BlogStatsScalarFieldEnum | BlogStatsScalarFieldEnum[]
  }

  /**
   * BlogStats create
   */
  export type BlogStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a BlogStats.
     */
    data: XOR<BlogStatsCreateInput, BlogStatsUncheckedCreateInput>
  }

  /**
   * BlogStats createMany
   */
  export type BlogStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogStats.
     */
    data: BlogStatsCreateManyInput | BlogStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogStats createManyAndReturn
   */
  export type BlogStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * The data used to create many BlogStats.
     */
    data: BlogStatsCreateManyInput | BlogStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogStats update
   */
  export type BlogStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a BlogStats.
     */
    data: XOR<BlogStatsUpdateInput, BlogStatsUncheckedUpdateInput>
    /**
     * Choose, which BlogStats to update.
     */
    where: BlogStatsWhereUniqueInput
  }

  /**
   * BlogStats updateMany
   */
  export type BlogStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogStats.
     */
    data: XOR<BlogStatsUpdateManyMutationInput, BlogStatsUncheckedUpdateManyInput>
    /**
     * Filter which BlogStats to update
     */
    where?: BlogStatsWhereInput
    /**
     * Limit how many BlogStats to update.
     */
    limit?: number
  }

  /**
   * BlogStats updateManyAndReturn
   */
  export type BlogStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * The data used to update BlogStats.
     */
    data: XOR<BlogStatsUpdateManyMutationInput, BlogStatsUncheckedUpdateManyInput>
    /**
     * Filter which BlogStats to update
     */
    where?: BlogStatsWhereInput
    /**
     * Limit how many BlogStats to update.
     */
    limit?: number
  }

  /**
   * BlogStats upsert
   */
  export type BlogStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the BlogStats to update in case it exists.
     */
    where: BlogStatsWhereUniqueInput
    /**
     * In case the BlogStats found by the `where` argument doesn't exist, create a new BlogStats with this data.
     */
    create: XOR<BlogStatsCreateInput, BlogStatsUncheckedCreateInput>
    /**
     * In case the BlogStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogStatsUpdateInput, BlogStatsUncheckedUpdateInput>
  }

  /**
   * BlogStats delete
   */
  export type BlogStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
    /**
     * Filter which BlogStats to delete.
     */
    where: BlogStatsWhereUniqueInput
  }

  /**
   * BlogStats deleteMany
   */
  export type BlogStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogStats to delete
     */
    where?: BlogStatsWhereInput
    /**
     * Limit how many BlogStats to delete.
     */
    limit?: number
  }

  /**
   * BlogStats without action
   */
  export type BlogStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogStats
     */
    select?: BlogStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogStats
     */
    omit?: BlogStatsOmit<ExtArgs> | null
  }


  /**
   * Model EventStats
   */

  export type AggregateEventStats = {
    _count: EventStatsCountAggregateOutputType | null
    _avg: EventStatsAvgAggregateOutputType | null
    _sum: EventStatsSumAggregateOutputType | null
    _min: EventStatsMinAggregateOutputType | null
    _max: EventStatsMaxAggregateOutputType | null
  }

  export type EventStatsAvgAggregateOutputType = {
    totalEvents: number | null
    upcomingEvents: number | null
    ongoingEvents: number | null
    totalParticipants: number | null
    averageParticipants: number | null
    participationRate: number | null
  }

  export type EventStatsSumAggregateOutputType = {
    totalEvents: number | null
    upcomingEvents: number | null
    ongoingEvents: number | null
    totalParticipants: number | null
    averageParticipants: number | null
    participationRate: number | null
  }

  export type EventStatsMinAggregateOutputType = {
    id: string | null
    totalEvents: number | null
    upcomingEvents: number | null
    ongoingEvents: number | null
    totalParticipants: number | null
    averageParticipants: number | null
    participationRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventStatsMaxAggregateOutputType = {
    id: string | null
    totalEvents: number | null
    upcomingEvents: number | null
    ongoingEvents: number | null
    totalParticipants: number | null
    averageParticipants: number | null
    participationRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventStatsCountAggregateOutputType = {
    id: number
    totalEvents: number
    upcomingEvents: number
    ongoingEvents: number
    totalParticipants: number
    eventsByType: number
    eventsByMonth: number
    averageParticipants: number
    participationRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventStatsAvgAggregateInputType = {
    totalEvents?: true
    upcomingEvents?: true
    ongoingEvents?: true
    totalParticipants?: true
    averageParticipants?: true
    participationRate?: true
  }

  export type EventStatsSumAggregateInputType = {
    totalEvents?: true
    upcomingEvents?: true
    ongoingEvents?: true
    totalParticipants?: true
    averageParticipants?: true
    participationRate?: true
  }

  export type EventStatsMinAggregateInputType = {
    id?: true
    totalEvents?: true
    upcomingEvents?: true
    ongoingEvents?: true
    totalParticipants?: true
    averageParticipants?: true
    participationRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventStatsMaxAggregateInputType = {
    id?: true
    totalEvents?: true
    upcomingEvents?: true
    ongoingEvents?: true
    totalParticipants?: true
    averageParticipants?: true
    participationRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventStatsCountAggregateInputType = {
    id?: true
    totalEvents?: true
    upcomingEvents?: true
    ongoingEvents?: true
    totalParticipants?: true
    eventsByType?: true
    eventsByMonth?: true
    averageParticipants?: true
    participationRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventStats to aggregate.
     */
    where?: EventStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStats to fetch.
     */
    orderBy?: EventStatsOrderByWithRelationInput | EventStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventStats
    **/
    _count?: true | EventStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventStatsMaxAggregateInputType
  }

  export type GetEventStatsAggregateType<T extends EventStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateEventStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventStats[P]>
      : GetScalarType<T[P], AggregateEventStats[P]>
  }




  export type EventStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventStatsWhereInput
    orderBy?: EventStatsOrderByWithAggregationInput | EventStatsOrderByWithAggregationInput[]
    by: EventStatsScalarFieldEnum[] | EventStatsScalarFieldEnum
    having?: EventStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventStatsCountAggregateInputType | true
    _avg?: EventStatsAvgAggregateInputType
    _sum?: EventStatsSumAggregateInputType
    _min?: EventStatsMinAggregateInputType
    _max?: EventStatsMaxAggregateInputType
  }

  export type EventStatsGroupByOutputType = {
    id: string
    totalEvents: number
    upcomingEvents: number
    ongoingEvents: number
    totalParticipants: number
    eventsByType: JsonValue
    eventsByMonth: JsonValue
    averageParticipants: number
    participationRate: number
    createdAt: Date
    updatedAt: Date
    _count: EventStatsCountAggregateOutputType | null
    _avg: EventStatsAvgAggregateOutputType | null
    _sum: EventStatsSumAggregateOutputType | null
    _min: EventStatsMinAggregateOutputType | null
    _max: EventStatsMaxAggregateOutputType | null
  }

  type GetEventStatsGroupByPayload<T extends EventStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventStatsGroupByOutputType[P]>
            : GetScalarType<T[P], EventStatsGroupByOutputType[P]>
        }
      >
    >


  export type EventStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalEvents?: boolean
    upcomingEvents?: boolean
    ongoingEvents?: boolean
    totalParticipants?: boolean
    eventsByType?: boolean
    eventsByMonth?: boolean
    averageParticipants?: boolean
    participationRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventStats"]>

  export type EventStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalEvents?: boolean
    upcomingEvents?: boolean
    ongoingEvents?: boolean
    totalParticipants?: boolean
    eventsByType?: boolean
    eventsByMonth?: boolean
    averageParticipants?: boolean
    participationRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventStats"]>

  export type EventStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalEvents?: boolean
    upcomingEvents?: boolean
    ongoingEvents?: boolean
    totalParticipants?: boolean
    eventsByType?: boolean
    eventsByMonth?: boolean
    averageParticipants?: boolean
    participationRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventStats"]>

  export type EventStatsSelectScalar = {
    id?: boolean
    totalEvents?: boolean
    upcomingEvents?: boolean
    ongoingEvents?: boolean
    totalParticipants?: boolean
    eventsByType?: boolean
    eventsByMonth?: boolean
    averageParticipants?: boolean
    participationRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalEvents" | "upcomingEvents" | "ongoingEvents" | "totalParticipants" | "eventsByType" | "eventsByMonth" | "averageParticipants" | "participationRate" | "createdAt" | "updatedAt", ExtArgs["result"]["eventStats"]>

  export type $EventStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalEvents: number
      upcomingEvents: number
      ongoingEvents: number
      totalParticipants: number
      eventsByType: Prisma.JsonValue
      eventsByMonth: Prisma.JsonValue
      averageParticipants: number
      participationRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventStats"]>
    composites: {}
  }

  type EventStatsGetPayload<S extends boolean | null | undefined | EventStatsDefaultArgs> = $Result.GetResult<Prisma.$EventStatsPayload, S>

  type EventStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventStatsCountAggregateInputType | true
    }

  export interface EventStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventStats'], meta: { name: 'EventStats' } }
    /**
     * Find zero or one EventStats that matches the filter.
     * @param {EventStatsFindUniqueArgs} args - Arguments to find a EventStats
     * @example
     * // Get one EventStats
     * const eventStats = await prisma.eventStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventStatsFindUniqueArgs>(args: SelectSubset<T, EventStatsFindUniqueArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventStatsFindUniqueOrThrowArgs} args - Arguments to find a EventStats
     * @example
     * // Get one EventStats
     * const eventStats = await prisma.eventStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsFindFirstArgs} args - Arguments to find a EventStats
     * @example
     * // Get one EventStats
     * const eventStats = await prisma.eventStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventStatsFindFirstArgs>(args?: SelectSubset<T, EventStatsFindFirstArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsFindFirstOrThrowArgs} args - Arguments to find a EventStats
     * @example
     * // Get one EventStats
     * const eventStats = await prisma.eventStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventStats
     * const eventStats = await prisma.eventStats.findMany()
     * 
     * // Get first 10 EventStats
     * const eventStats = await prisma.eventStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventStatsWithIdOnly = await prisma.eventStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventStatsFindManyArgs>(args?: SelectSubset<T, EventStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventStats.
     * @param {EventStatsCreateArgs} args - Arguments to create a EventStats.
     * @example
     * // Create one EventStats
     * const EventStats = await prisma.eventStats.create({
     *   data: {
     *     // ... data to create a EventStats
     *   }
     * })
     * 
     */
    create<T extends EventStatsCreateArgs>(args: SelectSubset<T, EventStatsCreateArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventStats.
     * @param {EventStatsCreateManyArgs} args - Arguments to create many EventStats.
     * @example
     * // Create many EventStats
     * const eventStats = await prisma.eventStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventStatsCreateManyArgs>(args?: SelectSubset<T, EventStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventStats and returns the data saved in the database.
     * @param {EventStatsCreateManyAndReturnArgs} args - Arguments to create many EventStats.
     * @example
     * // Create many EventStats
     * const eventStats = await prisma.eventStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventStats and only return the `id`
     * const eventStatsWithIdOnly = await prisma.eventStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventStats.
     * @param {EventStatsDeleteArgs} args - Arguments to delete one EventStats.
     * @example
     * // Delete one EventStats
     * const EventStats = await prisma.eventStats.delete({
     *   where: {
     *     // ... filter to delete one EventStats
     *   }
     * })
     * 
     */
    delete<T extends EventStatsDeleteArgs>(args: SelectSubset<T, EventStatsDeleteArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventStats.
     * @param {EventStatsUpdateArgs} args - Arguments to update one EventStats.
     * @example
     * // Update one EventStats
     * const eventStats = await prisma.eventStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventStatsUpdateArgs>(args: SelectSubset<T, EventStatsUpdateArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventStats.
     * @param {EventStatsDeleteManyArgs} args - Arguments to filter EventStats to delete.
     * @example
     * // Delete a few EventStats
     * const { count } = await prisma.eventStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventStatsDeleteManyArgs>(args?: SelectSubset<T, EventStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventStats
     * const eventStats = await prisma.eventStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventStatsUpdateManyArgs>(args: SelectSubset<T, EventStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventStats and returns the data updated in the database.
     * @param {EventStatsUpdateManyAndReturnArgs} args - Arguments to update many EventStats.
     * @example
     * // Update many EventStats
     * const eventStats = await prisma.eventStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventStats and only return the `id`
     * const eventStatsWithIdOnly = await prisma.eventStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventStats.
     * @param {EventStatsUpsertArgs} args - Arguments to update or create a EventStats.
     * @example
     * // Update or create a EventStats
     * const eventStats = await prisma.eventStats.upsert({
     *   create: {
     *     // ... data to create a EventStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventStats we want to update
     *   }
     * })
     */
    upsert<T extends EventStatsUpsertArgs>(args: SelectSubset<T, EventStatsUpsertArgs<ExtArgs>>): Prisma__EventStatsClient<$Result.GetResult<Prisma.$EventStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsCountArgs} args - Arguments to filter EventStats to count.
     * @example
     * // Count the number of EventStats
     * const count = await prisma.eventStats.count({
     *   where: {
     *     // ... the filter for the EventStats we want to count
     *   }
     * })
    **/
    count<T extends EventStatsCountArgs>(
      args?: Subset<T, EventStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventStatsAggregateArgs>(args: Subset<T, EventStatsAggregateArgs>): Prisma.PrismaPromise<GetEventStatsAggregateType<T>>

    /**
     * Group by EventStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatsGroupByArgs} args - Group by arguments.
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
      T extends EventStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventStatsGroupByArgs['orderBy'] }
        : { orderBy?: EventStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventStats model
   */
  readonly fields: EventStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EventStats model
   */
  interface EventStatsFieldRefs {
    readonly id: FieldRef<"EventStats", 'String'>
    readonly totalEvents: FieldRef<"EventStats", 'Int'>
    readonly upcomingEvents: FieldRef<"EventStats", 'Int'>
    readonly ongoingEvents: FieldRef<"EventStats", 'Int'>
    readonly totalParticipants: FieldRef<"EventStats", 'Int'>
    readonly eventsByType: FieldRef<"EventStats", 'Json'>
    readonly eventsByMonth: FieldRef<"EventStats", 'Json'>
    readonly averageParticipants: FieldRef<"EventStats", 'Int'>
    readonly participationRate: FieldRef<"EventStats", 'Float'>
    readonly createdAt: FieldRef<"EventStats", 'DateTime'>
    readonly updatedAt: FieldRef<"EventStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventStats findUnique
   */
  export type EventStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter, which EventStats to fetch.
     */
    where: EventStatsWhereUniqueInput
  }

  /**
   * EventStats findUniqueOrThrow
   */
  export type EventStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter, which EventStats to fetch.
     */
    where: EventStatsWhereUniqueInput
  }

  /**
   * EventStats findFirst
   */
  export type EventStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter, which EventStats to fetch.
     */
    where?: EventStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStats to fetch.
     */
    orderBy?: EventStatsOrderByWithRelationInput | EventStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventStats.
     */
    cursor?: EventStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventStats.
     */
    distinct?: EventStatsScalarFieldEnum | EventStatsScalarFieldEnum[]
  }

  /**
   * EventStats findFirstOrThrow
   */
  export type EventStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter, which EventStats to fetch.
     */
    where?: EventStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStats to fetch.
     */
    orderBy?: EventStatsOrderByWithRelationInput | EventStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventStats.
     */
    cursor?: EventStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventStats.
     */
    distinct?: EventStatsScalarFieldEnum | EventStatsScalarFieldEnum[]
  }

  /**
   * EventStats findMany
   */
  export type EventStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter, which EventStats to fetch.
     */
    where?: EventStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStats to fetch.
     */
    orderBy?: EventStatsOrderByWithRelationInput | EventStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventStats.
     */
    cursor?: EventStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStats.
     */
    skip?: number
    distinct?: EventStatsScalarFieldEnum | EventStatsScalarFieldEnum[]
  }

  /**
   * EventStats create
   */
  export type EventStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a EventStats.
     */
    data: XOR<EventStatsCreateInput, EventStatsUncheckedCreateInput>
  }

  /**
   * EventStats createMany
   */
  export type EventStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventStats.
     */
    data: EventStatsCreateManyInput | EventStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventStats createManyAndReturn
   */
  export type EventStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * The data used to create many EventStats.
     */
    data: EventStatsCreateManyInput | EventStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventStats update
   */
  export type EventStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a EventStats.
     */
    data: XOR<EventStatsUpdateInput, EventStatsUncheckedUpdateInput>
    /**
     * Choose, which EventStats to update.
     */
    where: EventStatsWhereUniqueInput
  }

  /**
   * EventStats updateMany
   */
  export type EventStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventStats.
     */
    data: XOR<EventStatsUpdateManyMutationInput, EventStatsUncheckedUpdateManyInput>
    /**
     * Filter which EventStats to update
     */
    where?: EventStatsWhereInput
    /**
     * Limit how many EventStats to update.
     */
    limit?: number
  }

  /**
   * EventStats updateManyAndReturn
   */
  export type EventStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * The data used to update EventStats.
     */
    data: XOR<EventStatsUpdateManyMutationInput, EventStatsUncheckedUpdateManyInput>
    /**
     * Filter which EventStats to update
     */
    where?: EventStatsWhereInput
    /**
     * Limit how many EventStats to update.
     */
    limit?: number
  }

  /**
   * EventStats upsert
   */
  export type EventStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the EventStats to update in case it exists.
     */
    where: EventStatsWhereUniqueInput
    /**
     * In case the EventStats found by the `where` argument doesn't exist, create a new EventStats with this data.
     */
    create: XOR<EventStatsCreateInput, EventStatsUncheckedCreateInput>
    /**
     * In case the EventStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventStatsUpdateInput, EventStatsUncheckedUpdateInput>
  }

  /**
   * EventStats delete
   */
  export type EventStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
    /**
     * Filter which EventStats to delete.
     */
    where: EventStatsWhereUniqueInput
  }

  /**
   * EventStats deleteMany
   */
  export type EventStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventStats to delete
     */
    where?: EventStatsWhereInput
    /**
     * Limit how many EventStats to delete.
     */
    limit?: number
  }

  /**
   * EventStats without action
   */
  export type EventStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStats
     */
    select?: EventStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStats
     */
    omit?: EventStatsOmit<ExtArgs> | null
  }


  /**
   * Model MemberStats
   */

  export type AggregateMemberStats = {
    _count: MemberStatsCountAggregateOutputType | null
    _avg: MemberStatsAvgAggregateOutputType | null
    _sum: MemberStatsSumAggregateOutputType | null
    _min: MemberStatsMinAggregateOutputType | null
    _max: MemberStatsMaxAggregateOutputType | null
  }

  export type MemberStatsAvgAggregateOutputType = {
    totalMembers: number | null
    activeMembers: number | null
    newMembers: number | null
    membershipTypes: number | null
    retentionRate: number | null
    growthRate: number | null
  }

  export type MemberStatsSumAggregateOutputType = {
    totalMembers: number | null
    activeMembers: number | null
    newMembers: number | null
    membershipTypes: number | null
    retentionRate: number | null
    growthRate: number | null
  }

  export type MemberStatsMinAggregateOutputType = {
    id: string | null
    totalMembers: number | null
    activeMembers: number | null
    newMembers: number | null
    membershipTypes: number | null
    retentionRate: number | null
    growthRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberStatsMaxAggregateOutputType = {
    id: string | null
    totalMembers: number | null
    activeMembers: number | null
    newMembers: number | null
    membershipTypes: number | null
    retentionRate: number | null
    growthRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberStatsCountAggregateOutputType = {
    id: number
    totalMembers: number
    activeMembers: number
    newMembers: number
    membershipTypes: number
    membersByType: number
    membersByMonth: number
    retentionRate: number
    growthRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberStatsAvgAggregateInputType = {
    totalMembers?: true
    activeMembers?: true
    newMembers?: true
    membershipTypes?: true
    retentionRate?: true
    growthRate?: true
  }

  export type MemberStatsSumAggregateInputType = {
    totalMembers?: true
    activeMembers?: true
    newMembers?: true
    membershipTypes?: true
    retentionRate?: true
    growthRate?: true
  }

  export type MemberStatsMinAggregateInputType = {
    id?: true
    totalMembers?: true
    activeMembers?: true
    newMembers?: true
    membershipTypes?: true
    retentionRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberStatsMaxAggregateInputType = {
    id?: true
    totalMembers?: true
    activeMembers?: true
    newMembers?: true
    membershipTypes?: true
    retentionRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberStatsCountAggregateInputType = {
    id?: true
    totalMembers?: true
    activeMembers?: true
    newMembers?: true
    membershipTypes?: true
    membersByType?: true
    membersByMonth?: true
    retentionRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberStats to aggregate.
     */
    where?: MemberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStats to fetch.
     */
    orderBy?: MemberStatsOrderByWithRelationInput | MemberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberStats
    **/
    _count?: true | MemberStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberStatsMaxAggregateInputType
  }

  export type GetMemberStatsAggregateType<T extends MemberStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberStats[P]>
      : GetScalarType<T[P], AggregateMemberStats[P]>
  }




  export type MemberStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberStatsWhereInput
    orderBy?: MemberStatsOrderByWithAggregationInput | MemberStatsOrderByWithAggregationInput[]
    by: MemberStatsScalarFieldEnum[] | MemberStatsScalarFieldEnum
    having?: MemberStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberStatsCountAggregateInputType | true
    _avg?: MemberStatsAvgAggregateInputType
    _sum?: MemberStatsSumAggregateInputType
    _min?: MemberStatsMinAggregateInputType
    _max?: MemberStatsMaxAggregateInputType
  }

  export type MemberStatsGroupByOutputType = {
    id: string
    totalMembers: number
    activeMembers: number
    newMembers: number
    membershipTypes: number
    membersByType: JsonValue
    membersByMonth: JsonValue
    retentionRate: number
    growthRate: number
    createdAt: Date
    updatedAt: Date
    _count: MemberStatsCountAggregateOutputType | null
    _avg: MemberStatsAvgAggregateOutputType | null
    _sum: MemberStatsSumAggregateOutputType | null
    _min: MemberStatsMinAggregateOutputType | null
    _max: MemberStatsMaxAggregateOutputType | null
  }

  type GetMemberStatsGroupByPayload<T extends MemberStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberStatsGroupByOutputType[P]>
            : GetScalarType<T[P], MemberStatsGroupByOutputType[P]>
        }
      >
    >


  export type MemberStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    newMembers?: boolean
    membershipTypes?: boolean
    membersByType?: boolean
    membersByMonth?: boolean
    retentionRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["memberStats"]>

  export type MemberStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    newMembers?: boolean
    membershipTypes?: boolean
    membersByType?: boolean
    membersByMonth?: boolean
    retentionRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["memberStats"]>

  export type MemberStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    newMembers?: boolean
    membershipTypes?: boolean
    membersByType?: boolean
    membersByMonth?: boolean
    retentionRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["memberStats"]>

  export type MemberStatsSelectScalar = {
    id?: boolean
    totalMembers?: boolean
    activeMembers?: boolean
    newMembers?: boolean
    membershipTypes?: boolean
    membersByType?: boolean
    membersByMonth?: boolean
    retentionRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalMembers" | "activeMembers" | "newMembers" | "membershipTypes" | "membersByType" | "membersByMonth" | "retentionRate" | "growthRate" | "createdAt" | "updatedAt", ExtArgs["result"]["memberStats"]>

  export type $MemberStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalMembers: number
      activeMembers: number
      newMembers: number
      membershipTypes: number
      membersByType: Prisma.JsonValue
      membersByMonth: Prisma.JsonValue
      retentionRate: number
      growthRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memberStats"]>
    composites: {}
  }

  type MemberStatsGetPayload<S extends boolean | null | undefined | MemberStatsDefaultArgs> = $Result.GetResult<Prisma.$MemberStatsPayload, S>

  type MemberStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberStatsCountAggregateInputType | true
    }

  export interface MemberStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberStats'], meta: { name: 'MemberStats' } }
    /**
     * Find zero or one MemberStats that matches the filter.
     * @param {MemberStatsFindUniqueArgs} args - Arguments to find a MemberStats
     * @example
     * // Get one MemberStats
     * const memberStats = await prisma.memberStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberStatsFindUniqueArgs>(args: SelectSubset<T, MemberStatsFindUniqueArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberStatsFindUniqueOrThrowArgs} args - Arguments to find a MemberStats
     * @example
     * // Get one MemberStats
     * const memberStats = await prisma.memberStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsFindFirstArgs} args - Arguments to find a MemberStats
     * @example
     * // Get one MemberStats
     * const memberStats = await prisma.memberStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberStatsFindFirstArgs>(args?: SelectSubset<T, MemberStatsFindFirstArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsFindFirstOrThrowArgs} args - Arguments to find a MemberStats
     * @example
     * // Get one MemberStats
     * const memberStats = await prisma.memberStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberStats
     * const memberStats = await prisma.memberStats.findMany()
     * 
     * // Get first 10 MemberStats
     * const memberStats = await prisma.memberStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberStatsWithIdOnly = await prisma.memberStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberStatsFindManyArgs>(args?: SelectSubset<T, MemberStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberStats.
     * @param {MemberStatsCreateArgs} args - Arguments to create a MemberStats.
     * @example
     * // Create one MemberStats
     * const MemberStats = await prisma.memberStats.create({
     *   data: {
     *     // ... data to create a MemberStats
     *   }
     * })
     * 
     */
    create<T extends MemberStatsCreateArgs>(args: SelectSubset<T, MemberStatsCreateArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberStats.
     * @param {MemberStatsCreateManyArgs} args - Arguments to create many MemberStats.
     * @example
     * // Create many MemberStats
     * const memberStats = await prisma.memberStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberStatsCreateManyArgs>(args?: SelectSubset<T, MemberStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberStats and returns the data saved in the database.
     * @param {MemberStatsCreateManyAndReturnArgs} args - Arguments to create many MemberStats.
     * @example
     * // Create many MemberStats
     * const memberStats = await prisma.memberStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberStats and only return the `id`
     * const memberStatsWithIdOnly = await prisma.memberStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberStats.
     * @param {MemberStatsDeleteArgs} args - Arguments to delete one MemberStats.
     * @example
     * // Delete one MemberStats
     * const MemberStats = await prisma.memberStats.delete({
     *   where: {
     *     // ... filter to delete one MemberStats
     *   }
     * })
     * 
     */
    delete<T extends MemberStatsDeleteArgs>(args: SelectSubset<T, MemberStatsDeleteArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberStats.
     * @param {MemberStatsUpdateArgs} args - Arguments to update one MemberStats.
     * @example
     * // Update one MemberStats
     * const memberStats = await prisma.memberStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberStatsUpdateArgs>(args: SelectSubset<T, MemberStatsUpdateArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberStats.
     * @param {MemberStatsDeleteManyArgs} args - Arguments to filter MemberStats to delete.
     * @example
     * // Delete a few MemberStats
     * const { count } = await prisma.memberStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberStatsDeleteManyArgs>(args?: SelectSubset<T, MemberStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberStats
     * const memberStats = await prisma.memberStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberStatsUpdateManyArgs>(args: SelectSubset<T, MemberStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberStats and returns the data updated in the database.
     * @param {MemberStatsUpdateManyAndReturnArgs} args - Arguments to update many MemberStats.
     * @example
     * // Update many MemberStats
     * const memberStats = await prisma.memberStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberStats and only return the `id`
     * const memberStatsWithIdOnly = await prisma.memberStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberStats.
     * @param {MemberStatsUpsertArgs} args - Arguments to update or create a MemberStats.
     * @example
     * // Update or create a MemberStats
     * const memberStats = await prisma.memberStats.upsert({
     *   create: {
     *     // ... data to create a MemberStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberStats we want to update
     *   }
     * })
     */
    upsert<T extends MemberStatsUpsertArgs>(args: SelectSubset<T, MemberStatsUpsertArgs<ExtArgs>>): Prisma__MemberStatsClient<$Result.GetResult<Prisma.$MemberStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsCountArgs} args - Arguments to filter MemberStats to count.
     * @example
     * // Count the number of MemberStats
     * const count = await prisma.memberStats.count({
     *   where: {
     *     // ... the filter for the MemberStats we want to count
     *   }
     * })
    **/
    count<T extends MemberStatsCountArgs>(
      args?: Subset<T, MemberStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberStatsAggregateArgs>(args: Subset<T, MemberStatsAggregateArgs>): Prisma.PrismaPromise<GetMemberStatsAggregateType<T>>

    /**
     * Group by MemberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberStatsGroupByArgs} args - Group by arguments.
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
      T extends MemberStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberStatsGroupByArgs['orderBy'] }
        : { orderBy?: MemberStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberStats model
   */
  readonly fields: MemberStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MemberStats model
   */
  interface MemberStatsFieldRefs {
    readonly id: FieldRef<"MemberStats", 'String'>
    readonly totalMembers: FieldRef<"MemberStats", 'Int'>
    readonly activeMembers: FieldRef<"MemberStats", 'Int'>
    readonly newMembers: FieldRef<"MemberStats", 'Int'>
    readonly membershipTypes: FieldRef<"MemberStats", 'Int'>
    readonly membersByType: FieldRef<"MemberStats", 'Json'>
    readonly membersByMonth: FieldRef<"MemberStats", 'Json'>
    readonly retentionRate: FieldRef<"MemberStats", 'Float'>
    readonly growthRate: FieldRef<"MemberStats", 'Float'>
    readonly createdAt: FieldRef<"MemberStats", 'DateTime'>
    readonly updatedAt: FieldRef<"MemberStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberStats findUnique
   */
  export type MemberStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter, which MemberStats to fetch.
     */
    where: MemberStatsWhereUniqueInput
  }

  /**
   * MemberStats findUniqueOrThrow
   */
  export type MemberStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter, which MemberStats to fetch.
     */
    where: MemberStatsWhereUniqueInput
  }

  /**
   * MemberStats findFirst
   */
  export type MemberStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter, which MemberStats to fetch.
     */
    where?: MemberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStats to fetch.
     */
    orderBy?: MemberStatsOrderByWithRelationInput | MemberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberStats.
     */
    cursor?: MemberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberStats.
     */
    distinct?: MemberStatsScalarFieldEnum | MemberStatsScalarFieldEnum[]
  }

  /**
   * MemberStats findFirstOrThrow
   */
  export type MemberStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter, which MemberStats to fetch.
     */
    where?: MemberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStats to fetch.
     */
    orderBy?: MemberStatsOrderByWithRelationInput | MemberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberStats.
     */
    cursor?: MemberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberStats.
     */
    distinct?: MemberStatsScalarFieldEnum | MemberStatsScalarFieldEnum[]
  }

  /**
   * MemberStats findMany
   */
  export type MemberStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter, which MemberStats to fetch.
     */
    where?: MemberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberStats to fetch.
     */
    orderBy?: MemberStatsOrderByWithRelationInput | MemberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberStats.
     */
    cursor?: MemberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberStats.
     */
    skip?: number
    distinct?: MemberStatsScalarFieldEnum | MemberStatsScalarFieldEnum[]
  }

  /**
   * MemberStats create
   */
  export type MemberStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a MemberStats.
     */
    data: XOR<MemberStatsCreateInput, MemberStatsUncheckedCreateInput>
  }

  /**
   * MemberStats createMany
   */
  export type MemberStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberStats.
     */
    data: MemberStatsCreateManyInput | MemberStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberStats createManyAndReturn
   */
  export type MemberStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * The data used to create many MemberStats.
     */
    data: MemberStatsCreateManyInput | MemberStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberStats update
   */
  export type MemberStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a MemberStats.
     */
    data: XOR<MemberStatsUpdateInput, MemberStatsUncheckedUpdateInput>
    /**
     * Choose, which MemberStats to update.
     */
    where: MemberStatsWhereUniqueInput
  }

  /**
   * MemberStats updateMany
   */
  export type MemberStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberStats.
     */
    data: XOR<MemberStatsUpdateManyMutationInput, MemberStatsUncheckedUpdateManyInput>
    /**
     * Filter which MemberStats to update
     */
    where?: MemberStatsWhereInput
    /**
     * Limit how many MemberStats to update.
     */
    limit?: number
  }

  /**
   * MemberStats updateManyAndReturn
   */
  export type MemberStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * The data used to update MemberStats.
     */
    data: XOR<MemberStatsUpdateManyMutationInput, MemberStatsUncheckedUpdateManyInput>
    /**
     * Filter which MemberStats to update
     */
    where?: MemberStatsWhereInput
    /**
     * Limit how many MemberStats to update.
     */
    limit?: number
  }

  /**
   * MemberStats upsert
   */
  export type MemberStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the MemberStats to update in case it exists.
     */
    where: MemberStatsWhereUniqueInput
    /**
     * In case the MemberStats found by the `where` argument doesn't exist, create a new MemberStats with this data.
     */
    create: XOR<MemberStatsCreateInput, MemberStatsUncheckedCreateInput>
    /**
     * In case the MemberStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberStatsUpdateInput, MemberStatsUncheckedUpdateInput>
  }

  /**
   * MemberStats delete
   */
  export type MemberStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
    /**
     * Filter which MemberStats to delete.
     */
    where: MemberStatsWhereUniqueInput
  }

  /**
   * MemberStats deleteMany
   */
  export type MemberStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberStats to delete
     */
    where?: MemberStatsWhereInput
    /**
     * Limit how many MemberStats to delete.
     */
    limit?: number
  }

  /**
   * MemberStats without action
   */
  export type MemberStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberStats
     */
    select?: MemberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberStats
     */
    omit?: MemberStatsOmit<ExtArgs> | null
  }


  /**
   * Model MessageStats
   */

  export type AggregateMessageStats = {
    _count: MessageStatsCountAggregateOutputType | null
    _avg: MessageStatsAvgAggregateOutputType | null
    _sum: MessageStatsSumAggregateOutputType | null
    _min: MessageStatsMinAggregateOutputType | null
    _max: MessageStatsMaxAggregateOutputType | null
  }

  export type MessageStatsAvgAggregateOutputType = {
    totalMessages: number | null
    newMessages: number | null
    repliedMessages: number | null
    responseRate: number | null
    responseTrend: number | null
  }

  export type MessageStatsSumAggregateOutputType = {
    totalMessages: number | null
    newMessages: number | null
    repliedMessages: number | null
    responseRate: number | null
    responseTrend: number | null
  }

  export type MessageStatsMinAggregateOutputType = {
    id: string | null
    totalMessages: number | null
    newMessages: number | null
    repliedMessages: number | null
    responseRate: number | null
    responseTrend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageStatsMaxAggregateOutputType = {
    id: string | null
    totalMessages: number | null
    newMessages: number | null
    repliedMessages: number | null
    responseRate: number | null
    responseTrend: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageStatsCountAggregateOutputType = {
    id: number
    totalMessages: number
    newMessages: number
    repliedMessages: number
    responseRate: number
    messagesByMonth: number
    responseTrend: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageStatsAvgAggregateInputType = {
    totalMessages?: true
    newMessages?: true
    repliedMessages?: true
    responseRate?: true
    responseTrend?: true
  }

  export type MessageStatsSumAggregateInputType = {
    totalMessages?: true
    newMessages?: true
    repliedMessages?: true
    responseRate?: true
    responseTrend?: true
  }

  export type MessageStatsMinAggregateInputType = {
    id?: true
    totalMessages?: true
    newMessages?: true
    repliedMessages?: true
    responseRate?: true
    responseTrend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageStatsMaxAggregateInputType = {
    id?: true
    totalMessages?: true
    newMessages?: true
    repliedMessages?: true
    responseRate?: true
    responseTrend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageStatsCountAggregateInputType = {
    id?: true
    totalMessages?: true
    newMessages?: true
    repliedMessages?: true
    responseRate?: true
    messagesByMonth?: true
    responseTrend?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageStats to aggregate.
     */
    where?: MessageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStats to fetch.
     */
    orderBy?: MessageStatsOrderByWithRelationInput | MessageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageStats
    **/
    _count?: true | MessageStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageStatsMaxAggregateInputType
  }

  export type GetMessageStatsAggregateType<T extends MessageStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageStats[P]>
      : GetScalarType<T[P], AggregateMessageStats[P]>
  }




  export type MessageStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageStatsWhereInput
    orderBy?: MessageStatsOrderByWithAggregationInput | MessageStatsOrderByWithAggregationInput[]
    by: MessageStatsScalarFieldEnum[] | MessageStatsScalarFieldEnum
    having?: MessageStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageStatsCountAggregateInputType | true
    _avg?: MessageStatsAvgAggregateInputType
    _sum?: MessageStatsSumAggregateInputType
    _min?: MessageStatsMinAggregateInputType
    _max?: MessageStatsMaxAggregateInputType
  }

  export type MessageStatsGroupByOutputType = {
    id: string
    totalMessages: number
    newMessages: number
    repliedMessages: number
    responseRate: number
    messagesByMonth: JsonValue
    responseTrend: number
    createdAt: Date
    updatedAt: Date
    _count: MessageStatsCountAggregateOutputType | null
    _avg: MessageStatsAvgAggregateOutputType | null
    _sum: MessageStatsSumAggregateOutputType | null
    _min: MessageStatsMinAggregateOutputType | null
    _max: MessageStatsMaxAggregateOutputType | null
  }

  type GetMessageStatsGroupByPayload<T extends MessageStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageStatsGroupByOutputType[P]>
            : GetScalarType<T[P], MessageStatsGroupByOutputType[P]>
        }
      >
    >


  export type MessageStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMessages?: boolean
    newMessages?: boolean
    repliedMessages?: boolean
    responseRate?: boolean
    messagesByMonth?: boolean
    responseTrend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["messageStats"]>

  export type MessageStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMessages?: boolean
    newMessages?: boolean
    repliedMessages?: boolean
    responseRate?: boolean
    messagesByMonth?: boolean
    responseTrend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["messageStats"]>

  export type MessageStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalMessages?: boolean
    newMessages?: boolean
    repliedMessages?: boolean
    responseRate?: boolean
    messagesByMonth?: boolean
    responseTrend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["messageStats"]>

  export type MessageStatsSelectScalar = {
    id?: boolean
    totalMessages?: boolean
    newMessages?: boolean
    repliedMessages?: boolean
    responseRate?: boolean
    messagesByMonth?: boolean
    responseTrend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalMessages" | "newMessages" | "repliedMessages" | "responseRate" | "messagesByMonth" | "responseTrend" | "createdAt" | "updatedAt", ExtArgs["result"]["messageStats"]>

  export type $MessageStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalMessages: number
      newMessages: number
      repliedMessages: number
      responseRate: number
      messagesByMonth: Prisma.JsonValue
      responseTrend: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageStats"]>
    composites: {}
  }

  type MessageStatsGetPayload<S extends boolean | null | undefined | MessageStatsDefaultArgs> = $Result.GetResult<Prisma.$MessageStatsPayload, S>

  type MessageStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageStatsCountAggregateInputType | true
    }

  export interface MessageStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageStats'], meta: { name: 'MessageStats' } }
    /**
     * Find zero or one MessageStats that matches the filter.
     * @param {MessageStatsFindUniqueArgs} args - Arguments to find a MessageStats
     * @example
     * // Get one MessageStats
     * const messageStats = await prisma.messageStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageStatsFindUniqueArgs>(args: SelectSubset<T, MessageStatsFindUniqueArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageStatsFindUniqueOrThrowArgs} args - Arguments to find a MessageStats
     * @example
     * // Get one MessageStats
     * const messageStats = await prisma.messageStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsFindFirstArgs} args - Arguments to find a MessageStats
     * @example
     * // Get one MessageStats
     * const messageStats = await prisma.messageStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageStatsFindFirstArgs>(args?: SelectSubset<T, MessageStatsFindFirstArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsFindFirstOrThrowArgs} args - Arguments to find a MessageStats
     * @example
     * // Get one MessageStats
     * const messageStats = await prisma.messageStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageStats
     * const messageStats = await prisma.messageStats.findMany()
     * 
     * // Get first 10 MessageStats
     * const messageStats = await prisma.messageStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageStatsWithIdOnly = await prisma.messageStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageStatsFindManyArgs>(args?: SelectSubset<T, MessageStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageStats.
     * @param {MessageStatsCreateArgs} args - Arguments to create a MessageStats.
     * @example
     * // Create one MessageStats
     * const MessageStats = await prisma.messageStats.create({
     *   data: {
     *     // ... data to create a MessageStats
     *   }
     * })
     * 
     */
    create<T extends MessageStatsCreateArgs>(args: SelectSubset<T, MessageStatsCreateArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageStats.
     * @param {MessageStatsCreateManyArgs} args - Arguments to create many MessageStats.
     * @example
     * // Create many MessageStats
     * const messageStats = await prisma.messageStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageStatsCreateManyArgs>(args?: SelectSubset<T, MessageStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageStats and returns the data saved in the database.
     * @param {MessageStatsCreateManyAndReturnArgs} args - Arguments to create many MessageStats.
     * @example
     * // Create many MessageStats
     * const messageStats = await prisma.messageStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageStats and only return the `id`
     * const messageStatsWithIdOnly = await prisma.messageStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageStats.
     * @param {MessageStatsDeleteArgs} args - Arguments to delete one MessageStats.
     * @example
     * // Delete one MessageStats
     * const MessageStats = await prisma.messageStats.delete({
     *   where: {
     *     // ... filter to delete one MessageStats
     *   }
     * })
     * 
     */
    delete<T extends MessageStatsDeleteArgs>(args: SelectSubset<T, MessageStatsDeleteArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageStats.
     * @param {MessageStatsUpdateArgs} args - Arguments to update one MessageStats.
     * @example
     * // Update one MessageStats
     * const messageStats = await prisma.messageStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageStatsUpdateArgs>(args: SelectSubset<T, MessageStatsUpdateArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageStats.
     * @param {MessageStatsDeleteManyArgs} args - Arguments to filter MessageStats to delete.
     * @example
     * // Delete a few MessageStats
     * const { count } = await prisma.messageStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageStatsDeleteManyArgs>(args?: SelectSubset<T, MessageStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageStats
     * const messageStats = await prisma.messageStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageStatsUpdateManyArgs>(args: SelectSubset<T, MessageStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageStats and returns the data updated in the database.
     * @param {MessageStatsUpdateManyAndReturnArgs} args - Arguments to update many MessageStats.
     * @example
     * // Update many MessageStats
     * const messageStats = await prisma.messageStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageStats and only return the `id`
     * const messageStatsWithIdOnly = await prisma.messageStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageStats.
     * @param {MessageStatsUpsertArgs} args - Arguments to update or create a MessageStats.
     * @example
     * // Update or create a MessageStats
     * const messageStats = await prisma.messageStats.upsert({
     *   create: {
     *     // ... data to create a MessageStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageStats we want to update
     *   }
     * })
     */
    upsert<T extends MessageStatsUpsertArgs>(args: SelectSubset<T, MessageStatsUpsertArgs<ExtArgs>>): Prisma__MessageStatsClient<$Result.GetResult<Prisma.$MessageStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsCountArgs} args - Arguments to filter MessageStats to count.
     * @example
     * // Count the number of MessageStats
     * const count = await prisma.messageStats.count({
     *   where: {
     *     // ... the filter for the MessageStats we want to count
     *   }
     * })
    **/
    count<T extends MessageStatsCountArgs>(
      args?: Subset<T, MessageStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageStatsAggregateArgs>(args: Subset<T, MessageStatsAggregateArgs>): Prisma.PrismaPromise<GetMessageStatsAggregateType<T>>

    /**
     * Group by MessageStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatsGroupByArgs} args - Group by arguments.
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
      T extends MessageStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageStatsGroupByArgs['orderBy'] }
        : { orderBy?: MessageStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageStats model
   */
  readonly fields: MessageStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MessageStats model
   */
  interface MessageStatsFieldRefs {
    readonly id: FieldRef<"MessageStats", 'String'>
    readonly totalMessages: FieldRef<"MessageStats", 'Int'>
    readonly newMessages: FieldRef<"MessageStats", 'Int'>
    readonly repliedMessages: FieldRef<"MessageStats", 'Int'>
    readonly responseRate: FieldRef<"MessageStats", 'Float'>
    readonly messagesByMonth: FieldRef<"MessageStats", 'Json'>
    readonly responseTrend: FieldRef<"MessageStats", 'Float'>
    readonly createdAt: FieldRef<"MessageStats", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageStats findUnique
   */
  export type MessageStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter, which MessageStats to fetch.
     */
    where: MessageStatsWhereUniqueInput
  }

  /**
   * MessageStats findUniqueOrThrow
   */
  export type MessageStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter, which MessageStats to fetch.
     */
    where: MessageStatsWhereUniqueInput
  }

  /**
   * MessageStats findFirst
   */
  export type MessageStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter, which MessageStats to fetch.
     */
    where?: MessageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStats to fetch.
     */
    orderBy?: MessageStatsOrderByWithRelationInput | MessageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageStats.
     */
    cursor?: MessageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageStats.
     */
    distinct?: MessageStatsScalarFieldEnum | MessageStatsScalarFieldEnum[]
  }

  /**
   * MessageStats findFirstOrThrow
   */
  export type MessageStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter, which MessageStats to fetch.
     */
    where?: MessageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStats to fetch.
     */
    orderBy?: MessageStatsOrderByWithRelationInput | MessageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageStats.
     */
    cursor?: MessageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageStats.
     */
    distinct?: MessageStatsScalarFieldEnum | MessageStatsScalarFieldEnum[]
  }

  /**
   * MessageStats findMany
   */
  export type MessageStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter, which MessageStats to fetch.
     */
    where?: MessageStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStats to fetch.
     */
    orderBy?: MessageStatsOrderByWithRelationInput | MessageStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageStats.
     */
    cursor?: MessageStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStats.
     */
    skip?: number
    distinct?: MessageStatsScalarFieldEnum | MessageStatsScalarFieldEnum[]
  }

  /**
   * MessageStats create
   */
  export type MessageStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a MessageStats.
     */
    data: XOR<MessageStatsCreateInput, MessageStatsUncheckedCreateInput>
  }

  /**
   * MessageStats createMany
   */
  export type MessageStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageStats.
     */
    data: MessageStatsCreateManyInput | MessageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageStats createManyAndReturn
   */
  export type MessageStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * The data used to create many MessageStats.
     */
    data: MessageStatsCreateManyInput | MessageStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageStats update
   */
  export type MessageStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a MessageStats.
     */
    data: XOR<MessageStatsUpdateInput, MessageStatsUncheckedUpdateInput>
    /**
     * Choose, which MessageStats to update.
     */
    where: MessageStatsWhereUniqueInput
  }

  /**
   * MessageStats updateMany
   */
  export type MessageStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageStats.
     */
    data: XOR<MessageStatsUpdateManyMutationInput, MessageStatsUncheckedUpdateManyInput>
    /**
     * Filter which MessageStats to update
     */
    where?: MessageStatsWhereInput
    /**
     * Limit how many MessageStats to update.
     */
    limit?: number
  }

  /**
   * MessageStats updateManyAndReturn
   */
  export type MessageStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * The data used to update MessageStats.
     */
    data: XOR<MessageStatsUpdateManyMutationInput, MessageStatsUncheckedUpdateManyInput>
    /**
     * Filter which MessageStats to update
     */
    where?: MessageStatsWhereInput
    /**
     * Limit how many MessageStats to update.
     */
    limit?: number
  }

  /**
   * MessageStats upsert
   */
  export type MessageStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the MessageStats to update in case it exists.
     */
    where: MessageStatsWhereUniqueInput
    /**
     * In case the MessageStats found by the `where` argument doesn't exist, create a new MessageStats with this data.
     */
    create: XOR<MessageStatsCreateInput, MessageStatsUncheckedCreateInput>
    /**
     * In case the MessageStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageStatsUpdateInput, MessageStatsUncheckedUpdateInput>
  }

  /**
   * MessageStats delete
   */
  export type MessageStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
    /**
     * Filter which MessageStats to delete.
     */
    where: MessageStatsWhereUniqueInput
  }

  /**
   * MessageStats deleteMany
   */
  export type MessageStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageStats to delete
     */
    where?: MessageStatsWhereInput
    /**
     * Limit how many MessageStats to delete.
     */
    limit?: number
  }

  /**
   * MessageStats without action
   */
  export type MessageStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStats
     */
    select?: MessageStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStats
     */
    omit?: MessageStatsOmit<ExtArgs> | null
  }


  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalUsers: number | null
    activeUsers: number | null
    newUsers: number | null
    userRoles: number | null
    activityRate: number | null
    growthRate: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalUsers: number | null
    activeUsers: number | null
    newUsers: number | null
    userRoles: number | null
    activityRate: number | null
    growthRate: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    totalUsers: number | null
    activeUsers: number | null
    newUsers: number | null
    userRoles: number | null
    activityRate: number | null
    growthRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    totalUsers: number | null
    activeUsers: number | null
    newUsers: number | null
    userRoles: number | null
    activityRate: number | null
    growthRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    totalUsers: number
    activeUsers: number
    newUsers: number
    userRoles: number
    usersByMonth: number
    activityRate: number
    growthRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalUsers?: true
    activeUsers?: true
    newUsers?: true
    userRoles?: true
    activityRate?: true
    growthRate?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalUsers?: true
    activeUsers?: true
    newUsers?: true
    userRoles?: true
    activityRate?: true
    growthRate?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    totalUsers?: true
    activeUsers?: true
    newUsers?: true
    userRoles?: true
    activityRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    totalUsers?: true
    activeUsers?: true
    newUsers?: true
    userRoles?: true
    activityRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    totalUsers?: true
    activeUsers?: true
    newUsers?: true
    userRoles?: true
    usersByMonth?: true
    activityRate?: true
    growthRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    totalUsers: number
    activeUsers: number
    newUsers: number
    userRoles: number
    usersByMonth: JsonValue
    activityRate: number
    growthRate: number
    createdAt: Date
    updatedAt: Date
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    newUsers?: boolean
    userRoles?: boolean
    usersByMonth?: boolean
    activityRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    newUsers?: boolean
    userRoles?: boolean
    usersByMonth?: boolean
    activityRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    newUsers?: boolean
    userRoles?: boolean
    usersByMonth?: boolean
    activityRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    newUsers?: boolean
    userRoles?: boolean
    usersByMonth?: boolean
    activityRate?: boolean
    growthRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalUsers" | "activeUsers" | "newUsers" | "userRoles" | "usersByMonth" | "activityRate" | "growthRate" | "createdAt" | "updatedAt", ExtArgs["result"]["userStats"]>

  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalUsers: number
      activeUsers: number
      newUsers: number
      userRoles: number
      usersByMonth: Prisma.JsonValue
      activityRate: number
      growthRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats and returns the data updated in the database.
     * @param {UserStatsUpdateManyAndReturnArgs} args - Arguments to update many UserStats.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
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
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserStats model
   */
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly totalUsers: FieldRef<"UserStats", 'Int'>
    readonly activeUsers: FieldRef<"UserStats", 'Int'>
    readonly newUsers: FieldRef<"UserStats", 'Int'>
    readonly userRoles: FieldRef<"UserStats", 'Int'>
    readonly usersByMonth: FieldRef<"UserStats", 'Json'>
    readonly activityRate: FieldRef<"UserStats", 'Float'>
    readonly growthRate: FieldRef<"UserStats", 'Float'>
    readonly createdAt: FieldRef<"UserStats", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats updateManyAndReturn
   */
  export type UserStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to update.
     */
    limit?: number
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
    /**
     * Limit how many UserStats to delete.
     */
    limit?: number
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStats
     */
    omit?: UserStatsOmit<ExtArgs> | null
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


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    code: 'code',
    name: 'name',
    isDefault: 'isDefault'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    imageUrl: 'imageUrl',
    eventDate: 'eventDate',
    eventEndDate: 'eventEndDate',
    location: 'location',
    address: 'address',
    capacity: 'capacity',
    spotsLeft: 'spotsLeft',
    price: 'price',
    priceMembers: 'priceMembers',
    pricePremium: 'pricePremium',
    eventType: 'eventType',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventTranslationScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    languageCode: 'languageCode',
    title: 'title',
    description: 'description',
    longDescription: 'longDescription',
    requirements: 'requirements',
    additionalInfo: 'additionalInfo',
    instructorName: 'instructorName',
    instructorBio: 'instructorBio'
  };

  export type EventTranslationScalarFieldEnum = (typeof EventTranslationScalarFieldEnum)[keyof typeof EventTranslationScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    imageUrl: 'imageUrl',
    publishedAt: 'publishedAt',
    isPublished: 'isPublished',
    readTime: 'readTime',
    category: 'category',
    tags: 'tags',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isFeatured: 'isFeatured',
    isArchived: 'isArchived'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogPostTranslationScalarFieldEnum: {
    id: 'id',
    blogPostId: 'blogPostId',
    languageCode: 'languageCode',
    title: 'title',
    description: 'description',
    content: 'content',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords'
  };

  export type BlogPostTranslationScalarFieldEnum = (typeof BlogPostTranslationScalarFieldEnum)[keyof typeof BlogPostTranslationScalarFieldEnum]


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const MembershipApplicationScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    membershipType: 'membershipType',
    experienceLevel: 'experienceLevel',
    interests: 'interests',
    comments: 'comments',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MembershipApplicationScalarFieldEnum = (typeof MembershipApplicationScalarFieldEnum)[keyof typeof MembershipApplicationScalarFieldEnum]


  export const EventRegistrationScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    isMember: 'isMember',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EventRegistrationScalarFieldEnum = (typeof EventRegistrationScalarFieldEnum)[keyof typeof EventRegistrationScalarFieldEnum]


  export const WebsiteSettingScalarFieldEnum: {
    id: 'id',
    settingKey: 'settingKey',
    settingValue: 'settingValue',
    languageCode: 'languageCode',
    updatedAt: 'updatedAt'
  };

  export type WebsiteSettingScalarFieldEnum = (typeof WebsiteSettingScalarFieldEnum)[keyof typeof WebsiteSettingScalarFieldEnum]


  export const BlogStatsScalarFieldEnum: {
    id: 'id',
    totalPosts: 'totalPosts',
    publishedPosts: 'publishedPosts',
    draftPosts: 'draftPosts',
    archivedPosts: 'archivedPosts',
    recentPosts: 'recentPosts',
    postsByCategory: 'postsByCategory',
    postsByMonth: 'postsByMonth',
    postsByAuthor: 'postsByAuthor',
    averageReadTime: 'averageReadTime',
    postTrend: 'postTrend',
    publishingRate: 'publishingRate',
    completionRate: 'completionRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogStatsScalarFieldEnum = (typeof BlogStatsScalarFieldEnum)[keyof typeof BlogStatsScalarFieldEnum]


  export const EventStatsScalarFieldEnum: {
    id: 'id',
    totalEvents: 'totalEvents',
    upcomingEvents: 'upcomingEvents',
    ongoingEvents: 'ongoingEvents',
    totalParticipants: 'totalParticipants',
    eventsByType: 'eventsByType',
    eventsByMonth: 'eventsByMonth',
    averageParticipants: 'averageParticipants',
    participationRate: 'participationRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventStatsScalarFieldEnum = (typeof EventStatsScalarFieldEnum)[keyof typeof EventStatsScalarFieldEnum]


  export const MemberStatsScalarFieldEnum: {
    id: 'id',
    totalMembers: 'totalMembers',
    activeMembers: 'activeMembers',
    newMembers: 'newMembers',
    membershipTypes: 'membershipTypes',
    membersByType: 'membersByType',
    membersByMonth: 'membersByMonth',
    retentionRate: 'retentionRate',
    growthRate: 'growthRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberStatsScalarFieldEnum = (typeof MemberStatsScalarFieldEnum)[keyof typeof MemberStatsScalarFieldEnum]


  export const MessageStatsScalarFieldEnum: {
    id: 'id',
    totalMessages: 'totalMessages',
    newMessages: 'newMessages',
    repliedMessages: 'repliedMessages',
    responseRate: 'responseRate',
    messagesByMonth: 'messagesByMonth',
    responseTrend: 'responseTrend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageStatsScalarFieldEnum = (typeof MessageStatsScalarFieldEnum)[keyof typeof MessageStatsScalarFieldEnum]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    totalUsers: 'totalUsers',
    activeUsers: 'activeUsers',
    newUsers: 'newUsers',
    userRoles: 'userRoles',
    usersByMonth: 'usersByMonth',
    activityRate: 'activityRate',
    growthRate: 'growthRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    blogPosts?: BlogPostListRelationFilter
    events?: EventListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPosts?: BlogPostOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    blogPosts?: BlogPostListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    code?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    isDefault?: BoolFilter<"Language"> | boolean
    blogPostTranslations?: BlogPostTranslationListRelationFilter
    eventTranslations?: EventTranslationListRelationFilter
    websiteSettings?: WebsiteSettingListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    blogPostTranslations?: BlogPostTranslationOrderByRelationAggregateInput
    eventTranslations?: EventTranslationOrderByRelationAggregateInput
    websiteSettings?: WebsiteSettingOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    isDefault?: BoolFilter<"Language"> | boolean
    blogPostTranslations?: BlogPostTranslationListRelationFilter
    eventTranslations?: EventTranslationListRelationFilter
    websiteSettings?: WebsiteSettingListRelationFilter
  }, "code">

  export type LanguageOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    isDefault?: BoolWithAggregatesFilter<"Language"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    imageUrl?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    capacity?: IntNullableFilter<"Event"> | number | null
    spotsLeft?: IntNullableFilter<"Event"> | number | null
    price?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    priceMembers?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    pricePremium?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFilter<"Event"> | string
    isArchived?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: StringNullableFilter<"Event"> | string | null
    createdBy?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    registrations?: EventRegistrationListRelationFilter
    translations?: EventTranslationListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    spotsLeft?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceMembers?: SortOrderInput | SortOrder
    pricePremium?: SortOrderInput | SortOrder
    eventType?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdBy?: AdminUserOrderByWithRelationInput
    registrations?: EventRegistrationOrderByRelationAggregateInput
    translations?: EventTranslationOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    imageUrl?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    capacity?: IntNullableFilter<"Event"> | number | null
    spotsLeft?: IntNullableFilter<"Event"> | number | null
    price?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    priceMembers?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    pricePremium?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFilter<"Event"> | string
    isArchived?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: StringNullableFilter<"Event"> | string | null
    createdBy?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    registrations?: EventRegistrationListRelationFilter
    translations?: EventTranslationListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    spotsLeft?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceMembers?: SortOrderInput | SortOrder
    pricePremium?: SortOrderInput | SortOrder
    eventType?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventEndDate?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Event"> | number | null
    spotsLeft?: IntNullableWithAggregatesFilter<"Event"> | number | null
    price?: DecimalNullableWithAggregatesFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    priceMembers?: DecimalNullableWithAggregatesFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    pricePremium?: DecimalNullableWithAggregatesFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    eventType?: StringWithAggregatesFilter<"Event"> | string
    isArchived?: BoolWithAggregatesFilter<"Event"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type EventTranslationWhereInput = {
    AND?: EventTranslationWhereInput | EventTranslationWhereInput[]
    OR?: EventTranslationWhereInput[]
    NOT?: EventTranslationWhereInput | EventTranslationWhereInput[]
    id?: StringFilter<"EventTranslation"> | string
    eventId?: StringFilter<"EventTranslation"> | string
    languageCode?: StringFilter<"EventTranslation"> | string
    title?: StringFilter<"EventTranslation"> | string
    description?: StringFilter<"EventTranslation"> | string
    longDescription?: StringNullableFilter<"EventTranslation"> | string | null
    requirements?: StringNullableFilter<"EventTranslation"> | string | null
    additionalInfo?: StringNullableFilter<"EventTranslation"> | string | null
    instructorName?: StringNullableFilter<"EventTranslation"> | string | null
    instructorBio?: StringNullableFilter<"EventTranslation"> | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type EventTranslationOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    instructorName?: SortOrderInput | SortOrder
    instructorBio?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type EventTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_languageCode?: EventTranslationEventIdLanguageCodeCompoundUniqueInput
    AND?: EventTranslationWhereInput | EventTranslationWhereInput[]
    OR?: EventTranslationWhereInput[]
    NOT?: EventTranslationWhereInput | EventTranslationWhereInput[]
    eventId?: StringFilter<"EventTranslation"> | string
    languageCode?: StringFilter<"EventTranslation"> | string
    title?: StringFilter<"EventTranslation"> | string
    description?: StringFilter<"EventTranslation"> | string
    longDescription?: StringNullableFilter<"EventTranslation"> | string | null
    requirements?: StringNullableFilter<"EventTranslation"> | string | null
    additionalInfo?: StringNullableFilter<"EventTranslation"> | string | null
    instructorName?: StringNullableFilter<"EventTranslation"> | string | null
    instructorBio?: StringNullableFilter<"EventTranslation"> | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id" | "eventId_languageCode">

  export type EventTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    instructorName?: SortOrderInput | SortOrder
    instructorBio?: SortOrderInput | SortOrder
    _count?: EventTranslationCountOrderByAggregateInput
    _max?: EventTranslationMaxOrderByAggregateInput
    _min?: EventTranslationMinOrderByAggregateInput
  }

  export type EventTranslationScalarWhereWithAggregatesInput = {
    AND?: EventTranslationScalarWhereWithAggregatesInput | EventTranslationScalarWhereWithAggregatesInput[]
    OR?: EventTranslationScalarWhereWithAggregatesInput[]
    NOT?: EventTranslationScalarWhereWithAggregatesInput | EventTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventTranslation"> | string
    eventId?: StringWithAggregatesFilter<"EventTranslation"> | string
    languageCode?: StringWithAggregatesFilter<"EventTranslation"> | string
    title?: StringWithAggregatesFilter<"EventTranslation"> | string
    description?: StringWithAggregatesFilter<"EventTranslation"> | string
    longDescription?: StringNullableWithAggregatesFilter<"EventTranslation"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"EventTranslation"> | string | null
    additionalInfo?: StringNullableWithAggregatesFilter<"EventTranslation"> | string | null
    instructorName?: StringNullableWithAggregatesFilter<"EventTranslation"> | string | null
    instructorBio?: StringNullableWithAggregatesFilter<"EventTranslation"> | string | null
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    imageUrl?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    isPublished?: BoolFilter<"BlogPost"> | boolean
    readTime?: IntNullableFilter<"BlogPost"> | number | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    isFeatured?: BoolFilter<"BlogPost"> | boolean
    isArchived?: BoolFilter<"BlogPost"> | boolean
    author?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    translations?: BlogPostTranslationListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    readTime?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    author?: AdminUserOrderByWithRelationInput
    translations?: BlogPostTranslationOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    imageUrl?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    isPublished?: BoolFilter<"BlogPost"> | boolean
    readTime?: IntNullableFilter<"BlogPost"> | number | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    isFeatured?: BoolFilter<"BlogPost"> | boolean
    isArchived?: BoolFilter<"BlogPost"> | boolean
    author?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    translations?: BlogPostTranslationListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    readTime?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    isPublished?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    readTime?: IntNullableWithAggregatesFilter<"BlogPost"> | number | null
    category?: StringWithAggregatesFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    authorId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    isFeatured?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    isArchived?: BoolWithAggregatesFilter<"BlogPost"> | boolean
  }

  export type BlogPostTranslationWhereInput = {
    AND?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    OR?: BlogPostTranslationWhereInput[]
    NOT?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    id?: StringFilter<"BlogPostTranslation"> | string
    blogPostId?: StringFilter<"BlogPostTranslation"> | string
    languageCode?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    description?: StringFilter<"BlogPostTranslation"> | string
    content?: StringFilter<"BlogPostTranslation"> | string
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaKeywords?: StringNullableFilter<"BlogPostTranslation"> | string | null
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type BlogPostTranslationOrderByWithRelationInput = {
    id?: SortOrder
    blogPostId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type BlogPostTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blogPostId_languageCode?: BlogPostTranslationBlogPostIdLanguageCodeCompoundUniqueInput
    AND?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    OR?: BlogPostTranslationWhereInput[]
    NOT?: BlogPostTranslationWhereInput | BlogPostTranslationWhereInput[]
    blogPostId?: StringFilter<"BlogPostTranslation"> | string
    languageCode?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    description?: StringFilter<"BlogPostTranslation"> | string
    content?: StringFilter<"BlogPostTranslation"> | string
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaKeywords?: StringNullableFilter<"BlogPostTranslation"> | string | null
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id" | "blogPostId_languageCode">

  export type BlogPostTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    blogPostId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    _count?: BlogPostTranslationCountOrderByAggregateInput
    _max?: BlogPostTranslationMaxOrderByAggregateInput
    _min?: BlogPostTranslationMinOrderByAggregateInput
  }

  export type BlogPostTranslationScalarWhereWithAggregatesInput = {
    AND?: BlogPostTranslationScalarWhereWithAggregatesInput | BlogPostTranslationScalarWhereWithAggregatesInput[]
    OR?: BlogPostTranslationScalarWhereWithAggregatesInput[]
    NOT?: BlogPostTranslationScalarWhereWithAggregatesInput | BlogPostTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    blogPostId?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    languageCode?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    title?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    description?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    content?: StringWithAggregatesFilter<"BlogPostTranslation"> | string
    metaDescription?: StringNullableWithAggregatesFilter<"BlogPostTranslation"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"BlogPostTranslation"> | string | null
  }

  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: StringFilter<"ContactSubmission"> | string
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    subject?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    isRead?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    subject?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    isRead?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactSubmission"> | string
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    subject?: StringWithAggregatesFilter<"ContactSubmission"> | string
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    isRead?: BoolWithAggregatesFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
  }

  export type MembershipApplicationWhereInput = {
    AND?: MembershipApplicationWhereInput | MembershipApplicationWhereInput[]
    OR?: MembershipApplicationWhereInput[]
    NOT?: MembershipApplicationWhereInput | MembershipApplicationWhereInput[]
    id?: StringFilter<"MembershipApplication"> | string
    firstName?: StringFilter<"MembershipApplication"> | string
    lastName?: StringFilter<"MembershipApplication"> | string
    email?: StringFilter<"MembershipApplication"> | string
    phone?: StringNullableFilter<"MembershipApplication"> | string | null
    membershipType?: StringFilter<"MembershipApplication"> | string
    experienceLevel?: StringNullableFilter<"MembershipApplication"> | string | null
    interests?: StringNullableListFilter<"MembershipApplication">
    comments?: StringNullableFilter<"MembershipApplication"> | string | null
    status?: StringFilter<"MembershipApplication"> | string
    createdAt?: DateTimeFilter<"MembershipApplication"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipApplication"> | Date | string
  }

  export type MembershipApplicationOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    membershipType?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    interests?: SortOrder
    comments?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipApplicationWhereInput | MembershipApplicationWhereInput[]
    OR?: MembershipApplicationWhereInput[]
    NOT?: MembershipApplicationWhereInput | MembershipApplicationWhereInput[]
    firstName?: StringFilter<"MembershipApplication"> | string
    lastName?: StringFilter<"MembershipApplication"> | string
    email?: StringFilter<"MembershipApplication"> | string
    phone?: StringNullableFilter<"MembershipApplication"> | string | null
    membershipType?: StringFilter<"MembershipApplication"> | string
    experienceLevel?: StringNullableFilter<"MembershipApplication"> | string | null
    interests?: StringNullableListFilter<"MembershipApplication">
    comments?: StringNullableFilter<"MembershipApplication"> | string | null
    status?: StringFilter<"MembershipApplication"> | string
    createdAt?: DateTimeFilter<"MembershipApplication"> | Date | string
    updatedAt?: DateTimeFilter<"MembershipApplication"> | Date | string
  }, "id">

  export type MembershipApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    membershipType?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    interests?: SortOrder
    comments?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MembershipApplicationCountOrderByAggregateInput
    _max?: MembershipApplicationMaxOrderByAggregateInput
    _min?: MembershipApplicationMinOrderByAggregateInput
  }

  export type MembershipApplicationScalarWhereWithAggregatesInput = {
    AND?: MembershipApplicationScalarWhereWithAggregatesInput | MembershipApplicationScalarWhereWithAggregatesInput[]
    OR?: MembershipApplicationScalarWhereWithAggregatesInput[]
    NOT?: MembershipApplicationScalarWhereWithAggregatesInput | MembershipApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipApplication"> | string
    firstName?: StringWithAggregatesFilter<"MembershipApplication"> | string
    lastName?: StringWithAggregatesFilter<"MembershipApplication"> | string
    email?: StringWithAggregatesFilter<"MembershipApplication"> | string
    phone?: StringNullableWithAggregatesFilter<"MembershipApplication"> | string | null
    membershipType?: StringWithAggregatesFilter<"MembershipApplication"> | string
    experienceLevel?: StringNullableWithAggregatesFilter<"MembershipApplication"> | string | null
    interests?: StringNullableListFilter<"MembershipApplication">
    comments?: StringNullableWithAggregatesFilter<"MembershipApplication"> | string | null
    status?: StringWithAggregatesFilter<"MembershipApplication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MembershipApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MembershipApplication"> | Date | string
  }

  export type EventRegistrationWhereInput = {
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    id?: StringFilter<"EventRegistration"> | string
    eventId?: StringFilter<"EventRegistration"> | string
    firstName?: StringFilter<"EventRegistration"> | string
    lastName?: StringFilter<"EventRegistration"> | string
    email?: StringFilter<"EventRegistration"> | string
    phone?: StringNullableFilter<"EventRegistration"> | string | null
    isMember?: BoolFilter<"EventRegistration"> | boolean
    status?: StringFilter<"EventRegistration"> | string
    createdAt?: DateTimeFilter<"EventRegistration"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isMember?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    eventId?: StringFilter<"EventRegistration"> | string
    firstName?: StringFilter<"EventRegistration"> | string
    lastName?: StringFilter<"EventRegistration"> | string
    email?: StringFilter<"EventRegistration"> | string
    phone?: StringNullableFilter<"EventRegistration"> | string | null
    isMember?: BoolFilter<"EventRegistration"> | boolean
    status?: StringFilter<"EventRegistration"> | string
    createdAt?: DateTimeFilter<"EventRegistration"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isMember?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EventRegistrationCountOrderByAggregateInput
    _max?: EventRegistrationMaxOrderByAggregateInput
    _min?: EventRegistrationMinOrderByAggregateInput
  }

  export type EventRegistrationScalarWhereWithAggregatesInput = {
    AND?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    OR?: EventRegistrationScalarWhereWithAggregatesInput[]
    NOT?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventRegistration"> | string
    eventId?: StringWithAggregatesFilter<"EventRegistration"> | string
    firstName?: StringWithAggregatesFilter<"EventRegistration"> | string
    lastName?: StringWithAggregatesFilter<"EventRegistration"> | string
    email?: StringWithAggregatesFilter<"EventRegistration"> | string
    phone?: StringNullableWithAggregatesFilter<"EventRegistration"> | string | null
    isMember?: BoolWithAggregatesFilter<"EventRegistration"> | boolean
    status?: StringWithAggregatesFilter<"EventRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string
  }

  export type WebsiteSettingWhereInput = {
    AND?: WebsiteSettingWhereInput | WebsiteSettingWhereInput[]
    OR?: WebsiteSettingWhereInput[]
    NOT?: WebsiteSettingWhereInput | WebsiteSettingWhereInput[]
    id?: StringFilter<"WebsiteSetting"> | string
    settingKey?: StringFilter<"WebsiteSetting"> | string
    settingValue?: StringNullableFilter<"WebsiteSetting"> | string | null
    languageCode?: StringNullableFilter<"WebsiteSetting"> | string | null
    updatedAt?: DateTimeFilter<"WebsiteSetting"> | Date | string
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
  }

  export type WebsiteSettingOrderByWithRelationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    language?: LanguageOrderByWithRelationInput
  }

  export type WebsiteSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    settingKey?: string
    AND?: WebsiteSettingWhereInput | WebsiteSettingWhereInput[]
    OR?: WebsiteSettingWhereInput[]
    NOT?: WebsiteSettingWhereInput | WebsiteSettingWhereInput[]
    settingValue?: StringNullableFilter<"WebsiteSetting"> | string | null
    languageCode?: StringNullableFilter<"WebsiteSetting"> | string | null
    updatedAt?: DateTimeFilter<"WebsiteSetting"> | Date | string
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
  }, "id" | "settingKey">

  export type WebsiteSettingOrderByWithAggregationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: WebsiteSettingCountOrderByAggregateInput
    _max?: WebsiteSettingMaxOrderByAggregateInput
    _min?: WebsiteSettingMinOrderByAggregateInput
  }

  export type WebsiteSettingScalarWhereWithAggregatesInput = {
    AND?: WebsiteSettingScalarWhereWithAggregatesInput | WebsiteSettingScalarWhereWithAggregatesInput[]
    OR?: WebsiteSettingScalarWhereWithAggregatesInput[]
    NOT?: WebsiteSettingScalarWhereWithAggregatesInput | WebsiteSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsiteSetting"> | string
    settingKey?: StringWithAggregatesFilter<"WebsiteSetting"> | string
    settingValue?: StringNullableWithAggregatesFilter<"WebsiteSetting"> | string | null
    languageCode?: StringNullableWithAggregatesFilter<"WebsiteSetting"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"WebsiteSetting"> | Date | string
  }

  export type BlogStatsWhereInput = {
    AND?: BlogStatsWhereInput | BlogStatsWhereInput[]
    OR?: BlogStatsWhereInput[]
    NOT?: BlogStatsWhereInput | BlogStatsWhereInput[]
    id?: StringFilter<"BlogStats"> | string
    totalPosts?: IntFilter<"BlogStats"> | number
    publishedPosts?: IntFilter<"BlogStats"> | number
    draftPosts?: IntFilter<"BlogStats"> | number
    archivedPosts?: IntFilter<"BlogStats"> | number
    recentPosts?: IntFilter<"BlogStats"> | number
    postsByCategory?: JsonFilter<"BlogStats">
    postsByMonth?: JsonFilter<"BlogStats">
    postsByAuthor?: JsonFilter<"BlogStats">
    averageReadTime?: IntFilter<"BlogStats"> | number
    postTrend?: FloatFilter<"BlogStats"> | number
    publishingRate?: FloatFilter<"BlogStats"> | number
    completionRate?: FloatFilter<"BlogStats"> | number
    createdAt?: DateTimeFilter<"BlogStats"> | Date | string
    updatedAt?: DateTimeFilter<"BlogStats"> | Date | string
  }

  export type BlogStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    postsByCategory?: SortOrder
    postsByMonth?: SortOrder
    postsByAuthor?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogStatsWhereInput | BlogStatsWhereInput[]
    OR?: BlogStatsWhereInput[]
    NOT?: BlogStatsWhereInput | BlogStatsWhereInput[]
    totalPosts?: IntFilter<"BlogStats"> | number
    publishedPosts?: IntFilter<"BlogStats"> | number
    draftPosts?: IntFilter<"BlogStats"> | number
    archivedPosts?: IntFilter<"BlogStats"> | number
    recentPosts?: IntFilter<"BlogStats"> | number
    postsByCategory?: JsonFilter<"BlogStats">
    postsByMonth?: JsonFilter<"BlogStats">
    postsByAuthor?: JsonFilter<"BlogStats">
    averageReadTime?: IntFilter<"BlogStats"> | number
    postTrend?: FloatFilter<"BlogStats"> | number
    publishingRate?: FloatFilter<"BlogStats"> | number
    completionRate?: FloatFilter<"BlogStats"> | number
    createdAt?: DateTimeFilter<"BlogStats"> | Date | string
    updatedAt?: DateTimeFilter<"BlogStats"> | Date | string
  }, "id">

  export type BlogStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    postsByCategory?: SortOrder
    postsByMonth?: SortOrder
    postsByAuthor?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogStatsCountOrderByAggregateInput
    _avg?: BlogStatsAvgOrderByAggregateInput
    _max?: BlogStatsMaxOrderByAggregateInput
    _min?: BlogStatsMinOrderByAggregateInput
    _sum?: BlogStatsSumOrderByAggregateInput
  }

  export type BlogStatsScalarWhereWithAggregatesInput = {
    AND?: BlogStatsScalarWhereWithAggregatesInput | BlogStatsScalarWhereWithAggregatesInput[]
    OR?: BlogStatsScalarWhereWithAggregatesInput[]
    NOT?: BlogStatsScalarWhereWithAggregatesInput | BlogStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogStats"> | string
    totalPosts?: IntWithAggregatesFilter<"BlogStats"> | number
    publishedPosts?: IntWithAggregatesFilter<"BlogStats"> | number
    draftPosts?: IntWithAggregatesFilter<"BlogStats"> | number
    archivedPosts?: IntWithAggregatesFilter<"BlogStats"> | number
    recentPosts?: IntWithAggregatesFilter<"BlogStats"> | number
    postsByCategory?: JsonWithAggregatesFilter<"BlogStats">
    postsByMonth?: JsonWithAggregatesFilter<"BlogStats">
    postsByAuthor?: JsonWithAggregatesFilter<"BlogStats">
    averageReadTime?: IntWithAggregatesFilter<"BlogStats"> | number
    postTrend?: FloatWithAggregatesFilter<"BlogStats"> | number
    publishingRate?: FloatWithAggregatesFilter<"BlogStats"> | number
    completionRate?: FloatWithAggregatesFilter<"BlogStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlogStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogStats"> | Date | string
  }

  export type EventStatsWhereInput = {
    AND?: EventStatsWhereInput | EventStatsWhereInput[]
    OR?: EventStatsWhereInput[]
    NOT?: EventStatsWhereInput | EventStatsWhereInput[]
    id?: StringFilter<"EventStats"> | string
    totalEvents?: IntFilter<"EventStats"> | number
    upcomingEvents?: IntFilter<"EventStats"> | number
    ongoingEvents?: IntFilter<"EventStats"> | number
    totalParticipants?: IntFilter<"EventStats"> | number
    eventsByType?: JsonFilter<"EventStats">
    eventsByMonth?: JsonFilter<"EventStats">
    averageParticipants?: IntFilter<"EventStats"> | number
    participationRate?: FloatFilter<"EventStats"> | number
    createdAt?: DateTimeFilter<"EventStats"> | Date | string
    updatedAt?: DateTimeFilter<"EventStats"> | Date | string
  }

  export type EventStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    eventsByType?: SortOrder
    eventsByMonth?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventStatsWhereInput | EventStatsWhereInput[]
    OR?: EventStatsWhereInput[]
    NOT?: EventStatsWhereInput | EventStatsWhereInput[]
    totalEvents?: IntFilter<"EventStats"> | number
    upcomingEvents?: IntFilter<"EventStats"> | number
    ongoingEvents?: IntFilter<"EventStats"> | number
    totalParticipants?: IntFilter<"EventStats"> | number
    eventsByType?: JsonFilter<"EventStats">
    eventsByMonth?: JsonFilter<"EventStats">
    averageParticipants?: IntFilter<"EventStats"> | number
    participationRate?: FloatFilter<"EventStats"> | number
    createdAt?: DateTimeFilter<"EventStats"> | Date | string
    updatedAt?: DateTimeFilter<"EventStats"> | Date | string
  }, "id">

  export type EventStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    eventsByType?: SortOrder
    eventsByMonth?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventStatsCountOrderByAggregateInput
    _avg?: EventStatsAvgOrderByAggregateInput
    _max?: EventStatsMaxOrderByAggregateInput
    _min?: EventStatsMinOrderByAggregateInput
    _sum?: EventStatsSumOrderByAggregateInput
  }

  export type EventStatsScalarWhereWithAggregatesInput = {
    AND?: EventStatsScalarWhereWithAggregatesInput | EventStatsScalarWhereWithAggregatesInput[]
    OR?: EventStatsScalarWhereWithAggregatesInput[]
    NOT?: EventStatsScalarWhereWithAggregatesInput | EventStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventStats"> | string
    totalEvents?: IntWithAggregatesFilter<"EventStats"> | number
    upcomingEvents?: IntWithAggregatesFilter<"EventStats"> | number
    ongoingEvents?: IntWithAggregatesFilter<"EventStats"> | number
    totalParticipants?: IntWithAggregatesFilter<"EventStats"> | number
    eventsByType?: JsonWithAggregatesFilter<"EventStats">
    eventsByMonth?: JsonWithAggregatesFilter<"EventStats">
    averageParticipants?: IntWithAggregatesFilter<"EventStats"> | number
    participationRate?: FloatWithAggregatesFilter<"EventStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventStats"> | Date | string
  }

  export type MemberStatsWhereInput = {
    AND?: MemberStatsWhereInput | MemberStatsWhereInput[]
    OR?: MemberStatsWhereInput[]
    NOT?: MemberStatsWhereInput | MemberStatsWhereInput[]
    id?: StringFilter<"MemberStats"> | string
    totalMembers?: IntFilter<"MemberStats"> | number
    activeMembers?: IntFilter<"MemberStats"> | number
    newMembers?: IntFilter<"MemberStats"> | number
    membershipTypes?: IntFilter<"MemberStats"> | number
    membersByType?: JsonFilter<"MemberStats">
    membersByMonth?: JsonFilter<"MemberStats">
    retentionRate?: FloatFilter<"MemberStats"> | number
    growthRate?: FloatFilter<"MemberStats"> | number
    createdAt?: DateTimeFilter<"MemberStats"> | Date | string
    updatedAt?: DateTimeFilter<"MemberStats"> | Date | string
  }

  export type MemberStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    membersByType?: SortOrder
    membersByMonth?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberStatsWhereInput | MemberStatsWhereInput[]
    OR?: MemberStatsWhereInput[]
    NOT?: MemberStatsWhereInput | MemberStatsWhereInput[]
    totalMembers?: IntFilter<"MemberStats"> | number
    activeMembers?: IntFilter<"MemberStats"> | number
    newMembers?: IntFilter<"MemberStats"> | number
    membershipTypes?: IntFilter<"MemberStats"> | number
    membersByType?: JsonFilter<"MemberStats">
    membersByMonth?: JsonFilter<"MemberStats">
    retentionRate?: FloatFilter<"MemberStats"> | number
    growthRate?: FloatFilter<"MemberStats"> | number
    createdAt?: DateTimeFilter<"MemberStats"> | Date | string
    updatedAt?: DateTimeFilter<"MemberStats"> | Date | string
  }, "id">

  export type MemberStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    membersByType?: SortOrder
    membersByMonth?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberStatsCountOrderByAggregateInput
    _avg?: MemberStatsAvgOrderByAggregateInput
    _max?: MemberStatsMaxOrderByAggregateInput
    _min?: MemberStatsMinOrderByAggregateInput
    _sum?: MemberStatsSumOrderByAggregateInput
  }

  export type MemberStatsScalarWhereWithAggregatesInput = {
    AND?: MemberStatsScalarWhereWithAggregatesInput | MemberStatsScalarWhereWithAggregatesInput[]
    OR?: MemberStatsScalarWhereWithAggregatesInput[]
    NOT?: MemberStatsScalarWhereWithAggregatesInput | MemberStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberStats"> | string
    totalMembers?: IntWithAggregatesFilter<"MemberStats"> | number
    activeMembers?: IntWithAggregatesFilter<"MemberStats"> | number
    newMembers?: IntWithAggregatesFilter<"MemberStats"> | number
    membershipTypes?: IntWithAggregatesFilter<"MemberStats"> | number
    membersByType?: JsonWithAggregatesFilter<"MemberStats">
    membersByMonth?: JsonWithAggregatesFilter<"MemberStats">
    retentionRate?: FloatWithAggregatesFilter<"MemberStats"> | number
    growthRate?: FloatWithAggregatesFilter<"MemberStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MemberStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MemberStats"> | Date | string
  }

  export type MessageStatsWhereInput = {
    AND?: MessageStatsWhereInput | MessageStatsWhereInput[]
    OR?: MessageStatsWhereInput[]
    NOT?: MessageStatsWhereInput | MessageStatsWhereInput[]
    id?: StringFilter<"MessageStats"> | string
    totalMessages?: IntFilter<"MessageStats"> | number
    newMessages?: IntFilter<"MessageStats"> | number
    repliedMessages?: IntFilter<"MessageStats"> | number
    responseRate?: FloatFilter<"MessageStats"> | number
    messagesByMonth?: JsonFilter<"MessageStats">
    responseTrend?: FloatFilter<"MessageStats"> | number
    createdAt?: DateTimeFilter<"MessageStats"> | Date | string
    updatedAt?: DateTimeFilter<"MessageStats"> | Date | string
  }

  export type MessageStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    messagesByMonth?: SortOrder
    responseTrend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageStatsWhereInput | MessageStatsWhereInput[]
    OR?: MessageStatsWhereInput[]
    NOT?: MessageStatsWhereInput | MessageStatsWhereInput[]
    totalMessages?: IntFilter<"MessageStats"> | number
    newMessages?: IntFilter<"MessageStats"> | number
    repliedMessages?: IntFilter<"MessageStats"> | number
    responseRate?: FloatFilter<"MessageStats"> | number
    messagesByMonth?: JsonFilter<"MessageStats">
    responseTrend?: FloatFilter<"MessageStats"> | number
    createdAt?: DateTimeFilter<"MessageStats"> | Date | string
    updatedAt?: DateTimeFilter<"MessageStats"> | Date | string
  }, "id">

  export type MessageStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    messagesByMonth?: SortOrder
    responseTrend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageStatsCountOrderByAggregateInput
    _avg?: MessageStatsAvgOrderByAggregateInput
    _max?: MessageStatsMaxOrderByAggregateInput
    _min?: MessageStatsMinOrderByAggregateInput
    _sum?: MessageStatsSumOrderByAggregateInput
  }

  export type MessageStatsScalarWhereWithAggregatesInput = {
    AND?: MessageStatsScalarWhereWithAggregatesInput | MessageStatsScalarWhereWithAggregatesInput[]
    OR?: MessageStatsScalarWhereWithAggregatesInput[]
    NOT?: MessageStatsScalarWhereWithAggregatesInput | MessageStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageStats"> | string
    totalMessages?: IntWithAggregatesFilter<"MessageStats"> | number
    newMessages?: IntWithAggregatesFilter<"MessageStats"> | number
    repliedMessages?: IntWithAggregatesFilter<"MessageStats"> | number
    responseRate?: FloatWithAggregatesFilter<"MessageStats"> | number
    messagesByMonth?: JsonWithAggregatesFilter<"MessageStats">
    responseTrend?: FloatWithAggregatesFilter<"MessageStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MessageStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageStats"> | Date | string
  }

  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    totalUsers?: IntFilter<"UserStats"> | number
    activeUsers?: IntFilter<"UserStats"> | number
    newUsers?: IntFilter<"UserStats"> | number
    userRoles?: IntFilter<"UserStats"> | number
    usersByMonth?: JsonFilter<"UserStats">
    activityRate?: FloatFilter<"UserStats"> | number
    growthRate?: FloatFilter<"UserStats"> | number
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    usersByMonth?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    totalUsers?: IntFilter<"UserStats"> | number
    activeUsers?: IntFilter<"UserStats"> | number
    newUsers?: IntFilter<"UserStats"> | number
    userRoles?: IntFilter<"UserStats"> | number
    usersByMonth?: JsonFilter<"UserStats">
    activityRate?: FloatFilter<"UserStats"> | number
    growthRate?: FloatFilter<"UserStats"> | number
    createdAt?: DateTimeFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
  }, "id">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    usersByMonth?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    totalUsers?: IntWithAggregatesFilter<"UserStats"> | number
    activeUsers?: IntWithAggregatesFilter<"UserStats"> | number
    newUsers?: IntWithAggregatesFilter<"UserStats"> | number
    userRoles?: IntWithAggregatesFilter<"UserStats"> | number
    usersByMonth?: JsonWithAggregatesFilter<"UserStats">
    activityRate?: FloatWithAggregatesFilter<"UserStats"> | number
    growthRate?: FloatWithAggregatesFilter<"UserStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationCreateNestedManyWithoutLanguageInput
    eventTranslations?: EventTranslationCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationUncheckedCreateNestedManyWithoutLanguageInput
    eventTranslations?: EventTranslationUncheckedCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUpdateManyWithoutLanguageNestedInput
    eventTranslations?: EventTranslationUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUncheckedUpdateManyWithoutLanguageNestedInput
    eventTranslations?: EventTranslationUncheckedUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    code: string
    name: string
    isDefault?: boolean
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: AdminUserCreateNestedOneWithoutEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    translations?: EventTranslationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    translations?: EventTranslationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUserUpdateOneWithoutEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    translations?: EventTranslationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    translations?: EventTranslationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationCreateInput = {
    id?: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
    event: EventCreateNestedOneWithoutTranslationsInput
    language: LanguageCreateNestedOneWithoutEventTranslationsInput
  }

  export type EventTranslationUncheckedCreateInput = {
    id?: string
    eventId: string
    languageCode: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type EventTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneRequiredWithoutTranslationsNestedInput
    language?: LanguageUpdateOneRequiredWithoutEventTranslationsNestedInput
  }

  export type EventTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationCreateManyInput = {
    id?: string
    eventId: string
    languageCode: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type EventTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
    author?: AdminUserCreateNestedOneWithoutBlogPostsInput
    translations?: BlogPostTranslationCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
    translations?: BlogPostTranslationUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    author?: AdminUserUpdateOneWithoutBlogPostsNestedInput
    translations?: BlogPostTranslationUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    translations?: BlogPostTranslationUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostTranslationCreateInput = {
    id?: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
    blogPost: BlogPostCreateNestedOneWithoutTranslationsInput
    language: LanguageCreateNestedOneWithoutBlogPostTranslationsInput
  }

  export type BlogPostTranslationUncheckedCreateInput = {
    id?: string
    blogPostId: string
    languageCode: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type BlogPostTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    blogPost?: BlogPostUpdateOneRequiredWithoutTranslationsNestedInput
    language?: LanguageUpdateOneRequiredWithoutBlogPostTranslationsNestedInput
  }

  export type BlogPostTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogPostId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTranslationCreateManyInput = {
    id?: string
    blogPostId: string
    languageCode: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type BlogPostTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogPostId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactSubmissionCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateManyInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipApplicationCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    membershipType: string
    experienceLevel?: string | null
    interests?: MembershipApplicationCreateinterestsInput | string[]
    comments?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipApplicationUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    membershipType: string
    experienceLevel?: string | null
    interests?: MembershipApplicationCreateinterestsInput | string[]
    comments?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    membershipType?: StringFieldUpdateOperationsInput | string
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: MembershipApplicationUpdateinterestsInput | string[]
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    membershipType?: StringFieldUpdateOperationsInput | string
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: MembershipApplicationUpdateinterestsInput | string[]
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipApplicationCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    membershipType: string
    experienceLevel?: string | null
    interests?: MembershipApplicationCreateinterestsInput | string[]
    comments?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    membershipType?: StringFieldUpdateOperationsInput | string
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: MembershipApplicationUpdateinterestsInput | string[]
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    membershipType?: StringFieldUpdateOperationsInput | string
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: MembershipApplicationUpdateinterestsInput | string[]
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type EventRegistrationUncheckedCreateInput = {
    id?: string
    eventId: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type EventRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type EventRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateManyInput = {
    id?: string
    eventId: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type EventRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteSettingCreateInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    updatedAt?: Date | string
    language?: LanguageCreateNestedOneWithoutWebsiteSettingsInput
  }

  export type WebsiteSettingUncheckedCreateInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    languageCode?: string | null
    updatedAt?: Date | string
  }

  export type WebsiteSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneWithoutWebsiteSettingsNestedInput
  }

  export type WebsiteSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteSettingCreateManyInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    languageCode?: string | null
    updatedAt?: Date | string
  }

  export type WebsiteSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogStatsCreateInput = {
    id?: string
    totalPosts?: number
    publishedPosts?: number
    draftPosts?: number
    archivedPosts?: number
    recentPosts?: number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: number
    postTrend?: number
    publishingRate?: number
    completionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogStatsUncheckedCreateInput = {
    id?: string
    totalPosts?: number
    publishedPosts?: number
    draftPosts?: number
    archivedPosts?: number
    recentPosts?: number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: number
    postTrend?: number
    publishingRate?: number
    completionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    publishedPosts?: IntFieldUpdateOperationsInput | number
    draftPosts?: IntFieldUpdateOperationsInput | number
    archivedPosts?: IntFieldUpdateOperationsInput | number
    recentPosts?: IntFieldUpdateOperationsInput | number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: IntFieldUpdateOperationsInput | number
    postTrend?: FloatFieldUpdateOperationsInput | number
    publishingRate?: FloatFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    publishedPosts?: IntFieldUpdateOperationsInput | number
    draftPosts?: IntFieldUpdateOperationsInput | number
    archivedPosts?: IntFieldUpdateOperationsInput | number
    recentPosts?: IntFieldUpdateOperationsInput | number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: IntFieldUpdateOperationsInput | number
    postTrend?: FloatFieldUpdateOperationsInput | number
    publishingRate?: FloatFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogStatsCreateManyInput = {
    id?: string
    totalPosts?: number
    publishedPosts?: number
    draftPosts?: number
    archivedPosts?: number
    recentPosts?: number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: number
    postTrend?: number
    publishingRate?: number
    completionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    publishedPosts?: IntFieldUpdateOperationsInput | number
    draftPosts?: IntFieldUpdateOperationsInput | number
    archivedPosts?: IntFieldUpdateOperationsInput | number
    recentPosts?: IntFieldUpdateOperationsInput | number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: IntFieldUpdateOperationsInput | number
    postTrend?: FloatFieldUpdateOperationsInput | number
    publishingRate?: FloatFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    publishedPosts?: IntFieldUpdateOperationsInput | number
    draftPosts?: IntFieldUpdateOperationsInput | number
    archivedPosts?: IntFieldUpdateOperationsInput | number
    recentPosts?: IntFieldUpdateOperationsInput | number
    postsByCategory?: JsonNullValueInput | InputJsonValue
    postsByMonth?: JsonNullValueInput | InputJsonValue
    postsByAuthor?: JsonNullValueInput | InputJsonValue
    averageReadTime?: IntFieldUpdateOperationsInput | number
    postTrend?: FloatFieldUpdateOperationsInput | number
    publishingRate?: FloatFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatsCreateInput = {
    id?: string
    totalEvents?: number
    upcomingEvents?: number
    ongoingEvents?: number
    totalParticipants?: number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: number
    participationRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventStatsUncheckedCreateInput = {
    id?: string
    totalEvents?: number
    upcomingEvents?: number
    ongoingEvents?: number
    totalParticipants?: number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: number
    participationRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalEvents?: IntFieldUpdateOperationsInput | number
    upcomingEvents?: IntFieldUpdateOperationsInput | number
    ongoingEvents?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalEvents?: IntFieldUpdateOperationsInput | number
    upcomingEvents?: IntFieldUpdateOperationsInput | number
    ongoingEvents?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatsCreateManyInput = {
    id?: string
    totalEvents?: number
    upcomingEvents?: number
    ongoingEvents?: number
    totalParticipants?: number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: number
    participationRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalEvents?: IntFieldUpdateOperationsInput | number
    upcomingEvents?: IntFieldUpdateOperationsInput | number
    ongoingEvents?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalEvents?: IntFieldUpdateOperationsInput | number
    upcomingEvents?: IntFieldUpdateOperationsInput | number
    ongoingEvents?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    eventsByType?: JsonNullValueInput | InputJsonValue
    eventsByMonth?: JsonNullValueInput | InputJsonValue
    averageParticipants?: IntFieldUpdateOperationsInput | number
    participationRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatsCreateInput = {
    id?: string
    totalMembers?: number
    activeMembers?: number
    newMembers?: number
    membershipTypes?: number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatsUncheckedCreateInput = {
    id?: string
    totalMembers?: number
    activeMembers?: number
    newMembers?: number
    membershipTypes?: number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    membershipTypes?: IntFieldUpdateOperationsInput | number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    membershipTypes?: IntFieldUpdateOperationsInput | number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatsCreateManyInput = {
    id?: string
    totalMembers?: number
    activeMembers?: number
    newMembers?: number
    membershipTypes?: number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    membershipTypes?: IntFieldUpdateOperationsInput | number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMembers?: IntFieldUpdateOperationsInput | number
    activeMembers?: IntFieldUpdateOperationsInput | number
    newMembers?: IntFieldUpdateOperationsInput | number
    membershipTypes?: IntFieldUpdateOperationsInput | number
    membersByType?: JsonNullValueInput | InputJsonValue
    membersByMonth?: JsonNullValueInput | InputJsonValue
    retentionRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatsCreateInput = {
    id?: string
    totalMessages?: number
    newMessages?: number
    repliedMessages?: number
    responseRate?: number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageStatsUncheckedCreateInput = {
    id?: string
    totalMessages?: number
    newMessages?: number
    repliedMessages?: number
    responseRate?: number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    newMessages?: IntFieldUpdateOperationsInput | number
    repliedMessages?: IntFieldUpdateOperationsInput | number
    responseRate?: FloatFieldUpdateOperationsInput | number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    newMessages?: IntFieldUpdateOperationsInput | number
    repliedMessages?: IntFieldUpdateOperationsInput | number
    responseRate?: FloatFieldUpdateOperationsInput | number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatsCreateManyInput = {
    id?: string
    totalMessages?: number
    newMessages?: number
    repliedMessages?: number
    responseRate?: number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    newMessages?: IntFieldUpdateOperationsInput | number
    repliedMessages?: IntFieldUpdateOperationsInput | number
    responseRate?: FloatFieldUpdateOperationsInput | number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalMessages?: IntFieldUpdateOperationsInput | number
    newMessages?: IntFieldUpdateOperationsInput | number
    repliedMessages?: IntFieldUpdateOperationsInput | number
    responseRate?: FloatFieldUpdateOperationsInput | number
    messagesByMonth?: JsonNullValueInput | InputJsonValue
    responseTrend?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateInput = {
    id?: string
    totalUsers?: number
    activeUsers?: number
    newUsers?: number
    userRoles?: number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    totalUsers?: number
    activeUsers?: number
    newUsers?: number
    userRoles?: number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    userRoles?: IntFieldUpdateOperationsInput | number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    userRoles?: IntFieldUpdateOperationsInput | number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateManyInput = {
    id?: string
    totalUsers?: number
    activeUsers?: number
    newUsers?: number
    userRoles?: number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: number
    growthRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    userRoles?: IntFieldUpdateOperationsInput | number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    userRoles?: IntFieldUpdateOperationsInput | number
    usersByMonth?: JsonNullValueInput | InputJsonValue
    activityRate?: FloatFieldUpdateOperationsInput | number
    growthRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogPostTranslationListRelationFilter = {
    every?: BlogPostTranslationWhereInput
    some?: BlogPostTranslationWhereInput
    none?: BlogPostTranslationWhereInput
  }

  export type EventTranslationListRelationFilter = {
    every?: EventTranslationWhereInput
    some?: EventTranslationWhereInput
    none?: EventTranslationWhereInput
  }

  export type WebsiteSettingListRelationFilter = {
    every?: WebsiteSettingWhereInput
    some?: WebsiteSettingWhereInput
    none?: WebsiteSettingWhereInput
  }

  export type BlogPostTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteSettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AdminUserNullableScalarRelationFilter = {
    is?: AdminUserWhereInput | null
    isNot?: AdminUserWhereInput | null
  }

  export type EventRegistrationListRelationFilter = {
    every?: EventRegistrationWhereInput
    some?: EventRegistrationWhereInput
    none?: EventRegistrationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    spotsLeft?: SortOrder
    price?: SortOrder
    priceMembers?: SortOrder
    pricePremium?: SortOrder
    eventType?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    capacity?: SortOrder
    spotsLeft?: SortOrder
    price?: SortOrder
    priceMembers?: SortOrder
    pricePremium?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    spotsLeft?: SortOrder
    price?: SortOrder
    priceMembers?: SortOrder
    pricePremium?: SortOrder
    eventType?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    spotsLeft?: SortOrder
    price?: SortOrder
    priceMembers?: SortOrder
    pricePremium?: SortOrder
    eventType?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    capacity?: SortOrder
    spotsLeft?: SortOrder
    price?: SortOrder
    priceMembers?: SortOrder
    pricePremium?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type EventTranslationEventIdLanguageCodeCompoundUniqueInput = {
    eventId: string
    languageCode: string
  }

  export type EventTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    requirements?: SortOrder
    additionalInfo?: SortOrder
    instructorName?: SortOrder
    instructorBio?: SortOrder
  }

  export type EventTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    requirements?: SortOrder
    additionalInfo?: SortOrder
    instructorName?: SortOrder
    instructorBio?: SortOrder
  }

  export type EventTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    requirements?: SortOrder
    additionalInfo?: SortOrder
    instructorName?: SortOrder
    instructorBio?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    publishedAt?: SortOrder
    isPublished?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type BlogPostTranslationBlogPostIdLanguageCodeCompoundUniqueInput = {
    blogPostId: string
    languageCode: string
  }

  export type BlogPostTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    blogPostId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
  }

  export type BlogPostTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    blogPostId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
  }

  export type BlogPostTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    blogPostId?: SortOrder
    languageCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipType?: SortOrder
    experienceLevel?: SortOrder
    interests?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipType?: SortOrder
    experienceLevel?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MembershipApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    membershipType?: SortOrder
    experienceLevel?: SortOrder
    comments?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isMember?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isMember?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isMember?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageNullableScalarRelationFilter = {
    is?: LanguageWhereInput | null
    isNot?: LanguageWhereInput | null
  }

  export type WebsiteSettingCountOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    languageCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    languageCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteSettingMinOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    languageCode?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BlogStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    postsByCategory?: SortOrder
    postsByMonth?: SortOrder
    postsByAuthor?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogStatsAvgOrderByAggregateInput = {
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
  }

  export type BlogStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogStatsSumOrderByAggregateInput = {
    totalPosts?: SortOrder
    publishedPosts?: SortOrder
    draftPosts?: SortOrder
    archivedPosts?: SortOrder
    recentPosts?: SortOrder
    averageReadTime?: SortOrder
    postTrend?: SortOrder
    publishingRate?: SortOrder
    completionRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    eventsByType?: SortOrder
    eventsByMonth?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventStatsAvgOrderByAggregateInput = {
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
  }

  export type EventStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventStatsSumOrderByAggregateInput = {
    totalEvents?: SortOrder
    upcomingEvents?: SortOrder
    ongoingEvents?: SortOrder
    totalParticipants?: SortOrder
    averageParticipants?: SortOrder
    participationRate?: SortOrder
  }

  export type MemberStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    membersByType?: SortOrder
    membersByMonth?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatsAvgOrderByAggregateInput = {
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
  }

  export type MemberStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberStatsSumOrderByAggregateInput = {
    totalMembers?: SortOrder
    activeMembers?: SortOrder
    newMembers?: SortOrder
    membershipTypes?: SortOrder
    retentionRate?: SortOrder
    growthRate?: SortOrder
  }

  export type MessageStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    messagesByMonth?: SortOrder
    responseTrend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatsAvgOrderByAggregateInput = {
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    responseTrend?: SortOrder
  }

  export type MessageStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    responseTrend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    responseTrend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatsSumOrderByAggregateInput = {
    totalMessages?: SortOrder
    newMessages?: SortOrder
    repliedMessages?: SortOrder
    responseRate?: SortOrder
    responseTrend?: SortOrder
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    usersByMonth?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    newUsers?: SortOrder
    userRoles?: SortOrder
    activityRate?: SortOrder
    growthRate?: SortOrder
  }

  export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BlogPostTranslationCreateNestedManyWithoutLanguageInput = {
    create?: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput> | BlogPostTranslationCreateWithoutLanguageInput[] | BlogPostTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutLanguageInput | BlogPostTranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: BlogPostTranslationCreateManyLanguageInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type EventTranslationCreateNestedManyWithoutLanguageInput = {
    create?: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput> | EventTranslationCreateWithoutLanguageInput[] | EventTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutLanguageInput | EventTranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: EventTranslationCreateManyLanguageInputEnvelope
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
  }

  export type WebsiteSettingCreateNestedManyWithoutLanguageInput = {
    create?: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput> | WebsiteSettingCreateWithoutLanguageInput[] | WebsiteSettingUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: WebsiteSettingCreateOrConnectWithoutLanguageInput | WebsiteSettingCreateOrConnectWithoutLanguageInput[]
    createMany?: WebsiteSettingCreateManyLanguageInputEnvelope
    connect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
  }

  export type BlogPostTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput> | BlogPostTranslationCreateWithoutLanguageInput[] | BlogPostTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutLanguageInput | BlogPostTranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: BlogPostTranslationCreateManyLanguageInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type EventTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput> | EventTranslationCreateWithoutLanguageInput[] | EventTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutLanguageInput | EventTranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: EventTranslationCreateManyLanguageInputEnvelope
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
  }

  export type WebsiteSettingUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput> | WebsiteSettingCreateWithoutLanguageInput[] | WebsiteSettingUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: WebsiteSettingCreateOrConnectWithoutLanguageInput | WebsiteSettingCreateOrConnectWithoutLanguageInput[]
    createMany?: WebsiteSettingCreateManyLanguageInputEnvelope
    connect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlogPostTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput> | BlogPostTranslationCreateWithoutLanguageInput[] | BlogPostTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutLanguageInput | BlogPostTranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutLanguageInput | BlogPostTranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: BlogPostTranslationCreateManyLanguageInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutLanguageInput | BlogPostTranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutLanguageInput | BlogPostTranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type EventTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput> | EventTranslationCreateWithoutLanguageInput[] | EventTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutLanguageInput | EventTranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: EventTranslationUpsertWithWhereUniqueWithoutLanguageInput | EventTranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: EventTranslationCreateManyLanguageInputEnvelope
    set?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    disconnect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    delete?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    update?: EventTranslationUpdateWithWhereUniqueWithoutLanguageInput | EventTranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: EventTranslationUpdateManyWithWhereWithoutLanguageInput | EventTranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
  }

  export type WebsiteSettingUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput> | WebsiteSettingCreateWithoutLanguageInput[] | WebsiteSettingUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: WebsiteSettingCreateOrConnectWithoutLanguageInput | WebsiteSettingCreateOrConnectWithoutLanguageInput[]
    upsert?: WebsiteSettingUpsertWithWhereUniqueWithoutLanguageInput | WebsiteSettingUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: WebsiteSettingCreateManyLanguageInputEnvelope
    set?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    disconnect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    delete?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    connect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    update?: WebsiteSettingUpdateWithWhereUniqueWithoutLanguageInput | WebsiteSettingUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: WebsiteSettingUpdateManyWithWhereWithoutLanguageInput | WebsiteSettingUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: WebsiteSettingScalarWhereInput | WebsiteSettingScalarWhereInput[]
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput> | BlogPostTranslationCreateWithoutLanguageInput[] | BlogPostTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutLanguageInput | BlogPostTranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutLanguageInput | BlogPostTranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: BlogPostTranslationCreateManyLanguageInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutLanguageInput | BlogPostTranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutLanguageInput | BlogPostTranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type EventTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput> | EventTranslationCreateWithoutLanguageInput[] | EventTranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutLanguageInput | EventTranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: EventTranslationUpsertWithWhereUniqueWithoutLanguageInput | EventTranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: EventTranslationCreateManyLanguageInputEnvelope
    set?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    disconnect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    delete?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    update?: EventTranslationUpdateWithWhereUniqueWithoutLanguageInput | EventTranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: EventTranslationUpdateManyWithWhereWithoutLanguageInput | EventTranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
  }

  export type WebsiteSettingUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput> | WebsiteSettingCreateWithoutLanguageInput[] | WebsiteSettingUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: WebsiteSettingCreateOrConnectWithoutLanguageInput | WebsiteSettingCreateOrConnectWithoutLanguageInput[]
    upsert?: WebsiteSettingUpsertWithWhereUniqueWithoutLanguageInput | WebsiteSettingUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: WebsiteSettingCreateManyLanguageInputEnvelope
    set?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    disconnect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    delete?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    connect?: WebsiteSettingWhereUniqueInput | WebsiteSettingWhereUniqueInput[]
    update?: WebsiteSettingUpdateWithWhereUniqueWithoutLanguageInput | WebsiteSettingUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: WebsiteSettingUpdateManyWithWhereWithoutLanguageInput | WebsiteSettingUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: WebsiteSettingScalarWhereInput | WebsiteSettingScalarWhereInput[]
  }

  export type AdminUserCreateNestedOneWithoutEventsInput = {
    create?: XOR<AdminUserCreateWithoutEventsInput, AdminUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutEventsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type EventRegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type EventTranslationCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput> | EventTranslationCreateWithoutEventInput[] | EventTranslationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutEventInput | EventTranslationCreateOrConnectWithoutEventInput[]
    createMany?: EventTranslationCreateManyEventInputEnvelope
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type EventTranslationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput> | EventTranslationCreateWithoutEventInput[] | EventTranslationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutEventInput | EventTranslationCreateOrConnectWithoutEventInput[]
    createMany?: EventTranslationCreateManyEventInputEnvelope
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AdminUserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<AdminUserCreateWithoutEventsInput, AdminUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutEventsInput
    upsert?: AdminUserUpsertWithoutEventsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutEventsInput, AdminUserUpdateWithoutEventsInput>, AdminUserUncheckedUpdateWithoutEventsInput>
  }

  export type EventRegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type EventTranslationUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput> | EventTranslationCreateWithoutEventInput[] | EventTranslationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutEventInput | EventTranslationCreateOrConnectWithoutEventInput[]
    upsert?: EventTranslationUpsertWithWhereUniqueWithoutEventInput | EventTranslationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTranslationCreateManyEventInputEnvelope
    set?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    disconnect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    delete?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    update?: EventTranslationUpdateWithWhereUniqueWithoutEventInput | EventTranslationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTranslationUpdateManyWithWhereWithoutEventInput | EventTranslationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type EventTranslationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput> | EventTranslationCreateWithoutEventInput[] | EventTranslationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTranslationCreateOrConnectWithoutEventInput | EventTranslationCreateOrConnectWithoutEventInput[]
    upsert?: EventTranslationUpsertWithWhereUniqueWithoutEventInput | EventTranslationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTranslationCreateManyEventInputEnvelope
    set?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    disconnect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    delete?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    connect?: EventTranslationWhereUniqueInput | EventTranslationWhereUniqueInput[]
    update?: EventTranslationUpdateWithWhereUniqueWithoutEventInput | EventTranslationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTranslationUpdateManyWithWhereWithoutEventInput | EventTranslationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<EventCreateWithoutTranslationsInput, EventUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTranslationsInput
    connect?: EventWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutEventTranslationsInput = {
    create?: XOR<LanguageCreateWithoutEventTranslationsInput, LanguageUncheckedCreateWithoutEventTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutEventTranslationsInput
    connect?: LanguageWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<EventCreateWithoutTranslationsInput, EventUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTranslationsInput
    upsert?: EventUpsertWithoutTranslationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTranslationsInput, EventUpdateWithoutTranslationsInput>, EventUncheckedUpdateWithoutTranslationsInput>
  }

  export type LanguageUpdateOneRequiredWithoutEventTranslationsNestedInput = {
    create?: XOR<LanguageCreateWithoutEventTranslationsInput, LanguageUncheckedCreateWithoutEventTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutEventTranslationsInput
    upsert?: LanguageUpsertWithoutEventTranslationsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutEventTranslationsInput, LanguageUpdateWithoutEventTranslationsInput>, LanguageUncheckedUpdateWithoutEventTranslationsInput>
  }

  export type BlogPostCreatetagsInput = {
    set: string[]
  }

  export type AdminUserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<AdminUserCreateWithoutBlogPostsInput, AdminUserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutBlogPostsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type BlogPostTranslationCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput> | BlogPostTranslationCreateWithoutBlogPostInput[] | BlogPostTranslationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutBlogPostInput | BlogPostTranslationCreateOrConnectWithoutBlogPostInput[]
    createMany?: BlogPostTranslationCreateManyBlogPostInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type BlogPostTranslationUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput> | BlogPostTranslationCreateWithoutBlogPostInput[] | BlogPostTranslationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutBlogPostInput | BlogPostTranslationCreateOrConnectWithoutBlogPostInput[]
    createMany?: BlogPostTranslationCreateManyBlogPostInputEnvelope
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
  }

  export type BlogPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdminUserUpdateOneWithoutBlogPostsNestedInput = {
    create?: XOR<AdminUserCreateWithoutBlogPostsInput, AdminUserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutBlogPostsInput
    upsert?: AdminUserUpsertWithoutBlogPostsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutBlogPostsInput, AdminUserUpdateWithoutBlogPostsInput>, AdminUserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type BlogPostTranslationUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput> | BlogPostTranslationCreateWithoutBlogPostInput[] | BlogPostTranslationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutBlogPostInput | BlogPostTranslationCreateOrConnectWithoutBlogPostInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutBlogPostInput | BlogPostTranslationUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BlogPostTranslationCreateManyBlogPostInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutBlogPostInput | BlogPostTranslationUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutBlogPostInput | BlogPostTranslationUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput> | BlogPostTranslationCreateWithoutBlogPostInput[] | BlogPostTranslationUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: BlogPostTranslationCreateOrConnectWithoutBlogPostInput | BlogPostTranslationCreateOrConnectWithoutBlogPostInput[]
    upsert?: BlogPostTranslationUpsertWithWhereUniqueWithoutBlogPostInput | BlogPostTranslationUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: BlogPostTranslationCreateManyBlogPostInputEnvelope
    set?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    disconnect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    delete?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    connect?: BlogPostTranslationWhereUniqueInput | BlogPostTranslationWhereUniqueInput[]
    update?: BlogPostTranslationUpdateWithWhereUniqueWithoutBlogPostInput | BlogPostTranslationUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: BlogPostTranslationUpdateManyWithWhereWithoutBlogPostInput | BlogPostTranslationUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTranslationsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutBlogPostTranslationsInput = {
    create?: XOR<LanguageCreateWithoutBlogPostTranslationsInput, LanguageUncheckedCreateWithoutBlogPostTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutBlogPostTranslationsInput
    connect?: LanguageWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutTranslationsInput
    upsert?: BlogPostUpsertWithoutTranslationsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutTranslationsInput, BlogPostUpdateWithoutTranslationsInput>, BlogPostUncheckedUpdateWithoutTranslationsInput>
  }

  export type LanguageUpdateOneRequiredWithoutBlogPostTranslationsNestedInput = {
    create?: XOR<LanguageCreateWithoutBlogPostTranslationsInput, LanguageUncheckedCreateWithoutBlogPostTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutBlogPostTranslationsInput
    upsert?: LanguageUpsertWithoutBlogPostTranslationsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutBlogPostTranslationsInput, LanguageUpdateWithoutBlogPostTranslationsInput>, LanguageUncheckedUpdateWithoutBlogPostTranslationsInput>
  }

  export type MembershipApplicationCreateinterestsInput = {
    set: string[]
  }

  export type MembershipApplicationUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type LanguageCreateNestedOneWithoutWebsiteSettingsInput = {
    create?: XOR<LanguageCreateWithoutWebsiteSettingsInput, LanguageUncheckedCreateWithoutWebsiteSettingsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutWebsiteSettingsInput
    connect?: LanguageWhereUniqueInput
  }

  export type LanguageUpdateOneWithoutWebsiteSettingsNestedInput = {
    create?: XOR<LanguageCreateWithoutWebsiteSettingsInput, LanguageUncheckedCreateWithoutWebsiteSettingsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutWebsiteSettingsInput
    upsert?: LanguageUpsertWithoutWebsiteSettingsInput
    disconnect?: LanguageWhereInput | boolean
    delete?: LanguageWhereInput | boolean
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutWebsiteSettingsInput, LanguageUpdateWithoutWebsiteSettingsInput>, LanguageUncheckedUpdateWithoutWebsiteSettingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BlogPostCreateWithoutAuthorInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
    translations?: BlogPostTranslationCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
    translations?: BlogPostTranslationUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCreateManyAuthorInputEnvelope = {
    data: BlogPostCreateManyAuthorInput | BlogPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    translations?: EventTranslationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    translations?: EventTranslationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    imageUrl?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    isPublished?: BoolFilter<"BlogPost"> | boolean
    readTime?: IntNullableFilter<"BlogPost"> | number | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    isFeatured?: BoolFilter<"BlogPost"> | boolean
    isArchived?: BoolFilter<"BlogPost"> | boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    imageUrl?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventEndDate?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    capacity?: IntNullableFilter<"Event"> | number | null
    spotsLeft?: IntNullableFilter<"Event"> | number | null
    price?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    priceMembers?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    pricePremium?: DecimalNullableFilter<"Event"> | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFilter<"Event"> | string
    isArchived?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: StringNullableFilter<"Event"> | string | null
  }

  export type BlogPostTranslationCreateWithoutLanguageInput = {
    id?: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
    blogPost: BlogPostCreateNestedOneWithoutTranslationsInput
  }

  export type BlogPostTranslationUncheckedCreateWithoutLanguageInput = {
    id?: string
    blogPostId: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type BlogPostTranslationCreateOrConnectWithoutLanguageInput = {
    where: BlogPostTranslationWhereUniqueInput
    create: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput>
  }

  export type BlogPostTranslationCreateManyLanguageInputEnvelope = {
    data: BlogPostTranslationCreateManyLanguageInput | BlogPostTranslationCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type EventTranslationCreateWithoutLanguageInput = {
    id?: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
    event: EventCreateNestedOneWithoutTranslationsInput
  }

  export type EventTranslationUncheckedCreateWithoutLanguageInput = {
    id?: string
    eventId: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type EventTranslationCreateOrConnectWithoutLanguageInput = {
    where: EventTranslationWhereUniqueInput
    create: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput>
  }

  export type EventTranslationCreateManyLanguageInputEnvelope = {
    data: EventTranslationCreateManyLanguageInput | EventTranslationCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteSettingCreateWithoutLanguageInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    updatedAt?: Date | string
  }

  export type WebsiteSettingUncheckedCreateWithoutLanguageInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    updatedAt?: Date | string
  }

  export type WebsiteSettingCreateOrConnectWithoutLanguageInput = {
    where: WebsiteSettingWhereUniqueInput
    create: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput>
  }

  export type WebsiteSettingCreateManyLanguageInputEnvelope = {
    data: WebsiteSettingCreateManyLanguageInput | WebsiteSettingCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: BlogPostTranslationWhereUniqueInput
    update: XOR<BlogPostTranslationUpdateWithoutLanguageInput, BlogPostTranslationUncheckedUpdateWithoutLanguageInput>
    create: XOR<BlogPostTranslationCreateWithoutLanguageInput, BlogPostTranslationUncheckedCreateWithoutLanguageInput>
  }

  export type BlogPostTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: BlogPostTranslationWhereUniqueInput
    data: XOR<BlogPostTranslationUpdateWithoutLanguageInput, BlogPostTranslationUncheckedUpdateWithoutLanguageInput>
  }

  export type BlogPostTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: BlogPostTranslationScalarWhereInput
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyWithoutLanguageInput>
  }

  export type BlogPostTranslationScalarWhereInput = {
    AND?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
    OR?: BlogPostTranslationScalarWhereInput[]
    NOT?: BlogPostTranslationScalarWhereInput | BlogPostTranslationScalarWhereInput[]
    id?: StringFilter<"BlogPostTranslation"> | string
    blogPostId?: StringFilter<"BlogPostTranslation"> | string
    languageCode?: StringFilter<"BlogPostTranslation"> | string
    title?: StringFilter<"BlogPostTranslation"> | string
    description?: StringFilter<"BlogPostTranslation"> | string
    content?: StringFilter<"BlogPostTranslation"> | string
    metaDescription?: StringNullableFilter<"BlogPostTranslation"> | string | null
    metaKeywords?: StringNullableFilter<"BlogPostTranslation"> | string | null
  }

  export type EventTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: EventTranslationWhereUniqueInput
    update: XOR<EventTranslationUpdateWithoutLanguageInput, EventTranslationUncheckedUpdateWithoutLanguageInput>
    create: XOR<EventTranslationCreateWithoutLanguageInput, EventTranslationUncheckedCreateWithoutLanguageInput>
  }

  export type EventTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: EventTranslationWhereUniqueInput
    data: XOR<EventTranslationUpdateWithoutLanguageInput, EventTranslationUncheckedUpdateWithoutLanguageInput>
  }

  export type EventTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: EventTranslationScalarWhereInput
    data: XOR<EventTranslationUpdateManyMutationInput, EventTranslationUncheckedUpdateManyWithoutLanguageInput>
  }

  export type EventTranslationScalarWhereInput = {
    AND?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
    OR?: EventTranslationScalarWhereInput[]
    NOT?: EventTranslationScalarWhereInput | EventTranslationScalarWhereInput[]
    id?: StringFilter<"EventTranslation"> | string
    eventId?: StringFilter<"EventTranslation"> | string
    languageCode?: StringFilter<"EventTranslation"> | string
    title?: StringFilter<"EventTranslation"> | string
    description?: StringFilter<"EventTranslation"> | string
    longDescription?: StringNullableFilter<"EventTranslation"> | string | null
    requirements?: StringNullableFilter<"EventTranslation"> | string | null
    additionalInfo?: StringNullableFilter<"EventTranslation"> | string | null
    instructorName?: StringNullableFilter<"EventTranslation"> | string | null
    instructorBio?: StringNullableFilter<"EventTranslation"> | string | null
  }

  export type WebsiteSettingUpsertWithWhereUniqueWithoutLanguageInput = {
    where: WebsiteSettingWhereUniqueInput
    update: XOR<WebsiteSettingUpdateWithoutLanguageInput, WebsiteSettingUncheckedUpdateWithoutLanguageInput>
    create: XOR<WebsiteSettingCreateWithoutLanguageInput, WebsiteSettingUncheckedCreateWithoutLanguageInput>
  }

  export type WebsiteSettingUpdateWithWhereUniqueWithoutLanguageInput = {
    where: WebsiteSettingWhereUniqueInput
    data: XOR<WebsiteSettingUpdateWithoutLanguageInput, WebsiteSettingUncheckedUpdateWithoutLanguageInput>
  }

  export type WebsiteSettingUpdateManyWithWhereWithoutLanguageInput = {
    where: WebsiteSettingScalarWhereInput
    data: XOR<WebsiteSettingUpdateManyMutationInput, WebsiteSettingUncheckedUpdateManyWithoutLanguageInput>
  }

  export type WebsiteSettingScalarWhereInput = {
    AND?: WebsiteSettingScalarWhereInput | WebsiteSettingScalarWhereInput[]
    OR?: WebsiteSettingScalarWhereInput[]
    NOT?: WebsiteSettingScalarWhereInput | WebsiteSettingScalarWhereInput[]
    id?: StringFilter<"WebsiteSetting"> | string
    settingKey?: StringFilter<"WebsiteSetting"> | string
    settingValue?: StringNullableFilter<"WebsiteSetting"> | string | null
    languageCode?: StringNullableFilter<"WebsiteSetting"> | string | null
    updatedAt?: DateTimeFilter<"WebsiteSetting"> | Date | string
  }

  export type AdminUserCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
  }

  export type AdminUserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AdminUserCreateOrConnectWithoutEventsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutEventsInput, AdminUserUncheckedCreateWithoutEventsInput>
  }

  export type EventRegistrationCreateWithoutEventInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type EventRegistrationUncheckedCreateWithoutEventInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type EventRegistrationCreateOrConnectWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationCreateManyEventInputEnvelope = {
    data: EventRegistrationCreateManyEventInput | EventRegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventTranslationCreateWithoutEventInput = {
    id?: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
    language: LanguageCreateNestedOneWithoutEventTranslationsInput
  }

  export type EventTranslationUncheckedCreateWithoutEventInput = {
    id?: string
    languageCode: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type EventTranslationCreateOrConnectWithoutEventInput = {
    where: EventTranslationWhereUniqueInput
    create: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput>
  }

  export type EventTranslationCreateManyEventInputEnvelope = {
    data: EventTranslationCreateManyEventInput | EventTranslationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type AdminUserUpsertWithoutEventsInput = {
    update: XOR<AdminUserUpdateWithoutEventsInput, AdminUserUncheckedUpdateWithoutEventsInput>
    create: XOR<AdminUserCreateWithoutEventsInput, AdminUserUncheckedCreateWithoutEventsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutEventsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutEventsInput, AdminUserUncheckedUpdateWithoutEventsInput>
  }

  export type AdminUserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutEventInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type EventRegistrationScalarWhereInput = {
    AND?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    OR?: EventRegistrationScalarWhereInput[]
    NOT?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    id?: StringFilter<"EventRegistration"> | string
    eventId?: StringFilter<"EventRegistration"> | string
    firstName?: StringFilter<"EventRegistration"> | string
    lastName?: StringFilter<"EventRegistration"> | string
    email?: StringFilter<"EventRegistration"> | string
    phone?: StringNullableFilter<"EventRegistration"> | string | null
    isMember?: BoolFilter<"EventRegistration"> | boolean
    status?: StringFilter<"EventRegistration"> | string
    createdAt?: DateTimeFilter<"EventRegistration"> | Date | string
  }

  export type EventTranslationUpsertWithWhereUniqueWithoutEventInput = {
    where: EventTranslationWhereUniqueInput
    update: XOR<EventTranslationUpdateWithoutEventInput, EventTranslationUncheckedUpdateWithoutEventInput>
    create: XOR<EventTranslationCreateWithoutEventInput, EventTranslationUncheckedCreateWithoutEventInput>
  }

  export type EventTranslationUpdateWithWhereUniqueWithoutEventInput = {
    where: EventTranslationWhereUniqueInput
    data: XOR<EventTranslationUpdateWithoutEventInput, EventTranslationUncheckedUpdateWithoutEventInput>
  }

  export type EventTranslationUpdateManyWithWhereWithoutEventInput = {
    where: EventTranslationScalarWhereInput
    data: XOR<EventTranslationUpdateManyMutationInput, EventTranslationUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: AdminUserCreateNestedOneWithoutEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTranslationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTranslationsInput, EventUncheckedCreateWithoutTranslationsInput>
  }

  export type LanguageCreateWithoutEventTranslationsInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutEventTranslationsInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationUncheckedCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutEventTranslationsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutEventTranslationsInput, LanguageUncheckedCreateWithoutEventTranslationsInput>
  }

  export type EventUpsertWithoutTranslationsInput = {
    update: XOR<EventUpdateWithoutTranslationsInput, EventUncheckedUpdateWithoutTranslationsInput>
    create: XOR<EventCreateWithoutTranslationsInput, EventUncheckedCreateWithoutTranslationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTranslationsInput, EventUncheckedUpdateWithoutTranslationsInput>
  }

  export type EventUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUserUpdateOneWithoutEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type LanguageUpsertWithoutEventTranslationsInput = {
    update: XOR<LanguageUpdateWithoutEventTranslationsInput, LanguageUncheckedUpdateWithoutEventTranslationsInput>
    create: XOR<LanguageCreateWithoutEventTranslationsInput, LanguageUncheckedCreateWithoutEventTranslationsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutEventTranslationsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutEventTranslationsInput, LanguageUncheckedUpdateWithoutEventTranslationsInput>
  }

  export type LanguageUpdateWithoutEventTranslationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutEventTranslationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUncheckedUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type AdminUserCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserCreateOrConnectWithoutBlogPostsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutBlogPostsInput, AdminUserUncheckedCreateWithoutBlogPostsInput>
  }

  export type BlogPostTranslationCreateWithoutBlogPostInput = {
    id?: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
    language: LanguageCreateNestedOneWithoutBlogPostTranslationsInput
  }

  export type BlogPostTranslationUncheckedCreateWithoutBlogPostInput = {
    id?: string
    languageCode: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type BlogPostTranslationCreateOrConnectWithoutBlogPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    create: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogPostTranslationCreateManyBlogPostInputEnvelope = {
    data: BlogPostTranslationCreateManyBlogPostInput | BlogPostTranslationCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type AdminUserUpsertWithoutBlogPostsInput = {
    update: XOR<AdminUserUpdateWithoutBlogPostsInput, AdminUserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<AdminUserCreateWithoutBlogPostsInput, AdminUserUncheckedCreateWithoutBlogPostsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutBlogPostsInput, AdminUserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type AdminUserUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type BlogPostTranslationUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    update: XOR<BlogPostTranslationUpdateWithoutBlogPostInput, BlogPostTranslationUncheckedUpdateWithoutBlogPostInput>
    create: XOR<BlogPostTranslationCreateWithoutBlogPostInput, BlogPostTranslationUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogPostTranslationUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: BlogPostTranslationWhereUniqueInput
    data: XOR<BlogPostTranslationUpdateWithoutBlogPostInput, BlogPostTranslationUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostTranslationUpdateManyWithWhereWithoutBlogPostInput = {
    where: BlogPostTranslationScalarWhereInput
    data: XOR<BlogPostTranslationUpdateManyMutationInput, BlogPostTranslationUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type BlogPostCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
    author?: AdminUserCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogPostUncheckedCreateWithoutTranslationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
  }

  export type BlogPostCreateOrConnectWithoutTranslationsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
  }

  export type LanguageCreateWithoutBlogPostTranslationsInput = {
    code: string
    name: string
    isDefault?: boolean
    eventTranslations?: EventTranslationCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutBlogPostTranslationsInput = {
    code: string
    name: string
    isDefault?: boolean
    eventTranslations?: EventTranslationUncheckedCreateNestedManyWithoutLanguageInput
    websiteSettings?: WebsiteSettingUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutBlogPostTranslationsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutBlogPostTranslationsInput, LanguageUncheckedCreateWithoutBlogPostTranslationsInput>
  }

  export type BlogPostUpsertWithoutTranslationsInput = {
    update: XOR<BlogPostUpdateWithoutTranslationsInput, BlogPostUncheckedUpdateWithoutTranslationsInput>
    create: XOR<BlogPostCreateWithoutTranslationsInput, BlogPostUncheckedCreateWithoutTranslationsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutTranslationsInput, BlogPostUncheckedUpdateWithoutTranslationsInput>
  }

  export type BlogPostUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    author?: AdminUserUpdateOneWithoutBlogPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUpsertWithoutBlogPostTranslationsInput = {
    update: XOR<LanguageUpdateWithoutBlogPostTranslationsInput, LanguageUncheckedUpdateWithoutBlogPostTranslationsInput>
    create: XOR<LanguageCreateWithoutBlogPostTranslationsInput, LanguageUncheckedCreateWithoutBlogPostTranslationsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutBlogPostTranslationsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutBlogPostTranslationsInput, LanguageUncheckedUpdateWithoutBlogPostTranslationsInput>
  }

  export type LanguageUpdateWithoutBlogPostTranslationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    eventTranslations?: EventTranslationUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutBlogPostTranslationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    eventTranslations?: EventTranslationUncheckedUpdateManyWithoutLanguageNestedInput
    websiteSettings?: WebsiteSettingUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type EventCreateWithoutRegistrationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: AdminUserCreateNestedOneWithoutEventsInput
    translations?: EventTranslationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    translations?: EventTranslationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUserUpdateOneWithoutEventsNestedInput
    translations?: EventTranslationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    translations?: EventTranslationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type LanguageCreateWithoutWebsiteSettingsInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationCreateNestedManyWithoutLanguageInput
    eventTranslations?: EventTranslationCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutWebsiteSettingsInput = {
    code: string
    name: string
    isDefault?: boolean
    blogPostTranslations?: BlogPostTranslationUncheckedCreateNestedManyWithoutLanguageInput
    eventTranslations?: EventTranslationUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutWebsiteSettingsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutWebsiteSettingsInput, LanguageUncheckedCreateWithoutWebsiteSettingsInput>
  }

  export type LanguageUpsertWithoutWebsiteSettingsInput = {
    update: XOR<LanguageUpdateWithoutWebsiteSettingsInput, LanguageUncheckedUpdateWithoutWebsiteSettingsInput>
    create: XOR<LanguageCreateWithoutWebsiteSettingsInput, LanguageUncheckedCreateWithoutWebsiteSettingsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutWebsiteSettingsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutWebsiteSettingsInput, LanguageUncheckedUpdateWithoutWebsiteSettingsInput>
  }

  export type LanguageUpdateWithoutWebsiteSettingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUpdateManyWithoutLanguageNestedInput
    eventTranslations?: EventTranslationUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutWebsiteSettingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    blogPostTranslations?: BlogPostTranslationUncheckedUpdateManyWithoutLanguageNestedInput
    eventTranslations?: EventTranslationUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type BlogPostCreateManyAuthorInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    publishedAt?: Date | string | null
    isPublished?: boolean
    readTime?: number | null
    category?: string
    tags?: BlogPostCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    isFeatured?: boolean
    isArchived?: boolean
  }

  export type EventCreateManyCreatedByInput = {
    id?: string
    slug: string
    imageUrl?: string | null
    eventDate: Date | string
    eventEndDate?: Date | string | null
    location?: string | null
    address?: string | null
    capacity?: number | null
    spotsLeft?: number | null
    price?: Decimal | DecimalJsLike | number | string | null
    priceMembers?: Decimal | DecimalJsLike | number | string | null
    pricePremium?: Decimal | DecimalJsLike | number | string | null
    eventType: string
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    translations?: BlogPostTranslationUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    translations?: BlogPostTranslationUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    translations?: EventTranslationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    translations?: EventTranslationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    spotsLeft?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceMembers?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pricePremium?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostTranslationCreateManyLanguageInput = {
    id?: string
    blogPostId: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type EventTranslationCreateManyLanguageInput = {
    id?: string
    eventId: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type WebsiteSettingCreateManyLanguageInput = {
    id?: string
    settingKey: string
    settingValue?: string | null
    updatedAt?: Date | string
  }

  export type BlogPostTranslationUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    blogPost?: BlogPostUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type BlogPostTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogPostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogPostId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type EventTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebsiteSettingUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteSettingUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteSettingUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateManyEventInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isMember?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type EventTranslationCreateManyEventInput = {
    id?: string
    languageCode: string
    title: string
    description: string
    longDescription?: string | null
    requirements?: string | null
    additionalInfo?: string | null
    instructorName?: string | null
    instructorBio?: string | null
  }

  export type EventRegistrationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isMember?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTranslationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
    language?: LanguageUpdateOneRequiredWithoutEventTranslationsNestedInput
  }

  export type EventTranslationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTranslationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    instructorName?: NullableStringFieldUpdateOperationsInput | string | null
    instructorBio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTranslationCreateManyBlogPostInput = {
    id?: string
    languageCode: string
    title: string
    description: string
    content: string
    metaDescription?: string | null
    metaKeywords?: string | null
  }

  export type BlogPostTranslationUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    language?: LanguageUpdateOneRequiredWithoutBlogPostTranslationsNestedInput
  }

  export type BlogPostTranslationUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTranslationUncheckedUpdateManyWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
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