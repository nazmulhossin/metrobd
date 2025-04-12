$(document).ready(function () {
    const $sidebar = $('#userSidebar');

    $('#openSidebarBtn').on('click', function () {
        $sidebar.addClass('show-sidebar');
    });

    $('#closeSidebarBtn').on('click', function () {
        $sidebar.removeClass('show-sidebar');
    });
});