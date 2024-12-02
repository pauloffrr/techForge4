"use strict";
class VoteSystem {
}
class Poll extends VoteSystem {
    constructor() {
        super();
        this.votes = {};
    }
    voteFor(candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
        console.log(`Voto registrado para o candidato: ${candidate}`);
    }
    getResults() {
        if (typeof this.votes !== 'object' || this.votes === null) {
            throw new Error("votes não é um objeto válido");
        }
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));
        return sortedCandidates;
    }
}
const poll = new Poll();
poll.voteFor('Candidato X');
poll.voteFor('Candidato Y');
poll.voteFor('Candidato X');
poll.voteFor('Candidato X');
console.log('Resultados da pesquisa:', poll.getResults());
