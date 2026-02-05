document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.getElementById('country-input');
    const submitBtn = document.getElementById('submit-btn');
    const responseContainer = document.getElementById('response-container');

    submitBtn.addEventListener('click', () => {
        const country = countryInput.value.trim();
        if (country) {
            const advice = getCountryAdvice(country);
            displayAdvice(advice);
        } else {
            responseContainer.innerHTML = '<p>Please enter a country name.</p>';
        }
    });

    function getCountryAdvice(country) {
        const countryLower = country.toLowerCase();
        switch (countryLower) {
            case 'japan':
                return {
                    dos: [
                        'Bowing is a customary greeting.',
                        'Remove your shoes before entering someone\'s home.',
                        'Slurping your noodles is a sign of enjoyment.',
                        'Always be on time, as punctuality is highly valued.',
                        'Carry cash, as many smaller shops and restaurants do not accept credit cards.'
                    ],
                    donts: [
                        'Do not tip, as it can be considered rude.',
                        'Avoid eating or drinking while walking in public.',
                        'Do not point at people with your finger; use an open hand instead.',
                        'Avoid loud conversations on public transportation.',
                        'Do not stick your chopsticks upright in a bowl of rice, as this is associated with funeral rituals.'
                    ]
                };
            case 'india':
                return {
                    dos: [
                        'Use your right hand for eating and handling money.',
                        'Dress conservatively, especially when visiting religious sites.',
                        'Be prepared to bargain when shopping in markets.',
                        'Respect elders and greet them with \'Namaste\'.',
                        'Be patient, as things often run on \'Indian Standard Time\'.'
                    ],
                    donts: [
                        'Do not show public displays of affection.',
                        'Avoid wearing shoes inside a home or temple.',
                        'Do not be offended by personal questions, as it is a way of showing interest.',
                        'Avoid pointing your feet at people or religious idols.',
                        'Do not refuse a meal or a drink when offered by a host, as it can be seen as disrespectful.'
                    ]
                };
            default:
                return {
                    dos: ['Be respectful of local customs.', 'Try to learn a few basic phrases in the local language.', 'Be open-minded and willing to try new things.'],
                    donts: ['Do not assume that everyone speaks English.', 'Avoid making generalizations about the country or its people.', 'Do not be afraid to ask for help if you need it.']
                };
        }
    }

    function displayAdvice(advice) {
        let html = '<h2>Do\'s</h2><ul>';
        advice.dos.forEach(d => {
            html += `<li>${d}</li>`;
        });
        html += '</ul>';

        html += '<h2>Don\'ts</h2><ul>';
        advice.donts.forEach(d => {
            html += `<li>${d}</li>`;
        });
        html += '</ul>';

        responseContainer.innerHTML = html;
    }
});