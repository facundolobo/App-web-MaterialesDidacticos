const http = require('http');

http.createServer((req ,res) =>{
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); //este archivo es para descargar cone se nombre
    // res.writeHead(200, {'Content-Type' : 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, maria\n');
    // res.write('3, facundo\n');
    // res.write('4, fabri\n');
    res.write('Hola mundo');
 
    res.end();
})

.listen(8080);


console.log('Escuchando el puerto ',8080);