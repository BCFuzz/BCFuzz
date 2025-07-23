const v1 = new Uint16Array();
function f2() {
    return v1;
}
const v4 = new Proxy(f2, v1);
v4.length = v4;
gc();
