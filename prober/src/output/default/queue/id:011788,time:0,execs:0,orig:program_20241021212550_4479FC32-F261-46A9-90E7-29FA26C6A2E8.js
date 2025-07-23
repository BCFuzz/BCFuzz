function f1(a2) {
    return a2;
}
function f5() {
    return f1;
}
function f6(a7) {
    return f5;
}
Object.defineProperty(Uint8ClampedArray, "toString", { enumerable: true, get: f5, set: f6 });
const v8 = Uint8ClampedArray.length;
const v9 = `
    Uint8ClampedArray.toString = f5;
    let v11;
    try { v11 = Uint8ClampedArray.bind(v8); } catch (e) {}
    const v12 = [16,16,Int16Array,v11];
    class C13 {
        #e;
        constructor() {
        }
        #g = v12;
        static {
            this.toString = f5;
            try { this.toString(); } catch (e) {}
            let v18;
            try { v18 = Math.abs(1.7976931348623157e+308); } catch (e) {}
            let v19 = 1;
            const v20 = v19++;
            v20 || v20;
            try {
                this.#e /= v18;
            } catch(e22) {
            }
            f1(C13);
            Math.log1p(v19);
            v20 >>> v20;
            Math.atan2(Uint8ClampedArray, v19);
            ~Math.abs(Uint8ClampedArray);
        }
    }
`;
eval(v9);
gc();
