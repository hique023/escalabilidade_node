# Escalabilidade Node

Servidor simples em Node que possui como propósito a utilização dos cores dos processador afim de criar processos em forma simultânea.

OBS. É importante ressaltar que o Node trabalha com Single Thread, isso significa que ele trabalha com apenas um processo por vez em sua pilha de eventos, podendo em alguns casos onerar a aplicação, a proposta deste projeto é distribuir os processos (A medida que são enviados) para os cores do processador do servidor.
