let v1;
try { v1 = undefined.forEach(); } catch (e) {}
const o8 = {
    o(a3, a4, a5) {
        Object.defineProperty(this, v1, { configurable: true, value: this });
        const v6 = a5.o;
        try { v6(v6, undefined, this); } catch (e) {}
        return a3;
    },
};
o8.o(undefined, undefined, o8);
gc();
