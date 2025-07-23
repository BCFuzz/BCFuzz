class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5) {
    const v7 = 0 || a3;
    `-4294967296${v1}a${a5}268435439${v7}symbol${a3}q92`;
    for (let v9 = 0; v9 < 5; v9++) {
        f2();
    }
    return v7;
}
Uint8ClampedArray.valueOf = f2;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
