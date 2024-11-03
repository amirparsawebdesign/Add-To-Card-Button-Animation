let count = 0;

const counter = document.getElementById("counter");

document.getElementById("add_animation").addEventListener("click", (e) => {
      const cl = counter.classList;
      const c = "animated_counter";

      count++;
      counter.innerText = count;
      cl.remove(c, cl.contains(c));
      setTimeout(() =>
            counter.classList.add("animated_counter"), 1)
});