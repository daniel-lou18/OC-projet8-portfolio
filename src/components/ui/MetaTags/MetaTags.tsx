import { Helmet } from "react-helmet-async";

type MetaTagsProps = {
  title: string;
  description: string;
  name: string;
  type: string;
  url: string;
};

function MetaTags({ title, description, name, type, url }: MetaTagsProps) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
}

export default MetaTags;
