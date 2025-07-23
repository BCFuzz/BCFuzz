const v0 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
const o1 = {
    __proto__: v0,
};
let v2;
try { v2 = o1.findIndex(o1, o1); } catch (e) {}
const v3 = o1.slice();
function f4() {
    return v0;
}
Object.defineProperty(v3, 10, { configurable: true, enumerable: true, get: f4 });
Object.defineProperty(v3, 12, { value: v2 });
try { v3.sort(); } catch (e) {}
gc();
