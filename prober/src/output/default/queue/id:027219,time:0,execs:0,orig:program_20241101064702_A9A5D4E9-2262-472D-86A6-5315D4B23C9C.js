const v2 = new Map();
const v3 = v2.has;
function f4(a5, a6) {
    class C8 extends Int8Array {
        constructor(a10, a11) {
            const v13 = new Int8Array(255);
            for (const v14 in v13) {
                class C15 {
                    constructor(a17) {
                        const v19 = `
                            const o29 = {
                                toString(a22, a23) {
                                    async function* f24(a25, a26) {
                                        -C15;
                                        await -1.5825043450841939e+308;
                                        return a22;
                                    }
                                    return -1.5825043450841939e+308;
                                },
                            };
                        `;
                        const v30 = v19.split(a17);
                        v30.reverse();
                        try { v30.flatMap(eval); } catch (e) {}
                    }
                }
                new C15(v14);
            }
            super();
        }
    }
    new C8(a6, Map);
    return v2;
}
v3.valueOf = f4;
const v36 = new Float64Array();
v36.subarray(4294967297, v3);
gc();
