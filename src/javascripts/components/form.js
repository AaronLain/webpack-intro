import util from '../helpers/utils';
import display from './display';
import textData from '../helpers/data/textData';

const submitForm = (e) => {
  e.preventDefault();
  const formText = $('#form-text').val();
  textData.setText(formText);
  display.showDisplay();
};
const displayForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="form-text">Text</label>';
  domString += '<input type="text" class="form-control" id="form-text">';
  domString += '</div>';
  domString += '<button id="really-nice-submit" type="submit" class="btn btn-primary">Submit</button>';
  domString += '</form>';
  util.printToDom('form-container', domString);
  $('#really-nice-submit').click(submitForm);
};

export default { displayForm, submitForm };
