for (let v0 = 0; v0 < 100; v0++) {
    function f2() {
        return v0;
    }
    function f3(a4) {
        return v0;
    }
    Object.defineProperty(Symbol, "a", { configurable: true, enumerable: true, get: f2, set: f3 });
}
const v5 = `
    Symbol.iterator;
`;
eval(v5);
gc();
