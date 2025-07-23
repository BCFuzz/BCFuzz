const o6 = {
    toString(a1, a2) {
        for (let i = 0; i < 5; i++) {
        }
        try { this.toLocaleString(this, a2, a2, a2); } catch (e) {}
        const t5 = this.toString;
        t5();
        return a2;
    },
};
o6.toString(o6);
gc();
