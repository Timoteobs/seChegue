const app = require('./bin/express')
const bodyParser = require("body-parser")
const routerChegue = require('./routes')
const port = 3001



app.use('/routes', routerChegue)

app.listen(port, () =>{
    console.log('api iniciada com sucesso na porta ${port}')
});