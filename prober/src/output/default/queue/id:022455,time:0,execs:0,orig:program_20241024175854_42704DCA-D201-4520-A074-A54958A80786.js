const v2 = new Int8Array(7);
function f3() {
    return v2;
}
const o5 = {
};
o5.ownKeys = f3;
const v7 = new Proxy(Proxy, o5);
const v8 = new Uint16Array(7, 7, 7);
const v10 = this.constructor;
try { v10.defineProperties(v8, v7); } catch (e) {}
gc();
