const o5 = {
    m(a1, a2, a3) {
        a2.arguments;
        return a2;
    },
};
const v6 = o5.m;
try { v6(o5, v6); } catch (e) {}
gc();
