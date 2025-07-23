let v0 = 6881n;
const o3 = {
    p(a2) {
        v0 <<= v0;
        return a2;
    },
};
o3.p(v0, v0);
try { o3.p(); } catch (e) {}
gc();
