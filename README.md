# 🧠 React 60 – useEffect + čas

🎯 **Cilj**
- razumeti, zakaj časovna logika ne spada v render
- uporabiti `useEffect` za zakasnitev
- videti čist render brez stranskih učinkov

🧩 **Kako deluje**
- komponenta se rendera
- `useEffect` se zažene po renderju
- `setTimeout` po 2 sekundah spremeni state
- React ponovno rendera UI

❗ **Ključna lekcija**
Render = kako UI izgleda  
Effect = kaj se zgodi po renderju

https://codesandbox.io/p/sandbox/mgvwvr?file=%2Fsrc%2Fstyles.css%3A1%2C1-16%2C1
