fetch('https://whatyearisit-backend-drab-seven.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent = data.year
})
    