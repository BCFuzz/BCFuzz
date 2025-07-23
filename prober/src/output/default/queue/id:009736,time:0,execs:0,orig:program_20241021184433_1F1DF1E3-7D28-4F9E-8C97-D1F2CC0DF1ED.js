const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v3 = new Uint16Array();
function f4() {
    return v1;
}
f4[Symbol.species] = f4;
Object.defineProperty(v3, "constructor", { configurable: true, value: f4 });
v3.slice();
gc();
