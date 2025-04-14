$(document).ready(function () {
// Sidebar toggle
    const $sidebar = $('#userSidebar');

    $('#openSidebarBtn').on('click', function () {
        $sidebar.addClass('show-sidebar');
    });

    $('#closeSidebarBtn').on('click', function () {
        $sidebar.removeClass('show-sidebar');
    });

// Refresh button animation
    $('.refresh-btn').on('click', function () {
        const $icon = $(this).find('i');
        $icon.addClass('fa-spin');
        setTimeout(function () {
            $icon.removeClass('fa-spin');
        }, 1000);
    });
});