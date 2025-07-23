for (let i = 0; i < 5; i++) {
    const o11 = {
        toString(a1, a2) {
            try { a1.toLocaleString(); } catch (e) {}
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                this.toLocaleString();
            }
            const v9 = new F4();
            try { v9.constructor(a2); } catch (e) {}
            return a2;
        },
    };
    o11.toString(o11);
}
gc();
