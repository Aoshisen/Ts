// function showOrHide(el: HTMLElement, attr: 'display'|'opacity', value: 'block'|'none'|number) {
//     // 
// }




function showOrHide(ele: HTMLElement, attr: 'display', value: 'block'|'none');
function showOrHide(ele: HTMLElement, attr: 'opacity', value: number);
function showOrHide(el: HTMLElement, attr: any, value: any) {
    // 
}


let div= document.querySelector('div');

if (div ) {

    showOrHide(div, 'display', 'block');
    showOrHide(div, 'display', 'none');
    showOrHide(div, 'opacity', 1);

    // showOrHide(div, 'opacity', 'block');

}

export default {};