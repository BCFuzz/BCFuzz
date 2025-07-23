const o8 = {
    o(a2, a3) {
        const v5 = new ArrayBuffer();
        new BigUint64Array(v5, 9007199254740990);
        return v5;
    },
};
try { o8.o(9007199254740990, o8, o8, o8, 9007199254740990); } catch (e) {}
gc();
