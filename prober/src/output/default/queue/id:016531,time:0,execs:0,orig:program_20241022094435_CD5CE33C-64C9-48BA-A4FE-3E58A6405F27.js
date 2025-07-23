const v1 = new Int16Array();
v1.includes(Int16Array);
for (let v3 = 0; v3 < 250; v3++) {
    const v5 = Symbol.isConcatSpreadable;
    function f6() {
        return arguments;
    }
    try { f6.apply(v3, Symbol); } catch (e) {}
    f6();
    const t8 = [f6,f6,f6,f6,f6];
    t8[Symbol.isConcatSpreadable] = v5;
}
gc();
