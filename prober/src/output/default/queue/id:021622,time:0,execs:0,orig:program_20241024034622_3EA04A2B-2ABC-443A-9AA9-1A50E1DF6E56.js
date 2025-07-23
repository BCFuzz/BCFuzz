for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    const v12 = new Int32Array();
    const v14 = new Int32Array(209);
    const v16 = [f10];
    Reflect.apply(v12.toSorted, v14, v16);
    return Reflect;
}
try { f10(); } catch (e) {}
gc();
