function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    function f6() {
        return v2;
    }
    function f7(a8) {
        return f7;
    }
    Object.defineProperty(Date, "timeZone", { configurable: true, get: f6, set: f7 });
    const v9 = new Date();
    return v9.toLocaleTimeString(v9, Date);
}
v2.toString = f3;
const v11 = new F0();
try { v11.hasOwnProperty(v2); } catch (e) {}
gc();
