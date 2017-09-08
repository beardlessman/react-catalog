export function syncSettingsWithUrl(settings, urlParams) {
    const page = urlParams.pageNum ? urlParams.pageNum : 1;
    const sort = urlParams.sortType !== '' ? urlParams.sortType : 'id';
    const direction = urlParams.direction ? urlParams.direction : 1;
    const filter = urlParams.filter ? urlParams.filter : '';

    if (page) {
        const limit = settings.pagination.limit;
        settings.pagination.offset = (page - 1)  * limit;

        settings.sort[sort] = true;
        settings.sort.direction = direction;
        settings.filter.text = filter;
    }

    return settings;
}

export function getUrlBySettings(settings) {
    let filterText = settings.filter.text;
    let page = ( settings.pagination.offset / settings.pagination.limit ) + 1;
    let sort = sortType();
    let direction = settings.sort.direction;

    function sortType () {
        for (let key in settings.sort) {
            if (settings.sort[key] === true) {
                let sort = key;
                if ( sort === 'direction' ) {
                    sort = 'id';
                }
                return sort;
            }
        }
    }

    // let url = '/';
    // if (filterText !== '') {
    //     url = url + `q=${filterText}`;
    // }
    // if (sort !== 'id') {
    //     url = url + `&sort=${sort}`;
    // }
    // if (direction !== 1) {
    //     url = url + `&direction=${direction}`;
    // }
    // if (page !== 1) {
    //     url = url + `&page=${page}`;
    // }
    //
    // return url;

    return `/q=${filterText}&sort=${sort}&direction=${direction}&page=${page}`;
}