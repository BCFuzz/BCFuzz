const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
const v2 = new Int16Array();
const v4 = [Int16Array,Int16Array,Int16Array,Int16Array];
const v6 = Reflect.apply(v2.copyWithin, v1, v4);
function f8() {
    return Int16Array;
}
class C10 {
    constructor(a12, a13) {
        try { new a12(v6, Symbol, f8, ..."-1"); } catch (e) {}
        const v16 = new Int16Array(4096);
        for (const v17 of v16) {
        }
    }
}
new C10();
gc();
