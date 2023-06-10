import { Layout } from "../components/Layout";
import { Title } from "../components/Title";

export function HomePage() {
  return (
    <>
      <Layout>
        <div className="container">
          <Title title="Home Page" />
        </div>
      </Layout>
    </>
  );
}
