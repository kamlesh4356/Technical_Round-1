// Get references to HTML elements
const Box1_hidden = document.getElementById('Box1-hidden');
const Boxt1_container = document.getElementById('box1');
const Box_2_hidden = document.getElementById('Box_2_hidden');
const Box_2_Container = document.getElementById('Box_2_Container');
const Box_3_hidden = document.getElementById('Box_3_hidden');
const Box_3_Container = document.getElementById('Box_3_Container');
const About_Me = document.getElementById('About_Me');
const Add_To_Card = document.getElementById('btn2');

// Set initial styles for Box1_hidden and Box_3_hidden
Box1_hidden.style.display = 'none';
Box_3_hidden.style.display = 'none';

// Event listener for Box1_container click
Boxt1_container.addEventListener('click', function() {
    // Show Box1_hidden and hide other elements
    Box1_hidden.style.display = 'block';
    Box_2_hidden.style.display = 'none';
    Box_3_hidden.style.display = 'none';
    About_Me.style.display = 'none';
});

// Event listener for Box_2_Container click
Box_2_Container.addEventListener('click', function() {
    // Show Box_2_hidden and hide other elements
    Box_2_hidden.style.display = 'block';
    Box1_hidden.style.display = 'none';
    Box_3_hidden.style.display = 'none';
    About_Me.style.display = 'none';
});

// Event listener for Box_3_Container click
Box_3_Container.addEventListener('click', function() {
    // Show Box_3_hidden and hide other elements
    Box_3_hidden.style.display = 'block';
    Box_2_hidden.style.display = 'none';
    About_Me.style.display = 'none';
});

// Set initial style for About_Me
About_Me.style.display = 'none';

// Event listener for Add_To_Card click
Add_To_Card.addEventListener('click', function() {
    // Show About_Me and hide other elements
    About_Me.style.display = 'block';
});
