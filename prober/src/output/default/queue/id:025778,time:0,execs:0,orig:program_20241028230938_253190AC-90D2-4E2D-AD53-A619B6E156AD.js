const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = [-4294967295,-62736,-6];
                    if ([-1024,7,2147483649,268435440,1073741823,6,-46313428,536870889,10] <= v10) {
                    } else {
                        const o13 = {
                        };
                    }
                    /\u{12345}/myvis;
                }
            `;
            const v15 = v8.split(a6);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
