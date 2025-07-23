const v1 = new Int32Array();
const v3 = new Float64Array();
const v4 = [v3,v3,v3,v3];
function f5(a6) {
    return v1;
}
function f7(a8, a9, a10, a11) {
    return a10;
}
if (v3 >= v1) {
    const o13 = {
        "apply": f7,
        "construct": f5,
        "get": f7,
    };
    new Proxy(v4, o13);
}
for (let v16 = 0; v16 < 250; v16++) {
}
gc();
