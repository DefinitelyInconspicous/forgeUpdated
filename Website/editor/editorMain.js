import { exportSTL } from './openscadMain.js';
import { returnSTL } from './openscadMain.js';
import { renderSTL } from './stlViewer.js';



async function renderFunction() {
    console.log("Render function is called");
    const code = window.getEditorContent();
    console.log(code);
    const stl = await returnSTL(code); // Ensure this is awaited
    //console.log('STL ArrayBuffer:', stlArrayBuffer);
    renderSTL(stl)

}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('renderBtn').addEventListener('click', renderFunction);
});



function exportFunction() {
    console.log("export function is called");
    const code = window.getEditorContent();
    console.log(code);
    exportSTL(code);
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('exportBtn').addEventListener('click', exportFunction);
});