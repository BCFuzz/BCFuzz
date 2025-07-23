const v3 = new Date(0.8717151279551151, 0.8717151279551151, runString);
const v4 = v3.toLocaleDateString();
try { v4.replaceAll(v4, runString); } catch (e) {}
gc();
