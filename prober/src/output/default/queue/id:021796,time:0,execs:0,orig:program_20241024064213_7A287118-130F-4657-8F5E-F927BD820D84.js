const o2 = {
    "maxByteLength": 2623677697,
};
const v4 = new SharedArrayBuffer(225, o2);
const v6 = new Uint32Array(v4);
const o10 = {
    [true]: true,
    "g": null,
    "h": true,
    "b": true,
    "a": null,
    "e": true,
    [v6]: true,
    get c() {
        return v6;
    },
};
for (let v11 = 0; v11 < 5; v11++) {
    for (const v12 in o10) {
        v12 in o10;
    }
}
gc();
