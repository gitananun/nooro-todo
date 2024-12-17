'use client';

import { AppStore, makeStore } from '@store/index';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // The advantage of migrating from a global store to using Redux Toolkit's recommended approach of creating a store instance per component or module lies in better encapsulation, improved performance, and easier maintenance.

    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
