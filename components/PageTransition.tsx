import { ViewTransition } from "react";

// enter/exit map transition type -> the CSS class the browser assigns to
// the view-transition pseudo-elements (see globals.css for the animations).
// default: "none" keeps this page from animating during transitions that
// don't carry a nav-forward/nav-back type (e.g. a Suspense reveal).
const DIRECTIONAL = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition enter={DIRECTIONAL} exit={DIRECTIONAL} default="none">
      {children}
    </ViewTransition>
  );
}
