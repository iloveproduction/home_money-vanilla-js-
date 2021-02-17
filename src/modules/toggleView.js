export function toggleView(...elems){
    elems.map((elem)=>{
            elem.classList.toggle('hidden');
    })
}