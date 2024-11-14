export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    // console.log(event);
    // event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-500 p-6" onClick={handleGrandParent}>  
        <div className="bg-green-500 p-6" onClick={handleParentClick}>
          <button className="bg-blue-500 p-6" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </div>
  );
};