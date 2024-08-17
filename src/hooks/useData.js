import { useEffect, useReducer } from "react"
import { client } from "../utils/client"

const reducer = (state,action) => {
    switch(action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                loading: true,
                error: false
            }
        case 'FETCH_SUCCESS': {
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                data: action.payload
            }
        }
        case 'FETCH_FAILED':
            return {
                ...state,
                loading: false,
                error: true,
            }
        default: 
            throw new Error()
    }
}
const useData = (url , initialData = []) => {

    const initialState = {
        loading: false,
        data: initialData,
        success: false,
        error: false
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    /**
     * If you can not put the function declaration inside of useEffect
     * there are two ways:
     * 1. 
     * So you should make that function constant, for not to change in each re-render, because if you
     * set that function as dependencies in effects, it will called many times.
     * 
     * 
     *   const getFetchUrl = useCallback((url) => {
            return client(url)
        }, []);
     * 
        useEffect(() => {
            const url = getFetchUrl('react');
            // ... Fetch data and do something ...
        }, [getFetchUrl]);

        2. declare function out side of scope of hook in parent scope, 
     */
    useEffect(() => {
        /// because of https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/
        let didCancel = false
        
        async function fetchData() {
            dispatch({ type: 'FETCH_INIT'})

            try {
                const result = await client(url)
                if(!didCancel) {
                    dispatch({
                        type: "FETCH_SUCCESS",
                        payload: result
                    })
                }
            } catch(err) {
                console.log(err,'sdc')
                if(!didCancel) {
                    dispatch({
                        type: 'FETCH_FAILED'
                    })
                }  
            }
        }

        fetchData()
        return () => didCancel = true
    }, [url])

    return state

}

export {useData}