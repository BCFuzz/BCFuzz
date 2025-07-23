const o3 = {
    get d() {
        delete this.b;
        return this;
    },
    get b() {
        return this;
    },
};
const o4 = {
    ...o3,
};
gc();
