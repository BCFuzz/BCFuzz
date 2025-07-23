const o4 = {
    get d() {
        const v2 = this.isPrototypeOf;
        let v3;
        try { v3 = v2(Uint8ClampedArray); } catch (e) {}
        return v3;
    },
};
const o5 = {
    ...o4,
};
gc();
