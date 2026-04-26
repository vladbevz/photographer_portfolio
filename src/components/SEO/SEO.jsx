import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE_NAME = 'Anastasia Syrmais Photographie';
const BASE_URL = 'https://anastasiasyrmais.pro';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'fr';
  const ogLocale = lang === 'fr' ? 'fr_FR' : 'en_US';
  const ogAlt    = lang === 'fr' ? 'en_US' : 'fr_FR';

  const fullTitle = title
    ? `${title} | Anastasia Syrmais`
    : 'Anastasia Syrmais | Photographe Fine Art';

  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogAlt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
