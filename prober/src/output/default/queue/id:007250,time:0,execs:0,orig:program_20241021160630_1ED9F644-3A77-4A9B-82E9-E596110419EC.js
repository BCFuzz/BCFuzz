const v3 = [-1.5937836806396583e+308,-1000.0];
class C4 extends Array {
}
let v5 = 5;
v5--;
const v8 = Int16Array.prototype;
const v9 = new Int16Array(v3);
const v11 = -2290;
const v12 = `
    for (let v13 = 0; v13 < 5; v13++) {
        function F14() {
            if (!new.target) { throw 'must be called with new'; }
        }
        F14.prototype;
        const v17 = new F14();
        function f18(a19, a20) {
            v9 * v8;
        }
        v17.constructor = f18;
        try { v17.constructor(); } catch (e) {}
        function F23(a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F23(v13, 26013n); } catch (e) {}
        const v28 = new F23();
        function f29(a30, a31) {
            return F14;
        }
        Object.defineProperty(v28, "constructor", { writable: true, configurable: true, value: f29 });
        const v32 = v28.constructor;
        try { v32(v11, v3); } catch (e) {}
        const v34 = v28?.__defineGetter__;
        try { v34(C4, C4); } catch (e) {}
        let v36;
        try { v36 = v28.hasOwnProperty(v5); } catch (e) {}
        v36 || v36;
    }
`;
eval(v12);
gc();
