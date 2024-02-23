const categoriesList = document.querySelectorAll("#categories .item");

// Виведення кількості категорій
console.log(`Кількість категорій: ${categoriesList.length}`);

// Обхід кожної категорії
categoriesList.forEach((category) => {
  // Отримання заголовка категорії
  const categoryName = category.querySelector("h2").textContent;

  // Отримання кількості елементів у категорії
  const itemsCount = category.querySelectorAll("li").length;

  // Виведення інформації про категорію
  console.log(
    `Категорія: ${categoryName} (Кількість елементів: ${itemsCount})`
  );
});
