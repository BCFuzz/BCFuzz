const o10 = {
    o(a1, a2, a3, a4) {
        const v7 = new ArrayBuffer(3);
        new Int16Array(v7);
        return this;
    },
};
try { o10.o(); } catch (e) {}
gc();
