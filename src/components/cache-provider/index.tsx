'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const key = 'provider';
const cache = createCache({ key });

const EmotionCache = ({ children }) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default EmotionCache;
