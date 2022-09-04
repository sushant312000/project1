const colorContainer = () => {
    let divStyling = {
        backgroundColor: "yellow",
        width: "500px",
        height: "350px",
        margin: "3px"
    }

    let headStyling = {
        color: "brown"
    }
    return(
        <div style = {divStyling}>
            <h2 style={headStyling}>Hello</h2>
        </div>
    )
};

export default colorContainer;
