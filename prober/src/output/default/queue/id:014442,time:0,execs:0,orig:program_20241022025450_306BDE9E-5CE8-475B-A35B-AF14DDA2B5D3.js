const o4 = {
    set a(a2) {
        try { a2(); } catch (e) {}
    },
    ["constructor"]: "constructor",
};
o4.a = o4;
gc();
