const o10 = {
    o(a1, a2, a3, a4) {
        const v6 = new ArrayBuffer();
        const v7 = v6.transferToFixedLength();
        new Int16Array(v6);
        return v7;
    },
};
try { o10.o(); } catch (e) {}
gc();
