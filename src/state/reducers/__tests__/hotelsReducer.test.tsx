import { HotelsType } from "../../actions/types"

import * as actions from '../../actions/hotels';

import reducer from '../hotelsReducer'
import { Hotel } from "../../../api/hotels";

const inititalState = {
    loading: false,
    items: [],
    itemsCount: 0,
    total: 0
}

describe('Hotels Reducer Tests', () => {
    it('should return inititalState by default', () => {
        expect(reducer(undefined, {})).toEqual(inititalState)
    })

    it('should be loading true when creating new hotel', () => {
        const actionToAddHotelData = actions.createHotel({
            name: 'New hotel',
            description: 'aaa',
            phone: '38080664479770'
        } as Hotel)

        expect(reducer(inititalState, actionToAddHotelData).loading).toBe(true)
    })
})