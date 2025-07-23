for (let v1 = 0; v1 < 100; v1++) {
    class C2 {
    }
    const v3 = new C2();
    const v4 = v3.constructor;
    const v5 = /(Tp+)/mdvi;
    const v6 = [v5];
    function f7(a8, a9) {
        return v1;
    }
    v6.constructor = f7;
    v6[Symbol.isConcatSpreadable] = v4;
    const v12 = v6.concat(v5);
    v12[Symbol.isConcatSpreadable] = "p";
    v12.concat(Symbol, v6, v12, C2, v5);
}
gc();
