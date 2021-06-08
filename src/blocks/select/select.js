import 'select2';
// npm i select2

$(".find-us").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "find-us__drop",
    containerCssClass: "find-us__select",
});

$(".select-form").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "select-form__drop",
    containerCssClass: "select-form__select",
});

$(".check-city__select").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "check-city__drop check-city__drop--style",
    containerCssClass: "sort-select",
});