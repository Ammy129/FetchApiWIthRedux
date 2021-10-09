import Categories from "./comps/Categories";
import Products from "./comps/Products";
import styled from "styled-components";

function App() {
  return (
    <Main>
      <Categories />
      <Products />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`;
export default App;
