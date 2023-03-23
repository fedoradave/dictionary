import { useEffect, useState } from 'react';

const steps = [
  'loading...\u00a0',
  'loading\u00a0\u00a0\u00a0\u00a0',
  'loading.\u00a0\u00a0\u00a0',
  'loading..\u00a0\u00a0',
];
const Loader = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setTimeout(
      () => setStep((step+1)%steps.length),
      50
    )
  }, [step]);
  return steps[step];
}

export default Loader;
