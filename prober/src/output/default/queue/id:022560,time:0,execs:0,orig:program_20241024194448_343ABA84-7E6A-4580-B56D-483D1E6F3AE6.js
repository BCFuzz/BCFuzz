for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let v10 = 0; v10 < 5; v10++) {
    class C12 extends Date {
    }
    const v13 = new C12();
    const v14 = v13.toLocaleTimeString();
    const v16 = new Uint8Array(v10);
    try { v16.setFromBase64(v14); } catch (e) {}
}
gc();
