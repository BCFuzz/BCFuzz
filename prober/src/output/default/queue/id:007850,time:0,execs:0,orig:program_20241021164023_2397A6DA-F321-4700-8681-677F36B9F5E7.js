for (let i = 0; i < 5; i++) {
    const o19 = {
        toString(a1, a2) {
            function F3(a5, a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                const v9 = new Set();
                function f10() {
                    return v9;
                }
                function f11(a12) {
                    return a12;
                }
                Object.defineProperty(v9, -45280, { enumerable: true, get: f10, set: f11 });
                const v15 = new BigUint64Array(586);
                for (const v16 of v15) {
                }
            }
            new F3(a1, this, a1);
            const v18 = new F3();
            return v18;
        },
    };
    o19.toString();
}
gc();
