const o6 = {
    get b() {
        return this;
    },
    get d() {
        const v2 = delete this.b;
        this.constructor.seal(this);
        return v2;
    },
};
const o7 = {
    ...o6,
};
gc();
