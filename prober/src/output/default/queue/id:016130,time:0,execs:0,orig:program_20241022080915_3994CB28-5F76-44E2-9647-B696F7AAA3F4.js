for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f11(a12, a13) {
    const o27 = {
        toString(a15, a16) {
            const v17 = this.__proto__;
            return v17.toLocaleString(a13, v17, a15, f11, a13).constructor.fromCharCode("-1825203715")[0];
        },
        [a12](a23, a24, a25, a26) {
        },
    };
    return o27;
}
f11(f11("-1825203715", f11));
gc();
