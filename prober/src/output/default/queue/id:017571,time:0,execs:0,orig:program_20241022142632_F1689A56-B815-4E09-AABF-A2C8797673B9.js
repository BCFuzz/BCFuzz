function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = [17428,39892,10000,65536,7,-268435456,-62031];
const o7 = {
};
o7.ownKeys = F0;
const v9 = new Proxy(v6, o7);
const v10 = new Uint16Array(o7, Uint16Array, Proxy);
const v12 = this.constructor;
try { v12.defineProperties(v10, v9); } catch (e) {}
gc();
