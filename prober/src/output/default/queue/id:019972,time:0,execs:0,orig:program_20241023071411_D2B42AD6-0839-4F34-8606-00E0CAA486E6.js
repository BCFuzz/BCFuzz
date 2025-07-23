for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = new Uint8Array(3129);
for (const v13 in v12) {
    let v14 = 0;
    do {
        v14++;
    } while ((() => {
            function f17(a18) {
                return v13;
            }
            f17.b = f17;
            return v14 >= 2147483649;
        })())
}
gc();
