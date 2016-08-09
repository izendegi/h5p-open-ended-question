import 'expose?H5P!exports?H5P!h5p-view';
import OpenEndedQuestion from '../scripts/open-ended-question';

var params = require('../content/dev.json');

const openEndedQuestion = new OpenEndedQuestion(params);
openEndedQuestion.attach(H5P.jQuery('<div>').appendTo(H5P.jQuery('body')));

// Create external event listener element
const externalEventsElement = document.createElement('div');
externalEventsElement.style.fontSize = '12px';
document.body.appendChild(externalEventsElement);
openEndedQuestion.on('changed', (event) => {
  const eventElement = document.createElement('pre');
  eventElement.innerHTML = JSON.stringify(event.data, null, 2);
  externalEventsElement.appendChild(eventElement);

  if (externalEventsElement.children.length > 1) {
    const firstChild = externalEventsElement.children[0];
    externalEventsElement.removeChild(firstChild);
  }
});
