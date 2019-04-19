const initialState = {
	email:'teste@hotmail.com',
	senha:''
};

const AuthReducer = (state = [], action) => {
	if(state.length == 0) {
		return initialState;
	}

	

	return state;
};

export default AuthReducer;