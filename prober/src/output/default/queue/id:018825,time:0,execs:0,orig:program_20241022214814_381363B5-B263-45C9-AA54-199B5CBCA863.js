const o5 = {
    toString(a1) {
        const o2 = {
        };
        const v4 = new Proxy(this, o2);
        o2.__proto__ = v4;
        o2.__proto__ = o2;
        return a1;
    },
};
try { o5.toString(); } catch (e) {}
gc();
