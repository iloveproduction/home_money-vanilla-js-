export function clearList (...place){
    place.map((elem)=>{
        elem.innerHTML ='';
    })
}
