const v2 = new Uint8Array(Uint8Array);
const v4 = new Uint16Array(ReferenceError);
function f5() {
    return v2;
}
f5[Symbol.species] = f5;
Object.defineProperty(v4, "constructor", { value: f5 });
v4.slice();
gc();
