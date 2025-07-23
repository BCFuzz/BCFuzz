function f0(a1, a2) {
    return a2;
}
Object.defineProperty(f0, Symbol.species, { value: f0 });
const v6 = createGlobalObject();
const t5 = v6.Float16Array;
const v8 = new t5();
v8.constructor = f0;
try { v8.subarray(v6, Symbol); } catch (e) {}
gc();
