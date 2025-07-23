const o3 = {
    toString(a1) {
        a1 in a1;
        return a1;
    },
};
try { o3.toString(o3, o3, o3, o3); } catch (e) {}
try { o3.toLocaleString(); } catch (e) {}
gc();
