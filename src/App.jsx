import MainView from "./components/MainView"
import Banner from "./components/banner/Banner"


function App() {

  return (
    <>
      {/* <div className="bg-danger"> */}
      <MainView />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="container-fluid">

        <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <Banner />
                              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/D7ZvKM9WjXk?si=k0qO4-_7wlq2zWjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                {/* <MainView /> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
