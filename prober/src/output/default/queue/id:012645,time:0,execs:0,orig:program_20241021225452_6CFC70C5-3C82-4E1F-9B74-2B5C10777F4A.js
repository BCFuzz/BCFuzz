for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = new Uint8Array();
        v8[a4] *= 155;
    }
    new F1(v0, F1);
}
gc();
