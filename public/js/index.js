let socket = io();
socket.on('connect', () => {
    console.log('Connected to server');
});
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('Got New Message', message);
    let li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', (message) => {
    let li = jQuery('<li></li>');
    let a = jQuery('<a target = "_blank">My current location</a>');
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();

    socket.emit('createMessage', {
        from : "User",
        text : jQuery('[name=message]').val()
    }, (data) => {
        console.log('Got it', data);
    });
});

let locationButton = jQuery('#send-location');
locationButton.on('click',() => {
    if(!navigator.geolocation) {
        return alert('Geolocation not supported by browser');
    }
    navigator.geolocation.getCurrentPosition((position)=> {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, () => {
        alert('Unable to fetch location');
    });
});