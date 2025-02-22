function foreignLanguages(land) {
    let language = "";
    switch (land) {
        case "USA":
        case "England":
            language = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            break;
        default:
            language = "unknown";
            break;
    }
    console.log(language);
}

foreignLanguages("USA")
//English 
foreignLanguages("Germany")
//unknown