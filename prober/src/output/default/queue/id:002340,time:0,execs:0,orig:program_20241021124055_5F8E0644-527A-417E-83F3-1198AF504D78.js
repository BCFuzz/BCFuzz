function f1() {
    function f2(a3, a4) {
        return f2;
    }
    return f2;
}
Object.defineProperty(RegExp, Symbol.match, { enumerable: true, get: f1 });
RegExp(RegExp);
gc();
