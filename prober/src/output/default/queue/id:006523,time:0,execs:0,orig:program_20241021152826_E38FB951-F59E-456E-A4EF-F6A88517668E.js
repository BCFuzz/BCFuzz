for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = new SharedArrayBuffer();
        new Uint8ClampedArray(v5);
    }
    new F1();
}
gc();
