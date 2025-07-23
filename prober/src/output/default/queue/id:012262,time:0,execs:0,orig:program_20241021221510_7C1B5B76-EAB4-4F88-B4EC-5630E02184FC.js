const v1 = new Int8Array();
new Float32Array(v1, Float32Array, Int8Array);
function f4() {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F5();
    return arguments;
}
f4();
for (let v10 = 0; v10 < 250; v10++) {
}
gc();
