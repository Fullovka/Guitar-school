// Получаем кнопку, которая отвечает за открытие модального окна
var openModalButton = document.getElementById("openModalButton")

// Получаем "крестик" для закрытия модального окна:
var closeButton = document.getElementById("closeButton")

// Получаем модальное окно
var modal = document.getElementById("myModal")

// Получаем кнопку закрытия модального окна
var closeModalButton = document.getElementById("modal-close")

// Закрытие модального окна при нажатии на "крестик"
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при нажатии на кнопку "закрыть"
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Открытие модального окна при нажатии на кнопку
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна при щелчке за его пределами
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

