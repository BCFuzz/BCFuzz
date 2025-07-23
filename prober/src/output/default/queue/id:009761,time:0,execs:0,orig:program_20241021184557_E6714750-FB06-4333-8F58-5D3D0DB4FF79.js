for (let i = 0; i < 5; i++) {
    const o15 = {
        toString(a1, a2) {
            function F3(a5, a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i = 0; i < 5; i++) {
                    for (let v8 = 0; v8 < 250; v8++) {
                        const v11 = new Uint8Array(10);
                        parseInt(v11);
                    }
                }
            }
            new F3(a1, a2, F3);
            return a1;
        },
    };
    o15.toString(o15, o15, o15, o15);
}
gc();
