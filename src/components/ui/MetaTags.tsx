import { Helmet } from "react-helmet-async";
import { structuredData } from "../../data/data";

type MetaTagsProps = {
  title: string;
  description: string;
  name: string;
  type: string;
  url: string;
  image: string;
};

function MetaTags({
  title,
  description,
  name,
  type,
  url,
  image,
}: MetaTagsProps) {
  return (
    <Helmet>
      <meta name="robots" content="index" />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default MetaTags;
