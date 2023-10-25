var keysPressed = {};
    var imageVisible = false;
    var image;

    function toggleImageVisibility() {
        if (imageVisible) {
            document.body.removeChild(image);
            imageVisible = false;
        } else {
            image = new Image();
            image.src = 'static/images/sf.jpg'; 
            document.body.appendChild(image);
            image.classList.add('sf');
            imageVisible = true;
        }
    }

    document.addEventListener('keydown', function(event) {
        keysPressed[event.key] = true;

        if (keysPressed['z'] && keysPressed['x'] && keysPressed['c'] && !imageVisible) {
            toggleImageVisibility();
            setTimeout(function() {
                document.body.removeChild(image);
                imageVisible = false;
            }, 500);
            keysPressed = {};
        }
    });

    document.addEventListener('keyup', function(event) {
        keysPressed[event.key] = false;
    });