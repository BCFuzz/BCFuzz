function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o3 = {
};
o3.getOwnPropertyDescriptor = v2;
const v5 = new Proxy(Proxy, o3);
const v7 = this.constructor;
try { v7.assign(v7, v5); } catch (e) {}
gc();
