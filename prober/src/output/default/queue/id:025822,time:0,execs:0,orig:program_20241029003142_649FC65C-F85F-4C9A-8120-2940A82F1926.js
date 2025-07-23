function f1() {
    return 2.0;
}
const v2 = [17428,39892,10000,65536,7,-268435456,-62031];
const o3 = {
};
o3.preventExtensions = f1;
const v5 = new Proxy(v2, o3);
const v7 = this.constructor;
try { v7.freeze(v5); } catch (e) {}
gc();
