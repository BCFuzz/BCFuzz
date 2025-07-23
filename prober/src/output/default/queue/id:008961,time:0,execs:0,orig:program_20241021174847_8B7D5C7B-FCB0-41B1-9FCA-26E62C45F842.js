for (let i = 0; i < 5; i++) {
    const o6 = {
        toString(a1, a2) {
            const v3 = this.toString;
            v3(v3, a1, v3);
            return this.__proto__;
        },
    };
    o6.toLocaleString();
}
gc();
