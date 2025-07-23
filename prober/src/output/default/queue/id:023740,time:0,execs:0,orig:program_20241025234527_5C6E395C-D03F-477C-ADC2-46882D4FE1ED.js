Object.defineProperty(Int8Array, 0, { value: BigUint64Array });
function f2() {
    return Int8Array;
}
const o4 = {
};
o4.ownKeys = f2;
const v6 = new Proxy(Proxy, o4);
const v7 = new Uint16Array(v6, v6, Int8Array);
const v9 = this.constructor;
try { v9.defineProperties(v7, v6); } catch (e) {}
gc();
