import { legacy_createStore } from "redux";

const initialState = {
	place: []
}


// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("persistantState", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

// localStorage.clear(); 
const loadFromLocalStorage = (state = initialState, action) => {
	try {

		const serialisedState = localStorage.getItem("persistantState");
		if (serialisedState === "undefined" || serialisedState === "null")
			localStorage.setItem("persistantState", [])
		else {
			if (serialisedState !== "")
				state = JSON.parse(serialisedState)
		}


		if (action.type === "CHANGE_STATE") {
			if (action.payload) {
				if (state === null)
					state = {
						place: []
					}
				state.place.push(action.payload.place)
				saveToLocalStorage(state)
			}
		}
		return state;
	}
	catch (e) {
		console.warn(e);
		return undefined;
	}
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = legacy_createStore(loadFromLocalStorage);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
if (store.getState())
	store.subscribe(() => saveToLocalStorage(store.getState()));

export { store }