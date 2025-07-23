let v0 = Symbol;
function f1() {
    Math.log(v0);
    return --v0;
}
const v7 = new Uint32Array(4046);
v7.reduce(f1);
gc();
