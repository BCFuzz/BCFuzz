const o3 = {
    n(a1) {
        let v2;
        try { v2 = a1(); } catch (e) {}
        v2.g = v2;
        return v2;
    },
};
try { o3.n(); } catch (e) {}
gc();
