const v2 = new Int32Array(255);
for (const v3 in v2) {
    for (let v4 = 0; v4 < 5; v4++) {
        class C5 {
        }
        const v7 = new SharedArrayBuffer(v4);
        const v9 = new DataView(v7);
        function f10(a11) {
            return v7;
        }
        try { v9.getUint16(v9, C5); } catch (e) {}
    }
}
gc();
