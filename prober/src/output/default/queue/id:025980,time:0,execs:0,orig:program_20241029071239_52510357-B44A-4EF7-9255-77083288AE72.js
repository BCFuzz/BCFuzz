for (let i3 = 257, i4 = 10; i3 < i4;) {
}
const v12 = new Int8Array(255);
for (const v13 in v12) {
    class C14 {
        constructor(a16) {
            const v18 = `
                for (let i21 = 0, i22 = 10; i21 < i22;) {
                    function f28(a29) {
                        return a16;
                    }
                    class C30 extends f28 {
                        [3608] = f28;
                    }
                    a16 *= eval;
                }
            `;
            const v31 = v18.split(a16);
            try { v31.flatMap(eval); } catch (e) {}
        }
    }
    new C14(v13);
}
gc();
