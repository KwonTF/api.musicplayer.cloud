import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

export const checkJWT = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://musicplayercloud.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://api.musicplayer.cloud/',
  issuer: 'https://musicplayercloud.auth0.com/',
  algorithms: ['RS256'],
  credentialsRequired: false,
});

export default checkJWT;
