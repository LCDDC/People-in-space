const apiurl='http://api.open-notify.org/astros.json';

fetch(apiurl)
    .then(response=>response.json())
    .then(data=>{
        const peoplelist=document.getElementById('people-list');

        data.people.forEach(person=>{
            const listitem=document.createElement('li');
            const namehead=document.createElement('h2');
            namehead.textContent=person.name;
            const craft=document.createElement('h3');
            craft.textContent=`Craft: ${person.craft}`;

            listitem.appendChild(namehead);
            listitem.appendChild(craft);
            peoplelist.appendChild(listitem);
        });
    });
    function sound(){
        var audio=new Audio('ES_Room Tone 12 - SFX Producer.mp3');
        audio.play();
    }