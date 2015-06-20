// file: models/session-details.js - created at 2015-06-20, 06:25
function sessionDetailsHandler() {
  var sessionDatails = {
    cookieName: 'session',
    secret : '3120j0wej0134ja0j9013asj0575a0934',
    duration : 7 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true, //navegador nunca acesse meus cookies
    secure: true, //cookier samento https
    ephemeral: true, //deletar cookie quando nevagador fechar
  };

  return sessionDatails;
}
module.exports = exports = sessionDetailsHandler();
