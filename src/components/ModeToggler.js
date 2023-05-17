export default function ModeToggler(){
    let darkModeOn = true;
    let darkMode = <h1>Dark mode is on</h1>;
    let lightMode = <h1>Light mode is on</h1>;

    function handleClick (){
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log ("Dark")
        } else {
            console.log("Light")
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Change mode</button>
            {darkModeOn ? darkMode : lightMode}
        </div>
    )
}