const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
function f2(a3, a4) {
    function f5() {
        return f5;
    }
    for (let v6 = 0; v6 < 100; v6++) {
        f5();
    }
}
const v9 = Symbol.toPrimitive;
v1[v9] = f2;
v1[1] = v1;
const v10 = [v9,v9,v9,v9];
v10.valueOf = Symbol;
Object.defineProperty(Set, "size", { writable: true, configurable: true, value: v10 });
const v12 = new Set(v1);
try { v12.difference(Set); } catch (e) {}
class C14 extends Set {
}
gc();
