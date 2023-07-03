body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    overflow: hidden;
}

.system-container {
    font-size: 10px;
    width: 40em;
    height: 40em;
    position: relative;
}

.sun {
    position: absolute;
    top: 15em;
    left: 15em;
    width: 20em;
    height: 20em;
    background-color: yellow;
    border-radius: 50%;
    box-shadow: 0 0 3em white;
}

.earth-system,#moon {
    position: absolute;
    border-style: solid;
    border-color: white
    transparent
    transparent
    transparent;
    border-width: 0.1em 0.1em 0 0;
    border-radius: 50%;
}
.earth-system {
    top: 10em;
    left: 10em;
    width: 30em;
    height: 30em;
    animation: orbit 16.5s linear infinite;
}

#moon {
    top: 0;
    right: 0;
    width: 8em;
    height: 8em;
    animation: orbit 2.7s linear infinite;
}
.earth-system::before,
#moon::before {
    content: '';
    position: absolute;
    border-radius: 50%;
}
.earth-system::before {
    top: 2.8em;
    right: 2.8em;
    width: 3em;
    height: 3em;
    background-color: rgb(0, 128, 255);
}
#moon::before {
    top: 1em;
    right: 0.2em;
    width: 1em;
    height: 1em;
    background-color: silver; 
}

@keyframes orbit {
    to{
        transform: rotate(360deg);
    }
}
    