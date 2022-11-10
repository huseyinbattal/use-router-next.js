import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1><br/><button onClick={() => router.back()}>Home Page</button>
    </div>
  );
};

export default Home;