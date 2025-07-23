const v1 = new Int16Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
for (let v6 = 0; v6 < 5; v6++) {
    const o14 = {
        toString(a8, a9) {
            for (let v10 = 0; v10 < 50; v10++) {
                try {
                    super.o();
                } catch(e12) {
                }
            }
            a8 instanceof Uint8ClampedArray;
            return a8;
        },
        __proto__: v4,
    };
    o14.toString(o14);
}
gc();
