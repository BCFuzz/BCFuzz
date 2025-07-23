function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = a9.constructor;
    new t2(a8);
}
new F5("clz32", 2147483648, "isConcatSpreadable");
new F5("clz32", -33971, "clz32");
new F5("isConcatSpreadable", 2147483648, "c");
for (let v16 = 0; v16 < 250; v16++) {
}
gc();
