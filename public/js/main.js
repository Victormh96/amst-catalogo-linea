/* ============================================================*/
/* Preloader
/* ============================================================*/
$(window).on("load", function () {
    if ($("#preloader").length) {
        $("#preloader")
            .delay(250)
            .fadeOut("slow", function () {
                $(this).remove()
            })
    }
})

/* ============================================================*/
/* Swiper
/* ============================================================*/
var swiper = new Swiper(".mySwiper", {
    lazy: true,
    loop: true,
    simulateTouch: false,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },
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
    })
})

/* ============================================================*/
/* Select2
/* ============================================================*/
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