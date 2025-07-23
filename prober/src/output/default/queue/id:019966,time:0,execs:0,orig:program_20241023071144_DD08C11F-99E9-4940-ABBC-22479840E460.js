const v0 = [0.3229124539440754,6.92128448911242,-917385.9944804672,1.7976931348623157e+308];
const v1 = [v0,v0,v0,v0,v0];
Object.defineProperty(v1, 28, { value: v0 });
const o2 = {
};
function f3(a4) {
    return v0;
}
o2.set = f3;
const v6 = new Proxy(v1, o2);
try { v6.fill(); } catch (e) {}
gc();
