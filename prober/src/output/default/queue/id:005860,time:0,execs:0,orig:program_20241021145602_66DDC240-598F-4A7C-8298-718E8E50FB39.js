const v6 = new Uint32Array();
for (let i = 0; i < 5; i++) {
    let o37 = {
        toString(a11, a12) {
            function f13(a14, a15) {
                return this;
            }
            const v18 = Array(95);
            v18[11] = f13;
            class C19 extends Array {
            }
            const v20 = new C19();
            const v21 = new C19();
            const v22 = new C19();
            function F23(a25, a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                const v28 = this.__defineSetter__;
                try { v28(a27, v6); } catch (e) {}
                const v30 = a26.splice(v22);
                try { v30.pop(v20, a25); } catch (e) {}
            }
            const v32 = new F23(v20, v21);
            const t22 = v32.constructor;
            const v34 = new t22(v32, v18);
            const v35 = v34.constructor;
            try { new v35(v21, v34); } catch (e) {}
        },
    };
    o37 *= o37;
}
gc();
