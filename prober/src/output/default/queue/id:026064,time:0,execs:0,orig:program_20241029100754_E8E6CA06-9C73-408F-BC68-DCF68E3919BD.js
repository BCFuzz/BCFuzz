const v2 = new Uint16Array(64);
const v5 = new Int16Array(4);
for (let [i14, i15] = (() => {
        function f8(a9) {
            return v2;
        }
        f8[Symbol.species] = f8;
        const v12 = v5.subarray();
        v12.constructor = f8;
        v12.slice();
        return [0, 10];
    })();
    i14 < i15;
    i15--) {
}
gc();
