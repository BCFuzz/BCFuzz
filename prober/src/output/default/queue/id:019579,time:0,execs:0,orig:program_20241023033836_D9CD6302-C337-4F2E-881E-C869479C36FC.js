for (let v0 = 0; v0 < 25; v0++) {
    function f1() {
        const v4 = new SharedArrayBuffer();
        const v6 = new DataView(v4);
        try { v6.getFloat64(undefined, SharedArrayBuffer); } catch (e) {}
        for (let v8 = 0; v8 < 5; v8++) {
        }
    }
    for (let i = 0; i < 5; i++) {
        f1();
    }
}
gc();
