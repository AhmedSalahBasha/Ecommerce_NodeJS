module.exports = {

    database: 'mongodb://admin:admin@ds141118.mlab.com:41118/ecommerce',
    port: 3000,
    secretKey: "Salah!@#$%",

    facebook: {
        clientID: process.env.FACEBOOK_ID || '1367776379933605',
        clientSecret: process.env.FACEBOOK_SECRET || '386ae53244f2d08150002dc100ff5e59',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://https://ecommerce-nodejs.herokuapp.com/auth/facebook/callback'
    },
    host: "https://ecommerce-nodejs.herokuapp.com/"
}