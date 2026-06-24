/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as WholesaleRouteImport } from './routes/wholesale'
import { Route as CustomRouteImport } from './routes/custom'
import { Route as SpecRouteImport } from './routes/spec'
import { Route as IndexRouteImport } from './routes/index'

const WholesaleRoute = WholesaleRouteImport.update({ id: '/wholesale', path: '/wholesale', getParentRoute: () => rootRouteImport } as any)
const CustomRoute = CustomRouteImport.update({ id: '/custom', path: '/custom', getParentRoute: () => rootRouteImport } as any)
const SpecRoute = SpecRouteImport.update({ id: '/spec', path: '/spec', getParentRoute: () => rootRouteImport } as any)
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath { '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/spec': typeof SpecRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRoutesByTo { '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/spec': typeof SpecRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRoutesById { __root__: typeof rootRouteImport; '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/spec': typeof SpecRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/custom' | '/spec' | '/wholesale'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/custom' | '/spec' | '/wholesale'
  id: '__root__' | '/' | '/custom' | '/spec' | '/wholesale'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren { IndexRoute: typeof IndexRoute; CustomRoute: typeof CustomRoute; SpecRoute: typeof SpecRoute; WholesaleRoute: typeof WholesaleRoute }

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/wholesale': { id: '/wholesale'; path: '/wholesale'; fullPath: '/wholesale'; preLoaderRoute: typeof WholesaleRouteImport; parentRoute: typeof rootRouteImport }
    '/custom': { id: '/custom'; path: '/custom'; fullPath: '/custom'; preLoaderRoute: typeof CustomRouteImport; parentRoute: typeof rootRouteImport }
    '/spec': { id: '/spec'; path: '/spec'; fullPath: '/spec'; preLoaderRoute: typeof SpecRouteImport; parentRoute: typeof rootRouteImport }
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = { IndexRoute, CustomRoute, SpecRoute, WholesaleRoute }
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
