export default function Page({ pgNo, setPgNo }) {
  const handlePrev = () => {
    setPgNo((prev) => prev - 1);
  };
  const handleNext = () => {
    setPgNo((curr) => curr + 1);
  };
  const handleClick = (current) => {
    setPgNo(current);
  };

  const prevThree = Array.from(
    { length: 4 },
    (_, index) => pgNo - index - 1 // Fix: Correctly defining the mapping function
  )
    .filter((value) => value > 0)
    .reverse();

  const nextFour = Array.from({ length: 4 }, (_, index) => pgNo + index);

  const arr = [...prevThree, ...nextFour];
  return (
    <div className="pagination-container">
      {pgNo > 1 ? (
        <div className="page-btn" onClick={handlePrev}>
          {"<"}
        </div>
      ) : (
        ""
      )}
      {arr.map((pageNo, index) => {
        return (
          <div
            className={pageNo === pgNo ? "page-btn active" : "page-btn"}
            onClick={() => handleClick(pageNo)}
          >
            {pageNo}
          </div>
        );
      })}

      <div className="page-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
