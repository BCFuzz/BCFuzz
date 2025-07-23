for (let v1 = 0; v1 < 100; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = new Uint8Array(155);
        v9[111] *= 155;
    }
    new F2(v1, F2, F2);
}
gc();
