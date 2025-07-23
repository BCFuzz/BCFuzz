function f0() {
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
    const o13 = {
        "maxByteLength": 1593,
    };
    const v15 = new ArrayBuffer(1593, o13);
    const v17 = new Float64Array(v15);
    v17.toSorted();
    return 1593;
}
class C20 extends Date {
}
const v21 = new C20();
v21.toString = f0;
v21.toString();
gc();
