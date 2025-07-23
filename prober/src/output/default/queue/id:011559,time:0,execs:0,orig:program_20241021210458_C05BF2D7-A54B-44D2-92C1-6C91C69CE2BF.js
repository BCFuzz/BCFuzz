const o4 = {
    get c() {
        const v2 = this.constructor;
        new v2(9007199254740990n);
        return v2;
    },
};
for (let i = 0; i < 10; i++) {
    o4.c;
}
gc();
