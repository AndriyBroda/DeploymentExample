import { HotelsType } from "../types"
import * as actions from '../hotels'

describe('Hotels Actions', () => {
    it('should create action for all hotels', () => {
        const expectResult = {
            type: HotelsType.GET_ALL_REQUEST
        }

        expect(actions.loadHotels()).toEqual(expectResult)
    })
})