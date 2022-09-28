import { spawn } from 'redux-saga/effects'

export function* saga() {

    function cekLocal() {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === "undefined" || serialisedState === "null")
            localStorage.setItem("persistantState", [])

    }

    yield spawn(cekLocal)
}