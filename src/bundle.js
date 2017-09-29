//styles
require('./styles/styles.scss');
//common
require('./../node_modules/angular/angular.min');
//app
require('./js/app');
require('./js/AppController');
//components
require('./js/components/emailsEditor/emailsEditor');
require('./js/components/emailsEditor/EmailsEditorController');
require('./js/components/email/email.class');
require('./js/components/email/email');
require('./js/components/email/EmailController');
//attributes
require('./js/attributes/confirmEmail');
//utils
require('./js/utils/getNewId');
require('./js/utils/isValidEmail')
require('./js/utils/getRandomEmail');