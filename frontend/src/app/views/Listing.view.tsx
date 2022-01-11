import { Pagination, MovieCard } from "app/components";

const ListingView = () => {
  return (
    <>
      <Pagination />

      <div className="mt-4">
        <div className="row">
          <div className="col-sm-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingView;
