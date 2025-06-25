interface WithNumberInputWrapperProps {
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: unknown;
}

function WithNumberInputWrapper<P extends object>(Component: React.ComponentType<P>) {
  return function (props: WithNumberInputWrapperProps & P) {
    return <Component {...props} />;
  };
}
export default WithNumberInputWrapper;
