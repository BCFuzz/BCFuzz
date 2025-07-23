function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1000;
}
new F0();
new Int16Array();
let v9 = 0;
while ((() => {
        const v11 = v9 < 9;
        function f12() {
            return f12;
        }
        for (let i = 0; i < 5; i++) {
            const o23 = {
                toString(a16, a17) {
                    a17.toString(2, "number");
                    const v21 = -26944 + ("number" ^ -26944);
                    return v21 >>> v21;
                },
            };
            o23.toString(o23, f12);
            const v25 = o23.toString(o23, o23);
            o23.toString(v25, v25);
        }
        return v11;
    })()) {
    v9++;
}
const v28 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
let v29;
try { v29 = v28.every(); } catch (e) {}
const v32 = new Float32Array(1384);
v32.includes(4096, v29);
gc();
