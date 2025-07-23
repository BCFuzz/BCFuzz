for (let v0 = 0; v0 < 250; v0++) {
    const v1 = [v0,v0,v0,v0];
    function f2(a3) {
        return f2;
    }
    Object.defineProperty(v1, Symbol.isConcatSpreadable, { configurable: true, set: f2 });
    v1.concat();
}
gc();
