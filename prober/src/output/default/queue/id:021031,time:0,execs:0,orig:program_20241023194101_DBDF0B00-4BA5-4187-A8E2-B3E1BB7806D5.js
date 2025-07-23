function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int16Array(a4, a3, a4);
    const v7 = v6.copyWithin(a3, a4, a4);
    const v10 = new ArrayBuffer(15);
    const v12 = new DataView(v10);
    v12.getInt32(v7, a3);
}
new F1(1.7976931348623157e+308);
gc();
