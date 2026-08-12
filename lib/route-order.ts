// The site's page order, used only to decide whether a navigation should
// slide as "forward" (deeper into the site) or "back" (toward home).
export const ROUTE_ORDER = ["/", "/stack", "/work", "/contact"] as const;

export type Direction = "nav-forward" | "nav-back";

export function directionBetween(from: string, to: string): Direction {
  const fromIndex = ROUTE_ORDER.indexOf(from as (typeof ROUTE_ORDER)[number]);
  const toIndex = ROUTE_ORDER.indexOf(to as (typeof ROUTE_ORDER)[number]);
  if (fromIndex === -1 || toIndex === -1 || toIndex === fromIndex) {
    return "nav-forward";
  }
  return toIndex > fromIndex ? "nav-forward" : "nav-back";
}
