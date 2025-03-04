// ==UserScript==
// @name         Dad Navigation Bar
// @namespace    https://github.com/Svintooo/
// @version      2025-03-02
// @description  Navigation Bar for my dad.
// @author       Svintoo
// @match        *://www.youtube.com/*
// @match        *://www.netflix.com/*
// @match        *://www.pornhub.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    console.log('Dad Navigation Bar is starting...');

    // Create a div element for the navigation bar
    const navBar = document.createElement('div');
    navBar.id = 'dad-navigation-bar';

    // Button names and their corresponding icons
    const buttons = [
        { name: 'back', icon: '➜', style: 'transform:scaleX(-1);' }, // Use transform to flip the arrow
        { name: 'youtube', icon: '📺 YouTube', style: '' },
        { name: 'netflix', icon: '🎬 Filmer', style: '' },
        { name: 'pornhub', icon: '🔞 Porr', style: '' },
        { name: 'forward', icon: '➜', style: '' }
    ];

    // Create buttons and append them to the navigation bar
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.id = button.name + '-button';
        btn.className = 'dad-navigation-button';
        btn.innerHTML = button.icon; // Set the icon as the button content
        btn.style = button.style;

        // Add click event listener for button actions
        btn.addEventListener('click', () => {
            if (button.name === 'back') {
                window.history.back();
                //    btn.style.opacity = '0.5'; // Grey out if action can't be done
                //    btn.disabled = true; // Disable button
            } else if (button.name === 'forward') {
                window.history.forward();
            } else if (button.name === 'youtube') {
                window.location.href = 'https://www.youtube.com';
            } else if (button.name === 'netflix') {
                window.location.href = 'https://www.netflix.com';
            } else if (button.name === 'pornhub') {
                window.location.href = 'https://www.pornhub.com';
            }
        });

        // Append the button to the navigation bar
        navBar.appendChild(btn);
    });

    // Append the navigation bar to the <body> element
    document.body.appendChild(navBar);
    console.log('Navigation bar has been appended to the <body> element.');

    // Add CSS styles for the navigation bar
    GM_addStyle(`
        #dad-navigation-bar {
            position: fixed;
            bottom: 10px;
            left: 10px;
            right: 10px;
            background-color: white;
            border: 1px solid black;
            display: flex; /* Flexbox for layout */
            flex-direction: row; /* Stack buttons vertically */
            padding: 5px; /* Padding around the bar */
            z-index: 5000; /* Ensure it is above other content */
        }

        .dad-navigation-button {
            flex-grow: 1; /* Make buttons take equal space */
            border: 1px solid black;
            border-radius: 5px;
            /*background-color: white;*/
            /* color: transparent; */
            text-shadow: 0 0 0 black;
            font-size: 36px; /* Adjust font size for visibility */
            cursor: pointer; /* Pointer cursor on hover */
            margin: 0 5px;
            padding: 0px;
            display: flex; /* Flexbox for centering */
            align-items: center; /* Center vertically */
            justify-content: center;
        };
    `);
    console.log('CSS styles for the navigation bar have been applied.');

    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            console.log('Entered fullscreen mode');
            navBar.style = 'visibility: hidden;';
        } else {
            console.log('Exited fullscreen mode');
            navBar.style = 'visibility: visible;';
        }
    });
    console.log('EventListener for fullscreen for the navigation bar have been initiated.');
})();
