/* ============================================================*/
/* Preloader
/* ============================================================*/
$(window).on("load", function () {
    if ($("#preloader").length) {
        $("#preloader")
            .delay(350)
            .fadeOut("slow", function () {
                $(this).remove()
            })
    }
})

/* ============================================================*/
/* Dropify
/* ============================================================*/
$(window).on("load", function () {
    $(".dropify").dropify({
        messages: {
            default: "",
            replace: "",
            remove: "<i class='fa-solid fa-xmark'></i>",
            error: "",
        },
        tpl: {
            errorsContainer: '<div class="dropify-errors-container"></div>'
        }
    })
})

/* ============================================================*/
/* Dropify Delete
/* ============================================================*/
$(window).on("load", function () {
    $(".dropify-wrapper").removeClass("touch-fallback");
});

/* ============================================================*/
/* Select2
/* ============================================================*/
if (screen.width >= 1024) {
    $(window).on("load", function () {
        $(".select2")
            .select2()
            .on("select2:select", e => {
                const event = new Event("change", { bubbles: true, cancelable: true })
                e.params.data.element.parentElement.dispatchEvent(event)
            })
            .on("select2:unselect", e => {
                const event = new Event("change", { bubbles: true, cancelable: true })
                e.params.data.element.parentElement.dispatchEvent(event)
            })
    })
}
