const v2 = new Int32Array(255);
for (const v3 in v2) {
    for (let i6 = -3, i7 = 10;
        i6 < i7;
        (() => {
            i7--;
            function f12() {
                const v14 = new Uint8ClampedArray(v2, i7);
                delete v14[Symbol(127)];
                return arguments;
            }
            f12();
        })()) {
    }
}
gc();
