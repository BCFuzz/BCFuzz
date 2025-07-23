for (let v1 = 0; v1 < 100; v1++) {
    createGlobalObject();
    new Uint16Array();
}
const v8 = [268435456n,268435440n];
[268435456n];
[v8,v8];
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.a = a15;
    this.c = v8;
}
const v16 = new F11(F11, F11, 268435440n);
new F11(v8, 268435456n, v16);
new F11(v8, 268435440n, 268435456n);
const o23 = {
    "get": RegExp,
};
new Proxy(RegExp, o23);
new Set();
gc();
