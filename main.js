let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #004368'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0D4774;">Las palabras se las lleva el viento, la tinta se borra, pero las acciones se tatúan en el alma</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
