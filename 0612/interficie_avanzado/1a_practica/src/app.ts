document.addEventListener('DOMContentLoaded', async () => {
    const vyseWebp = document.getElementById('vyseWebp') as HTMLImageElement;
    const vyseWebpDesc = document.getElementById('vyseWebpDesc') as HTMLSpanElement;
    const vyseWebpUrl = 'http://localhost:5173/src/images/Vyse_icon.webp'
    // vyseWebp.onload = () =>{
    const vyseWebpAttr = performance.getEntriesByName(vyseWebpUrl);

    for (let value of vyseWebpAttr) {
        let vyseWebpPicType = '';
        if (vyseWebp.width > vyseWebp.height) {
            vyseWebpPicType = 'Landscape';
        } else {
            vyseWebpPicType = 'Portrait'
        }
        if (value instanceof PerformanceResourceTiming) {
            const responseTime = value.responseEnd - value.responseStart
            const response = await fetch(vyseWebpUrl, { method: 'HEAD' })
            const contentType = response.headers.get('Content-Type')
            const contentLength = response.headers.get('Content-Length')

            console.log(value.transferSize)
            vyseWebpDesc.innerHTML = `
                <p>Altura: ${vyseWebp.height}</p> <br> 
                <p>Anchura: ${vyseWebp.width}</p> <br> 
                <p>Tipo: ${vyseWebpPicType}</p> <br> 
                <p>Medida del fichero: ${value.transferSize}</p> <br> 
                <p>Tiempo de carga: ${responseTime}</p> <br>
                <p>Tipo de imagen: ${contentType}</p> <br>
                <p>Medida en Bytes: ${contentLength}</p>`
        }
    }

    // }

})