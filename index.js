console.log('bobbyhadz.com');

const select = document.getElementById('fruit-select');

// ✅ set select value
select.value = 'apple';
console.log(select.value); // 👉️ "apple"

// ✅ unset select value
// select.value = '';

// --------------------------------

const allOptions = Array.from(select.options).map(
  option => option.value,
);
console.log(allOptions); // 👉️ ['', 'apple', 'banana', 'kiwi']

// --------------------------------

// ✅ get select value on change

select.addEventListener('change', function handleChange(event) {
  console.log(event.target.value); // 👉️ get selected VALUE
});

// --------------------------------

// ✅ Set select element value on button click

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  select.value = 'banana';
});
