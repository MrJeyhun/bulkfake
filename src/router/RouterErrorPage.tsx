import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import Layout from "@app/pages/Layout/Layout";

export default function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };
  useEffect(() => {
    console.warn(error);
  }, []);

  return (
    <Layout>
      <div id="error-page">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>Sorry, an unexpected error has occurred.</p>
        Link to homepage
      </div>
    </Layout>
  );
}
