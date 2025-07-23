function f0(a1) {
    return f0;
}
const v4 = new Int32Array();
v4.constructor = f0;
v4.slice(v4.map(Int16Array), Int32Array);
gc();
