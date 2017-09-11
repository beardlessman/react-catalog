export function syncSettingsWithUrl(settings, urlParams) {
    const page = urlParams.page ? urlParams.page : 1;
    const sort = urlParams.sort ? urlParams.sort : 'id';
    const direction = urlParams.dir ? urlParams.dir : 1;
    const filter = urlParams.q ? urlParams.q : '';

    if (page) {
        const limit = settings.pagination.limit;
        settings.pagination.offset = (page - 1)  * limit;
    }

    settings.sort = sort;
    settings.direction = direction;
    settings.filter.text = filter;

    return settings;
}

export function getUrlBySettings(settings) {
    let filterText = settings.filter.text;
    let page = ( settings.pagination.offset / settings.pagination.limit ) + 1;
    let sort = settings.sort;
    let direction = settings.direction;

    let url = '/';
    if (filterText !== '') {
        url = url + `q=${filterText}`;
    }
    if (sort !== 'id') {
        url = url + `&sort=${sort}`;
    }
    if (direction !== 1) {
        url = url + `&dir=${direction}`;
    }
    if (page !== 1) {
        url = url + `&page=${page}`;
    }

    return url;
}