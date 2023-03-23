/*
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

for(let i = 0; i < team.length; i++){
    console.log('nome:', team[i].name);
    console.log('cognome:', team[i].surname);
    console.log('ruolo:', team[i].role);
    console.log('immagine:', team[i].image);
}