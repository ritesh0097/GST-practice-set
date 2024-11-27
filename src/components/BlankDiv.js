const BlankDiv = () => {

    function closemenu() {
        document.getElementById("sidenav").classList.toggle("hidden")
        document.getElementById("blankDiv").classList.toggle("hidden")
        document.getElementById("menu").classList.toggle("hidden")
        document.getElementById("close").classList.toggle("hidden")
    }

    return(            
        <div id="blankDiv" onClick={closemenu} className="w-[100%] h-[100vh] absolute top-0 left-0 z-10 hidden"></div>    
    )
}

export default BlankDiv;