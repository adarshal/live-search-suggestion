function sendData(e) {
    fetch('getAnimal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            payload: e.value
        })
    }).then(res => res.json()).then(data => {
        // let payload = data.payload;
        //console.log('jjej',data);
        searchResults.innerHTML='';
        if(data.send.results.length<1){
        searchResults.innerHTML='<p> no animal found</p>';
            return;
        }
        data.send.results.forEach((element,index) => {
            if(index>0) searchResults.innerHTML+='<hr>';
            searchResults.innerHTML+=`<p> ${element.name}</p> <button data-show="${index}" id="${index}" onclick="showSummary(${index})" data-summary="${element.summary}">Show info >></button>       `
        });
        return;
    });

}



function showSummary(ind){
    summary.innerHTML='';
    let input = document.getElementById(ind);
    summary.innerHTML=`<p> ${input.getAttribute('data-summary')} </p>`
}