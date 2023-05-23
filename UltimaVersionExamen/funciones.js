 //Figura
 function Geometria(v){
    var geom = new THREE.Geometry();
    var largoVertice = v.length;
    for (var i = 0; i < largoVertice; i++){
    var [x,y,z]=[v[i][0],v[i][1],v[i][2]]
        var vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
return geom;
}

//Creacion del poligono (2D)
function poligono(n,l,y){
    const v=[]; //Vector
    const a = (2*Math.PI)/n; //Angulo 

    for(let i=0; i<=n; i++){
        let x = l*Math.cos(i*a);
        let z = l*Math.sin(i*a);
        v[i] = [x,y,z];
    }
    return v;
}

// Función para generar un color aleatorio en formato RGB
function generarColorAleatorio() {
const r = Math.floor(Math.random() * 256); //Valor aleatorio de rojo entre 0 a 255
const g = Math.floor(Math.random() * 256); //Valor aleatorio de verde entre 0 a 255
const b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

//Creacion de una piramide truncada 
function TroncoPiramide(lados, baseSup, baseInf, alto){

var material = new THREE.MeshBasicMaterial({color: generarColorAleatorio()});
const v = []; //Arreglo de vertices
const v1 = poligono(lados,baseInf,0); //Se forma la logica para la base inferior
const v2 = poligono(lados,baseSup,alto); //Se forma la logica para la base superior

for(let i=0; i<lados; i++){ //Geometria de la piramide truncada, en base a una cara se generan las otras
v.push(v1[i+1]);
v.push(v1[i]);
v.push(v2[i]);
v.push(v2[i+1]);
v.push(v1[i+1]);
}

const geom = Geometria(v);
const fig = new THREE.Line(geom,material);

return fig;
}