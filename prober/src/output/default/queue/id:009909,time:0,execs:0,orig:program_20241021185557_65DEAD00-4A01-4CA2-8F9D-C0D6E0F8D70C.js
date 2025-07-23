gc();
for (let v3 = 0; v3 < 100; v3++) {
    class C4 {
    }
    const v5 = /(Tp+)/mdvi;
    const v6 = [v5,v5,v5,v5];
    function f7(a8, a9) {
        return "p";
    }
    v6.constructor = f7;
    const v11 = v6.concat(v5);
    v11[Symbol.isConcatSpreadable] = "p";
    v11.concat(Symbol, v6, v11, C4);
}
gc();
