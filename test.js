  javascript: (function() {
      window.addEventListener("click", (ev) => {
          let ID = ev.target;
          console.log(ID);
          if (ID.getAttribute("data-id")) {
              return console.log("Data", ID.dataset);
          } else {
              if (ID.id) {
                  ID.setAttribute("data-id", ID.id);
                  document.body.style.setProperty("--id", ID.id)
                  console.log("id", ID.id);
                  console.log("tag", ID.tagName);

              } else {
                  let clss = ID.classList;

                  if (clss.length >= 2) {
                      console.log("clss", clss.length);
                      ID.setAttribute("data-id", ID.tagName + count);
                      document.body.style.setProperty("--id", ID.tagName + count);
                      count++;
                  } else {
                      ID.setAttribute("data-id", clss);
                      document.body.style.setProperty("--id", clss);
                  }
              }
          }
      });
  })();
