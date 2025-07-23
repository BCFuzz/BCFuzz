for (let [i13, i14] = (() => {
        const v4 = new Int32Array(129);
        function f5(a6) {
            return v4;
        }
        f5[Symbol.species] = f5;
        const v10 = new Uint32Array(Uint32Array);
        const v11 = v10.subarray();
        v11.constructor = f5;
        v11.slice(0);
        return [0, 10];
    })();
    i13 < i14;
    i14--) {
}
gc();
