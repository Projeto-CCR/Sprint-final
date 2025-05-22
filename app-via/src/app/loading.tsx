export default function Loading() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        <span className="ml-3 text-lg font-semibold">Carregando aplicação...</span>
      </div>
    );
  }
  