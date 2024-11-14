export const Practices = () =>{
    const students = []
    return (
        <>
            {/* <p>{students.length && "No Students Found"}</p> */}

            {/* 1st */}
            {/* <p>{students.length === 0 && "No Students Found"}</p> */}

            {/* 2nd */}
            <p>{!students.length && "No Students Found"}</p>

            <p>Number of Students : {students.length}</p>
        </>
    );
}
