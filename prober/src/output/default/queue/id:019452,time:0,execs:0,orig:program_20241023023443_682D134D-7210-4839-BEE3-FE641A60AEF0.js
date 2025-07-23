function f0() {
    return f0;
}
function f1(a2, a3) {
    Reflect.construct(a2, a2);
    return a3;
}
f0[Symbol.species] = f1;
const v8 = [-4];
Object.defineProperty(v8, "constructor", { writable: true, configurable: true, value: f0 });
try { v8.splice(v8); } catch (e) {}
gc();
