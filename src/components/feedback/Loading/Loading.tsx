import { TLoading } from "@customTypes/shared";

type LoadingProps = {
    status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
    console.log('error' ,error)
  if (status === "pending") {
    return <p>loading please wait</p>;
    }
    
    if (status === "failed") {
        return <p>{error}</p>;
      }

  return <>{children}</>;
};

export default Loading;
