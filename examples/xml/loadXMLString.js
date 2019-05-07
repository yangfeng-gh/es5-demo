/* global ActiveXObject */

function loadXMLString(txt) {
  var xmlDoc;
  try {
    //Internet Explorer
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async="false";
    xmlDoc.loadXML(txt);
    return(xmlDoc);
  } catch(e) {
    try {
      //Firefox, Mozilla, Opera, etc.
      var parser=new DOMParser();
      xmlDoc=parser.parseFromString(txt,"text/xml");
      return(xmlDoc);
    } catch(e) {alert(e.message)}
  }
  return(null);
}
