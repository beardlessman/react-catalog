import { 
    INPUT_FILTER_TEXT
} from '../constants/Filter'

export function inputFilterText (filterText) {
    return (dispatch) => {
        dispatch({
            type: INPUT_FILTER_TEXT,
            payload: filterText
        })
    }
}