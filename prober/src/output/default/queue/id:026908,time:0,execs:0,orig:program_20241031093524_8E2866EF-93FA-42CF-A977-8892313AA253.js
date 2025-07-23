const v3 = new Uint16Array(ReferenceError);
function f4() {
    return v3;
}
f4[Symbol.species] = Int32Array;
Object.defineProperty(v3, "constructor", { value: f4 });
v3.slice();
gc();
