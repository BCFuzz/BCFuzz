for (let i2 = -3, i3 = 10;
    i3--, i2 < i3;
    (() => {
        const v10 = new Int32Array(681);
        function f11(a12, a13, a14, a15) {
            let v16 = -a12;
            v16--;
            return a15;
            arguments.valueOf = f11;
            return v10;
        }
        v10.map(f11);
    })()) {
}
gc();
