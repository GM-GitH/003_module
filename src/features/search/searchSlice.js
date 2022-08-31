import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { photos } from 'unsplash-js/dist/internals'
import { apiKey, apiUrl } from '../../apikey'

export const fetchPhotos = createAsyncThunk ('', async (query) => {
    query = 'muppet'
    const data = await fetch(`${apiUrl}search/photos?query=${query}&client_id=${apiKey}&per_page=12`)
    const json = await data.json()
    return json
})
console.log(fetchPhotos)
export const selectPhotos = (state) => state.photos;
export const searchSlice = createSlice({
    name: photos,
    initialState: {
        resultsStatic: [],
        filteredResults: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPhotos.pending, (state) => {
            state.isLoading = true
            state.hasError = false
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.resultsStatic = action.payload
        })
        .addCase(fetchPhotos.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
        })
        
    }
})