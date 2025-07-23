function f1(a2) {
    return 1.7976931348623157e+308;
}
function f5() {
    return f1;
}
function f6(a7) {
    return a7;
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
            try { Math.abs(1.7976931348623157e+308); } catch (e) {}
            let v19 = 1;
            const v20 = v19++;
            v20 || v20;
            Math.log1p(v19);
            v20 >>> v20;
            Math.atan2(Uint8ClampedArray, v19);
            ~Math.abs(Uint8ClampedArray);
            const v27 = \`
                /\u{12345}/myvis;
            \`;
            eval(v27);
            const v31 = v19--;
            v31 + v31;
        }
    }
`;
eval(v9);
gc();
