/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as SpecRouteImport } from './routes/spec'
import { Route as IndexRouteImport } from './routes/index'

const SpecRoute = SpecRouteImport.update({
  id: '/spec',
  path: '/spec',
  getParentRoute: () => rootRouteImport,
} as any)

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/spec': typeof SpecRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/spec': typeof SpecRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/spec': typeof SpecRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/spec'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/spec'
  id: '__root__' | '/' | '/spec'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SpecRoute: typeof SpecRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/spec': {
      id: '/spec'
      path: '/spec'
      fullPath: '/spec'
      preLoaderRoute: typeof SpecRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  SpecRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
