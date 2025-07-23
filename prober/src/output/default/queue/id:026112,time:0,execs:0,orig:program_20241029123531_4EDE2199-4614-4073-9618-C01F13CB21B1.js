for (let v1 = 0; v1 < 100; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = new Uint8Array(155);
        v9[-2147483648] *= 155;
    }
    new F2(v1, -2147483648, -2147483648);
}
gc();
