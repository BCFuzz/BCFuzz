const o12 = {
    toString(a1, a2, a3) {
        const v4 = [a3];
        const v7 = URIError(a2).__proto__;
        try { v7.shift(); } catch (e) {}
        const o9 = {
        };
        const v11 = new Proxy(v7, o9);
        v11.__proto__ = v4;
        return a1;
    },
};
o12.toString(o12, o12, o12.toString(o12));
for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
}
gc();
