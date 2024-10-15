const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: '93795014782-iq9pi0sqeei1290k81lugr3nhclhej26.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes guardar el perfil en la base de datos
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user.id); // Asegúrate de que 'user.id' sea correcto
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user); // Asegúrate de que el usuario se encuentre correctamente
    });
});

