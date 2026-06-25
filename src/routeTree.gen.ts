/* eslint-disable */
// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as WholesaleRouteImport } from './routes/wholesale'
import { Route as StoryRouteImport } from './routes/story'
import { Route as ReferralsRouteImport } from './routes/referrals'
import { Route as CustomRouteImport } from './routes/custom'
import { Route as SpecRouteImport } from './routes/spec'
import { Route as IndexRouteImport } from './routes/index'

const WholesaleRoute = WholesaleRouteImport.update({ id: '/wholesale', path: '/wholesale', getParentRoute: () => rootRouteImport } as any)
const StoryRoute = StoryRouteImport.update({ id: '/story', path: '/story', getParentRoute: () => rootRouteImport } as any)
const ReferralsRoute = ReferralsRouteImport.update({ id: '/referrals', path: '/referrals', getParentRoute: () => rootRouteImport } as any)
const CustomRoute = CustomRouteImport.update({ id: '/custom', path: '/custom', getParentRoute: () => rootRouteImport } as any)
const SpecRoute = SpecRouteImport.update({ id: '/spec', path: '/spec', getParentRoute: () => rootRouteImport } as any)
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath { '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/referrals': typeof ReferralsRoute; '/spec': typeof SpecRoute; '/story': typeof StoryRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRoutesByTo { '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/referrals': typeof ReferralsRoute; '/spec': typeof SpecRoute; '/story': typeof StoryRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRoutesById { __root__: typeof rootRouteImport; '/': typeof IndexRoute; '/custom': typeof CustomRoute; '/referrals': typeof ReferralsRoute; '/spec': typeof SpecRoute; '/story': typeof StoryRoute; '/wholesale': typeof WholesaleRoute }
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/custom' | '/referrals' | '/spec' | '/story' | '/wholesale'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/custom' | '/referrals' | '/spec' | '/story' | '/wholesale'
  id: '__root__' | '/' | '/custom' | '/referrals' | '/spec' | '/story' | '/wholesale'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren { IndexRoute: typeof IndexRoute; CustomRoute: typeof CustomRoute; ReferralsRoute: typeof ReferralsRoute; SpecRoute: typeof SpecRoute; StoryRoute: typeof StoryRoute; WholesaleRoute: typeof WholesaleRoute }

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/wholesale': { id: '/wholesale'; path: '/wholesale'; fullPath: '/wholesale'; preLoaderRoute: typeof WholesaleRouteImport; parentRoute: typeof rootRouteImport }
    '/story': { id: '/story'; path: '/story'; fullPath: '/story'; preLoaderRoute: typeof StoryRouteImport; parentRoute: typeof rootRouteImport }
    '/referrals': { id: '/referrals'; path: '/referrals'; fullPath: '/referrals'; preLoaderRoute: typeof ReferralsRouteImport; parentRoute: typeof rootRouteImport }
    '/custom': { id: '/custom'; path: '/custom'; fullPath: '/custom'; preLoaderRoute: typeof CustomRouteImport; parentRoute: typeof rootRouteImport }
    '/spec': { id: '/spec'; path: '/spec'; fullPath: '/spec'; preLoaderRoute: typeof SpecRouteImport; parentRoute: typeof rootRouteImport }
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = { IndexRoute, CustomRoute, ReferralsRoute, SpecRoute, StoryRoute, WholesaleRoute }
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
