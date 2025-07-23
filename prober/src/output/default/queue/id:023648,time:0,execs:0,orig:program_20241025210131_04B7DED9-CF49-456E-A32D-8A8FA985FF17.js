for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v14 = new Int16Array(255);
for (const v16 of v14) {
    function F17(a19) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C20 extends F17 {
        static #c = F17;
        constructor(a22, a23, a24, a25) {
            super();
            try {
                const t12 = 0n;
                t12.#c = 0;
                let v26 = -2147483647;
                let v27 = v26 + v26;
                switch (--v27) {
                    case 255:
                        break;
                }
                v26++;
            } catch(e30) {
            }
        }
    }
    new C20(255, 0n, Int16Array, Int16Array);
}
gc();
