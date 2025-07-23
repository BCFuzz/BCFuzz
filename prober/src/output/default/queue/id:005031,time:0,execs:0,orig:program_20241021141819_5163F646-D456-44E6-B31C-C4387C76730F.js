class C3 extends Date {
}
const v4 = new C3();
try { v4.setDate(-1024n); } catch (e) {}
const v7 = new Float32Array(v4, 13371);
try { v7.toSorted(13371); } catch (e) {}
gc();
