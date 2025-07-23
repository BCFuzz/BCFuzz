function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F3();
const v7 = new F3();
function f8(a9, a10) {
    const o11 = {
        ...a9,
        __proto__: a10,
        "c": F3,
    };
    return o11;
}
f8(v7, v7);
f8(v6, v6);
[-5.827750854743369e+307,-1.0,-545.8625350541979,-769511.9935251835,2.220446049250313e-16,-1000000.0,-474.1236791853305,0.0,-1000000000000.0];
[-779.1771348739569,-215032.6228246682,-0.0,1000000000000.0];
[-1.082095014839084e+307,1e-15,-325.9980227312908,634427.4431471599];
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
new F20();
const v27 = `
    let v28 = 2;
    1 / Infinity;
    ++v28;
    new Date();
    class C35 extends Date {
    }
    const v36 = new C35();
    function f38(a39) {
        return f38;
    }
    v36["toISOString"]();
`;
eval(v27);
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
}
const v50 = 9007199254740992n < 9007199254740992n;
60980n / 60980n;
const t39 = "object";
t39[1] = "object";
const o63 = {
    "d": v50,
    "a": 60980n,
    "h": "object",
    ["object"]: 524995982n,
    [524995982n]: 60980n,
    toString(a56, a57) {
        const t50 = [1000000000000.0,2.0,Infinity,-2.735616879087119e+307,-1.106293781625981e+308,46457.351334702806,-2.220446049250313e-16,4.0];
        t50[-2] ^= 255;
        const v61 = new Int16Array(2290);
        for (const v62 of v61) {
        }
        return 255;
    },
};
const v64 = [o63];
class C65 {
}
const t61 = C65.constructor;
t61(v64);
try { new Array(14); } catch (e) {}
const v75 = Array();
const v78 = createGlobalObject().WebAssembly;
const v79 = v78.Module;
try { new v79(); } catch (e) {}
v78.parameters = v75;
const v81 = v78.Tag;
try { new v81(); } catch (e) {}
for (let i85 = -3, i86 = 10; i86--, i85 < i86;) {
}
gc();
