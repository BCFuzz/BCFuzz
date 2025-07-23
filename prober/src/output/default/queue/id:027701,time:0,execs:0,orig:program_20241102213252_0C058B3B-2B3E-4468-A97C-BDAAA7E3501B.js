function f0() {
    return gc();
}
const v3 = [17428,39892,10000,65536,7,-268435456,-62031];
const o4 = {
};
o4.isExtensible = f0;
const v6 = new Proxy(v3, o4);
this.constructor.isFrozen(v6);
gc();
