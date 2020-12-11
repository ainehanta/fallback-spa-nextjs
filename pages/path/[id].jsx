import Router from "next/router";
import { useEffect, useState } from "react";

export default function Path() {
  const [resolvedRoute, setResolvedRoute] = useState(undefined);
  const [asPath, setAsPath] = useState("");
  useEffect(() => {
    (async () => {
      const pages = await Router.router.pageLoader.getPageList();
      setResolvedRoute(
        Router.router._resolveHref({ pathname: Router.asPath }, pages)
      );
    })();
  }, []);

  return <div>{JSON.stringify(resolvedRoute)}</div>;
}
