function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o15 = {
        n(a7, a8, a9) {
            const v10 = this;
            const v12 = v10.Intl.DateTimeFormat(this, this, this, this);
            function f13() {
                return a2;
            }
            v12.toString = f13;
            try { v12.formatToParts(v12); } catch (e) {}
            return this;
        },
    };
    const v16 = o15.n;
    v16(F0, this, v16, a3);
}
new F0(F0);
gc();
