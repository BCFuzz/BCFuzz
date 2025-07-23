const o8 = {
    get g() {
        const v3 = new ArrayBuffer(10);
        const v5 = new DataView(v3);
        return v5["getInt8"]();
    },
};
const o9 = {
    ...o8,
};
gc();
