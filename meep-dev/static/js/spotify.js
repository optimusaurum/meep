document.addEventListener('DOMContentLoaded', function() {
    // Messages for random display
    const messages = [
        "It's such a beautiful day!",
        "You make the world brighter, just by being you.",
        "I’m always here to remind you how amazing you are.",
        "Never forget you’re capable of incredible things.",
        "One small step at a time. You’re doing great.",
        "You're doing amazing.",
        "OIIAIIOIIA",
        "WIWIWI",
        "One small step for Alex, one giant leap for Alex (and the world).",
        "You don’t need to be perfect to be amazing.",
        "You’re doing better than you think.",
        "The world needs your unique kind of brilliance.",
        "Ya smart, ya strong, ya kind, ya got this.",
        "I believe in you, always.",
        "JUST DO IT",
        "Do your best, and that’s always enough.",
        "Every challenge you face is another chance to grow.",
        "Never stop being your weird, wonderful self.",
        "If I could bottle your gentleness, I’d give it to the whole world.",
        "I beleaf in u.",
        "GET IT TOGETHER BEFORE THE SHRIMP FRY YO AZZ",
        "I'M GONNA TICKLE YOU IF YOU DON'T GET IT TOGETHER",
        "You're so sparklicious.",
        "You can do it, I believe in you.",
        "KEEP GOING, YOU'RE DOING GREAT",
        "JUST KEEP SWIMMING, JUST KEEP SWIMMING",
        "NOM NOM NOM. You deserve a cookie.",
        "THAT BIG BRAIN OF YOURS IS A BEAST",
        "I'M PROUD OF YOU",
        "You have the strength to climb every mountain you face. Just like you climb up that wall.",
        "You have everything you need within you.",
        "Every little bit of effort you give counts.",
        "Trust the process.",
        "Courage isn’t the absence of fear — it’s acting in spite of it.",
        "You’re one step closer to world domination (or at least clean laundry).",
        "Pro tip: If you can't find motivation, take a nap and pretend it was part of the plan.",
        "You were born to stand out... probably because of your weird laugh. And your weird laugh is the best.",
        "Every great success starts with a moment of panic — keep going!",
        "You are not a mess — you're just creatively disorganized. And that's okay.",
        "You’re not lazy — you’re on energy-saving mode.",
        "If you fall, I’ll always help you up.",
        "Keep moving forward — or at least wobble in the right direction.",
        "You’re smart, capable, and only mildly chaotic. Perfect.",
        "Your potential is louder than your fears.",
        "You don’t need a light at the end of the tunnel — you are the light.",
        "Just start bro",
        "You're a star in my world.",
        "I'm so proud of you.",
        "JUST DO IT BRO GET YO AZZ TOGETHER",
        "IT'S SUCH A BEAUTIFUL DAY!"
    ];

    // // Function to display a random message
    // function displayRandomMessage() {
    //     const messageElement = document.getElementById('random-message');
    //     const randomIndex = Math.floor(Math.random() * messages.length);
        
    //     // Remove fade-in class
    //     messageElement.classList.remove('fade-in');
        
    //     // Trigger reflow
    //     void messageElement.offsetWidth;
        
    //     // Set new message and add fade-in class
    //     const today = new Date();
    //     const month = today.getMonth() + 1; // getMonth() returns 0-11
    //     const day = today.getDate();
        
        
    //     messageElement.textContent = messages[randomIndex];
    //     messageElement.textContent = month + " " + day;
    //     messageElement.classList.add('fade-in');
    // }

      // Set a random message for the overlay
      function setOverlayMessage() {
        const overlayMessageElement = document.getElementById('overlay-message');
        const randomIndex = Math.floor(Math.random() * messages.length);

        const today = new Date();
        const month = today.getMonth() + 1; // getMonth() returns 0-11
        const day = today.getDate();
        overlayMessageElement.textContent = (month === 4 && day === 27) ? "YO YO IT'S YA BIRTHDAY!\nWE GON PARTY CUZ IT'S YA BIRTHDAY! 🥳🥳" : messages[randomIndex];
      }


    // // Button to get a new random message
    // const newMessageBtn = document.getElementById('new-message-btn');
    // if (newMessageBtn) {
    //     newMessageBtn.addEventListener('click', displayRandomMessage);
    //     // Display initial message
    //     displayRandomMessage();
    // }

    // Function to position photos naturally along the light strings
    function positionPhotos() {
        const strings = document.querySelectorAll('.light-string');
        
        strings.forEach(string => {
            const photos = string.querySelectorAll('.photo');
            
            photos.forEach((photo, index) => {
                // Get string width for positioning calculations
                const stringWidth = string.offsetWidth;
                
                // Calculate natural positions based on index
                let positionPercentage;
                
                // Create unique positioning for each photo in each string
                if (string.classList.contains('string1')) {
                    // First string positions - spread them out
                    const positions = [15, 35, 60];
                    positionPercentage = positions[index % positions.length];
                } else if (string.classList.contains('string2')) {
                    // Second string positions - spread them out
                    const positions = [25, 52, 65];
                    positionPercentage = positions[index % positions.length];
                } else if (string.classList.contains('string3')) {
                    // Third string positions - spread them out
                    const positions = [12, 34, 58];
                    positionPercentage = positions[index % positions.length];
                } else if (string.classList.contains('string4')) {
                    // Fourth string positions - spread them out
                    const positions = [25 , 45, 70];
                    positionPercentage = positions[index % positions.length];
                } else if (string.classList.contains('string5')) {
                    // Fifth string positions - spread them out
                    const positions = [15, 40, 55, 78];
                    positionPercentage = positions[index % positions.length];
                }
                
                // Set left position
                photo.style.left = `${positionPercentage}%`;
                
                // Remove top positioning
                photo.style.top = "";
                
                // Set the string height variable for the string before pseudo-element
                const stringLength = 20 + Math.floor(Math.random() * 20); // 20-40px
                photo.style.setProperty('--string-height', `${stringLength}px`);
                
                // Add random animation delays for natural movement
                const randomDelay = (Math.random() * 3).toFixed(1); // 0-3s delay
                photo.style.animationDelay = `${randomDelay}s`;
                
                // Add random rotation for a more natural look
                const randomRotation = (Math.random() * 6) - 3; // -3 to 3 degrees
                photo.style.transform = `rotate(${randomRotation}deg)`;
            });
        });
    }

    // Position photos on page load
    positionPhotos();

    setOverlayMessage();

    // Reposition photos on window resize
    window.addEventListener('resize', positionPhotos);

    // Spotify section expand/collapse functionality
    const spotifyExpandBtn = document.getElementById('spotify-expand-btn');
    const spotifySection = document.querySelector('.spotify-section');
    
    if (spotifyExpandBtn) {
        spotifyExpandBtn.addEventListener('click', function() {
            spotifySection.classList.toggle('expanded');
            
            // Update button text and icon
            if (spotifySection.classList.contains('expanded')) {
                // Use the up triangle when expanded
                this.innerHTML = '<span class="expand-icon">▼</span>' ;
            } else {
                // Use the down triangle when collapsed
                this.innerHTML = '<span class="expand-icon">▼</span> Show Vibes';
            }
        });
    }

    // Spotify playlist selection
    const episodes = document.querySelectorAll('.episode');
    const embedIframe = document.getElementById('embed-iframe');
    
    episodes.forEach(episode => {
        episode.addEventListener('click', function() {
            const spotifyId = this.getAttribute('data-spotify-id');
            if (spotifyId) {
                // Extract the playlist ID from the spotify URI format
                const parts = spotifyId.split(':');
                const playlistId = parts[parts.length - 1];
                const type = parts[parts.length - 2]; // playlist, album, etc.
                
                // Set the iframe src
                embedIframe.src = `https://open.spotify.com/embed/${type}/${playlistId}?utm_source=generator&theme=0`;
                
                // Add active class to show the iframe
                embedIframe.classList.add('active');
                
                // Make sure the section is expanded when selecting a playlist
                if (!spotifySection.classList.contains('expanded')) {
                    spotifyExpandBtn.click();
                }
                
                // Highlight the selected playlist button
                episodes.forEach(ep => ep.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});