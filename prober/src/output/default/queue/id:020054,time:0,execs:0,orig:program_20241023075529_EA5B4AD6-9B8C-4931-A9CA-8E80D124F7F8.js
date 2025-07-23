class C1 {
}
const v2 = new C1();
function f3(a4, a5, a6) {
    `-4294967296${v2}a${a6}268435439${"boolean" || a4}symbol`;
    for (let v9 = 0; v9 < 5; v9++) {
        f3();
    }
    return a6;
}
Uint8ClampedArray.valueOf = f3;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
