import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { LeadProvider } from "@/components/lead-provider";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { HomeWholesaleBridge } from "@/components/home-wholesale-bridge";
import appCss from "../styles.css?url";

const siteTitle = "KOFENOT™ | Make Your Laptop Coffee Shop-Friendly™";
const siteDescription = "KOFENOT™ is the ultimate laptop wedge that lifts your laptop at the hinge for spill deflection and improved posture. 1 oz. Flat-folding. It features a discreet, public-facing area for custom logo printing. Patent- and trademark-protected. California-based. Available for white-label programs, trade shows, conferences, promotional products, and corporate gifts. Licensing available.";
const siteUrl = "https://kofenot.com/";
const productJsonLd = { "@context": "https://schema.org", "@type": "Product", name: "KOFENOT™ Pocket Laptop Wedge", description: siteDescription, brand: { "@type": "Brand", name: "KOFENOT™" }, category: "Laptop stand", url: siteUrl };

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2><p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</Link></div></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1><p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Try again</button><a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Go home</a></div></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: siteTitle }, { name: "description", content: siteDescription }, { property: "og:title", content: siteTitle }, { property: "og:description", content: siteDescription }, { property: "og:type", content: "website" }, { property: "og:url", content: siteUrl }, { property: "og:site_name", content: "KOFENOT™" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: siteTitle }, { name: "twitter:description", content: siteDescription },
    ],
    links: [
      { rel: "stylesheet", href: appCss }, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap",
},{ rel: "canonical", href: siteUrl }, { rel: "alternate", type: "text/plain", title: "KOFENOT AI agent summary", href: "/llms.txt" }, { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><HeadContent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><LeadProvider><div className="min-h-screen flex flex-col"><SiteHeader /><main className="flex-1"><Outlet /></main><HomeWholesaleBridge /><SiteFooter /></div><Toaster theme="dark" position="bottom-right" richColors /></LeadProvider></QueryClientProvider>;
}
