Array();
for (let v2 = 0; v2 < 5; v2++) {
    const v4 = new Uint16Array();
    const v5 = v4.slice();
    const o10 = {
        valueOf() {
            try { this.valueOf(v2, 1, this); } catch (e) {}
            v5[1] >>>= -2147483648;
        },
    };
    o10.valueOf();
    for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
    }
    const v24 = new Uint32Array(1000);
    for (const v25 in v24) {
    }
}
gc();
