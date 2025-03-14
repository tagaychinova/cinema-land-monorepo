'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { ThemeValue } from '@types';

export default function StoreProvider({
  theme,
  children,
}: {
  theme: ThemeValue;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore({ theme });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
