walk(document.body);

function walk(node)
{

  // This function recursively traverses the entire document tree. Whenever it finds a text node, it
  // calls textFn on that node
  
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}


function handleText(textNode)
{
  // This function uses REGular EXpressions (REGEX) to manipulate the text inside the node
  // Currently it replaces the word cloud with the word butt. Uncomment some of the other lines to see other replacements
  
	var v = textNode.nodeValue;
	v = v.replace(/\bcloud\b/gi, "BUTT");
// 	v = v.replace(/\bTrump\b/g, "Drumpf");
// 	v = v.replace(/[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ig, "A PHONE NUMBER WAS HERE")
// 	v = v.replace(/\bJoe\s*Biden\b/gi, "Joe \"Hype Man\" Biden");
// 	v = v.replace(/\bStanford\b/gi, "$tanfurd");
	
	textNode.nodeValue = v;
}


