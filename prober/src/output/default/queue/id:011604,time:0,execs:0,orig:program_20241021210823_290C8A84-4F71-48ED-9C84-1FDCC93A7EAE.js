const o8 = {
    o(a1, a2) {
        const v5 = new SharedArrayBuffer();
        new DataView(v5, 536870887);
        return this;
    },
};
try { o8.o(); } catch (e) {}
gc();
