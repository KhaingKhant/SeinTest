import React, { useState } from 'react'

const Home = () => {
    const [checkRadio, setcheckRadio] = useState('1');

    const onChangeValue = (e) => {
        setcheckRadio(e.target.value)
    }
    console.log("State CheckRadio->", typeof checkRadio)
    return (
        <div className="p-5 my-4">
            <div class="form-check">
                <input class="form-check-input"
                    type="radio" name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={1}
                    onChange={onChangeValue}
                    checked={checkRadio === '1' && true} />
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio" name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={2}
                    onChange={onChangeValue}
                    checked={checkRadio === '2' && true} />
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
            {
                checkRadio === '1' ? <div>I am Yes ! </div> : <div>I am No! </div>
            }
        </div>
    )
}

export default Home