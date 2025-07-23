const v2 = createGlobalObject();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
function f16() {
    return 16;
}
const v17 = Uint8ClampedArray.length;
const v18 = `
    try { Int16Array.from(28022); } catch (e) {}
    Uint8ClampedArray.toString = f16;
    let v21;
    try { v21 = Uint8ClampedArray.bind(v17); } catch (e) {}
    try { v21(v2, v2, v2); } catch (e) {}
    const v23 = [16,16,Int16Array,v21];
    v23[1] = v23;
    class C24 {
        #e;
        constructor() {
        }
        #g = v23;
        static {
            this.toString = f16;
            try { this.toString(); } catch (e) {}
            let v29;
            try { v29 = Math.abs(1.7976931348623157e+308); } catch (e) {}
            let v30 = 1;
            v30 - v30;
            const v32 = v30++;
            v32 || v32;
            try {
                this.#e /= v29;
            } catch(e34) {
            }
        }
    }
`;
eval(v18);
gc();
