interface WithSelectInputWrapperProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: unknown;
}

function WithSelectInputWrapper<P extends object>(Component: React.ComponentType<P>) {
  return function (props: WithSelectInputWrapperProps & P) {
    return <Component {...props} />;
  };
}
export default WithSelectInputWrapper;
