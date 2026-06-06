fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
        // Process the fetched data
        const summaryContainer = document.querySelector('.summary');

        summaryContainer.querySelectorAll('.category').forEach(element => element.remove());

        data.forEach(item => {

            const categoryElement = document.createElement('div');

            categoryElement.classList.add('category', item.category.toLowerCase());

            categoryElement.innerHTML = `
                <span class="icon">
                    <img src="${item.icon}" alt="${item.category} icon" class="icon">
                </span>
                <span class="testType">
                    ${item.category}
                </span>
                <span class="score">
                    <span class="mark">${item.score}</span>
                    <span class="max"> / 100</span>    
                </span>
            `;

            summaryContainer.insertBefore(categoryElement, summaryContainer.querySelector('.dividerBtn'));
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });