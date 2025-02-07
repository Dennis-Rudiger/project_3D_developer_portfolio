import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin"/>
        <p className="text-white font-bold mt-4">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
