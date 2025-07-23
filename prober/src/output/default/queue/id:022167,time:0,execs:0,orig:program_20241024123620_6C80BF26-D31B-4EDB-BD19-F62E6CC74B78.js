function f0(a1, a2, a3) {
    try { a1(); } catch (e) {}
    for (let v5 = 0; v5 < 10; v5++) {
        const v8 = new Int16Array(1073741824);
        v8.byteLength;
        for (let v10 = 0; v10 < 5; v10++) {
        }
    }
}
f0(f0);
gc();
