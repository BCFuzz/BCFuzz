for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
    }
    const v2 = new C1();
    const v3 = v2.growable;
    const v4 = /(Tp+)/mdvi;
    const v5 = [v4,v4,v4,v4,v4];
    v5[Symbol.isConcatSpreadable] = v3;
    v5.concat(v4).concat(v5);
}
for (let v10 = 0; v10 < 250; v10++) {
}
gc();
