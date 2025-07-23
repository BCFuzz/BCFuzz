const v2 = new Int32Array(536870912);
function f3(a4) {
    return v2;
}
function f5() {
    return gc();
}
const v8 = [17428,39892,10000,65536,7,-268435456,-62031];
const o9 = {
};
o9.isExtensible = f5;
const v11 = new Proxy(v8, o9);
this.constructor.isFrozen(v11);
gc();
