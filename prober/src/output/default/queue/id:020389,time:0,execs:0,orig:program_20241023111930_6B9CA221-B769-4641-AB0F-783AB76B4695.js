function f0(a1) {
}
const v3 = [17428,39892,10000,65536,7,-268435456,-62031];
const o4 = {
};
o4.ownKeys = f0;
const v6 = new Proxy(v3, o4);
const v7 = new Uint16Array(v6, v6, o4);
const v9 = this.constructor;
try { v9.defineProperties(v7, v6); } catch (e) {}
gc();
