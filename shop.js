const items = [
  {
    name: "Cockroach Vitamin for Cats",
    price: 500,
    description:
      "Вітаміни для котів із унікальним комплексом поживних речовин. Покращують імунітет і настрій вашого улюбленця.",
  },
  {
    name: "Будиночок для котів",
    price: 2500,
    description:
      "Затишний та креативний будиночок у вигляді таргана. Ідеальне місце для відпочинку вашого котика.",
  },
  {
    name: "Cockroach Syrup 30 мл",
    price: 225,
    description:
      "Сироп для котів на основі натуральних екстрактів. Допомагає травленню і підвищує енергію.",
  },
  {
    name: "М’яка Іграшка Тарган",
    price: 400,
    description:
      "Весела м’яка іграшка у вигляді таргана для активної гри з котом. Міцна та безпечна.",
  },
  {
    name: "Іграшкова котяча Вудка",
    price: 85,
    description:
      "Ідеальний спосіб грати з котом. Вудка з пір’ячком забезпечить години веселощів і активності.",
  },
  {
    name: "Котячий корм Мяу",
    price: 40,
    description:
      "Смачний корм із натурального м’яса для щоденного раціону. Збалансований склад для здоров’я котика.",
  },
];
 
const products = document.querySelectorAll(".tovar");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function () {
    alert(
      `${items[i].name}\n\n${items[i].price}грн\n\n${items[i].description}`
    );
  });
}



