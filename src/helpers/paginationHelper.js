export default function makeBtnsDataH(pages, currentPage) {
    let buttons = []

    if (pages > 0) {
        if (currentPage > 1) {
            buttons.push({
                className: 'pagination__item pagination__item-prev',
                dataTarget: (currentPage - 1),
                text: 'prev'
            });
        }

        for (let i = currentPage-2; i < currentPage + 3; i++) {
            if (i === currentPage) {
                buttons.push({
                    className: 'pagination__item current',
                    dataTarget: i,
                    text: i
                });
            } else if (i > pages) {
                buttons.push()
            } else if (i < 1) {
                buttons.push()
            } else {
                buttons.push({
                    className: 'pagination__item',
                    dataTarget: i,
                    text: i
                });
            }
        }

        if (currentPage < pages) {
            buttons.push({
                className: 'pagination__item pagination__item-next',
                dataTarget: (currentPage + 1),
                text: 'next'
            });
        }
    }

    return buttons
}