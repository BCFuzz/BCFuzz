function f0(a1) {
    gc();
    return f0;
}
class C4 {
}
const v5 = new C4();
Object.defineProperty(v5, Symbol.iterator, { value: f0 });
try { AggregateError(v5, AggregateError); } catch (e) {}
gc();
