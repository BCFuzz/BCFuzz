function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [17428,39892,10000,65536,7,-268435456,-62031];
const o6 = {
};
o6.ownKeys = F0;
const v8 = new Proxy(v5, o6);
const v10 = this.constructor;
try { v10.freeze(v8); } catch (e) {}
gc();
