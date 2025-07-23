for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a1, a2) {
            const v3 = this.__proto__;
            const v4 = v3.toLocaleString();
            const t5 = v4.constructor;
            const v6 = new t5(v4, a2, v3, a2, a1);
            v6[0];
            return v4;
        },
    };
    o8.toString(o8, o8, o8, o8);
}
gc();
