const o4 = {
    get d() {
        delete this.b;
        return "function";
    },
    get b() {
        return this;
    },
};
const o5 = {
    "h": "function",
    ...o4,
};
gc();
