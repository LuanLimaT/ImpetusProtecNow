import { useState } from 'react';

export function useExample() {
  const [value, setValue] = useState('Exemplo');
  return { value, setValue };
}
