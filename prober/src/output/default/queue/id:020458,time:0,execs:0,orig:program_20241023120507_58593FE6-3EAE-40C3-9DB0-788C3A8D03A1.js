function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1();
const v5 = v4.h;
let v6;
try { v6 = new v5(); } catch (e) {}
new Float32Array();
new Int16Array(1275, 1275, v6);
new Int8Array();
Math.abs();
for (let v20 = 0; v20 < 25; v20++) {
    const v23 = createGlobalObject()?.Promise;
    try { new v23(); } catch (e) {}
    createGlobalObject();
    function F26() {
        if (!new.target) { throw 'must be called with new'; }
        function f28(a29) {
            new Float64Array(58766);
            return createGlobalObject;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f28 });
        this.c = -256;
    }
    new F26();
    new F26();
    const v35 = new F26();
    const v36 = v35.constructor;
    new v36(v36, v36, v20, Int16Array);
}
const v40 = new ArrayBuffer(15);
new DataView(v40);
gc();
