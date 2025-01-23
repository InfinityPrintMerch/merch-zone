document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 15;
  const catalogSection = document.querySelector('.productos-personalizables-b');
  const allItems = Array.from(document.querySelectorAll('.box-a'));
  const paginationContainers = document.querySelectorAll('.pagination');
  const noResultsMessage = document.getElementById("no-results");

  let filteredItems = allItems;
  let totalPages;
  let currentPage = 1;

  function displayItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;

    filteredItems.forEach((item, index) => {
      if (index >= start && index < end) {
        item.classList.remove('show');
        item.style.display = 'none';
        setTimeout(() => {
          item.style.display = 'block';
          item.classList.add('show');
        }, 100);
      } else {
        item.classList.remove('show');
        setTimeout(() => {
          item.style.display = 'none';
        }, 500);
      }
    });

    updateNoResultsMessage();
    updatePaginationUI();
  }

  function updateNoResultsMessage() {
    const searchValue = document.getElementById("search-bar").value.trim();
    if (filteredItems.length === 0 && searchValue !== "") {
      noResultsMessage.textContent = `Parece que "${searchValue}" aún no ha llegado a nuestra colección. ¡Estaremos creando algo genial pronto!`;
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }
  }

  function updatePaginationUI() {
    totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    paginationContainers.forEach(pagination => {
      const pageNumbersContainer = pagination.querySelector('.page-numbers');
      const prevButton = pagination.querySelector('.prev');
      const nextButton = pagination.querySelector('.next');

      pageNumbersContainer.innerHTML = '';

      const maxVisiblePages = window.innerWidth < 768 ? 3 : 12;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      if (startPage > 1) {
        createPageButton(pageNumbersContainer, 1);
        if (startPage > 2) createDots(pageNumbersContainer);
      }

      for (let i = startPage; i <= endPage; i++) {
        createPageButton(pageNumbersContainer, i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) createDots(pageNumbersContainer);
        createPageButton(pageNumbersContainer, totalPages);
      }

      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    });
  }

  function createPageButton(container, pageNumber) {
    const pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.classList.add('page-number');
    if (pageNumber === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', function () {
      if (pageNumber !== currentPage) {
        currentPage = pageNumber;
        displayItems(currentPage);
        scrollToCatalog();
      }
    });
    container.appendChild(pageButton);
  }

  function createDots(container) {
    const dots = document.createElement('span');
    dots.textContent = '...';
    dots.classList.add('dots');
    container.appendChild(dots);
  }

  function scrollToCatalog() {
    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updatePagination() {
    totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    currentPage = 1;
    displayItems(currentPage);
  }

  function applyFilter(filterFunc) {
    filteredItems = allItems.filter(filterFunc);
    updatePagination();
  }

  function performSearch(searchValue) {
    filteredItems = allItems.filter(item =>
      item.getAttribute("data-name").toLowerCase().includes(searchValue.toLowerCase())
    );
    updatePagination();
  }

  document.getElementById("new").addEventListener("click", function () {
    applyFilter(item => item.getAttribute("data-new") === "true");
  });

  document.getElementById("hot").addEventListener("click", function () {
    applyFilter(item => item.getAttribute("data-hot") === "true");
  });

  document.getElementById("search-bar").addEventListener("input", function () {
    performSearch(this.value.trim());
  });

  paginationContainers.forEach(pagination => {
    pagination.querySelector('.prev').addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
        scrollToCatalog();
      }
    });

    pagination.querySelector('.next').addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        displayItems(currentPage);
        scrollToCatalog();
      }
    });
  });

  window.addEventListener('resize', updatePaginationUI);

  updatePagination();
});
