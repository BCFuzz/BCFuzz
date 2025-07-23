for (let v1 = 0; v1 < 100; v1++) {
    class C2 {
    }
    const v4 = new C2();
    const v5 = /(Tp+)/mdvi;
    function f7() {
        return f7;
    }
    function f8(a9) {
        return v4;
    }
    Object.defineProperty(Symbol, "a", { configurable: true, enumerable: true, get: f7, set: f8 });
    v5[noInline] = v4;
    const v10 = [v5];
    function f11(a12, a13) {
        return a12;
    }
    v10.constructor = f11;
    const v14 = v10.concat(v5);
    v14[Symbol.isConcatSpreadable] = "p";
    v14.concat(Symbol, v10, v14, C2);
}
gc();
