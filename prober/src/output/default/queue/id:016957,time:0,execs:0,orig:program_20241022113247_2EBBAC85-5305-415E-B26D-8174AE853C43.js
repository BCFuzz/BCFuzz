function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int16Array();
    const v7 = v6.copyWithin(a3, a4, a4);
    const v10 = new ArrayBuffer(15);
    const v12 = new DataView(v10);
    v12.setFloat32(v7, a3);
}
const v14 = new F1();
const t9 = v14.constructor;
new t9(-621373.165393445);
gc();
