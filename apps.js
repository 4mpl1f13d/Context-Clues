
$(document).ready(function () {

    var friendName = ['Caleb', 'Special K', 'Chase', 'Conner', 'Josh'];
    var weaponName = ['salt', 'pepper', 'knife', 'keyboard', 'monitor', 'metal cup', 'corded headphones', 'hot coffee', 'pencil', 'laser', 'taser', 'phaser', 'hot sauce', 'baseball bat', 'great dane', 'attack chihuahua', 'turtle', 'Lincoln Town Car', 'tank', 'nuclear warhead'];
    var locationName = ['classroom', 'lunchroom', 'principals office', 'garage', 'clean room', 'utility closet', 'server room', 'bathroom', 'hallway', 'Innovation Depot',];

    function clickHandler(i) {


        return function () {

            // in here you can access friends[index % friends.length]

            alert(`Accusation ${i}  -  I accuse ${friendName[i % friendName.length]}, with the ${weaponName[i % weaponName.length]} in the ${locationName[i % locationName.length]}! `)

        }
    }

    // When the page first loads, insert 100 h3 elements onto the page
    for (i = 0; i < 100; i++) {
        var h3=$('<h3></h3>')
        $('body').append(h3);
        h3.append(`Accusation ${i}`)
        h3.click(clickHandler(i));

    }

})