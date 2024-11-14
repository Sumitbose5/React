export const EventHandling = () => {
    // function handleClick(){
    //     alert("Hey I am onClick Event")
    // }

    const handleClick = (event) => {
        console.log(event)
        alert("Hey I am onClick Event")
    }

    return(
        <>
            <div className="flex items-center justify-center h-1/2 w-1/2">
                <button onClick={handleClick} className="bg-blue-700 text-white rounded-sm p-2">Click Me</button>
            </div>
        </>
    );
}