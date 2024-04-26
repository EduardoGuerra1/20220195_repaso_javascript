const ArrayPersonajes = [{
    name: 'Naruto Uzumaki',
    desc: 'El protagonista principal, un ninja hiperactivo y enérgico que sueña con convertirse en Hokage. Lleva dentro de sí al Zorro de Nueve Colas.'
}, {
    name: 'Sasuke Uchiha',
    desc: 'Rival de Naruto y uno de los ninjas más talentosos de su generación. Busca venganza contra su hermano Itachi por masacrar a su clan.'
},
{
    name: 'Minato Namikaze',
    desc: 'El Cuarto Hokage, conocido como el "Relámpago Amarillo de Konoha" por su velocidad inigualable. Padre de Naruto y creador del Rasengan.'
},
{
    name: 'Kakashi Hatake',
    desc: 'Maestro de Naruto, Sasuke y Sakura. Es un ninja famoso por su dominio del Sharingan y su técnica de invocación de perros ninja.'
},
{
    name: 'Itachi Uchiha',
    desc: 'Hermano mayor de Sasuke, responsable de la masacre del clan Uchiha. Es un ninja extremadamente poderoso y temido.'
},
{
    name: 'Jiraiya',
    desc: 'Uno de los Sannin Legendarios y maestro de Naruto. Es un ninja ermitaño experto en técnicas de invocación y jutsu de gran escala.'
},
{
    name: 'Tsunade',
    desc: 'Otra de los Sannin Legendarios y la Quinta Hokage. Es una ninja médico excepcional y posee una fuerza sobrehumana.'
},
{
    name: 'Orochimaru',
    desc: 'El tercero de los Sannin Legendarios, busca la inmortalidad y el poder a cualquier costo. Es un experto en jutsus prohibidos y experimentos siniestros.'
},
{
    name: 'Shikamaru Nara',
    desc: 'Un ninja altamente inteligente y estratega brillante del Clan Nara. Es conocido por su habilidad para elaborar planes complejos.'
},
{
    name: 'Rock Lee',
    desc: 'Un ninja que se especializa en el taijutsu (combate cuerpo a cuerpo) debido a su incapacidad para usar ninjutsu o genjutsu.'
}];


const personajesArray = document.getElementById('main');

ArrayPersonajes.forEach(ArrayPersonajes => {
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <p class="name">${ArrayPersonajes.name}</p>
    <p class="desc">${ArrayPersonajes.desc}</p>
    `;
    personajesArray.appendChild(card);
})