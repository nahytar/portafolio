window.onload = () => {
  let actualIcon = 0;
  let iconsList = document.querySelectorAll('.technologies .icns');
  setInterval(() => {
    if (actualIcon > 0 ) {
      iconsList.item((actualIcon - 1) % iconsList.length).classList.remove('showing');
    }
    iconsList.item(actualIcon % iconsList.length).classList.add('showing');
    actualIcon++;
  }, 1500)
}