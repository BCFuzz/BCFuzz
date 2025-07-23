for (let v2 = 0; v2 < 25; v2++) {
    for (let i = 0; i < 5; i++) {
        const o8 = {
            toString(a4, a5) {
                a4.toString("", 128, a5, v2);
                this.__proto__;
                return a4;
            },
        };
        o8.toString(o8);
    }
}
gc();
