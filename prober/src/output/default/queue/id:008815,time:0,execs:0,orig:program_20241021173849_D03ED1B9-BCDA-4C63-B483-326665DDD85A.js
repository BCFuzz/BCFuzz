const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
function f2() {
    return v1;
}
const v4 = new Proxy(f2, v1);
v4.call(v1, f2, v4);
gc();
