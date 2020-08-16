export default function userlogin(state=[], action: any) {
    switch (action.type) {
        case 'USER-LOGIN':
            return {
                ...state
            }
        default:
            return state
    }
}