new Int32Array(10);
new Float32Array(255);
new BigUint64Array(4096);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = `
    `;
    BigUint64Array.unshift("0");
    function f17(a18, a19) {
        return a18;
    }
}
new Int8Array();
class C22 {
    constructor(a24) {
    }
}
const o25 = {
};
o25.f = o25;
const v27 = new WeakMap();
const o28 = {
    __proto__: v27,
};
try { o28.has(); } catch (e) {}
const v31 = `
    let v32 = 257n;
    const v33 = v32--;
    v33 >> v33;
    const v35 = [3,512,-65535];
    let v36 = [110.84070194851734,1e-15,879965.4642361167,1000000.0,-5.156502673906553e+307];
    function f37() {
        function f38() {
            Math.ceil(v35);
            v36--;
            return f37;
        }
        return f38;
    }
    Object.defineProperty(v36, "valueOf", { get: f37 });
    \`match${F12}getUint32\`;
`;
v31.split();
gc();
