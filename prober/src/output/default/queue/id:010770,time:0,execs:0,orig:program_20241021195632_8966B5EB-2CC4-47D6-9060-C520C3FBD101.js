for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        let v17 = [-1.7976931348623157e+308];
        function f18() {
            return i12;
        }
        v17.toString = f18;
        for (let v19 = 0; v19 < 5; v19++) {
            Math.floor(v17);
            ++v17;
        }
        i13--;
    })()) {
}
gc();
