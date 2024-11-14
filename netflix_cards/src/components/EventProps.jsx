export const EventProps = () => {
    const HandleWelcomeUser = (name) => {
        console.log(`Hey, ${name}, Welcome!`)
    }
    const handleButtonHover = () => {
        alert("Thanks for hovering me!")
    }
    return (
        <WelcomeUser 
            handleClick={() => HandleWelcomeUser("Sumit")}
            handleHover={handleButtonHover}
        />
    );
}

const WelcomeUser = (props) => {
    const {handleClick, handleHover} = props;
    const handleGreeting = () => {
        console.log("Handle Greeting Called");
        handleClick();
    }
    return (
        <>
            <button onClick={handleClick} className="bg-blue-600 text-white rounded-sm p-2">Click</button>  
            <button onMouseEnter={handleHover} className="bg-yellow-600 text-white rounded-sm p-2">Hover Me</button>
            <button onClick={handleGreeting} className="bg-green-600 text-white rounded-sm p-2">Greeting</button>
        </>
    );
}