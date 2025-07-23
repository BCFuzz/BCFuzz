function f0() {
}
for (let v2 = 0; v2 < 100; v2++) {
    class C3 {
    }
    const v4 = new C3();
    const v5 = v4.constructor;
    const v6 = /(Tp+)/mdvi;
    const v7 = [v6];
    function f8(a9, a10) {
    }
    v7.constructor = f8;
    v7[Symbol.isConcatSpreadable] = v5;
    const v13 = v7.concat(v6);
    v13[Symbol.isConcatSpreadable] = "p";
    v13.concat(Symbol, v7, v13, C3, f0);
}
gc();
