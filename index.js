const express = require ('express')

const cluster = require ('cluster')

const os = require ('os') // SO que gerencia o hardware

if (cluster.isMaster) { // Se for o processo mestre em execução, ele executa o processo e chama os filhos
    var qtdCpu = os.cpus().length // Quantidade de CPUS (Threads do processador)

    for (var i = 0; i < qtdCpu; i++) {
        cluster.fork() // Criação de um processo para aplicar nosso projeto
    }

    cluster.on('online', function(worker){
        console.log(`Worker criado: ${worker.process.pid}`)
    })

    cluster.on('exit', function(worker) {
        console.log(`Worker id: ${worker.process.pid} code: ${code} signal: ${signal}`)
        cluster.fork()
    })
} else {
    const app = express()
    app.get('/', (req, res) => {
        res.send(`Processo id: ${process.pid}`)
        for (var i = 0; i < 1000; i++){
            console.log(i)
        }
    })
    app.listen(3000, () => console.log(`Servidor online... ${process.pid}`))
}