for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i = 0; i < 25; i++) {
    function f10() {
        return f10;
    }
    const o13 = {
        "maxByteLength": 5,
    };
    const v15 = new SharedArrayBuffer(5, o13);
    const v17 = new Int8Array(v15);
    for (let v18 = 0; v18 < 5; v18++) {
        const v19 = [SharedArrayBuffer,SharedArrayBuffer,SharedArrayBuffer,SharedArrayBuffer];
        const v21 = [f10];
        Reflect.apply(v19.every, v17, v21);
        for (let i26 = 0, i27 = 10; i26 <= i27; i27--) {
        }
    }
}
gc();
