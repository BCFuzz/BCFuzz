const v1 = new Int16Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
for (let v6 = 0; v6 < 5; v6++) {
    const o11 = {
        toString(a8, a9) {
            a8 instanceof Uint8ClampedArray;
            return Proxy;
        },
        __proto__: v4,
    };
    o11.toString(o11);
}
gc();
