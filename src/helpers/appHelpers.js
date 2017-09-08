export function syncSettingsWithUrl(settings, urlParams) {
    const page = +urlParams.pageNum;
    const sort = urlParams.sortType !== '' ? urlParams.sortType : 'id';
    const direction = urlParams.direction;
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