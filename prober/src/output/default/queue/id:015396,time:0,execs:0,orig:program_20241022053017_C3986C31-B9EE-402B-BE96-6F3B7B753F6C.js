const o1 = {
    get h() {
        this.b = this;
    },
};
o1.e = o1;
try { JSON.stringify(o1); } catch (e) {}
gc();
