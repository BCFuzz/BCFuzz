const o9 = {
    o(a2, a3) {
        const v6 = new SharedArrayBuffer(86);
        new DataView(v6, 86, "65536");
        return "65536";
    },
};
try { o9.o("65536", o9, "65536", o9, o9); } catch (e) {}
gc();
