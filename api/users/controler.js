const User =require('./model');
const {createToken} = require('../auth');
const {compareHash} = require('../crypt');
const responceService = require('../../responseServiceProvider');

let mensaje = '';
let data = {};
let errorInfo = {};

async function create(req, res) {

    try {
        const newUser= req.body;
        const persistednewUser = await User.create(newUser);

         mensaje = 'La petición se ejecutó con exito';
         data = persistednewUser;
         errorInfo = {};
    
        const resp = await responceService.respuestaHttp_200(mensaje,data,errorInfo);
        res.status(200).send(resp);
    } catch (error) {
         mensaje = 'La petición se ejecutó con errores';
         data = {};
         errorInfo = error.errors;
        const resp = await responceService.respuestaHttp_500(mensaje,data,errorInfo);
        res.status(500).send(resp);
    }
}

async function login(req, res) {
    try {
        const creds = req.body;
        const {email, password} = creds;
        if(!email){
            mensaje = 'Email is required ';
            data = {};
            errorInfo = {};
           const resp = await responceService.respuestaHttp_400(mensaje,data,errorInfo);
           return res.status(400).send(resp);
        }
        if(!password){
            mensaje = 'Password is required ';
            data = {};
            errorInfo = {};
           const resp = await responceService.respuestaHttp_400(mensaje,data,errorInfo);
           return res.status(400).send(resp);
        }
        const user = await User.findOne({email}).select(['email', 'password']);


       // const hashedPassword = bcrypt.hash(password,10 );
        const isMatch = await compareHash(password,user.password);
        if(!isMatch){
            mensaje = 'Invalidad  email or password';
            data = {};
            errorInfo = {};
           const resp = await responceService.respuestaHttp_400(mensaje,data,errorInfo);
           return res.status(400).send(resp);
        }

        //const token = '1726959925';
        const token  = createToken(user);

        mensaje = 'La petición se ejecutó con exito';
        data = {      
                    expiresIn: 3600,
                    userId: user._id,  
                    token:token
                };
        errorInfo = {};
   
       const resp = await responceService.respuestaHttp_200(mensaje,data,errorInfo);
       res.status(200).send(resp);
    } catch (error) {
        mensaje = 'La petición se ejecutó con errores';
        data = {};
        errorInfo = error.errors;
       const resp = await responceService.respuestaHttp_500(mensaje,data,errorInfo);
       res.status(500).send(resp);
    }

}


module.exports = {
    login,
    create
};