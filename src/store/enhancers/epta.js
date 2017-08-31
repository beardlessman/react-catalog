export const epta = store => next => action => {
    action.payload = action.payload + ', епта'
    return next(action)
}  