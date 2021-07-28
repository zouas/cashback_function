'use strict';
const calculateCashback = function (specialCategoryPurchases, otherCategoryPurchases) {

    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };

}

const cashback = calculateCashback(5000, 10000);
console.log(cashback);

function handleSubmit(evt) {
    evt.preventDefault(); //отменяем поведение по умолчанию

    specialAmountErrorEl.textContent = '';
    otherAmountErrorEl.textContent = '';
    specialCashbackEl.textContent = '';
    otherCashbackEl.textContent = '';
    totalCashbackEl.textContent = '';

    const specialAmount = Number(specialAmountInputEl.value);

    if (Number.isNaN(specialAmount)) {
        specialAmountErrorEl.textContent = `1-Неверное значение. Введите число, например: 10000`;
        return;
    }
    if (!Number.isFinite(specialAmount)) {
        specialAmountErrorEl.textContent = `1-Слишком большое значение. Введите число, например: 10000`;
        return;
    }

    const otherAmount = Number(otherAmountInputEl.value);


    if (Number.isNaN(otherAmount)) {
        otherAmountErrorEl.textContent = `2-Неверное значение. Введите число, например: 10000`;
        return;
    }
    if (!Number.isFinite(otherAmount)) {
        otherAmountErrorEl.textContent = `2-Слишком большое значение. Введите число, например: 10000`;
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);

    specialCashbackEl.textContent = `${result.specialCategoryCashback} руб.`
    otherCashbackEl.textContent = `${result.otherCategoryCashback} руб.`
    totalCashbackEl.textContent = `${result.totalCashback} руб.`

}

const formEl = document.getElementById('cashback-form');
formEl.onclick = handleSubmit;

const specialAmountInputEl = document.getElementById('special-amount-input');
const specialAmountErrorEl = document.getElementById('special-amount-error');

const otherAmountInputEl = document.getElementById('other-amount-input');
const otherAmountErrorEl = document.getElementById('other-amount-error');

const specialCashbackEl = document.getElementById('special-cashback');
const otherCashbackEl = document.getElementById('other-cashback');
const totalCashbackEl = document.getElementById('total-cashback');
