/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryNameGetBySlug($slug: String) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryNameGetBySlugDocument,
    "query CollectionNameGetBySlug($slug: String) {\n  collection(slug: $slug) {\n    name\n  }\n}": types.CollectionNameGetBySlugDocument,
    "query GetCollectionsList {\n  collections(take: 10) {\n    data {\n      name\n      slug\n    }\n  }\n}": types.GetCollectionsListDocument,
    "query GetProductsByCollectionsSlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.GetProductsByCollectionsSlugDocument,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByRating {\n  products(orderBy: RATING, take: 4) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByRatingDocument,
    "query ProductsGetList {\n  products(take: 10) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetsBySearch($search: String!, $take: Int!) {\n  products(search: $search, take: $take) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetsBySearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryNameGetBySlug($slug: String) {\n  category(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CategoryNameGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionNameGetBySlug($slug: String) {\n  collection(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CollectionNameGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollectionsList {\n  collections(take: 10) {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').GetCollectionsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsByCollectionsSlug($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').GetProductsByCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByRating {\n  products(orderBy: RATING, take: 4) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(take: 10) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetsBySearch($search: String!, $take: Int!) {\n  products(search: $search, take: $take) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetsBySearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
