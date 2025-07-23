const v2 = new Int16Array(4);
for (let [i14, i15] = (() => {
        const v7 = new Int32Array(129);
        function f8(a9) {
            return v7;
        }
        f8[Symbol.species] = f8;
        const v12 = v2.subarray();
        v12.constructor = f8;
        v12.slice();
        return [0, 10];
    })();
    i14 < i15;
    i15--) {
}
gc();
