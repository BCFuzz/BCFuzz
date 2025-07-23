function f1() {
    return Int8Array;
}
const o3 = {
};
o3.ownKeys = f1;
const v5 = new Proxy(Proxy, o3);
const v6 = new Uint16Array(v5, v5);
const v8 = this.constructor;
try { v8.defineProperties(v6, v5); } catch (e) {}
gc();
