function f0() {
    for (let v1 = 0; v1 < 100; v1++) {
        function f3() {
        }
        function f4(a5) {
        }
        Object.defineProperty(Symbol, "a", { configurable: true, enumerable: true, get: f3, set: f4 });
        Symbol.isConcatSpreadable;
    }
}
f0();
f0();
class C9 extends f0 {
}
new C9();
gc();
