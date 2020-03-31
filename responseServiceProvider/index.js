
async function respuestaHttp_200(mensaje='' ,data,error){
    let codigo='200';
    const customFormat = {
        'estado' : 'OK',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}
async function respuestaHttp_422(mensaje='' ,data,error){
    let codigo='422';
    const customFormat = {
        'estado' : 'ERROR',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}
async function respuestaHttp_403(mensaje='' ,data,error){
    let codigo='403';
    const customFormat = {
        'estado' : 'ERROR',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}
async function respuestaHttp_400(mensaje='' ,data,error){
    let codigo='400';
    const customFormat = {
        'estado' : 'ERROR',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}
async function respuestaHttp_404(mensaje='' ,data,error){
    let codigo='404';
    const customFormat = {
        'estado' : 'ERROR',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}
async function respuestaHttp_500(mensaje='' ,data,error){
    let codigo='500';
    const customFormat = {
        'estado' : 'ERROR',
        'codigo' : codigo,
        'msg'    : mensaje,
        'data'   : data,
        'error'  : error
    };
    return  customFormat;
}

  module.exports = {
    respuestaHttp_200,
    respuestaHttp_422,
    respuestaHttp_403,
    respuestaHttp_400,
    respuestaHttp_404,
    respuestaHttp_500
  }