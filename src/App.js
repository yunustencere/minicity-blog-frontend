import Navbar from "./views/navbar/Navbar";
import ViewsMain from "./views/ViewsMain";
function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0">
        <div className="col-lg-12 p-0">
          <Navbar />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-12 p-0">
          <ViewsMain />
        </div>
      </div>
    </div>
  );
}

export default App;
