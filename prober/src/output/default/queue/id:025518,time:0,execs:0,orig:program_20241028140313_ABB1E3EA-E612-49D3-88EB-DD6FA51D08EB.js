const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                function f11() {
                    for (let v12 = 0; v12 < 5; v12++) {
                        ~v10;
                    }
                    let {"byteOffset":v14,...v15} = v1;
                    /S[^123]/dygisu;
                    /\u{12345}/myvis;
                    return v1;
                }
            `;
            const v18 = v10.split(a8);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
