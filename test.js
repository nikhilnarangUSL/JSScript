function setDateTime() {
    var utcSeconds = loader.engine.document.getElementById(102488935).getProperty('value.value');
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    console.log(d);
    loader.engine.document.getElementById(102490947).setValue(({"value": d})); 
    };
    
window.onsubmit = setDateTime;