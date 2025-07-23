for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o10 = {
            "maxByteLength": 3546,
        };
        const v12 = new SharedArrayBuffer(3546, o10);
        const v14 = new Float64Array(v12);
        function f15(a16, a17) {
            return o10;
        }
        Object.defineProperty(v14, "toString", { writable: true, value: f15 });
    })()) {
}
gc();
