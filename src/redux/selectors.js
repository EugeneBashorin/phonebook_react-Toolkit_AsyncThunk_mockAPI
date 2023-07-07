export const selectNameList = state => state.user.usersList;
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;

export const selectFavoriteFilter = state => state.favoriteFilter;
export const selectFilterData = state => state.userFilter.filterValue;

export const selectFilteredUsersList = (state) => {
    
    const namesList = selectNameList(state);
    const statusFilter = selectFavoriteFilter(state);
    const filterValue = selectFilterData(state);

    if(statusFilter.status === "favorites" && (filterValue === "" || filterValue.length < 2)){
            return namesList.filter(user => user.favorites === true);
        }    
    if(statusFilter.status === "favorites" && (filterValue !== "" || filterValue.length > 1)){
            return namesList.filter(user => user.favorites === true && user.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
    if(statusFilter.status !== "favorites" && (filterValue !== "" || filterValue.length > 1)){
            return namesList.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
        return namesList;
}