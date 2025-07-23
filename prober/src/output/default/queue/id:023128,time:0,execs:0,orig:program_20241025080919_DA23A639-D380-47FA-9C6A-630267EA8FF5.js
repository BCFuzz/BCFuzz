for (let v2 = 0; v2 < 5; v2++) {
    const v3 = `
    `;
    const v5 = [-9007199254740990,-3322,-8875];
    class C6 {
    }
    const v7 = new C6();
    const v8 = v7[5];
    try { v8.forEach("boolean", C6, eval); } catch (e) {}
    const v10 = new C6();
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v16 = [v3];
    function f17() {
        return v16;
    }
    const v18 = f17();
    const o20 = {
        valueOf() {
            Object.defineProperty(v18, "b", { writable: true, value: "boolean" });
            return v2;
        },
    };
    const v22 = Symbol.toPrimitive;
    const v23 = Symbol.iterator;
    v22[v23];
    const v25 = v10[5];
    const o27 = {
    };
    const v29 = new Uint8Array();
    let v31;
    try {
    const t0 = 1024;
    v31 = t0(f17, "boolean");
    } catch (e) {}
    v29.a = v31;
    Symbol.__proto__ = v23;
    const v33 = -Infinity;
    const v34 = false - "boolean";
    const v35 = -"boolean";
    let v36 = v33 / v34;
    v35 >>> -1;
    ++v36;
    try { BigInt64Array(v5, v25); } catch (e) {}
    const v42 = new Int16Array(2290);
    for (const v43 of v42) {
    }
}
gc();
