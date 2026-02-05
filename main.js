document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country-select');
    const submitBtn = document.getElementById('submit-btn');
    const responseContainer = document.getElementById('response-container');

    submitBtn.addEventListener('click', () => {
        const country = countrySelect.value;
        if (country) {
            const advice = getCountryAdvice(country);
            displayAdvice(advice);
        } else {
            responseContainer.innerHTML = '<p>Please select a country.</p>';
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
            case 'italy':
                return {
                    dos: [
                        'Greet people with "Buongiorno" in the morning and "Buonasera" in the evening.',
                        'Dress smartly, especially when visiting churches or upscale restaurants.',
                        'Expect to pay a cover charge ("coperto") in restaurants.',
                        'Enjoy a leisurely meal; rushing is not part of the dining culture.',
                        'Take part in the "passeggiata" (evening stroll).'
                    ],
                    donts: [
                        'Do not order a cappuccino after 11 a.m.',
                        'Avoid asking for extra cheese on your pizza or pasta unless offered.',
                        'Do not expect a large breakfast; a coffee and pastry is typical.',
                        'Don\'t put cheese on seafood pasta.',
                        'Do not be too loud in churches and religious sites.'
                    ]
                };
            case 'thailand':
                return {
                    dos: [
                        'Show respect for the King and the royal family.',
                        'Smile often; it is a key part of Thai culture.',
                        'Remove your shoes before entering a temple or someone\'s home.',
                        'The "wai" is the traditional Thai greeting.',
                        'Bargain with a smile in markets.'
                    ],
                    donts: [
                        'Do not touch someone\'s head, as it is considered the most sacred part of the body.',
                        'Avoid pointing your feet at people or religious images.',
                        'Do not show disrespect for images of the Buddha.',
                        'Do not raise your voice or show anger in public.',
                        'Women should not touch a monk.'
                    ]
                };
            case 'egypt':
                return {
                    dos: [
                        'Be prepared for warm hospitality and generosity.',
                        'Use your right hand for eating and shaking hands.',
                        'Dress conservatively, especially women.',
                        'Haggling is expected in markets.',
                        'Accept offers of tea or coffee as a sign of hospitality.'
                    ],
                    donts: [
                        'Do not drink alcohol in public outside of licensed venues.',
                        'Avoid public displays of affection.',
                        'Do not take photographs of people without their permission.',
                        'Do not discuss sensitive political or religious topics.',
                        'Women should avoid direct eye contact with men they don\'t know.'
                    ]
                };
            default:
                return {
                    dos: [],
                    donts: []
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