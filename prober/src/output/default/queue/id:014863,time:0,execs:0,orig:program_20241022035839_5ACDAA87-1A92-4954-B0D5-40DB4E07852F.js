function f2() {
    return 4294967296;
}
Object.defineProperty(RegExp, Symbol.match, { enumerable: true, get: f2 });
RegExp(RegExp);
gc();
