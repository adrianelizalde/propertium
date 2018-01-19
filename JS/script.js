var list = [
  ['Adrian','guapo'],
  ['Victor','feo'],
  ['Lozano','furcia']
];


function print(message) {       // why (message)
  outputDiv = document.getElementById('output').innerHTML = message;
}

html = "Your name is " + nameSelect + " you are " + beauty + ".";
html += buildList(listhtml);  // why (listhtml)
print(html);
