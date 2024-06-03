'use client';

import { init } from '@socialgouv/matomo-next';
import { useEffect } from 'react';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string;

const MatomoInitializer = () => {
  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID) {
      return;
    }
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return null;
};

export default MatomoInitializer;