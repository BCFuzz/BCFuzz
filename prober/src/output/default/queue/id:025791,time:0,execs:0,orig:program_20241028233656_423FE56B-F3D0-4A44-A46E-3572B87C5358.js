const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    const v10 = [-4294967295,-62736,-6];
                    if ([-1024,7,2147483649,268435440,1073741823,6,-46313428,536870889,10] <= v10) {
                    } else {
                        9223372036854775807 << 9223372036854775807;
                    }
                    /\u{12345}/myvis;
                    return f9;
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
