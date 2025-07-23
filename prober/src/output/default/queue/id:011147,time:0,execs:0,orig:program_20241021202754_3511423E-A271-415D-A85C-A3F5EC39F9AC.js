for (let i = 0; i < 5; i++) {
    const o32 = {
        toString(a1, a2) {
            function F3(a5, a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                const v9 = new Set();
                function f10() {
                    return v9;
                }
                for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
                    function F21() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    new F21();
                }
                function f24(a25) {
                    return a7;
                }
                Object.defineProperty(v9, -45280, { enumerable: true, get: f10, set: f24 });
                const v28 = new BigUint64Array(586);
                for (const v29 of v28) {
                }
            }
            new F3(a1, this, a2);
            new F3(a1, a1, a1);
            return this;
        },
    };
    o32.toString();
}
gc();
