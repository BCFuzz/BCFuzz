const v0 = [3,512,-65535];
let v1 = [110.84070194851734,1e-15,879965.4642361167,1000000.0,-5.156502673906553e+307];
function f2() {
    function f3() {
        Math.ceil(v0);
        v1--;
        return f2;
    }
    return f3;
}
Object.defineProperty(v1, "valueOf", { get: f2 });
const t11 = v1.constructor;
const v8 = t11(v1);
try { new Int8Array(v8); } catch (e) {}
gc();
