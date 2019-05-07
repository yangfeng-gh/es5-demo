/* global ActiveXObject */
function loadXMLDoc(dname) {
  var xmlDoc

  try {
    //Internet Explorer
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
  } catch (e) {
    try {
      //Firefox, Mozilla, Opera, etc.
      xmlDoc = document.implementation.createDocument("", "", null)
    } catch (e) {
      alert(e.message)
    }
  }

  try {
    xmlDoc.async = false
    xmlDoc.load(dname)
    return (xmlDoc)
  } catch (e) {
    alert(e.message)
  }

  return (null)
}
