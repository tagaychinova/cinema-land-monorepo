'use client';
import { useEffect, useState } from 'react';

const enableMocks = (async function () {
  if (
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
})();

export default function BrowserMocks({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scriptWasExecuted, setScriptWasExecuted] = useState(true);

  useEffect(() => {
    enableMocks.then(() => setScriptWasExecuted(true));
  }, []);

  return scriptWasExecuted ? children : null;
}
