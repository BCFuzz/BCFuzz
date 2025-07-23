function f0() {
}
const o1 = {
};
o1.ownKeys = f0;
const v3 = new Proxy(Proxy, o1);
const v5 = this.constructor;
try { v5.assign(v5, v3); } catch (e) {}
gc();
