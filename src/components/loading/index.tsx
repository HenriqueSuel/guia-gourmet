import { useLoading } from "../../context/loading.context";

const Loading = () => {
  const { loading } = useLoading();

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-t-transparent border-red-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <></>;
};

export { Loading };
