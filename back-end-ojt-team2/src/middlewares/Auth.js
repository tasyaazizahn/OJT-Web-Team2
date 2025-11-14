import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error('JWT_SECRET belum di set di .env');
}

export default function auth(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.status(401).json({message: 'No token provide'});

        const parts = authHeader.split(' ');
        if(parts.length !==2 || parts[0] !== 'Bearer') {
            return res.status(401).json({message : 'Invalid Authorization header format'});
        }

        const token = parts[1];

        jwt.verify(token, jwtSecret, (err, decoded) => {
            if(err) return res.status(401).json({message : 'Invalid Token'});
            req.user = {
                id:decoded.id, 
                username: decoded.username,
                role: decoded.role,
                akses: decoded.akses
            };
            next();
        });
    } catch (err) {
        next(err);
        
    }
}