for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a1, a2) {
            const v3 = this.__proto__;
            const t4 = v3.toLocaleString().constructor;
            new t4();
            for (let v7 = 0; v7 < 25; v7++) {
            }
            return v3;
        },
    };
    o8.toString();
}
gc();
