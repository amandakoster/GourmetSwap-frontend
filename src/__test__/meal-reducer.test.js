import categoryReducer from '../reducer/meal.js'

describe('testing category reducer', () => {
  test('inital state should be an empty array', () =>{
    let result = categoryReducer(undefined, {type: null})
    expect(result).toEqual([])
  })
  test('if the acytion type isnt registerd it will return the state', () =>{
    let mockState = [
      { id: 'abc',  title: 'cool'},
      { id: '123',  title: 'cool'},
    ]

    let result = categoryReducer(mockState, {type: null})
    expect(result).toEqual(mockState)
  })
  test('MEAL_CREATE should append to the array', () => {
    let actionOne = { 
      type: 'MEAL_CREATE', 
      payload: 'hello world',
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = { 
      type: 'MEAL_CREATE', 
      payload: 'goodbye world',
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[1]).toBe(actionOne.payload)
    expect(state[0]).toBe(actionTwo.payload)
  })
  test('MEAL_UPDATE should update a category in the array', () => {
    let mockState = [
      { id: 'abc',  title: 'cool'},
      { id: '123',  title: 'cool'},
      { id: 'zyx',  title: 'cool'},
      { id: '000',  title: 'cool'},
    ]

    let actionOne= { 
      type: 'MEAL_UPDATE', 
      payload: {id: 'zyx', title: 'cool'},
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(4)
    expect(state).toEqual(mockState.map(item => 
      item.id == 'zyx' ? actionOne.payload : item))
  })
})