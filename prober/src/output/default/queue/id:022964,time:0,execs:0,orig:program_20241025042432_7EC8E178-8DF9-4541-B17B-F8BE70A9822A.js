let v1 = 11;
const v3 = new Uint8ClampedArray(v1++);
const o4 = {
};
const v6 = new Proxy(v3, o4);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let v17 = 0; v17 < 5; v17++) {
    const o18 = {
    };
    o18.constructor.keys(v6);
}
gc();
