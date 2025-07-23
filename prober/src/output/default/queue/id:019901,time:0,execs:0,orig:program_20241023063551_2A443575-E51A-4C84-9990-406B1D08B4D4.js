const o3 = {
    [true]: true,
    "d": null,
    "h": true,
    "b": true,
    "a": null,
    "e": true,
    get c() {
        return true;
    },
};
o3.length = 1;
for (let v5 = 0; v5 < 5; v5++) {
    for (const v6 in o3) {
        v6 in o3;
    }
}
gc();
