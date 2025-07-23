const v0 = [-214.037436090764,-2.8063221691338462,-0.0,2.2250738585072014e-308,-1.0,-807.8317173580149,-293.057261380671,-2.220446049250313e-16];
function f3(a4) {
    const o8 = {
        valueOf(a6) {
            try { this.valueOf(a4, v0, this, v0); } catch (e) {}
            return WeakMap;
        },
    };
    o8.valueOf(a4, a4, v0, o8, a4);
    return o8;
}
const v10 = f3(Map);
const v11 = f3(v10);
function f12() {
    return f3;
}
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a17.name = a17;
    a17.valueOf(a16);
}
const v19 = new F13(WeakMap, WeakMap, WeakMap);
const v20 = new F13(v10, f12, v19);
const t23 = v20.constructor;
new t23(WeakMap, v0, v11);
const t25 = v20.constructor;
new t25(v20, Map, v10);
gc();
