new Int16Array();
const v4 = new Uint32Array(1000);
new Uint8ClampedArray();
class C7 {
}
new C7();
for (const v9 of v4) {
    let v10;
    try { v10 = v9.isInteger(); } catch (e) {}
    try { v10.grow(); } catch (e) {}
}
gc();
