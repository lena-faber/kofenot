import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import { LeadProvider } from "@/components/lead-provider";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import appCss from "../styles.css?url";
import { Home } from "./index";

const siteTitle =
  "KOFENOT™ | Custom Logo Laptop Wedge for Corporate Gifts & IT Teams";

const siteDescription =
  "KOFENOT™ is a pocket-flat laptop wedge for promo agencies, IT teams, corporate gifts, events, coffee shops, coworking spaces, wholesale resale, and custom logo programs. 1 oz. No magnets. No adhesives.";

const siteUrl = "https://kofenot.com/";
const siteImage = "https://kofenot.com/kofenot-corp.jpg";

const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kofenot.com/#organization",
      name: "KOFENOT™",
      url: siteUrl,
      logo: siteImage,
    },
    {
      "@type": "WebSite",
      "@id": "https://kofenot.com/#website",
      name: "KOFENOT™",
      url: siteUrl,
      publisher: { "@id": "https://kofenot.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "Product",
      "@id": "https://kofenot.com/#product",
      name: "KOFENOT™ Pocket Laptop Wedge",
      description: siteDescription,
      image: siteImage,
      brand: { "@type": "Brand", name: "KOFENOT™" },
      category: "Laptop stand",
      url: siteUrl,
      weight: "1 oz",
      audience: [
        {
          "@type": "BusinessAudience",
          audienceType: "Promotional product agencies",
        },
        { "@type": "BusinessAudience", audienceType: "IT teams" },
        {
          "@type": "BusinessAudience",
          audienceType: "Corporate gifting buyers",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Coffee shops and coworking spaces",
        },
      ],
      offers: {
        "@type": "Offer",
        price: "15.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: siteUrl,
      },
    },
  ],
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: "KOFENOT™" },
      { property: "og:image", content: siteImage },
      { property: "og:image:secure_url", content: siteImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "KOFENOT custom logo laptop wedge for promo agencies, IT teams, and corporate gifts",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: siteImage },
      {
        name: "twitter:image:alt",
        content:
          "KOFENOT custom logo laptop wedge for promo agencies, IT teams, and corporate gifts",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap",
      },
      { rel: "canonical", href: siteUrl },
      { rel: "image_src", href: siteImage },
      {
        rel: "alternate",
        type: "text/plain",
        title: "KOFENOT AI agent summary",
        href: "/llms.txt",
      },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function NotFoundComponent() {
  return <Home />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  const retry = () => {
    router.invalidate();
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={retry}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LeadProvider>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1 overflow-x-hidden">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <Toaster theme="dark" position="bottom-right" richColors />
      </LeadProvider>
    </QueryClientProvider>
  );
}
