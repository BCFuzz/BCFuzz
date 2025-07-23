for (let v1 = 0; v1 < 100; v1++) {
    class C2 {
    }
    const v3 = [];
    const v5 = v3.concat();
    const v6 = Symbol.isConcatSpreadable;
    Symbol.for();
    v5[v6] = "p";
    v5.concat(Symbol, v3, v5, C2);
}
gc();
