let btnPagar = document.getElementById("pagar");
btnPagar.addEventListener('click', async (evento) => {
    evento.preventDefault();
    const res  = await fetch('http://localhost:3000/create-checkout-session', {
        method: "POST"
    });
    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});