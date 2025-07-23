class C0 {
    constructor(a2) {
        return arguments;
    }
}
function f4() {
    return f4;
}
const v5 = new C0(f4);
Object.defineProperty(v5, Symbol.iterator, { configurable: true, enumerable: true, value: f4 });
gc();
