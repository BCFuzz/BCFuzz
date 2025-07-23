const o2 = {
    get c() {
        delete this[this];
        return this;
    },
};
for (let i = 0; i < 10; i++) {
    o2.c;
}
gc();
