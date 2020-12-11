import Router from "next/router";
import { useEffect, useState } from "react";
import Error from "next/error";

export default function NotFoundPage() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      const pages = await Router.router.pageLoader.getPageList();
      const resolvedRoute = Router.router._resolveHref(
        { pathname: Router.asPath },
        pages
      );

      if (pages.includes(resolvedRoute.pathname)) {
        Router.replace(resolvedRoute.pathname, Router.asPath);
      } else {
        setIsError(true);
      }
    })();
  }, []);

  return <>{isError && <Error statusCode={404} />}</>;
}
