let println = (text, id) =>
    document.getElementById(id).innerHTML += (text.toString().startsWith("Error") ?
        "<span style='color:red'>" + text + "</span>" : text) + "<br />"