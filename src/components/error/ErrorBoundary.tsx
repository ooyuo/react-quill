import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>There was an error! {error.message}</h1>
      <button onClick={() => resetErrorBoundary()}>Retry</button>
    </div>
  );
};

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ReactErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
