class C0 {
}
class C1 extends C0 {
}
try { C1.apply(); } catch (e) {}
for (let v3 = 0; v3 < 250; v3++) {
    v3++;
    class C5 {
    }
    const v6 = new C5();
    const v7 = v6.constructor;
    const v8 = /(Tp+)/mdvi;
    const v9 = [v8];
    v9[Symbol.isConcatSpreadable] = v7;
    v9.concat(v8).concat(v9);
    v3--;
}
gc();
