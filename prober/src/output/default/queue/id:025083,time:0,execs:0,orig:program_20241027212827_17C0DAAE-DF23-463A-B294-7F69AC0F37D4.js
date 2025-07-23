const v2 = new Int16Array(128);
const v5 = new Uint8ClampedArray(ReferenceError);
function f6() {
    return v2;
}
f6[Symbol.species] = f6;
Object.defineProperty(v5, "constructor", { value: f6 });
v5.slice();
gc();
