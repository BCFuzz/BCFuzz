const v1 = new Map();
const v2 = v1.has;
function f3(a4, a5) {
    return Math.log1p(9223372036854775807);
}
Object.defineProperty(v2, "valueOf", { writable: true, configurable: true, enumerable: true, value: f3 });
const v10 = "p" + v2;
try { eval(v10); } catch (e) {}
gc();
