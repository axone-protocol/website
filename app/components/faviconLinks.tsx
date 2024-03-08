const faviconsDirectory = "/favicons";

const FaviconLinks = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${faviconsDirectory}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${faviconsDirectory}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${faviconsDirectory}/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${faviconsDirectory}/site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${faviconsDirectory}/safari-pinned-tab.svg`}
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </>
);

export default FaviconLinks;
