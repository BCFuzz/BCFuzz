const o12 = {
    toString(a1, a2) {
        const v3 = this.toString();
        function F4(a6, a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F4(v3, v3, this, F4);
        a1 != a2;
        return v3;
    },
};
try { o12.toString(); } catch (e) {}
gc();
