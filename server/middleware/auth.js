import {expressjwt} from 'express-jwt';
const secret = process.env.JWT_SECRET || 'MIGO145SDS.SDGSRGSFGRSFHSRFBSJUKUJGM.SDSFH157896997487';
export const requireSignin = expressjwt({
    secret: secret,
    algorithms: ["HS256"],
    // requestProperty: 'payload',
    // getToken: function fromHeaderOrQuerystring(req) {
    //     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    //         return req.headers.authorization.split(' ')[1];
    //     } else if (req.query && req.query.token) {
    //         return req.query.token;
    //     }
    //     return null;
    // }
})